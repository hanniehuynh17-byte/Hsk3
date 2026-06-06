import { useState, useEffect, useRef, useCallback } from "react";
import { LESSONS, LESSONS_11_20, ALL_VOCAB, GRAMMAR_POINTS } from "./data";

const ALL_LESSONS = [...LESSONS, ...LESSONS_11_20];
const STORAGE_KEY = "hsk3_progress_v2";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { xp: 0, streak: 0, lastDate: "", seenCount: {}, lessonProgress: {} };
  } catch { return { xp: 0, streak: 0, lastDate: "", seenCount: {}, lessonProgress: {} }; }
}
function saveProgress(p) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {}
}

function normalize(s) {
  return s.toLowerCase().replace(/[āáǎà]/g, "a").replace(/[ēéěè]/g, "e").replace(/[īíǐì]/g, "i").replace(/[ōóǒò]/g, "o").replace(/[ūúǔù]/g, "u").replace(/[ǖǘǚǜü]/g, "u").replace(/\s+/g, "");
}

function speak(text, lang = "zh-CN") {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  const voices = window.speechSynthesis.getVoices();
  const zhVoice = voices.find(v => v.lang.startsWith("zh"));
  if (zhVoice) u.voice = zhVoice;
  window.speechSynthesis.speak(u);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getRandomVocab(n = 20) {
  return shuffle([...ALL_VOCAB]).slice(0, n);
}


// ─── HANZI WRITER PANEL ───────────────────────────────────────────────────────
function HanziWriterPanel({ hanzi, pinyin, meaning, cards }) {
  const writerRef = useRef(null);
  const containerRef = useRef(null);
  const [writerLoaded, setWriterLoaded] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  const [mode, setMode] = useState("animate");
  const [quizResult, setQuizResult] = useState(null);
  const [randomCard, setRandomCard] = useState(null);

  useEffect(() => {
    if (!cards || cards.length === 0) return;
    setRandomCard(cards[Math.floor(Math.random() * cards.length)]);
  }, []);

  const activeCard = randomCard || { hanzi, pinyin, meaning };
  const chars = [...activeCard.hanzi].filter(c => c.match(/[一-鿿]/));
  const currentChar = chars[charIdx] || chars[0];

  useEffect(() => {
    if (window.HanziWriter) { setWriterLoaded(true); return; }
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js";
    s.onload = () => setWriterLoaded(true);
    s.onerror = () => setWriterLoaded(false);
    document.head.appendChild(s);
  }, []);

  useEffect(() => {
    if (!writerLoaded || !containerRef.current || !currentChar) return;
    writerRef.current = null;
    containerRef.current.innerHTML = "";
    setQuizResult(null);
    setMode("animate");
    try {
      const w = window.HanziWriter.create(containerRef.current, currentChar, {
        width: 220, height: 220, padding: 10,
        showOutline: true, strokeColor: "#c0392b", outlineColor: "#e0d0c8",
        drawingColor: "#1a1a1a", drawingWidth: 4,
        strokeAnimationSpeed: 0.8, delayBetweenStrokes: 150, delayBetweenLoops: 1800,
        showCharacter: false,
      });
      writerRef.current = w;
      w.loopCharacterAnimation();
    } catch(e) {
      if (containerRef.current)
        containerRef.current.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:220px;font-size:100px;font-family:'Noto Serif SC',serif">${currentChar}</div>`;
    }
  }, [writerLoaded, currentChar]);

  function startQuiz() {
    if (!writerRef.current) return;
    setMode("quiz"); setQuizResult(null);
    writerRef.current.quiz({ onComplete: () => setQuizResult("correct") });
  }
  function replay() {
    setMode("animate"); setQuizResult(null);
    if (writerRef.current) writerRef.current.loopCharacterAnimation();
  }
  function pickRandom() {
    if (!cards || !cards.length) return;
    setRandomCard(cards[Math.floor(Math.random() * cards.length)]);
    setCharIdx(0);
  }
  const gridColor = "#f0e8e0";

  return (
    <div style={{ background: "var(--color-background-secondary)", borderRadius: 16, padding: "16px 12px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 20, fontFamily: "'Noto Serif SC', serif", fontWeight: 500 }}>{activeCard.hanzi}</div>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 2 }}>{activeCard.pinyin} — {activeCard.meaning}</div>
        </div>
        <button onClick={pickRandom} style={{ padding: "7px 12px", background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 13, touchAction: "manipulation" }}>
          🎲 Random
        </button>
      </div>
      {chars.length > 1 && (
        <div style={{ display: "flex", gap: 6, marginBottom: 12, justifyContent: "center" }}>
          {chars.map((c, i) => (
            <button key={i} onClick={() => { setCharIdx(i); setMode("animate"); }}
              style={{ width: 40, height: 40, fontSize: 20, fontFamily: "'Noto Serif SC', serif", background: charIdx === i ? "#c0392b" : "var(--color-background-primary)", color: charIdx === i ? "#fff" : "var(--color-text-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, cursor: "pointer" }}>
              {c}
            </button>
          ))}
        </div>
      )}
      <div style={{ position: "relative", margin: "0 auto", width: 220, height: 220 }}>
        <svg width="220" height="220" style={{ position: "absolute", top: 0, left: 0 }}>
          <rect width="220" height="220" fill="#fff" rx="10"/>
          <rect x="1" y="1" width="218" height="218" fill="none" stroke="#d0c0b0" strokeWidth="1.5" rx="9"/>
          <line x1="110" y1="1" x2="110" y2="219" stroke={gridColor} strokeWidth="1.5" strokeDasharray="4,3"/>
          <line x1="1" y1="110" x2="219" y2="110" stroke={gridColor} strokeWidth="1.5" strokeDasharray="4,3"/>
          <line x1="10" y1="10" x2="210" y2="210" stroke={gridColor} strokeWidth="0.8" strokeDasharray="3,4"/>
          <line x1="210" y1="10" x2="10" y2="210" stroke={gridColor} strokeWidth="0.8" strokeDasharray="3,4"/>
        </svg>
        <div ref={containerRef} style={{ position: "absolute", top: 0, left: 0, width: 220, height: 220 }}>
          {!writerLoaded && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: 80, fontFamily: "'Noto Serif SC', serif" }}>{currentChar}</div>
          )}
        </div>
        {quizResult === "correct" && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(39,174,96,0.15)", borderRadius: 10 }}>
            <div style={{ fontSize: 56 }}>✓</div>
          </div>
        )}
      </div>
      <div style={{ textAlign: "center", marginTop: 8, fontSize: 12, color: "var(--color-text-secondary)" }}>
        {writerLoaded ? <>Đang xem: <span style={{ color: "#c0392b", fontWeight: 600 }}>{currentChar}</span> — nét vẽ theo thứ tự đỏ</> : "Đang tải dữ liệu nét bút... (cần kết nối mạng)"}
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
        <button onClick={replay} style={{ flex: 1, padding: "10px 8px", fontSize: 13, background: mode === "animate" ? "#1a1a1a" : "transparent", color: mode === "animate" ? "#fff" : "var(--color-text-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, cursor: "pointer", touchAction: "manipulation" }}>
          ▶ Xem animation
        </button>
        <button onClick={startQuiz} style={{ flex: 1, padding: "10px 8px", fontSize: 13, background: mode === "quiz" ? "#c0392b" : "transparent", color: mode === "quiz" ? "#fff" : "var(--color-text-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, cursor: "pointer", touchAction: "manipulation" }}>
          ✍ Tự viết
        </button>
        <button onClick={() => speak(activeCard.hanzi)} style={{ padding: "10px 12px", fontSize: 13, background: "transparent", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, cursor: "pointer", touchAction: "manipulation" }}>
          🔊
        </button>
      </div>
      {mode === "quiz" && !quizResult && (
        <div style={{ marginTop: 10, padding: "10px 12px", background: "#fff8f0", borderRadius: 8, borderLeft: "3px solid #c0392b" }}>
          <div style={{ fontSize: 13, color: "#c0392b", fontWeight: 500, marginBottom: 3 }}>✍ Chế độ tự viết</div>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
            Dùng ngón tay vẽ từng nét theo đúng thứ tự.<br/>Nét đúng → xanh lá ✓ | Nét sai → rung nhẹ
          </div>
        </div>
      )}
      {quizResult === "correct" && (
        <div style={{ marginTop: 10, padding: "10px 12px", background: "#f0fff4", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: "#27ae60", fontWeight: 600 }}>🎉 Viết đúng rồi! Xuất sắc!</div>
          <button onClick={startQuiz} style={{ marginTop: 6, padding: "6px 14px", fontSize: 12, background: "#27ae60", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}>Thử lại</button>
        </div>
      )}
    </div>
  );
}

// ─── FLASHCARD ───────────────────────────────────────────────────────────────
function Flashcard({ cards, seenCount, onSeen, onDone }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [tab, setTab] = useState("learn");
  const card = cards[idx];
  const seen = (seenCount[card?.id] || 0);
  const hidePinyin = seen >= 10;

  function next() {
    onSeen(card.id);
    if (idx + 1 >= cards.length) { onDone(); return; }
    setIdx(i => i + 1);
    setFlipped(false);
    setTab("learn");
  }

  if (!card) return null;
  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: "1rem" }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {["learn", "explain", "write"].map(t => (
          <button key={t} onClick={() => setTab(t)}
            style={{ flex: 1, padding: "8px", fontSize: 13, background: tab === t ? "#1a1a1a" : "transparent", color: tab === t ? "#fff" : "var(--color-text-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, cursor: "pointer" }}>
            {t === "learn" ? "📖 Học" : t === "explain" ? "🔍 Giải thích" : "✏️ Tập viết"}
          </button>
        ))}
      </div>

      {tab === "learn" && (
        <div onClick={() => setFlipped(f => !f)} style={{ minHeight: 260, background: flipped ? "#1a1a1a" : "#faf7f2", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 32, transition: "background 0.2s", userSelect: "none" }}>
          {!flipped ? (
            <>
              <div style={{ fontSize: 72, fontFamily: "'Noto Serif SC', serif", color: "#1a1a1a", lineHeight: 1.1 }}>{card.hanzi}</div>
              {!hidePinyin && <div style={{ fontSize: 20, color: "#888", marginTop: 12, fontFamily: "'Cormorant Garamond', serif" }}>{card.pinyin}</div>}
              {hidePinyin && <div style={{ fontSize: 13, color: "#bbb", marginTop: 8 }}>pinyin đã ẩn (đã học {seen} lần)</div>}
              <div style={{ fontSize: 13, color: "#aaa", marginTop: 20 }}>nhấn để xem nghĩa</div>
            </>
          ) : (
            <>
              <div style={{ fontSize: 44, fontFamily: "'Noto Serif SC', serif", color: "#fff" }}>{card.hanzi}</div>
              <div style={{ fontSize: 18, color: "#e8d5c0", marginTop: 8, fontFamily: "'Cormorant Garamond', serif" }}>{card.pinyin}</div>
              <div style={{ fontSize: 28, color: "#f5f0e8", marginTop: 16, textAlign: "center", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>{card.meaning}</div>
              <div style={{ fontSize: 13, color: "#888", marginTop: 12 }}>[{card.type}]</div>
            </>
          )}
        </div>
      )}

      {tab === "explain" && (
        <div style={{ background: "var(--color-background-secondary)", borderRadius: 16, padding: 24 }}>
          <div style={{ fontSize: 56, fontFamily: "'Noto Serif SC', serif", textAlign: "center", marginBottom: 16 }}>{card.hanzi}</div>
          <div style={{ fontSize: 18, textAlign: "center", color: "var(--color-text-secondary)", marginBottom: 20 }}>{card.pinyin} — [{card.type}]</div>
          <div style={{ borderTop: "0.5px solid var(--color-border-tertiary)", paddingTop: 16 }}>
            <div style={{ fontSize: 15, marginBottom: 8 }}><strong>Nghĩa:</strong> {card.meaning}</div>
            {card.radical && (
              <div style={{ marginTop: 12, padding: "10px 14px", background: "var(--color-background-primary)", borderRadius: 10, border: "0.5px solid var(--color-border-tertiary)" }}>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>BỘ THỦ</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontSize: 40, fontFamily: "'Noto Serif SC', serif", lineHeight: 1, color: "#c0392b" }}>{card.radical}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{card.radicalMeaning}</div>
                    {card.totalStrokes && <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 2 }}>Tổng số nét: {card.totalStrokes}</div>}
                  </div>
                </div>
              </div>
            )}
            {card.example && (
              <div style={{ marginTop: 10, padding: "10px 14px", background: "var(--color-background-primary)", borderRadius: 10, border: "0.5px solid var(--color-border-tertiary)" }}>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>VÍ DỤ</div>
                <div style={{ fontSize: 15, fontFamily: "'Noto Serif SC', serif" }}>{card.example}</div>
                {card.exampleVi && <div style={{ fontSize: 13, color: "var(--color-text-secondary)", fontStyle: "italic", marginTop: 4 }}>{card.exampleVi}</div>}
              </div>
            )}
            <div style={{ fontSize: 14, color: "var(--color-text-secondary)", marginTop: 10 }}>Bài {card.lesson} — {card.lessonTitle || ""}</div>
            {card.id && <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 6 }}>Đã thấy: {seenCount[card.id] || 0} lần {seenCount[card.id] >= 10 ? "🔥 (pinyin đã ẩn)" : ""}</div>}
          </div>
        </div>
      )}

      {tab === "write" && (
        <HanziWriterPanel hanzi={card.hanzi} pinyin={card.pinyin} meaning={card.meaning} cards={cards} />
      )}

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <button onClick={() => speak(card.hanzi)} style={{ padding: "10px 20px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer", fontSize: 14 }}>🔊 Nghe</button>
        <button onClick={next} style={{ flex: 1, padding: "10px 20px", background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 15, fontWeight: 500 }}>
          {idx + 1 >= cards.length ? "Hoàn thành ✓" : `Tiếp theo →`}
        </button>
      </div>
      <div style={{ textAlign: "center", marginTop: 12, fontSize: 13, color: "var(--color-text-secondary)" }}>{idx + 1} / {cards.length}</div>
    </div>
  );
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
function Quiz({ cards, onDone }) {
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const shuffled = useRef(shuffle(cards).slice(0, Math.min(cards.length, 15)));

  function genOptions(card) {
    const wrongs = shuffle(ALL_VOCAB.filter(v => v.meaning !== card.meaning)).slice(0, 3).map(v => v.meaning);
    return shuffle([card.meaning, ...wrongs]);
  }

  const q = shuffled.current[qIdx];
  const opts = useRef([]);
  if (selected === null && !done) opts.current = genOptions(q);

  function pick(opt) {
    if (selected !== null) return;
    setSelected(opt);
    if (opt === q.meaning) setCorrect(c => c + 1);
    setTimeout(() => {
      if (qIdx + 1 >= shuffled.current.length) { setDone(true); return; }
      setQIdx(i => i + 1);
      setSelected(null);
    }, 800);
  }

  if (done) return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <div style={{ fontSize: 80, fontFamily: "'Noto Serif SC', serif", color: "#c0392b" }}>成</div>
      <div style={{ fontSize: 28, fontWeight: 500, marginTop: 16 }}>Hoàn thành!</div>
      <div style={{ fontSize: 20, color: "var(--color-text-secondary)", marginTop: 8 }}>{correct}/{shuffled.current.length} câu đúng</div>
      <button onClick={onDone} style={{ marginTop: 24, padding: "12px 32px", background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 8, fontSize: 16, cursor: "pointer" }}>Về trang chủ</button>
    </div>
  );

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: "1rem" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>Câu {qIdx + 1}/{shuffled.current.length}</div>
        <div style={{ fontSize: 64, fontFamily: "'Noto Serif SC', serif", margin: "16px 0" }}>{q?.hanzi}</div>
        <div style={{ fontSize: 18, color: "var(--color-text-secondary)", fontFamily: "'Cormorant Garamond', serif" }}>{q?.pinyin}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {opts.current.map(opt => {
          let bg = "var(--color-background-primary)";
          let color = "var(--color-text-primary)";
          if (selected !== null) {
            if (opt === q.meaning) { bg = "#27ae60"; color = "#fff"; }
            else if (opt === selected) { bg = "#c0392b"; color = "#fff"; }
          }
          return (
            <button key={opt} onClick={() => pick(opt)} style={{ padding: "14px 20px", textAlign: "left", fontSize: 16, background: bg, color, border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, cursor: "pointer", transition: "background 0.2s", fontFamily: "'Cormorant Garamond', serif" }}>{opt}</button>
          );
        })}
      </div>
      <button onClick={() => speak(q?.hanzi)} style={{ marginTop: 16, padding: "8px 16px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer", fontSize: 14, display: "block" }}>🔊 Nghe phát âm</button>
    </div>
  );
}

// ─── MATCH ────────────────────────────────────────────────────────────────────
function Match({ cards, onDone }) {
  const batchSize = 5;
  const [batchIdx, setBatchIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [matched, setMatched] = useState(new Set());
  const [score, setScore] = useState(0);

  const batch = useRef([]);
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    const start = batchIdx * batchSize;
    const b = cards.slice(start, start + batchSize);
    batch.current = b;
    const left = shuffle(b.map(c => ({ id: c.id + "_hz", text: c.hanzi, match: c.id, type: "hanzi" })));
    const right = shuffle(b.map(c => ({ id: c.id + "_vi", text: c.meaning, match: c.id, type: "meaning" })));
    setPairs([...left, ...right]);
    setMatched(new Set());
    setSelected(null);
  }, [batchIdx]);

  function select(item) {
    if (matched.has(item.id)) return;
    if (!selected) { setSelected(item); return; }
    if (selected.id === item.id) { setSelected(null); return; }
    if (selected.match === item.match) {
      setMatched(m => new Set([...m, selected.id, item.id]));
      setScore(s => s + 1);
      setSelected(null);
      const needed = batch.current.length;
      if (matched.size + 2 >= needed * 2) {
        setTimeout(() => {
          if ((batchIdx + 1) * batchSize >= cards.length) onDone();
          else setBatchIdx(b => b + 1);
        }, 600);
      }
    } else {
      setTimeout(() => setSelected(null), 400);
    }
  }

  const left = pairs.filter(p => p.type === "hanzi");
  const right = pairs.filter(p => p.type === "meaning");

  return (
    <div style={{ maxWidth: 580, margin: "0 auto", padding: "1rem" }}>
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 16, textAlign: "center" }}>
        Ghép từ — Batch {batchIdx + 1}/{Math.ceil(cards.length / batchSize)} • {score} cặp đúng
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {left.map(item => {
            const isMatched = matched.has(item.id);
            const isSel = selected?.id === item.id;
            return (
              <button key={item.id} onClick={() => select(item)} style={{ padding: "12px 16px", fontSize: 22, fontFamily: "'Noto Serif SC', serif", background: isMatched ? "#27ae60" : isSel ? "#1a1a1a" : "var(--color-background-secondary)", color: isMatched || isSel ? "#fff" : "var(--color-text-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, cursor: "pointer", opacity: isMatched ? 0.6 : 1 }}>
                {item.text}
              </button>
            );
          })}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {right.map(item => {
            const isMatched = matched.has(item.id);
            const isSel = selected?.id === item.id;
            return (
              <button key={item.id} onClick={() => select(item)} style={{ padding: "12px 16px", fontSize: 14, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", background: isMatched ? "#27ae60" : isSel ? "#1a1a1a" : "var(--color-background-secondary)", color: isMatched || isSel ? "#fff" : "var(--color-text-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, cursor: "pointer", opacity: isMatched ? 0.6 : 1 }}>
                {item.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── TYPING PINYIN ─────────────────────────────────────────────────────────────
function TypingPinyin({ cards, onDone }) {
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [correct, setCorrect] = useState(0);
  const shuffled = useRef(shuffle(cards).slice(0, 10));
  const card = shuffled.current[idx];

  function check() {
    const ok = normalize(input) === normalize(card.pinyin);
    setResult(ok ? "correct" : "wrong");
    if (ok) setCorrect(c => c + 1);
    setTimeout(() => {
      if (idx + 1 >= shuffled.current.length) { onDone(); return; }
      setIdx(i => i + 1);
      setInput("");
      setResult(null);
    }, 800);
  }

  if (!card) return null;
  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: "1rem" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{idx + 1}/{shuffled.current.length} • {correct} đúng</div>
        <div style={{ fontSize: 72, fontFamily: "'Noto Serif SC', serif", margin: "20px 0" }}>{card.hanzi}</div>
        <div style={{ fontSize: 18, color: "var(--color-text-secondary)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>{card.meaning}</div>
      </div>
      <div style={{ marginBottom: 12 }}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && check()}
          placeholder="Nhập pinyin (không cần dấu thanh)..."
          style={{ width: "100%", padding: "14px 16px", fontSize: 18, border: `1.5px solid ${result === "correct" ? "#27ae60" : result === "wrong" ? "#c0392b" : "var(--color-border-tertiary)"}`, borderRadius: 10, background: "var(--color-background-primary)", color: "var(--color-text-primary)", outline: "none", fontFamily: "'JetBrains Mono', monospace", boxSizing: "border-box" }} />
      </div>
      {result === "wrong" && <div style={{ color: "#c0392b", fontSize: 14, marginBottom: 8 }}>Sai! Đáp án: {card.pinyin}</div>}
      {result === "correct" && <div style={{ color: "#27ae60", fontSize: 14, marginBottom: 8 }}>Đúng rồi! ✓</div>}
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => speak(card.hanzi)} style={{ padding: "10px 16px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer" }}>🔊</button>
        <button onClick={check} style={{ flex: 1, padding: "12px", background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 8, fontSize: 15, cursor: "pointer" }}>Kiểm tra</button>
      </div>
    </div>
  );
}

// ─── DIALOGUE VIEW ────────────────────────────────────────────────────────────
function DialogueView({ lesson }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const dialogue = lesson.dialogues[activeIdx];
  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {lesson.dialogues.map((d, i) => (
          <button key={i} onClick={() => setActiveIdx(i)} style={{ padding: "6px 14px", fontSize: 13, background: activeIdx === i ? "#1a1a1a" : "transparent", color: activeIdx === i ? "#fff" : "var(--color-text-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 20, cursor: "pointer" }}>
            Đoạn {i + 1}
          </button>
        ))}
      </div>
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 12 }}>{dialogue.title}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {dialogue.lines.map((line, i) => {
            const isA = i % 2 === 0;
            return (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, flexDirection: isA ? "row" : "row-reverse" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: isA ? "#1a1a1a" : "#c0392b", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 500, flexShrink: 0 }}>
                  {line.speaker.slice(0, 2)}
                </div>
                <div style={{ maxWidth: "72%", background: "var(--color-background-secondary)", borderRadius: isA ? "4px 16px 16px 16px" : "16px 4px 16px 16px", padding: "10px 14px" }}>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 4 }}>{line.speaker}</div>
                  <div style={{ fontSize: 16, fontFamily: "'Noto Serif SC', serif", lineHeight: 1.6 }}>{line.text}</div>
                  <button onClick={() => speak(line.text)} style={{ marginTop: 6, padding: "2px 8px", fontSize: 11, border: "none", background: "transparent", color: "var(--color-text-secondary)", cursor: "pointer" }}>🔊</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={() => { dialogue.lines.forEach((l, i) => setTimeout(() => speak(l.text), i * 2000)); }}
        style={{ padding: "10px 20px", background: "transparent", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, cursor: "pointer", fontSize: 14 }}>
        🔊 Nghe toàn bộ đoạn hội thoại
      </button>
    </div>
  );
}

// ─── READING VIEW ─────────────────────────────────────────────────────────────
function ReadingView({ lesson }) {
  const [showMeta, setShowMeta] = useState(false);
  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ fontSize: 15, lineHeight: 2.2, fontFamily: "'Noto Serif SC', serif", marginBottom: 20, padding: 20, background: "var(--color-background-secondary)", borderRadius: 12 }}>
        {lesson.reading.text}
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button onClick={() => speak(lesson.reading.text)} style={{ padding: "10px 16px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer", fontSize: 14 }}>🔊 Nghe</button>
        <button onClick={() => setShowMeta(v => !v)} style={{ padding: "10px 16px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer", fontSize: 14 }}>
          {showMeta ? "Ẩn" : "Hiện"} Pinyin & Nghĩa
        </button>
      </div>
      {showMeta && (
        <div style={{ padding: 16, background: "var(--color-background-secondary)", borderRadius: 12, borderLeft: "3px solid #c0392b" }}>
          <div style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 10, fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.8 }}>{lesson.reading.pinyin}</div>
          <div style={{ fontSize: 15, lineHeight: 1.8, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--color-text-primary)" }}>{lesson.reading.meaning}</div>
        </div>
      )}
    </div>
  );
}

// ─── GRAMMAR VIEW ─────────────────────────────────────────────────────────────
function GrammarView({ lesson }) {
  const [activeG, setActiveG] = useState(0);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState({});
  const g = lesson.grammar[activeG];

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {lesson.grammar.map((gr, i) => (
          <button key={i} onClick={() => { setActiveG(i); setAnswers({}); setChecked({}); }}
            style={{ padding: "6px 14px", fontSize: 13, background: activeG === i ? "#1a1a1a" : "transparent", color: activeG === i ? "#fff" : "var(--color-text-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 20, cursor: "pointer" }}>
            {i + 1}. {gr.title.slice(0, 12)}...
          </button>
        ))}
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {["explain", "practice"].map(t => (
            <button key={t} onClick={() => setAnswers({})} style={{ padding: "6px 14px", fontSize: 13, border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer" }}>
              {t === "explain" ? "📖 Giải thích" : "✏️ Luyện tập"}
            </button>
          ))}
        </div>

        <div style={{ background: "var(--color-background-secondary)", borderRadius: 12, padding: 20, marginBottom: 20 }}>
          <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}>{g.title}</div>
          <div style={{ fontSize: 14, lineHeight: 1.8, color: "var(--color-text-secondary)", marginBottom: 16 }}>{g.explanation}</div>
          <div style={{ borderTop: "0.5px solid var(--color-border-tertiary)", paddingTop: 16 }}>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 10 }}>Ví dụ:</div>
            {g.examples.map((ex, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16, fontFamily: "'Noto Serif SC', serif" }}>{ex.zh}</span>
                  <button onClick={() => speak(ex.zh)} style={{ padding: "2px 6px", fontSize: 11, border: "none", background: "transparent", cursor: "pointer", color: "var(--color-text-secondary)" }}>🔊</button>
                </div>
                <div style={{ fontSize: 14, color: "var(--color-text-secondary)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>{ex.vi}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 12 }}>✏️ Điền từ:</div>
          {g.fillInBlank.map((q, i) => (
            <div key={i} style={{ marginBottom: 16, padding: 14, background: "var(--color-background-secondary)", borderRadius: 10 }}>
              <div style={{ fontSize: 15, fontFamily: "'Noto Serif SC', serif", marginBottom: 8, lineHeight: 1.8 }}>
                {q.sentence.replace("___", "　　　　")}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <input value={answers[i] || ""} onChange={e => setAnswers(a => ({ ...a, [i]: e.target.value }))}
                  placeholder="Điền vào đây..."
                  style={{ flex: 1, padding: "8px 12px", fontSize: 15, border: `1.5px solid ${checked[i] === true ? "#27ae60" : checked[i] === false ? "#c0392b" : "var(--color-border-tertiary)"}`, borderRadius: 8, background: "var(--color-background-primary)", color: "var(--color-text-primary)", outline: "none", fontFamily: "'Noto Serif SC', serif" }} />
                <button onClick={() => {
                  const ok = normalize(answers[i] || "") === normalize(q.answer);
                  setChecked(c => ({ ...c, [i]: ok }));
                }} style={{ padding: "8px 14px", background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>
                  Kiểm tra
                </button>
              </div>
              {checked[i] !== undefined && (
                <div style={{ fontSize: 13, marginTop: 6, color: checked[i] ? "#27ae60" : "#c0392b" }}>
                  {checked[i] ? "✓ Đúng!" : `✗ Đáp án: ${q.answer}`}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── LESSON DETAIL ────────────────────────────────────────────────────────────
function LessonDetail({ lesson, seenCount, onSeen, onBack }) {
  const [section, setSection] = useState("vocab");
  const [vocabView, setVocabView] = useState("flashcard");

  const sections = [
    { id: "vocab", label: "📚 Từ vựng" },
    { id: "dialogue", label: "💬 Hội thoại" },
    { id: "reading", label: "📖 Bài đọc" },
    { id: "grammar", label: "✍ Ngữ pháp" },
    { id: "proverb", label: "俗语 Tục ngữ" },
  ];

  const vocabViews = [
    { id: "flashcard", label: "Flashcard" },
    { id: "quiz", label: "Trắc nghiệm" },
    { id: "match", label: "Ghép từ" },
    { id: "typing", label: "Gõ Pinyin" },
  ];

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "1rem 1rem 0", marginBottom: 16 }}>
        <button onClick={onBack} style={{ padding: "6px 12px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer", fontSize: 14 }}>← Quay lại</button>
        <div>
          <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Bài {lesson.id}</div>
          <div style={{ fontSize: 16, fontWeight: 500, fontFamily: "'Noto Serif SC', serif" }}>{lesson.title}</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 0, borderBottom: "0.5px solid var(--color-border-tertiary)", overflowX: "auto", padding: "0 1rem" }}>
        {sections.map(s => (
          <button key={s.id} onClick={() => setSection(s.id)} style={{ padding: "10px 14px", fontSize: 13, background: "transparent", color: section === s.id ? "#c0392b" : "var(--color-text-secondary)", border: "none", borderBottom: section === s.id ? "2px solid #c0392b" : "2px solid transparent", cursor: "pointer", whiteSpace: "nowrap" }}>
            {s.label}
          </button>
        ))}
      </div>

      {section === "vocab" && (
        <div>
          <div style={{ display: "flex", gap: 6, padding: "12px 1rem 0", flexWrap: "wrap" }}>
            {vocabViews.map(v => (
              <button key={v.id} onClick={() => setVocabView(v.id)} style={{ padding: "6px 12px", fontSize: 13, background: vocabView === v.id ? "#1a1a1a" : "transparent", color: vocabView === v.id ? "#fff" : "var(--color-text-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 6, cursor: "pointer" }}>
                {v.label}
              </button>
            ))}
          </div>
          {vocabView === "flashcard" && <Flashcard cards={lesson.vocab} seenCount={seenCount} onSeen={onSeen} onDone={() => {}} />}
          {vocabView === "quiz" && <Quiz cards={lesson.vocab} onDone={() => {}} />}
          {vocabView === "match" && <Match cards={lesson.vocab} onDone={() => {}} />}
          {vocabView === "typing" && <TypingPinyin cards={lesson.vocab} onDone={() => {}} />}
        </div>
      )}
      {section === "dialogue" && <DialogueView lesson={lesson} />}
      {section === "reading" && <ReadingView lesson={lesson} />}
      {section === "grammar" && <GrammarView lesson={lesson} />}
      {section === "proverb" && (
        <div style={{ padding: "1.5rem" }}>
          <div style={{ background: "#1a1a1a", color: "#fff", borderRadius: 16, padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: 48, fontFamily: "'Noto Serif SC', serif", marginBottom: 16 }}>{lesson.proverb.hanzi}</div>
            <div style={{ fontSize: 18, color: "#e8d5c0", marginBottom: 8, fontFamily: "'Cormorant Garamond', serif" }}>{lesson.proverb.pinyin}</div>
            <div style={{ fontSize: 16, color: "#aaa", marginBottom: 20, fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif" }}>{lesson.proverb.meaning}</div>
            <div style={{ fontSize: 14, color: "#888", lineHeight: 1.8, textAlign: "left", borderTop: "0.5px solid #333", paddingTop: 16 }}>{lesson.proverb.explanation}</div>
            <button onClick={() => speak(lesson.proverb.hanzi)} style={{ marginTop: 16, padding: "8px 20px", background: "transparent", border: "0.5px solid #555", color: "#ccc", borderRadius: 8, cursor: "pointer", fontSize: 14 }}>🔊 Nghe</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── DAILY PRACTICE ──────────────────────────────────────────────────────────
function DailyPractice({ seenCount, onSeen, xp, onXP, onBack }) {
  const [mode, setMode] = useState("menu");
  const [cards, setCards] = useState(() => getRandomVocab());

  const MODES = [
    { id: "flashcard", label: "Flashcard",    icon: "🃏", desc: "Lật thẻ học từ" },
    { id: "quiz",      label: "Trắc nghiệm",  icon: "❓", desc: "Chọn nghĩa đúng" },
    { id: "match",     label: "Ghép từ",      icon: "🔗", desc: "Nối Hán với nghĩa" },
    { id: "typing",    label: "Gõ Pinyin",    icon: "⌨",  desc: "Nhập pinyin" },
  ];

  function startMode(m) {
    setCards(getRandomVocab());
    setMode(m);
  }

  function done() { onXP(20); setMode("menu"); }

  const BackBtn = () => (
    <button onClick={() => setMode("menu")}
      style={{ margin: "1rem", padding: "8px 14px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer", fontSize: 14, touchAction: "manipulation" }}>
      ← Quay lại
    </button>
  );

  if (mode === "flashcard") return <><BackBtn /><Flashcard cards={cards} seenCount={seenCount} onSeen={onSeen} onDone={done} /></>;
  if (mode === "quiz")      return <><BackBtn /><Quiz      cards={cards} onDone={done} /></>;
  if (mode === "match")     return <><BackBtn /><Match     cards={cards} onDone={done} /></>;
  if (mode === "typing")    return <><BackBtn /><TypingPinyin cards={cards} onDone={done} /></>;

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <button onClick={onBack} style={{ padding: "8px 14px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer", fontSize: 14, touchAction: "manipulation" }}>← Về trang chủ</button>
        <div>
          <div style={{ fontSize: 18, fontWeight: 500 }}>Luyện tập hàng ngày</div>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>20 từ random mỗi lần bắt đầu</div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {MODES.map(m => (
          <button key={m.id} onClick={() => startMode(m.id)}
            style={{ padding: "18px 16px", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 14, cursor: "pointer", textAlign: "left", WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}>
            <div style={{ fontSize: 28 }}>{m.icon}</div>
            <div style={{ fontSize: 16, fontWeight: 500, marginTop: 8 }}>{m.label}</div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 4 }}>{m.desc}</div>
          </button>
        ))}
      </div>
      <div style={{ marginTop: 20, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 12 }}>
        <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>
          BỘ TỪ HIỆN TẠI — {cards.length} từ
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {cards.map(c => (
            <span key={c.id} style={{ fontSize: 16, fontFamily: "'Noto Serif SC', serif", padding: "3px 8px", background: "var(--color-background-primary)", borderRadius: 6, border: "0.5px solid var(--color-border-tertiary)" }}>
              {c.hanzi}
            </span>
          ))}
        </div>
        <button onClick={() => setCards(getRandomVocab())}
          style={{ marginTop: 10, padding: "7px 14px", fontSize: 13, background: "transparent", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, cursor: "pointer", touchAction: "manipulation" }}>
          🎲 Đổi bộ từ mới
        </button>
      </div>
    </div>
  );
}

// ─── LOOKUP ───────────────────────────────────────────────────────────────────
function Lookup() {
  const [q, setQ] = useState("");
  const results = q.length < 1 ? [] : ALL_VOCAB.filter(v =>
    v.hanzi.includes(q) || v.pinyin.toLowerCase().includes(q.toLowerCase()) || v.meaning.toLowerCase().includes(q.toLowerCase())
  ).slice(0, 20);

  return (
    <div style={{ padding: "1rem" }}>
      <input value={q} onChange={e => setQ(e.target.value)} placeholder="Tìm theo chữ Hán / pinyin / tiếng Việt..."
        style={{ width: "100%", padding: "12px 16px", fontSize: 16, border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, background: "var(--color-background-primary)", color: "var(--color-text-primary)", outline: "none", boxSizing: "border-box" }} />
      <div style={{ marginTop: 16 }}>
        {results.map(v => (
          <div key={v.id} onClick={() => speak(v.hanzi)} style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 14px", marginBottom: 8, background: "var(--color-background-secondary)", borderRadius: 10, cursor: "pointer" }}>
            <div style={{ fontSize: 32, fontFamily: "'Noto Serif SC', serif" }}>{v.hanzi}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontFamily: "'Cormorant Garamond', serif" }}>{v.pinyin}</div>
              <div style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>{v.meaning} [{v.type}]</div>
              <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>Bài {v.lesson}</div>
            </div>
            <span style={{ fontSize: 18 }}>🔊</span>
          </div>
        ))}
        {q.length > 0 && results.length === 0 && <div style={{ color: "var(--color-text-secondary)", fontSize: 14 }}>Không tìm thấy kết quả.</div>}
      </div>
    </div>
  );
}

// ─── GRAMMAR TOOL ─────────────────────────────────────────────────────────────
function GrammarTool() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState(null);
  const filtered = GRAMMAR_POINTS.filter(g => q.length < 1 || g.title.includes(q) || g.summary.includes(q) || g.category.includes(q));

  if (selected) return (
    <div style={{ padding: "1rem" }}>
      <button onClick={() => setSelected(null)} style={{ padding: "6px 12px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer", marginBottom: 16, fontSize: 14 }}>← Quay lại</button>
      <div style={{ background: "var(--color-background-secondary)", borderRadius: 14, padding: 24 }}>
        <div style={{ fontSize: 11, color: "#c0392b", marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>Bài {selected.lesson} • {selected.category}</div>
        <div style={{ fontSize: 22, fontWeight: 500, fontFamily: "'Noto Serif SC', serif", marginBottom: 12 }}>{selected.title}</div>
        <div style={{ fontSize: 14, lineHeight: 1.8, color: "var(--color-text-secondary)", marginBottom: 20 }}>{selected.explanation}</div>
        <div style={{ borderTop: "0.5px solid var(--color-border-tertiary)", paddingTop: 16 }}>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 10 }}>Ví dụ:</div>
          {selected.examples.map((ex, i) => (
            <div key={i} style={{ marginBottom: 12, padding: "10px 14px", background: "var(--color-background-primary)", borderRadius: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16, fontFamily: "'Noto Serif SC', serif" }}>{ex}</span>
                <button onClick={() => speak(ex)} style={{ padding: "2px 6px", fontSize: 11, border: "none", background: "transparent", cursor: "pointer" }}>🔊</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ padding: "1rem" }}>
      <input value={q} onChange={e => setQ(e.target.value)} placeholder="Tìm ngữ pháp..."
        style={{ width: "100%", padding: "12px 16px", fontSize: 16, border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, background: "var(--color-background-primary)", color: "var(--color-text-primary)", outline: "none", boxSizing: "border-box", marginBottom: 16 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.map(g => (
          <button key={g.id} onClick={() => setSelected(g)} style={{ padding: "14px 16px", textAlign: "left", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, cursor: "pointer" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 16, fontFamily: "'Noto Serif SC', serif" }}>{g.title}</div>
              <div style={{ fontSize: 11, padding: "3px 8px", background: "var(--color-background-primary)", borderRadius: 12, color: "var(--color-text-secondary)" }}>{g.category}</div>
            </div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 4 }}>{g.summary} — Bài {g.lesson}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function Home({ progress, onNav }) {
  const totalVocab = ALL_VOCAB.length;
  const learned = Object.keys(progress.seenCount).length;

  return (
    <div>
      <div style={{ background: "#1a1a1a", color: "#fff", padding: "1.5rem 1.25rem 1.25rem", marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 11, color: "#555", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>HSK 3 • GIÁO TRÌNH CHUẨN</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px", border: "0.5px solid #333", borderRadius: 20 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#c0392b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#fff", fontFamily: "'JetBrains Mono', monospace" }}>H</div>
            <div style={{ fontSize: 11, color: "#999", fontFamily: "'JetBrains Mono', monospace" }}>by Hannie17</div>
          </div>
        </div>
        <div style={{ fontSize: 30, fontFamily: "'Noto Serif SC', serif", marginBottom: 4 }}>标准教程</div>
        <div style={{ fontSize: 16, fontFamily: "'Cormorant Garamond', serif", color: "#e8d5c0" }}>Giáo trình chuẩn HSK 3</div>
        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          <div><div style={{ fontSize: 24, fontWeight: 500, fontFamily: "'JetBrains Mono', monospace" }}>{progress.streak}</div><div style={{ fontSize: 12, color: "#888" }}>Ngày streak 🔥</div></div>
          <div><div style={{ fontSize: 24, fontWeight: 500, fontFamily: "'JetBrains Mono', monospace" }}>{progress.xp}</div><div style={{ fontSize: 12, color: "#888" }}>XP tích lũy ⭐</div></div>
          <div><div style={{ fontSize: 24, fontWeight: 500, fontFamily: "'JetBrains Mono', monospace" }}>{learned}</div><div style={{ fontSize: 12, color: "#888" }}>Từ đã học 📚</div></div>
        </div>
      </div>

      <div style={{ padding: "0 1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 24 }}>
          <button onClick={() => onNav("daily")} style={{ padding: 16, background: "#c0392b", color: "#fff", border: "none", borderRadius: 14, cursor: "pointer", textAlign: "left" }}>
            <div style={{ fontSize: 20 }}>📅</div>
            <div style={{ fontSize: 14, fontWeight: 500, marginTop: 6 }}>Luyện hàng ngày</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>20 từ mỗi ngày</div>
          </button>
          <button onClick={() => onNav("lessons")} style={{ padding: 16, background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 14, cursor: "pointer", textAlign: "left" }}>
            <div style={{ fontSize: 20 }}>📖</div>
            <div style={{ fontSize: 14, fontWeight: 500, marginTop: 6 }}>Học theo bài</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>20 bài HSK 3</div>
          </button>
          <button onClick={() => onNav("tools")} style={{ padding: 16, background: "#faf7f2", color: "#1a1a1a", border: "0.5px solid #e0d8cc", borderRadius: 14, cursor: "pointer", textAlign: "left" }}>
            <div style={{ fontSize: 20 }}>🔧</div>
            <div style={{ fontSize: 14, fontWeight: 500, marginTop: 6 }}>Công cụ</div>
            <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>Tra cứu & Ngữ pháp</div>
          </button>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 15, fontWeight: 500 }}>Từ vựng đã học</div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{learned}/{totalVocab}</div>
          </div>
          <div style={{ height: 6, background: "var(--color-background-secondary)", borderRadius: 3 }}>
            <div style={{ height: "100%", width: `${(learned / totalVocab) * 100}%`, background: "#c0392b", borderRadius: 3, transition: "width 0.5s" }} />
          </div>
        </div>

        <div>
          <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 12 }}>Bài học gần đây</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {ALL_LESSONS.slice(0, 5).map(l => (
              <button key={l.id} onClick={() => onNav("lesson", l)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 14px", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, cursor: "pointer", textAlign: "left" }}>
                <div style={{ width: 36, height: 36, background: "#1a1a1a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, fontWeight: 600 }}>{l.id}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontFamily: "'Noto Serif SC', serif" }}>{l.title}</div>
                  <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{l.titleVi}</div>
                </div>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{l.vocab.length} từ</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── LESSONS LIST ─────────────────────────────────────────────────────────────
function LessonsList({ onSelect, onBack }) {
  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <button onClick={onBack} style={{ padding: "6px 12px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer", fontSize: 14 }}>← Về trang chủ</button>
        <div style={{ fontSize: 18, fontWeight: 500 }}>20 Bài học HSK 3</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {ALL_LESSONS.map(l => (
          <button key={l.id} onClick={() => onSelect(l)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, cursor: "pointer", textAlign: "left" }}>
            <div style={{ width: 40, height: 40, background: "#1a1a1a", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 15, fontWeight: 600, flexShrink: 0 }}>
              {l.id < 10 ? `0${l.id}` : l.id}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontFamily: "'Noto Serif SC', serif", marginBottom: 2 }}>{l.title}</div>
              <div style={{ fontSize: 13, color: "var(--color-text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{l.titleVi}</div>
            </div>
            <div style={{ fontSize: 12, color: "var(--color-text-secondary)", flexShrink: 0 }}>{l.vocab.length} từ →</div>
          </button>
        ))}
        <div style={{ padding: 20, textAlign: "center", color: "var(--color-text-secondary)", fontSize: 14, border: "0.5px dashed var(--color-border-tertiary)", borderRadius: 12 }}>
          Bài 11–20 đang cập nhật thêm dữ liệu...
        </div>
      </div>
    </div>
  );
}

// ─── TOOLS ───────────────────────────────────────────────────────────────────
function Tools({ onBack }) {
  const [tool, setTool] = useState("menu");
  if (tool === "grammar") return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "1rem 1rem 0" }}>
        <button onClick={() => setTool("menu")} style={{ padding: "6px 12px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer", fontSize: 14 }}>← Quay lại</button>
        <div style={{ fontSize: 16, fontWeight: 500 }}>法 Ngữ pháp HSK 3</div>
      </div>
      <GrammarTool />
    </div>
  );
  if (tool === "lookup") return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "1rem 1rem 0" }}>
        <button onClick={() => setTool("menu")} style={{ padding: "6px 12px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer", fontSize: 14 }}>← Quay lại</button>
        <div style={{ fontSize: 16, fontWeight: 500 }}>查 Tra cứu từ vựng</div>
      </div>
      <Lookup />
    </div>
  );

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <button onClick={onBack} style={{ padding: "6px 12px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, background: "transparent", cursor: "pointer", fontSize: 14 }}>← Về trang chủ</button>
        <div style={{ fontSize: 18, fontWeight: 500 }}>Công cụ</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <button onClick={() => setTool("grammar")} style={{ padding: 20, background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 14, cursor: "pointer", textAlign: "left" }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>法</div>
          <div style={{ fontSize: 17, fontWeight: 500 }}>Ngữ pháp HSK 3</div>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 4 }}>30 điểm ngữ pháp, có ô tìm kiếm, bấm xem chi tiết</div>
        </button>
        <button onClick={() => setTool("lookup")} style={{ padding: 20, background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 14, cursor: "pointer", textAlign: "left" }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>查</div>
          <div style={{ fontSize: 17, fontWeight: 500 }}>Tra cứu từ vựng</div>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 4 }}>Tìm realtime theo chữ Hán / pinyin / tiếng Việt</div>
        </button>
      </div>
    </div>
  );
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [screen, setScreen] = useState("home");
  const [activeLesson, setActiveLesson] = useState(null);

  useEffect(() => {
    const today = new Date().toDateString();
    if (progress.lastDate !== today) {
      const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
      const newStreak = progress.lastDate === yesterday.toDateString() ? progress.streak + 1 : 1;
      const updated = { ...progress, lastDate: today, streak: newStreak };
      setProgress(updated);
      saveProgress(updated);
    }
  }, []);

  function nav(s, lesson = null) {
    setScreen(s);
    if (lesson) setActiveLesson(lesson);
  }

  function onSeen(id) {
    setProgress(p => {
      const updated = { ...p, seenCount: { ...p.seenCount, [id]: (p.seenCount[id] || 0) + 1 } };
      saveProgress(updated);
      return updated;
    });
  }

  function onXP(amount) {
    setProgress(p => {
      const updated = { ...p, xp: p.xp + amount };
      saveProgress(updated);
      return updated;
    });
  }

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif", minHeight: "100vh", background: "var(--color-background-tertiary)" }}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <div style={{ maxWidth: 640, margin: "0 auto", background: "var(--color-background-primary)", minHeight: "100vh", boxShadow: "0 0 40px rgba(0,0,0,0.08)", paddingBottom: 80 }}>
        {screen === "home" && <Home progress={progress} onNav={nav} />}
        {screen === "daily" && <DailyPractice seenCount={progress.seenCount} onSeen={onSeen} xp={progress.xp} onXP={onXP} onBack={() => nav("home")} />}
        {screen === "lessons" && <LessonsList onSelect={l => nav("lesson", l)} onBack={() => nav("home")} />}
        {screen === "lesson" && activeLesson && <LessonDetail lesson={activeLesson} seenCount={progress.seenCount} onSeen={onSeen} onBack={() => nav("lessons")} />}
        {screen === "tools" && <Tools onBack={() => nav("home")} />}
      </div>

      <nav style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 640, background: "var(--color-background-primary)", borderTop: "0.5px solid var(--color-border-tertiary)", display: "flex", zIndex: 100 }}>
        {[
          { id: "home", icon: "🏠", label: "Trang chủ" },
          { id: "daily", icon: "📅", label: "Hàng ngày" },
          { id: "lessons", icon: "📖", label: "Bài học" },
          { id: "tools", icon: "🔧", label: "Công cụ" },
        ].map(t => (
          <button key={t.id} onClick={() => nav(t.id)} style={{ flex: 1, padding: "10px 4px", background: "transparent", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <span style={{ fontSize: 20 }}>{t.icon}</span>
            <span style={{ fontSize: 10, color: screen === t.id ? "#c0392b" : "var(--color-text-secondary)", fontFamily: "'JetBrains Mono', monospace" }}>{t.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
