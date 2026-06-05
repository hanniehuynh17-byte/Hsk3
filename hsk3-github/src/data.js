export const LESSONS = [
  {
    id: 1,
    title: "周末你有什么打算？",
    titleVi: "Anh dự định làm gì vào cuối tuần vậy?",
    vocab: [
      { id: "1-1", hanzi: "周末", pinyin: "zhōumò", type: "dt", meaning: "cuối tuần", radical: "口", radicalMeaning: "miệng - liên quan đến vòng tròn, chu kỳ", totalStrokes: 8, example: "周末你有什么打算？", exampleVi: "Cuối tuần bạn có kế hoạch gì?" },
      { id: "1-2", hanzi: "打算", pinyin: "dǎsuàn", type: "dt/đgt", meaning: "kế hoạch; dự định", radical: "手", radicalMeaning: "tay - hành động tay", totalStrokes: 5, example: "我打算去旅游。", exampleVi: "Tôi dự định đi du lịch." },
      { id: "1-3", hanzi: "啊", pinyin: "a", type: "trợ", meaning: "trợ từ dùng ở cuối câu để khẳng định hay biện minh", radical: "口", radicalMeaning: "miệng - âm thanh phát ra", totalStrokes: 10 },
      { id: "1-4", hanzi: "跟", pinyin: "gēn", type: "giới", meaning: "cùng, với", radical: "足", radicalMeaning: "chân - đi theo", totalStrokes: 13 },
      { id: "1-5", hanzi: "一直", pinyin: "yīzhí", type: "phó", meaning: "suốt, liên tục", radical: "目", radicalMeaning: "mắt - nhìn thẳng", totalStrokes: 8, example: "他一直在学习。", exampleVi: "Anh ấy học tập liên tục." },
      { id: "1-6", hanzi: "游戏", pinyin: "yóuxì", type: "dt", meaning: "trò chơi", radical: "水", radicalMeaning: "nước - bơi/du lịch", totalStrokes: 12, example: "孩子喜欢玩游戏。", exampleVi: "Trẻ em thích chơi trò chơi." },
      { id: "1-7", hanzi: "作业", pinyin: "zuòyè", type: "dt", meaning: "bài tập về nhà", radical: "人", radicalMeaning: "người - làm việc", totalStrokes: 7, example: "你的作业写完了吗？", exampleVi: "Bài tập của bạn viết xong chưa?" },
      { id: "1-8", hanzi: "着急", pinyin: "zháojí", type: "tt", meaning: "lo lắng", radical: "心", radicalMeaning: "tâm - lo lắng", totalStrokes: 9, example: "你别着急，慢慢来。", exampleVi: "Đừng lo, từ từ thôi." },
      { id: "1-9", hanzi: "复习", pinyin: "fùxí", type: "đgt", meaning: "ôn tập", radical: "夂", radicalMeaning: "đi - lặp lại", totalStrokes: 9, example: "考试以前要复习。", exampleVi: "Trước khi thi phải ôn tập." },
      { id: "1-10", hanzi: "南(方)", pinyin: "nán(fāng)", type: "dt", meaning: "phía nam, miền nam", radical: "十", radicalMeaning: "mười - phương nam", totalStrokes: 9 },
      { id: "1-11", hanzi: "北方", pinyin: "běifāng", type: "dt", meaning: "phía bắc, miền bắc", radical: "匕", radicalMeaning: "dao - phương bắc", totalStrokes: 5 },
      { id: "1-12", hanzi: "面包", pinyin: "miànbāo", type: "dt", meaning: "bánh mì", radical: "面", radicalMeaning: "mặt - mặt/bánh mì", totalStrokes: 9 },
      { id: "1-13", hanzi: "带", pinyin: "dài", type: "đgt", meaning: "mang theo", radical: "巾", radicalMeaning: "vải - dây đai", totalStrokes: 9 },
      { id: "1-14", hanzi: "地图", pinyin: "dìtú", type: "dt", meaning: "bản đồ", radical: "土", radicalMeaning: "đất - mặt đất", totalStrokes: 6 },
      { id: "1-15", hanzi: "搬", pinyin: "bān", type: "đgt", meaning: "dọn, dời", radical: "手", radicalMeaning: "tay - dọn chuyển", totalStrokes: 13 },
    ],
    dialogues: [
      {
        title: "谈周末的打算 — Nói về kế hoạch cuối tuần",
        lines: [
          { speaker: "小丽", text: "周末你有什么打算？" },
          { speaker: "小刚", text: "我早就想好了，请你吃饭、看电影、喝咖啡。" },
          { speaker: "小丽", text: "请我？" },
          { speaker: "小刚", text: "是啊，我已经找好饭馆儿了，电影票也买好了。" },
          { speaker: "小丽", text: "我还没想好要不要跟你去呢。" },
        ]
      },
      {
        title: "在家 — Ở nhà",
        lines: [
          { speaker: "妈妈", text: "你一直玩儿电脑游戏，作业写完了吗？" },
          { speaker: "儿子", text: "都写完了。" },
          { speaker: "妈妈", text: "明天不是有考试吗？你怎么一点儿也不着急？" },
          { speaker: "儿子", text: "我早就复习好了。" },
          { speaker: "妈妈", text: "那也不能一直玩儿啊。" },
        ]
      },
      {
        title: "聊旅游计划 — Nói về kế hoạch đi du lịch",
        lines: [
          { speaker: "小丽", text: "下个月我去旅游，你能跟我一起去吗？" },
          { speaker: "小刚", text: "我还没想好呢。你觉得哪儿最好玩儿？" },
          { speaker: "小丽", text: "南方啊，我们去年就是这个时候去的。" },
          { speaker: "小刚", text: "南方太热了，北方好一些，不冷也不热。" },
        ]
      },
      {
        title: "准备去旅游 — Chuẩn bị đi du lịch",
        lines: [
          { speaker: "小刚", text: "水果、面包、茶都准备好了，我们还带什么？" },
          { speaker: "小丽", text: "手机、电脑、地图，一个也不能少。" },
          { speaker: "小刚", text: "这些我昨天下午就准备好了。" },
          { speaker: "小丽", text: "再多带几件衣服吧。" },
          { speaker: "小刚", text: "我们是去旅游，不是搬家，还是少带一些吧。" },
        ]
      },
    ],
    reading: {
      text: "小刚和小丽是好朋友。他们决定周末一起去南方旅游。小刚已经买好了火车票，小丽准备好了地图和面包。他们打算在南方待三天，看看那里的风景，吃吃当地的美食。小丽一直很期待这次旅游，但是小刚还有一点儿着急，因为他的作业还没做完。不过，他昨天晚上已经复习好了，所以不用担心考试了。",
      pinyin: "Xiǎo Gāng hé Xiǎo Lì shì hǎo péngyou. Tāmen juédìng zhōumò yīqǐ qù nánfāng lǚyóu. Xiǎo Gāng yǐjīng mǎi hǎo le huǒchē piào, Xiǎo Lì zhǔnbèi hǎo le dìtú hé miànbāo. Tāmen dǎsuàn zài nánfāng dāi sān tiān, kànkan nàlǐ de fēngjǐng, chīchi dāngdì de měishí.",
      meaning: "Tiểu Cương và Tiểu Lệ là bạn tốt. Họ quyết định cuối tuần cùng nhau đi du lịch miền nam. Tiểu Cương đã mua xong vé tàu, Tiểu Lệ đã chuẩn bị xong bản đồ và bánh mì. Họ dự định ở lại miền nam ba ngày, ngắm cảnh nơi đó và thưởng thức ẩm thực địa phương."
    },
    grammar: [
      {
        title: '结果补语\"好\" — Bổ ngữ chỉ kết quả 好',
        explanation: "Bổ ngữ chỉ kết quả 好 được dùng sau động từ để diễn tả hành động được hoàn thành và làm cho người ta cảm thấy hài lòng. Ví dụ: 吃好了 (đã ăn xong và ngon), 准备好了 (đã chuẩn bị xong).",
        examples: [
          { zh: "今晚的电影小刚已经买好票了。", vi: "Vé phim tối nay Tiểu Cương đã mua xong rồi." },
          { zh: "饭还没做好，请你等一会儿。", vi: "Cơm chưa nấu xong, mời bạn đợi một lúc." },
          { zh: "去旅游的东西准备好了吗？", vi: "Đồ đạc đi du lịch chuẩn bị xong chưa?" },
        ],
        fillInBlank: [
          { sentence: "我不能跟你出去玩儿，明天的汉语课我还没___。", answer: "复习好" },
          { sentence: "我们打算去旅行，我已经___火车票了。", answer: "买好" },
          { sentence: "快___衣服，我们准备出门了。", answer: "换好" },
        ]
      },
      {
        title: '"一……也/都＋不/没……" 表示否定',
        explanation: 'Cấu trúc "一 + 量từ + danh từ + 也/都 + 不/没 + động từ" được dùng để diễn tả sự phủ định hoàn toàn.',
        examples: [
          { zh: "我一个苹果也不想吃。", vi: "Tôi một quả táo cũng không muốn ăn." },
          { zh: "昨天他一件衣服都没买。", vi: "Hôm qua anh ấy một cái quần áo cũng không mua." },
          { zh: "手机、电脑、地图，一个也不能少（带）。", vi: "Điện thoại, máy tính, bản đồ, một thứ cũng không thể thiếu." },
        ],
        fillInBlank: [
          { sentence: "这些汉字太难了，我___认识。", answer: "一个也不" },
          { sentence: "这件衣服真便宜，___不贵。", answer: "一点儿也" },
          { sentence: "我没带钱，___买。", answer: "一点儿也没" },
        ]
      },
      {
        title: '连词"那" — Liên từ 那',
        explanation: '"那" được dùng ở đầu câu để chỉ kết quả hay nhận xét dựa vào nội dung được đề cập trước đó.',
        examples: [
          { zh: "A: 我不想去看电影。B: 那我也不去了。", vi: "A: Tôi không muốn đi xem phim. B: Vậy thì tôi cũng không đi nữa." },
          { zh: "A: 我早就复习好了。B: 那也不能一直玩儿啊。", vi: "A: Tôi đã ôn tập xong từ sớm rồi. B: Vậy thì cũng không được chơi mãi đâu nhé." },
          { zh: "A: 对不起，红色的手机已经卖完了。B: 那给我一个蓝色的吧。", vi: "A: Xin lỗi, điện thoại màu đỏ đã hết hàng. B: Vậy thì cho tôi cái màu xanh." },
        ],
        fillInBlank: [
          { sentence: "A: 周末我不想去商店买东西。B: ___我们去公园玩儿吧。", answer: "那" },
          { sentence: "A: 外边下大雨了，不能去踢球了。B: ___我们在家看电影吧。", answer: "那" },
          { sentence: "A: 对不起，红色的手机已经卖完了。B: ___给我一个蓝色的吧。", answer: "那" },
        ]
      }
    ],
    proverb: {
      hanzi: "不到长城非好汉",
      pinyin: "Bù dào Chángchéng fēi hǎo hàn",
      meaning: "Bất đáo Trường Thành phi hảo hán",
      explanation: "Chưa đến Vạn Lý Trường Thành chưa phải là hảo hán. Ý nghĩa: phải cố gắng đến cùng mới thành công."
    }
  },
  {
    id: 2,
    title: "他什么时候回来？",
    titleVi: "Khi nào anh ấy quay về?",
    vocab: [
      { id: "2-1", hanzi: "腿", pinyin: "tuǐ", type: "dt", meaning: "chân", radical: "肉", radicalMeaning: "thịt/cơ thể - bộ phận cơ thể", totalStrokes: 13, example: "爬山以后腿很疼。", exampleVi: "Sau khi leo núi chân rất đau." },
      { id: "2-2", hanzi: "疼", pinyin: "téng", type: "tt", meaning: "đau, nhức", radical: "疒", radicalMeaning: "bệnh - cảm giác đau", totalStrokes: 10, example: "我的头很疼。", exampleVi: "Đầu tôi rất đau." },
      { id: "2-3", hanzi: "脚", pinyin: "jiǎo", type: "dt", meaning: "bàn chân", radical: "肉", radicalMeaning: "thịt/cơ thể - bộ phận cơ thể", totalStrokes: 11, example: "我的脚很疼。", exampleVi: "Bàn chân tôi rất đau." },
      { id: "2-4", hanzi: "树", pinyin: "shù", type: "dt", meaning: "cây", radical: "木", radicalMeaning: "cây - loại cây", totalStrokes: 9, example: "公园里有很多树。", exampleVi: "Trong công viên có nhiều cây." },
      { id: "2-5", hanzi: "容易", pinyin: "róngyì", type: "tt", meaning: "dễ, dễ dàng", radical: "宀", radicalMeaning: "mái nhà - dung chứa", totalStrokes: 10, example: "这道题不容易。", exampleVi: "Bài toán này không dễ." },
      { id: "2-6", hanzi: "难", pinyin: "nán", type: "tt", meaning: "khó, khó khăn", radical: "隹", radicalMeaning: "chim - khó như bắt chim", totalStrokes: 10, example: "汉语真的很难。", exampleVi: "Tiếng Trung thực sự rất khó." },
      { id: "2-7", hanzi: "太太", pinyin: "tàitai", type: "dt", meaning: "bà", radical: "大", radicalMeaning: "lớn - rất lớn", totalStrokes: 4, example: "他太太很漂亮。", exampleVi: "Vợ anh ấy rất đẹp." },
      { id: "2-8", hanzi: "秘书", pinyin: "mìshū", type: "dt", meaning: "thư ký", radical: "禾", radicalMeaning: "lúa - bí mật", totalStrokes: 10, example: "她是经理的秘书。", exampleVi: "Cô ấy là thư ký của giám đốc." },
      { id: "2-9", hanzi: "经理", pinyin: "jīnglǐ", type: "dt", meaning: "giám đốc", radical: "纟", radicalMeaning: "tơ - xuyên suốt", totalStrokes: 8, example: "经理在开会。", exampleVi: "Giám đốc đang họp." },
      { id: "2-10", hanzi: "办公室", pinyin: "bàngōngshì", type: "dt", meaning: "văn phòng", radical: "力", radicalMeaning: "sức - làm việc", totalStrokes: 4, example: "他在办公室工作。", exampleVi: "Anh ấy làm việc ở văn phòng." },
      { id: "2-11", hanzi: "辆", pinyin: "liàng", type: "lượng", meaning: "(lượng từ dùng cho xe cộ) chiếc", radical: "车", radicalMeaning: "xe - đơn vị xe", totalStrokes: 11 },
      { id: "2-12", hanzi: "楼", pinyin: "lóu", type: "dt", meaning: "tòa nhà, lầu", radical: "木", radicalMeaning: "cây - tầng nhà", totalStrokes: 13, example: "他住在三楼。", exampleVi: "Anh ấy ở tầng ba." },
      { id: "2-13", hanzi: "拿", pinyin: "ná", type: "đgt", meaning: "cầm, lấy", radical: "手", radicalMeaning: "tay - cầm lấy", totalStrokes: 10, example: "请帮我拿一下包。", exampleVi: "Xin giúp tôi lấy cái túi." },
      { id: "2-14", hanzi: "把", pinyin: "bǎ", type: "lượng", meaning: "(lượng từ vật cầm tay) con, cây", radical: "手", radicalMeaning: "tay - nắm lấy", totalStrokes: 7 },
      { id: "2-15", hanzi: "伞", pinyin: "sǎn", type: "dt", meaning: "ô (dù)", radical: "人", radicalMeaning: "người - che cho người", totalStrokes: 6, example: "下雨了，带上伞吧。", exampleVi: "Trời mưa rồi, mang ô theo nhé." },
      { id: "2-16", hanzi: "胖", pinyin: "pàng", type: "tt", meaning: "béo", radical: "肉", radicalMeaning: "thịt/cơ thể - nhiều mỡ", totalStrokes: 9, example: "他最近胖了。", exampleVi: "Dạo này anh ấy béo ra." },
      { id: "2-17", hanzi: "其实", pinyin: "qíshí", type: "phó", meaning: "kỳ thực, thực ra", radical: "宀", radicalMeaning: "mái nhà - thực chất", totalStrokes: 8 },
      { id: "2-18", hanzi: "瘦", pinyin: "shòu", type: "tt", meaning: "gầy, gầy còm", radical: "疒", radicalMeaning: "bệnh - gầy yếu", totalStrokes: 14, example: "她减肥以后瘦了很多。", exampleVi: "Sau khi giảm cân cô ấy gầy nhiều." },
      { id: "2-19", hanzi: "周明", pinyin: "Zhōu Míng", type: "riêng", meaning: "Châu Minh (tên người)", radical: "口", radicalMeaning: "miệng - liên quan đến vòng tròn, chu kỳ", totalStrokes: 8 },
    ],
    dialogues: [
      {
        title: "下山的路上 — Trên đường xuống núi",
        lines: [
          { speaker: "小丽", text: "休息一下吧。" },
          { speaker: "小刚", text: "怎么了？" },
          { speaker: "小丽", text: "我现在腿也疼，脚也疼。" },
          { speaker: "小刚", text: "好，那边树多，我们过去坐一下吧。" },
          { speaker: "小丽", text: "上来的时候我怎么没觉得这么累？" },
          { speaker: "小刚", text: "上山容易下山难，你不知道？" },
        ]
      },
      {
        title: "在打电话 — Đang gọi điện thoại",
        lines: [
          { speaker: "周太太", text: "喂，你好，请问周明在吗？" },
          { speaker: "秘书", text: "周经理出去了，不在办公室。" },
          { speaker: "周太太", text: "他去哪儿了？什么时候回来？" },
          { speaker: "秘书", text: "他出去办事了，下午回来。" },
          { speaker: "周太太", text: "回来了就让他给我打个电话。" },
          { speaker: "秘书", text: "好的，他到了办公室我就告诉他。" },
        ]
      },
      {
        title: "在楼门口送朋友 — Tiễn bạn ở trước cửa tòa nhà",
        lines: [
          { speaker: "小刚", text: "雨下得真大。你怎么回去？我送你吧。" },
          { speaker: "小丽", text: "没事，我出去叫辆出租车就行了。" },
          { speaker: "小刚", text: "那你等等，我上楼去给你拿把伞。" },
          { speaker: "小丽", text: "好的。我跟你一起上去吧。" },
          { speaker: "小刚", text: "你在这儿等吧，我拿了伞就下来。" },
        ]
      },
      {
        title: "体育课以后 — Sau giờ thể dục",
        lines: [
          { speaker: "同学A", text: "你跑得真快，能教我吗？" },
          { speaker: "同学B", text: "其实我跑得也不快，只是你太慢了。" },
          { speaker: "同学A", text: "我最近胖了，腿疼，所以跑不快。" },
          { speaker: "同学B", text: "多运动，你就不胖了，腿也不疼了。" },
        ]
      },
    ],
    reading: {
      text: "小刚和小丽爬山回来，两个人都很累，腿也疼，脚也疼。他们坐下来休息了一下。小丽说上山容易下山难，现在才体会到。小刚给朋友打了个电话，但是朋友不在家，秘书说他出去办事了，下午才回来。小刚让秘书转告朋友给他打电话。后来天下起了大雨，小刚拿了一把伞，送小丽出去叫出租车。",
      pinyin: "Xiǎo Gāng hé Xiǎo Lì pá shān huí lái, liǎng gè rén dōu hěn lèi, tuǐ yě téng, jiǎo yě téng.",
      meaning: "Tiểu Cương và Tiểu Lệ leo núi về, hai người đều rất mệt, chân cũng đau, bàn chân cũng đau. Họ ngồi xuống nghỉ một lúc."
    },
    grammar: [
      {
        title: "简单趋向补语 — Bổ ngữ chỉ phương hướng đơn giản",
        explanation: "Bổ ngữ chỉ phương hướng đơn giản gồm 来 (đến gần người nói) hoặc 去 (rời xa người nói), đặt sau động từ chuyển động để chỉ phương hướng.",
        examples: [
          { zh: "他上来了。", vi: "Anh ấy đi lên (về phía tôi) rồi." },
          { zh: "我下去拿。", vi: "Tôi đi xuống lấy." },
          { zh: "他出去了。", vi: "Anh ấy đi ra ngoài rồi." },
        ],
        fillInBlank: [
          { sentence: "老师走___教室了。", answer: "进" },
          { sentence: "他从楼上跑___来了。", answer: "下" },
          { sentence: "请你进___吧。", answer: "来" },
        ]
      },
      {
        title: "两个动作连续发生 — Cấu trúc diễn tả hai hành động xảy ra liên tiếp",
        explanation: "Dùng 就 để liên kết hai hành động xảy ra liên tiếp nhau. Cấu trúc: ...就...",
        examples: [
          { zh: "他到了办公室我就告诉他。", vi: "Anh ấy đến văn phòng tôi sẽ nói ngay." },
          { zh: "我拿了伞就下来。", vi: "Tôi lấy ô xong sẽ xuống ngay." },
          { zh: "吃完饭就出发。", vi: "Ăn cơm xong là xuất phát." },
        ],
        fillInBlank: [
          { sentence: "他回来了___告诉我。", answer: "就" },
          { sentence: "我准备好了___出发。", answer: "就" },
          { sentence: "下课了我___去找你。", answer: "就" },
        ]
      },
      {
        title: "反问的表达：能……吗？— Câu hỏi có cấu trúc: 能……吗？",
        explanation: "Dùng 能……吗 để hỏi về khả năng hoặc sự cho phép.",
        examples: [
          { zh: "你能教我吗？", vi: "Bạn có thể dạy tôi không?" },
          { zh: "你能帮我一下吗？", vi: "Bạn có thể giúp tôi một chút không?" },
          { zh: "这里能拍照吗？", vi: "Ở đây có thể chụp ảnh không?" },
        ],
        fillInBlank: [
          { sentence: "你___告诉我他在哪儿吗？", answer: "能" },
          { sentence: "这里___停车吗？", answer: "能" },
          { sentence: "我___用你的手机吗？", answer: "能" },
        ]
      }
    ],
    proverb: {
      hanzi: "饭后百步走，活到九十九",
      pinyin: "Fàn hòu bǎi bù zǒu, huó dào jiǔshíjiǔ",
      meaning: "Đi bộ 100 bước sau bữa ăn sẽ sống đến 99 tuổi",
      explanation: "Tục ngữ khuyên người ta nên đi bộ sau bữa ăn để có sức khỏe tốt và sống lâu."
    }
  },
  {
    id: 3,
    title: "桌子上放着很多饮料。",
    titleVi: "Trên bàn có rất nhiều thức uống.",
    vocab: [
      { id: "3-1", hanzi: "还是", pinyin: "háishi", type: "liên", meaning: "hay", radical: "辶", radicalMeaning: "đi - trả lại/vẫn còn", totalStrokes: 7 },
      { id: "3-2", hanzi: "爬山", pinyin: "páshān", type: "đgt", meaning: "leo núi", radical: "爪", radicalMeaning: "móng - dùng móng leo", totalStrokes: 8 },
      { id: "3-3", hanzi: "小心", pinyin: "xiǎoxīn", type: "đgt", meaning: "cẩn thận", radical: "小", radicalMeaning: "nhỏ - nhỏ bé", totalStrokes: 3 },
      { id: "3-4", hanzi: "茶", pinyin: "chá", type: "dt", meaning: "trà", radical: "艸", radicalMeaning: "cỏ - loại cây cỏ", totalStrokes: 9, example: "中国人喜欢喝茶。", exampleVi: "Người Trung Quốc thích uống trà." },
      { id: "3-5", hanzi: "筷子", pinyin: "kuàizi", type: "dt", meaning: "đũa", radical: "竹", radicalMeaning: "tre - đũa tre", totalStrokes: 13, example: "中国人用筷子吃饭。", exampleVi: "Người Trung Quốc dùng đũa ăn cơm." },
      { id: "3-6", hanzi: "记得", pinyin: "jìde", type: "đgt", meaning: "nhớ, còn nhớ", radical: "讠", radicalMeaning: "lời nói - ghi nhớ", totalStrokes: 5, example: "你还记得我吗？", exampleVi: "Bạn còn nhớ tôi không?" },
      { id: "3-7", hanzi: "村杉", pinyin: "chènshān", type: "dt", meaning: "áo sơ mi" },
      { id: "3-8", hanzi: "元", pinyin: "yuán", type: "lượng", meaning: "đồng (tiền tệ)", radical: "儿", radicalMeaning: "người - đơn vị tiền", totalStrokes: 4 },
      { id: "3-9", hanzi: "新鲜", pinyin: "xīnxiān", type: "tt", meaning: "tươi, tươi mới", radical: "斤", radicalMeaning: "rìu - tạo mới", totalStrokes: 13, example: "这里的水果很新鲜。", exampleVi: "Hoa quả ở đây rất tươi." },
      { id: "3-10", hanzi: "甜", pinyin: "tián", type: "tt", meaning: "ngọt", radical: "甘", radicalMeaning: "ngọt - vị ngọt", totalStrokes: 11, example: "这个水果很甜。", exampleVi: "Hoa quả này rất ngọt." },
      { id: "3-11", hanzi: "只", pinyin: "zhǐ", type: "phó", meaning: "chỉ", radical: "口", radicalMeaning: "miệng - chỉ/duy nhất", totalStrokes: 5 },
      { id: "3-12", hanzi: "放", pinyin: "fàng", type: "đgt", meaning: "để, đặt", radical: "攴", radicalMeaning: "tay - buông ra", totalStrokes: 8, example: "把书放在桌子上。", exampleVi: "Để sách lên bàn." },
      { id: "3-13", hanzi: "饮料", pinyin: "yǐnliào", type: "dt", meaning: "đồ uống", radical: "食", radicalMeaning: "ăn uống - uống", totalStrokes: 7, example: "你想喝什么饮料？", exampleVi: "Bạn muốn uống đồ uống gì?" },
      { id: "3-14", hanzi: "或者", pinyin: "huòzhě", type: "liên", meaning: "hoặc", radical: "戈", radicalMeaning: "giáo - hoặc là", totalStrokes: 8 },
      { id: "3-15", hanzi: "舒服", pinyin: "shūfu", type: "tt", meaning: "dễ chịu", radical: "舌", radicalMeaning: "lưỡi - thoải mái", totalStrokes: 12, example: "这里的环境很舒服。", exampleVi: "Môi trường ở đây rất dễ chịu." },
      { id: "3-16", hanzi: "花", pinyin: "huā", type: "dt", meaning: "hoa", radical: "艸", radicalMeaning: "cỏ - loại thực vật", totalStrokes: 7, example: "公园里放着很多花。", exampleVi: "Trong công viên để nhiều hoa." },
      { id: "3-17", hanzi: "绿", pinyin: "lǜ", type: "tt", meaning: "xanh lá", radical: "纟", radicalMeaning: "tơ - màu xanh lá", totalStrokes: 11 },
      { id: "3-18", hanzi: "鲜奶", pinyin: "xiānnǎi", type: "dt", meaning: "sữa tươi", radical: "鱼", radicalMeaning: "cá - tươi mới", totalStrokes: 17 },
      { id: "3-19", hanzi: "冷饮", pinyin: "lěngyǐn", type: "dt", meaning: "đồ uống lạnh", radical: "食", radicalMeaning: "ăn uống - uống", totalStrokes: 7 },
    ],
    dialogues: [
      {
        title: "在超市 — Ở siêu thị",
        lines: [
          { speaker: "小刚", text: "你买还是爬山用的东西？" },
          { speaker: "小丽", text: "都买。你看，桌子上放着很多饮料。" },
          { speaker: "小刚", text: "这些饮料很新鲜，甜不甜？" },
          { speaker: "小丽", text: "不太甜，你喝一口试试。" },
          { speaker: "小刚", text: "味道不错，买两瓶吧。" },
        ]
      },
      {
        title: "在餐厅 — Ở nhà hàng",
        lines: [
          { speaker: "服务员", text: "您好，请坐！你们喝点儿什么？" },
          { speaker: "客人A", text: "来两杯茶吧，还是绿茶。" },
          { speaker: "客人B", text: "我不喝茶，给我来一杯鲜奶或者冷饮。" },
          { speaker: "服务员", text: "好的，稍等。" },
        ]
      },
      {
        title: "买衬衫 — Mua áo sơ mi",
        lines: [
          { speaker: "顾客", text: "请问这件衬衫多少钱？" },
          { speaker: "店员", text: "一百二十元。" },
          { speaker: "顾客", text: "能便宜一点儿吗？只要一百元。" },
          { speaker: "店员", text: "好吧，就一百元。" },
        ]
      },
      {
        title: "在公园 — Ở công viên",
        lines: [
          { speaker: "朋友A", text: "你看，公园里放着很多花，好漂亮！" },
          { speaker: "朋友B", text: "是啊，绿色的草，红色的花，真舒服。" },
          { speaker: "朋友A", text: "我们在这儿坐一会儿吧。" },
          { speaker: "朋友B", text: "好，小心点儿，别踩花。" },
        ]
      },
    ],
    reading: {
      text: "今天是周末，小刚和小丽去超市买东西。超市里放着很多新鲜的水果和饮料。小丽选了一些甜的水果，小刚买了两瓶饮料。他们还看见了很多种衬衫，有绿色的，有红色的，价格不贵，只要一百多元。买完东西，他们去公园坐了一会儿，公园里放着很多花，环境很舒服。",
      pinyin: "Jīntiān shì zhōumò, Xiǎo Gāng hé Xiǎo Lì qù chāoshì mǎi dōngxi.",
      meaning: "Hôm nay là cuối tuần, Tiểu Cương và Tiểu Lệ đi siêu thị mua đồ. Trong siêu thị bày nhiều trái cây và đồ uống tươi ngon."
    },
    grammar: [
      {
        title: '"还是"和"或者" — 还是 và 或者',
        explanation: '"还是" dùng trong câu hỏi lựa chọn. "或者" dùng trong câu kể để nối hai phương án.',
        examples: [
          { zh: "你喝茶还是喝咖啡？", vi: "Bạn uống trà hay uống cà phê?" },
          { zh: "你可以坐公共汽车或者骑自行车去。", vi: "Bạn có thể đi xe buýt hoặc đạp xe đến." },
          { zh: "我们去看电影还是去爬山？", vi: "Chúng ta đi xem phim hay đi leo núi?" },
        ],
        fillInBlank: [
          { sentence: "你喝茶___喝咖啡？", answer: "还是" },
          { sentence: "周末你可以休息___出去玩儿。", answer: "或者" },
          { sentence: "你是学生___老师？", answer: "还是" },
        ]
      },
      {
        title: "存在的表达 — Cách diễn tả sự tồn tại: 着",
        explanation: "Cấu trúc: Từ/cụm từ chỉ vị trí + động từ + 着 + từ chỉ số đếm + lượng từ + danh từ. Dùng để diễn tả sự tồn tại tại một chỗ.",
        examples: [
          { zh: "桌子上放着很多饮料。", vi: "Trên bàn để nhiều đồ uống." },
          { zh: "墙上挂着一幅画。", vi: "Trên tường treo một bức tranh." },
          { zh: "门口站着一个人。", vi: "Ở cửa đứng một người." },
        ],
        fillInBlank: [
          { sentence: "黑板上写___很多汉字。", answer: "着" },
          { sentence: "床上放___一本书。", answer: "着" },
          { sentence: "路上走___很多人。", answer: "着" },
        ]
      },
      {
        title: '"会"表示可能 — Trợ động từ 会',
        explanation: '"会" biểu thị khả năng xảy ra dựa trên kinh nghiệm hoặc lý lẽ.',
        examples: [
          { zh: "明天会下雨吗？", vi: "Ngày mai có mưa không?" },
          { zh: "他会来的，别担心。", vi: "Anh ấy sẽ đến, đừng lo." },
          { zh: "这样做会有问题的。", vi: "Làm thế này sẽ có vấn đề đấy." },
        ],
        fillInBlank: [
          { sentence: "天气预报说明天___下雪。", answer: "会" },
          { sentence: "他___来参加我们的聚会。", answer: "会" },
          { sentence: "你___帮我吗？", answer: "能/会" },
        ]
      }
    ],
    proverb: {
      hanzi: "茶好客常来",
      pinyin: "Chá hǎo kè cháng lái",
      meaning: "Trà ngon khách sẽ đến thường",
      explanation: "Ý nghĩa: Nếu đối xử tốt với khách, khách sẽ thường xuyên đến thăm."
    }
  },
  {
    id: 4,
    title: "她总是笑着跟客人说话。",
    titleVi: "Cô ấy luôn cười khi nói chuyện với khách hàng.",
    vocab: [
      { id: "4-1", hanzi: "比赛", pinyin: "bǐsài", type: "dt/đgt", meaning: "cuộc thi; thi đấu", radical: "比", radicalMeaning: "so sánh - so sánh", totalStrokes: 4, example: "他参加了比赛。", exampleVi: "Anh ấy tham gia cuộc thi." },
      { id: "4-2", hanzi: "照片", pinyin: "zhàopiàn", type: "dt", meaning: "ảnh, hình ảnh", radical: "火", radicalMeaning: "lửa - chiếu sáng", totalStrokes: 13, example: "这张照片很好看。", exampleVi: "Tấm ảnh này rất đẹp." },
      { id: "4-3", hanzi: "年级", pinyin: "niánjí", type: "dt", meaning: "lớp, khối", radical: "干", radicalMeaning: "can - năm tháng", totalStrokes: 6 },
      { id: "4-4", hanzi: "又", pinyin: "yòu", type: "phó", meaning: "lại, thêm", radical: "又", radicalMeaning: "lại - lại một lần nữa", totalStrokes: 2 },
      { id: "4-5", hanzi: "聪明", pinyin: "cōngmíng", type: "tt", meaning: "thông minh", radical: "耳", radicalMeaning: "tai - thông minh = tai nhạy", totalStrokes: 15, example: "她很聪明，学什么都快。", exampleVi: "Cô ấy rất thông minh, học gì cũng nhanh." },
      { id: "4-6", hanzi: "热情", pinyin: "rèqíng", type: "tt", meaning: "nhiệt tình", radical: "火", radicalMeaning: "lửa - nóng/nhiệt tình", totalStrokes: 10, example: "他对客人很热情。", exampleVi: "Anh ấy rất nhiệt tình với khách." },
      { id: "4-7", hanzi: "努力", pinyin: "nǔlì", type: "tt/đgt", meaning: "cố gắng, nỗ lực", radical: "力", radicalMeaning: "sức - nỗ lực", totalStrokes: 7, example: "她学习很努力。", exampleVi: "Cô ấy học hành rất cố gắng." },
      { id: "4-8", hanzi: "总是", pinyin: "zǒngshì", type: "phó", meaning: "luôn luôn", radical: "心", radicalMeaning: "tâm - tổng/luôn luôn", totalStrokes: 9, example: "他总是迟到。", exampleVi: "Anh ấy luôn luôn đến muộn." },
      { id: "4-9", hanzi: "回答", pinyin: "huídá", type: "đgt", meaning: "trả lời", radical: "口", radicalMeaning: "miệng - quay lại", totalStrokes: 6, example: "请回答我的问题。", exampleVi: "Xin trả lời câu hỏi của tôi." },
      { id: "4-10", hanzi: "站", pinyin: "zhàn", type: "đgt", meaning: "đứng", radical: "立", radicalMeaning: "đứng - đứng lại", totalStrokes: 10 },
      { id: "4-11", hanzi: "银", pinyin: "yín", type: "dt", meaning: "bạc (kim loại)", radical: "钅", radicalMeaning: "kim loại - bạc", totalStrokes: 14 },
      { id: "4-12", hanzi: "超市", pinyin: "chāoshì", type: "dt", meaning: "siêu thị", radical: "走", radicalMeaning: "đi - vượt qua", totalStrokes: 12, example: "我去超市买东西。", exampleVi: "Tôi đi siêu thị mua đồ." },
      { id: "4-13", hanzi: "蛋糕", pinyin: "dàngāo", type: "dt", meaning: "bánh kem", radical: "虫", radicalMeaning: "sinh vật - trứng", totalStrokes: 11, example: "生日快乐！这是你的蛋糕。", exampleVi: "Chúc mừng sinh nhật! Đây là bánh kem của bạn." },
      { id: "4-14", hanzi: "年轻", pinyin: "niánqīng", type: "tt", meaning: "trẻ tuổi", radical: "干", radicalMeaning: "can - năm tháng", totalStrokes: 6, example: "她看起来很年轻。", exampleVi: "Cô ấy trông rất trẻ." },
      { id: "4-15", hanzi: "认真", pinyin: "rènzhēn", type: "tt", meaning: "nghiêm túc, chăm chỉ", radical: "讠", radicalMeaning: "lời nói - nhận biết", totalStrokes: 4, example: "他工作很认真。", exampleVi: "Anh ấy làm việc rất nghiêm túc." },
      { id: "4-16", hanzi: "客人", pinyin: "kèrén", type: "dt", meaning: "khách", radical: "宀", radicalMeaning: "mái nhà - khách đến", totalStrokes: 9, example: "今天家里来了很多客人。", exampleVi: "Hôm nay nhà đến nhiều khách." },
      { id: "4-17", hanzi: "小美", pinyin: "Xiǎo Měi", type: "riêng", meaning: "Tiểu Mỹ (tên người)", radical: "小", radicalMeaning: "nhỏ - nhỏ bé", totalStrokes: 3 },
      { id: "4-18", hanzi: "马可", pinyin: "Mǎ Kě", type: "riêng", meaning: "Mã Khả (tên người)", radical: "口", radicalMeaning: "miệng - có thể", totalStrokes: 5 },
    ],
    dialogues: [
      {
        title: "介绍朋友 — Giới thiệu bạn bè",
        lines: [
          { speaker: "小刚", text: "这是我的朋友小美，她又聪明又热情。" },
          { speaker: "小丽", text: "你好小美，你是哪个年级的？" },
          { speaker: "小美", text: "我是三年级的，你呢？" },
          { speaker: "小丽", text: "我是二年级的。" },
        ]
      },
      {
        title: "在超市工作 — Làm việc ở siêu thị",
        lines: [
          { speaker: "经理", text: "小美工作很认真，总是笑着跟客人说话。" },
          { speaker: "同事", text: "是啊，她也很努力，每天第一个来。" },
          { speaker: "经理", text: "她还帮助其他同事，真的很热情。" },
          { speaker: "同事", text: "难怪大家都喜欢她。" },
        ]
      },
      {
        title: "看照片 — Xem ảnh",
        lines: [
          { speaker: "小丽", text: "这是你们班的比赛照片吗？" },
          { speaker: "小美", text: "是的，我们班得了第一名。" },
          { speaker: "小丽", text: "你们都很年轻啊，这个站着的是谁？" },
          { speaker: "小美", text: "那是马可，他又聪明又努力。" },
        ]
      },
      {
        title: "买蛋糕 — Mua bánh kem",
        lines: [
          { speaker: "顾客", text: "请问这个蛋糕多少钱？" },
          { speaker: "售货员", text: "这个是三十八元，那个是五十二元。" },
          { speaker: "顾客", text: "我要那个大的，又好看又好吃。" },
          { speaker: "售货员", text: "好的，这是您的蛋糕。" },
        ]
      },
    ],
    reading: {
      text: "小美是超市里的一名售货员。她工作很认真，总是笑着跟客人说话。她又热情又努力，每天都是第一个到超市，帮大家做准备工作。客人们都很喜欢她，总是愿意来她的柜台买东西。经理说小美是超市里最好的员工，今年的比赛她也得了第一名。",
      pinyin: "Xiǎo Měi shì chāoshì lǐ de yī míng shòuhuòyuán. Tā gōngzuò hěn rènzhēn, zǒngshì xiào zhe gēn kèrén shuō huà.",
      meaning: "Tiểu Mỹ là một nhân viên bán hàng ở siêu thị. Cô ấy làm việc rất nghiêm túc, luôn mỉm cười khi nói chuyện với khách hàng."
    },
    grammar: [
      {
        title: "又……又…… — Cấu trúc: Vừa… vừa…",
        explanation: '"又……又……" dùng để nối hai tính chất hoặc hành động xảy ra đồng thời.',
        examples: [
          { zh: "她又聪明又热情。", vi: "Cô ấy vừa thông minh vừa nhiệt tình." },
          { zh: "这个蛋糕又便宜又好吃。", vi: "Cái bánh kem này vừa rẻ vừa ngon." },
          { zh: "他又高又帅。", vi: "Anh ấy vừa cao vừa đẹp trai." },
        ],
        fillInBlank: [
          { sentence: "这件衣服___便宜___好看。", answer: "又...又" },
          { sentence: "她___聪明___努力。", answer: "又...又" },
          { sentence: "北京___大___热闹。", answer: "又...又" },
        ]
      },
      {
        title: "动作的伴随 — Động từ + 着",
        explanation: "Cấu trúc: Động từ 1 + 着 (+ tân ngữ 1) + động từ 2 (+ tân ngữ 2). Diễn tả hành động 1 xảy ra đồng thời với hành động 2.",
        examples: [
          { zh: "她总是笑着跟客人说话。", vi: "Cô ấy luôn vừa cười vừa nói chuyện với khách." },
          { zh: "他站着回答问题。", vi: "Anh ấy đứng trả lời câu hỏi." },
          { zh: "妈妈唱着歌做饭。", vi: "Mẹ vừa hát vừa nấu cơm." },
        ],
        fillInBlank: [
          { sentence: "他___（走）去上学。", answer: "走着" },
          { sentence: "她___（笑）说了一句话。", answer: "笑着" },
          { sentence: "老师___（站）讲课。", answer: "站着" },
        ]
      },
      {
        title: "时间段的表达 — Cách diễn tả thời gian",
        explanation: "Dùng 以前/以后 để diễn tả thời gian trước/sau một mốc nào đó.",
        examples: [
          { zh: "吃饭以前要洗手。", vi: "Trước khi ăn cơm phải rửa tay." },
          { zh: "下课以后我去找你。", vi: "Sau khi tan học tôi đến tìm bạn." },
          { zh: "来北京以前，我没学过汉语。", vi: "Trước khi đến Bắc Kinh, tôi chưa học tiếng Trung." },
        ],
        fillInBlank: [
          { sentence: "睡觉___要刷牙。", answer: "以前" },
          { sentence: "毕业___他去找工作了。", answer: "以后" },
          { sentence: "来这里___，你住在哪儿？", answer: "以前" },
        ]
      }
    ],
    proverb: {
      hanzi: "五十步笑百步",
      pinyin: "Wǔshí bù xiào bǎi bù",
      meaning: "Chó chê mèo lắm lông (Lươn ngắn còn chê chạch dài, Thòn bơn méo miệng chê trai lệch mồm.)",
      explanation: "Người chỉ khác nhau ít mà lại chê bai nhau, tự cho mình hơn người — thực ra cả hai đều như nhau."
    }
  },
  {
    id: 5,
    title: "我最近越来越胖了。",
    titleVi: "Dạo này em ngày càng béo ra.",
    vocab: [
      { id: "5-1", hanzi: "发烧", pinyin: "fāshāo", type: "đgt", meaning: "sốt", radical: "又", radicalMeaning: "lại - phát ra", totalStrokes: 5, example: "孩子发烧了，要去医院。", exampleVi: "Đứa bé bị sốt, phải đi bệnh viện." },
      { id: "5-2", hanzi: "为", pinyin: "wèi", type: "giới", meaning: "vì, để" },
      { id: "5-3", hanzi: "照顾", pinyin: "zhàogù", type: "đgt", meaning: "chăm sóc", radical: "火", radicalMeaning: "lửa - chiếu sáng", totalStrokes: 13, example: "妈妈照顾生病的孩子。", exampleVi: "Mẹ chăm sóc đứa bé bị bệnh." },
      { id: "5-4", hanzi: "用", pinyin: "yòng", type: "đgt", meaning: "dùng", radical: "用", radicalMeaning: "dùng - sử dụng", totalStrokes: 5 },
      { id: "5-5", hanzi: "感冒", pinyin: "gǎnmào", type: "đgt/dt", meaning: "cảm cúm", radical: "心", radicalMeaning: "tâm - cảm xúc", totalStrokes: 13, example: "换季节容易感冒。", exampleVi: "Đổi mùa dễ bị cảm cúm." },
      { id: "5-6", hanzi: "季节", pinyin: "jìjié", type: "dt", meaning: "mùa, thời tiết", radical: "禾", radicalMeaning: "lúa - mùa vụ", totalStrokes: 8, example: "你最喜欢哪个季节？", exampleVi: "Bạn thích mùa nào nhất?" },
      { id: "5-7", hanzi: "当然", pinyin: "dāngrán", type: "phó", meaning: "đương nhiên, tất nhiên", radical: "田", radicalMeaning: "ruộng - đương thời", totalStrokes: 6, example: "当然可以，没问题。", exampleVi: "Đương nhiên được, không vấn đề." },
      { id: "5-8", hanzi: "夏(天)", pinyin: "xià(tiān)", type: "dt", meaning: "(mùa) hè", radical: "夊", radicalMeaning: "bước - mùa hè", totalStrokes: 10 },
      { id: "5-9", hanzi: "裙子", pinyin: "qúnzi", type: "dt", meaning: "váy", radical: "衣", radicalMeaning: "áo - váy", totalStrokes: 12, example: "她穿了一条红裙子。", exampleVi: "Cô ấy mặc một chiếc váy đỏ." },
      { id: "5-10", hanzi: "最近", pinyin: "zuìjìn", type: "dt", meaning: "gần đây, dạo này", radical: "日", radicalMeaning: "mặt trời - nhất/tột cùng", totalStrokes: 12 },
      { id: "5-11", hanzi: "越", pinyin: "yuè", type: "phó", meaning: "càng", radical: "走", radicalMeaning: "đi - vượt/càng", totalStrokes: 12, example: "天气越来越热了。", exampleVi: "Thời tiết ngày càng nóng hơn." },
      { id: "5-12", hanzi: "张", pinyin: "zhāng", type: "riêng", meaning: "Trương (họ)" },
    ],
    dialogues: [
      {
        title: "在医院 — Ở bệnh viện",
        lines: [
          { speaker: "医生", text: "你哪儿不舒服？" },
          { speaker: "病人", text: "我发烧了，而且感冒了。" },
          { speaker: "医生", text: "最近换季节，很多人感冒，当然要注意。" },
          { speaker: "病人", text: "我用什么药？" },
          { speaker: "医生", text: "我给你开点儿药，要多休息，多喝水。" },
        ]
      },
      {
        title: "关心朋友 — Quan tâm bạn bè",
        lines: [
          { speaker: "小美", text: "你怎么了？脸色不好看。" },
          { speaker: "小刚", text: "我感冒了，发烧了。" },
          { speaker: "小美", text: "那要好好休息，我来照顾你吧。" },
          { speaker: "小刚", text: "谢谢你，不用了，我自己能照顾自己。" },
          { speaker: "小美", text: "当然需要人照顾，我去给你买点儿东西吃。" },
        ]
      },
      {
        title: "谈减肥 — Nói về giảm cân",
        lines: [
          { speaker: "小丽", text: "我最近越来越胖了。" },
          { speaker: "小美", text: "为什么？你不是一直在运动吗？" },
          { speaker: "小丽", text: "运动是运动，但是吃得太多了。" },
          { speaker: "小美", text: "那要少吃，多运动，别穿那条裙子了。" },
          { speaker: "小丽", text: "越想越着急，真不知道怎么办。" },
        ]
      },
      {
        title: "夏天的烦恼 — Nỗi lo mùa hè",
        lines: [
          { speaker: "张老师", text: "夏天越来越热了，大家要注意身体。" },
          { speaker: "同学", text: "是啊，天气越热，越想吃冰淇淋。" },
          { speaker: "张老师", text: "当然可以，不过也要注意健康。" },
          { speaker: "同学", text: "好的，谢谢老师的关心。" },
        ]
      },
    ],
    reading: {
      text: "小丽最近越来越胖了，她很担心。她的朋友小美说，要少吃多运动，当然还要注意季节变化，不要感冒。小丽决定每天早上跑步，少吃甜食，为了健康而努力。她还去医院检查了一下，医生说她很健康，只是需要多注意饮食就好了。",
      pinyin: "Xiǎo Lì zuìjìn yuè lái yuè pàng le, tā hěn dānxīn.",
      meaning: "Dạo này Tiểu Lệ ngày càng béo ra, cô ấy rất lo lắng. Bạn cô ấy là Tiểu Mỹ nói phải ăn ít, tập thể dục nhiều."
    },
    grammar: [
      {
        title: '"了"表示变化 — Trợ từ 了 chỉ sự thay đổi',
        explanation: '"了" đặt ở cuối câu để diễn tả sự thay đổi về trạng thái.',
        examples: [
          { zh: "天气热了。", vi: "Thời tiết nóng rồi." },
          { zh: "她越来越胖了。", vi: "Cô ấy ngày càng béo ra rồi." },
          { zh: "他会说汉语了。", vi: "Anh ấy biết nói tiếng Trung rồi." },
        ],
        fillInBlank: [
          { sentence: "秋天来___，天气凉了。", answer: "了" },
          { sentence: "他长大___，能照顾自己了。", answer: "了" },
          { sentence: "我学会游泳___。", answer: "了" },
        ]
      },
      {
        title: "越来越 — Ngày càng, càng ngày càng",
        explanation: '"越来越 + 形容词/动词" diễn tả mức độ tăng dần theo thời gian.',
        examples: [
          { zh: "天气越来越冷了。", vi: "Thời tiết ngày càng lạnh." },
          { zh: "我越来越喜欢学汉语了。", vi: "Tôi ngày càng thích học tiếng Trung." },
          { zh: "他的汉语越来越好了。", vi: "Tiếng Trung của anh ấy ngày càng tốt hơn." },
        ],
        fillInBlank: [
          { sentence: "孩子______高了。", answer: "越来越" },
          { sentence: "她的歌唱得______好了。", answer: "越来越" },
          { sentence: "这里的东西______贵了。", answer: "越来越" },
        ]
      },
      {
        title: "越A越B — Càng A càng B",
        explanation: '"越A越B" diễn tả A tăng thì B cũng tăng theo.',
        examples: [
          { zh: "越想越着急。", vi: "Càng nghĩ càng lo." },
          { zh: "越跑越累。", vi: "Càng chạy càng mệt." },
          { zh: "天气越冷，越想吃火锅。", vi: "Thời tiết càng lạnh càng muốn ăn lẩu." },
        ],
        fillInBlank: [
          { sentence: "这本书___看___有意思。", answer: "越...越" },
          { sentence: "他的汉语___学___好。", answer: "越...越" },
          { sentence: "雨___下___大。", answer: "越...越" },
        ]
      }
    ],
    proverb: {
      hanzi: "药到病除",
      pinyin: "Yào dào bìng chú",
      meaning: "Thuốc uống vào hết bệnh ngay",
      explanation: "Ý nghĩa: Thuốc rất hiệu quả, uống vào là khỏi bệnh ngay."
    }
  },
  {
    id: 6,
    title: "怎么突然找不到了？",
    titleVi: "Sao bỗng dưng lại không tìm thấy?",
    vocab: [
      { id: "6-1", hanzi: "眼镜", pinyin: "yǎnjìng", type: "dt", meaning: "kính mắt", radical: "目", radicalMeaning: "mắt - mắt nhìn", totalStrokes: 11, example: "我的眼镜找不到了。", exampleVi: "Tôi không tìm thấy kính mắt." },
      { id: "6-2", hanzi: "突然", pinyin: "tūrán", type: "phó", meaning: "đột nhiên, bỗng nhiên", radical: "穴", radicalMeaning: "hang - đột ngột", totalStrokes: 9, example: "他突然走进来了。", exampleVi: "Anh ấy đột nhiên đi vào." },
      { id: "6-3", hanzi: "离开", pinyin: "líkāi", type: "đgt", meaning: "rời đi", radical: "隹", radicalMeaning: "chim - rời đi", totalStrokes: 11 },
      { id: "6-4", hanzi: "清楚", pinyin: "qīngchǔ", type: "tt", meaning: "rõ ràng", radical: "水", radicalMeaning: "nước - trong sạch", totalStrokes: 11, example: "请说清楚一点儿。", exampleVi: "Xin nói rõ hơn một chút." },
      { id: "6-5", hanzi: "刚才", pinyin: "gāngcái", type: "dt", meaning: "vừa rồi, lúc nãy", radical: "刀", radicalMeaning: "dao - cứng/vừa mới", totalStrokes: 6, example: "刚才他还在这里。", exampleVi: "Lúc nãy anh ấy vẫn còn ở đây." },
      { id: "6-6", hanzi: "帮忙", pinyin: "bāngmáng", type: "đgt", meaning: "giúp đỡ", radical: "巾", radicalMeaning: "vải - giúp đỡ", totalStrokes: 9, example: "你能帮我一下吗？", exampleVi: "Bạn có thể giúp tôi không?" },
      { id: "6-7", hanzi: "特别", pinyin: "tèbié", type: "phó", meaning: "đặc biệt, rất", radical: "牛", radicalMeaning: "bò - đặc biệt", totalStrokes: 10, example: "这道菜特别好吃。", exampleVi: "Món này đặc biệt ngon." },
      { id: "6-8", hanzi: "讲", pinyin: "jiǎng", type: "đgt", meaning: "kể, nói", radical: "讠", radicalMeaning: "lời nói - nói/giảng", totalStrokes: 6 },
      { id: "6-9", hanzi: "明白", pinyin: "míngbái", type: "đgt", meaning: "hiểu", radical: "日", radicalMeaning: "mặt trời - sáng/thông minh", totalStrokes: 8, example: "你明白我的意思吗？", exampleVi: "Bạn có hiểu ý tôi không?" },
      { id: "6-10", hanzi: "锻炼", pinyin: "duànliàn", type: "đgt", meaning: "luyện tập, rèn luyện", radical: "钅", radicalMeaning: "kim loại - rèn luyện", totalStrokes: 16, example: "每天锻炼对身体好。", exampleVi: "Luyện tập mỗi ngày tốt cho sức khỏe." },
      { id: "6-11", hanzi: "音乐", pinyin: "yīnyuè", type: "dt", meaning: "âm nhạc", radical: "音", radicalMeaning: "âm - âm thanh/âm nhạc", totalStrokes: 9, example: "她很喜欢听音乐。", exampleVi: "Cô ấy rất thích nghe nhạc." },
      { id: "6-12", hanzi: "公园", pinyin: "gōngyuán", type: "dt", meaning: "công viên", radical: "八", radicalMeaning: "tám - công bằng", totalStrokes: 4, example: "我们去公园散步吧。", exampleVi: "Chúng ta đi dạo ở công viên nhé." },
      { id: "6-13", hanzi: "聊(天)", pinyin: "liáo(tiān)", type: "đgt", meaning: "tán gẫu, nói chuyện", radical: "耳", radicalMeaning: "tai - tán gẫu", totalStrokes: 11 },
      { id: "6-14", hanzi: "睡着", pinyin: "shuìzháo", type: "đgt", meaning: "ngủ thiếp đi" },
      { id: "6-15", hanzi: "更", pinyin: "gèng", type: "phó", meaning: "càng, hơn nữa", radical: "曰", radicalMeaning: "nói - hơn/càng", totalStrokes: 7 },
    ],
    dialogues: [
      {
        title: "找眼镜 — Tìm kính mắt",
        lines: [
          { speaker: "妈妈", text: "我的眼镜怎么突然找不到了？" },
          { speaker: "儿子", text: "刚才还在桌子上，你看清楚了吗？" },
          { speaker: "妈妈", text: "我看得不清楚，帮我找找。" },
          { speaker: "儿子", text: "找到了！在沙发下面呢。" },
          { speaker: "妈妈", text: "谢谢，我都没看见。" },
        ]
      },
      {
        title: "上课 — Học trên lớp",
        lines: [
          { speaker: "老师", text: "今天讲的内容，你们明白了吗？" },
          { speaker: "同学A", text: "我特别不明白这道题，能再讲一次吗？" },
          { speaker: "老师", text: "好，我再讲一次，你们听清楚了。" },
          { speaker: "同学B", text: "这次明白了，谢谢老师。" },
        ]
      },
      {
        title: "在公园锻炼 — Luyện tập ở công viên",
        lines: [
          { speaker: "老人A", text: "你每天都来公园锻炼吗？" },
          { speaker: "老人B", text: "是的，我特别喜欢在这里听音乐、锻炼身体。" },
          { speaker: "老人A", text: "锻炼以后感觉更好了，对吧？" },
          { speaker: "老人B", text: "当然，而且还能跟朋友聊天儿，很开心。" },
        ]
      },
      {
        title: "迷路了 — Bị lạc đường",
        lines: [
          { speaker: "游客", text: "请问，这附近有没有地铁站？" },
          { speaker: "市民", text: "有，就在前面，你看见那个大楼了吗？" },
          { speaker: "游客", text: "我看不清楚，能帮我看看地图吗？" },
          { speaker: "市民", text: "当然，你跟我走，我带你过去。" },
        ]
      },
    ],
    reading: {
      text: "今天妈妈突然找不到她的眼镜了，刚才还在桌子上，怎么就没了呢？儿子帮她找了一下，发现在沙发下面。妈妈说没有眼镜什么都看不清楚，特别不方便。下午，妈妈去公园锻炼身体，听听音乐，跟朋友聊聊天，感觉好多了。",
      pinyin: "Jīntiān māma tūrán zhǎo bù dào tā de yǎnjìng le, gāngcái hái zài zhuōzi shàng, zěnme jiù méi le ne?",
      meaning: "Hôm nay mẹ đột nhiên không tìm thấy kính mắt của mình, lúc nãy còn ở trên bàn, sao lại mất rồi?"
    },
    grammar: [
      {
        title: "可能补语：动词得/不 + 可能补语 — Bổ ngữ chỉ khả năng",
        explanation: "Cấu trúc: Động từ + 得/不 + bổ ngữ chỉ khả năng. Diễn tả khả năng thực hiện hay không.",
        examples: [
          { zh: "这本书太厚了，我今天看不完。", vi: "Cuốn sách này quá dày, hôm nay tôi không đọc hết được." },
          { zh: "你说得太快了，我听不清楚。", vi: "Bạn nói quá nhanh, tôi không nghe rõ được." },
          { zh: "这个字太小，我看不清楚。", vi: "Chữ này quá nhỏ, tôi không nhìn rõ được." },
        ],
        fillInBlank: [
          { sentence: "这个问题太难了，我回答___。", answer: "不了/不上来" },
          { sentence: "他说话太快，我听___清楚。", answer: "不" },
          { sentence: "这里太远，我走___到。", answer: "不" },
        ]
      },
      {
        title: '"呢"询问处所 — "名词 + 呢" hỏi vị trí',
        explanation: '"名词 + 呢" dùng để hỏi một người hoặc vật đang ở đâu.',
        examples: [
          { zh: "我的眼镜呢？", vi: "Kính mắt của tôi đâu rồi?" },
          { zh: "小刚呢？他去哪儿了？", vi: "Tiểu Cương đâu rồi? Anh ấy đi đâu vậy?" },
          { zh: "你的书包呢？", vi: "Cặp sách của bạn đâu?" },
        ],
        fillInBlank: [
          { sentence: "你的钱包___？", answer: "呢" },
          { sentence: "妈妈___？她出去了吗？", answer: "呢" },
          { sentence: "那本书___？找到了吗？", answer: "呢" },
        ]
      },
      {
        title: '"刚"和"刚才" — 刚 và 刚才',
        explanation: '"刚" diễn tả hành động vừa mới xảy ra. "刚才" chỉ thời điểm vừa rồi (danh từ chỉ thời gian).',
        examples: [
          { zh: "他刚走。", vi: "Anh ấy vừa đi." },
          { zh: "刚才他在这里。", vi: "Lúc nãy anh ấy ở đây." },
          { zh: "我刚吃完饭。", vi: "Tôi vừa ăn xong." },
        ],
        fillInBlank: [
          { sentence: "他___来了，你去找他吧。", answer: "刚" },
          { sentence: "___还在这里，怎么就不见了？", answer: "刚才" },
          { sentence: "我___看了那部电影。", answer: "刚" },
        ]
      }
    ],
    proverb: {
      hanzi: "万事开头难",
      pinyin: "Wànshì kāitóu nán",
      meaning: "Vạn sự khởi đầu nan",
      explanation: "Mọi việc đều khó ở bước đầu, một khi đã bắt đầu được thì các bước sau sẽ dễ dàng hơn."
    }
  },
  {
    id: 7,
    title: "我跟她都认识五年了。",
    titleVi: "Tôi và cô ấy quen nhau được năm năm rồi.",
    vocab: [
      { id: "7-1", hanzi: "同事", pinyin: "tóngshì", type: "dt", meaning: "đồng nghiệp", radical: "口", radicalMeaning: "miệng - cùng nhau", totalStrokes: 6, example: "她是我的同事。", exampleVi: "Cô ấy là đồng nghiệp của tôi." },
      { id: "7-2", hanzi: "以前", pinyin: "yǐqián", type: "dt", meaning: "trước đây", radical: "人", radicalMeaning: "người - dùng để/trước", totalStrokes: 4 },
      { id: "7-3", hanzi: "银行", pinyin: "yínháng", type: "dt", meaning: "ngân hàng", radical: "钅", radicalMeaning: "kim loại - bạc", totalStrokes: 14, example: "我去银行取钱。", exampleVi: "Tôi đến ngân hàng rút tiền." },
      { id: "7-4", hanzi: "久", pinyin: "jiǔ", type: "tt", meaning: "lâu" },
      { id: "7-5", hanzi: "感兴趣", pinyin: "gǎn xìngqù", type: "đgt", meaning: "cảm thấy hứng thú", radical: "心", radicalMeaning: "tâm - cảm xúc", totalStrokes: 13, example: "他对汉语很感兴趣。", exampleVi: "Anh ấy rất hứng thú với tiếng Trung." },
      { id: "7-6", hanzi: "结婚", pinyin: "jiéhūn", type: "đgt", meaning: "kết hôn", radical: "纟", radicalMeaning: "tơ - kết nối", totalStrokes: 9, example: "他们去年结婚了。", exampleVi: "Họ kết hôn năm ngoái." },
      { id: "7-7", hanzi: "欢迎", pinyin: "huānyíng", type: "đgt", meaning: "hoan nghênh, chào mừng", radical: "欠", radicalMeaning: "thiếu - vui mừng", totalStrokes: 6, example: "欢迎来中国！", exampleVi: "Chào mừng đến Trung Quốc!" },
      { id: "7-8", hanzi: "迟到", pinyin: "chídào", type: "đgt", meaning: "đến trễ, muộn", radical: "辶", radicalMeaning: "đi - chậm trễ", totalStrokes: 7, example: "对不起，我迟到了。", exampleVi: "Xin lỗi, tôi đến muộn." },
      { id: "7-9", hanzi: "半", pinyin: "bàn", type: "số", meaning: "một nửa, rưỡi", radical: "十", radicalMeaning: "mười - một nửa", totalStrokes: 5 },
      { id: "7-10", hanzi: "接", pinyin: "jiē", type: "đgt", meaning: "đón, nhận", radical: "手", radicalMeaning: "tay - đón nhận", totalStrokes: 11, example: "我去机场接朋友。", exampleVi: "Tôi đến sân bay đón bạn." },
      { id: "7-11", hanzi: "刻", pinyin: "kè", type: "lượng", meaning: "khắc (15 phút)", radical: "刀", radicalMeaning: "dao - khắc/khắc giờ", totalStrokes: 8 },
      { id: "7-12", hanzi: "差", pinyin: "chà", type: "tt", meaning: "thiếu, kém", radical: "工", radicalMeaning: "công - thiếu/sai", totalStrokes: 9 },
    ],
    dialogues: [
      {
        title: "介绍认识时间 — Giới thiệu thời gian quen biết",
        lines: [
          { speaker: "小丽", text: "你认识她多久了？" },
          { speaker: "小刚", text: "我跟她都认识五年了，以前是同事。" },
          { speaker: "小丽", text: "五年啊，那你们感情一定很好。" },
          { speaker: "小刚", text: "是的，她去年结婚了，我们还是好朋友。" },
        ]
      },
      {
        title: "在银行 — Ở ngân hàng",
        lines: [
          { speaker: "职员", text: "您好，欢迎来我们银行。" },
          { speaker: "顾客", text: "我想换一些外币，现在可以吗？" },
          { speaker: "职员", text: "当然可以，请问您要换多少？" },
          { speaker: "顾客", text: "一千美元，现在汇率是多少？" },
        ]
      },
      {
        title: "约好时间 — Hẹn giờ",
        lines: [
          { speaker: "小刚", text: "我们几点在哪儿见面？" },
          { speaker: "小美", text: "下午三点半，在地铁站门口。" },
          { speaker: "小刚", text: "好的，我不会迟到的。" },
          { speaker: "小美", text: "差一刻三点我就出发了，三点半准时到。" },
        ]
      },
      {
        title: "接朋友 — Đón bạn",
        lines: [
          { speaker: "小丽", text: "你去机场接谁啊？" },
          { speaker: "小刚", text: "接我一个老同学，我们认识很久了。" },
          { speaker: "小丽", text: "他是以前的同事吗？" },
          { speaker: "小刚", text: "不是，是大学同学，毕业以后就没见过了。" },
        ]
      },
    ],
    reading: {
      text: "小刚和李静是大学同学，他们认识快十年了。毕业以后，小刚在银行工作，李静在一家公司做秘书。他们虽然不是同事了，但是一直保持联系。去年李静结婚了，小刚去参加了她的婚礼。今天李静从外地回来，小刚去机场接她，他们已经差不多两年没见了。",
      pinyin: "Xiǎo Gāng hé Lǐ Jìng shì dàxué tóngxué, tāmen rènshi kuài shí nián le.",
      meaning: "Tiểu Cương và Lý Tĩnh là bạn đại học, họ quen nhau gần mười năm rồi."
    },
    grammar: [
      {
        title: "时段的表达 — Cách diễn tả khoảng thời gian",
        explanation: "Thời gian kéo dài đặt sau động từ hoặc sau 了. Ví dụ: 学了三年、等了两个小时。",
        examples: [
          { zh: "我学汉语学了三年了。", vi: "Tôi học tiếng Trung được ba năm rồi." },
          { zh: "他工作了五年了。", vi: "Anh ấy làm việc được năm năm rồi." },
          { zh: "我们等了半个小时。", vi: "Chúng tôi đợi nửa tiếng đồng hồ." },
        ],
        fillInBlank: [
          { sentence: "我在这里住了___年了。", answer: "三/两" },
          { sentence: "他学钢琴学了___了。", answer: "五年" },
          { sentence: "我们认识___了。", answer: "很久" },
        ]
      },
      {
        title: "表达兴趣 — Cách diễn tả sự hứng thú",
        explanation: '"对……感兴趣" biểu thị hứng thú với điều gì đó.',
        examples: [
          { zh: "他对音乐很感兴趣。", vi: "Anh ấy rất hứng thú với âm nhạc." },
          { zh: "我对学汉语特别感兴趣。", vi: "Tôi đặc biệt hứng thú với việc học tiếng Trung." },
          { zh: "她对历史不太感兴趣。", vi: "Cô ấy không mấy hứng thú với lịch sử." },
        ],
        fillInBlank: [
          { sentence: "他___体育___感兴趣。", answer: "对...很" },
          { sentence: "我___这个问题不___兴趣。", answer: "对...感" },
          { sentence: "她___什么最感兴趣？", answer: "对" },
        ]
      },
      {
        title: '用"半""刻""差"表示时间',
        explanation: '半 = rưỡi (30 phút), 刻 = khắc (15 phút), 差 = thiếu (trước giờ tròn).',
        examples: [
          { zh: "现在是两点半。", vi: "Bây giờ là hai giờ rưỡi." },
          { zh: "差一刻三点。", vi: "Còn một khắc nữa là ba giờ (= 2 giờ 45)." },
          { zh: "三点一刻。", vi: "Ba giờ mười lăm (3:15)." },
        ],
        fillInBlank: [
          { sentence: "现在是八点___，快上课了。", answer: "半" },
          { sentence: "___五分十二点，快点儿走。", answer: "差" },
          { sentence: "我们约好了四点___，三点四十五。", answer: "差一刻" },
        ]
      }
    ],
    proverb: {
      hanzi: "一步走错步步错",
      pinyin: "Yī bù zǒu cuò bù bù cuò",
      meaning: "Đi sai một bước, các bước kế tiếp đều sai",
      explanation: "Ý nghĩa: Một lần sai lầm có thể dẫn đến nhiều hậu quả liên tiếp."
    }
  },
  {
    id: 8,
    title: "你去哪儿我就去哪儿。",
    titleVi: "Em đi đâu thì anh đi đến đó.",
    vocab: [
      { id: "8-1", hanzi: "又", pinyin: "yòu", type: "phó", meaning: "lại, thêm nữa", radical: "又", radicalMeaning: "lại - lại một lần nữa", totalStrokes: 2 },
      { id: "8-2", hanzi: "满意", pinyin: "mǎnyì", type: "đgt", meaning: "hài lòng, thỏa mãn", radical: "水", radicalMeaning: "nước - đầy tràn", totalStrokes: 13, example: "我对这个结果很满意。", exampleVi: "Tôi rất hài lòng với kết quả này." },
      { id: "8-3", hanzi: "电梯", pinyin: "diàntī", type: "dt", meaning: "thang máy", radical: "田", radicalMeaning: "ruộng - điện", totalStrokes: 5, example: "我们坐电梯上去吧。", exampleVi: "Chúng ta đi thang máy lên nhé." },
      { id: "8-4", hanzi: "层", pinyin: "céng", type: "lượng", meaning: "tầng, lớp", radical: "尸", radicalMeaning: "thân - tầng lớp", totalStrokes: 7 },
      { id: "8-5", hanzi: "富翁", pinyin: "fùwēng", type: "dt", meaning: "đại gia, người giàu" },
      { id: "8-6", hanzi: "熊猫", pinyin: "xióngmāo", type: "dt", meaning: "gấu trúc", radical: "火", radicalMeaning: "lửa - gấu", totalStrokes: 14, example: "我很喜欢熊猫。", exampleVi: "Tôi rất thích gấu trúc." },
      { id: "8-7", hanzi: "见面", pinyin: "jiànmiàn", type: "đgt", meaning: "gặp mặt", radical: "见", radicalMeaning: "thấy - nhìn thấy", totalStrokes: 4, example: "我们明天在哪里见面？", exampleVi: "Ngày mai chúng ta gặp nhau ở đâu?" },
      { id: "8-8", hanzi: "安静", pinyin: "ānjìng", type: "tt", meaning: "yên tĩnh", radical: "宀", radicalMeaning: "mái nhà - an toàn", totalStrokes: 6, example: "图书馆要保持安静。", exampleVi: "Thư viện phải giữ yên tĩnh." },
      { id: "8-9", hanzi: "可乐", pinyin: "kělè", type: "dt", meaning: "Coca-cola", radical: "口", radicalMeaning: "miệng - có thể", totalStrokes: 5 },
      { id: "8-10", hanzi: "一会儿", pinyin: "yīhuìr", type: "dt", meaning: "một lúc" },
      { id: "8-11", hanzi: "马上", pinyin: "mǎshàng", type: "phó", meaning: "ngay lập tức", example: "我马上就来！", exampleVi: "Tôi đến ngay!" },
      { id: "8-12", hanzi: "洗手间", pinyin: "xǐshǒujiān", type: "dt", meaning: "nhà vệ sinh", radical: "水", radicalMeaning: "nước - rửa", totalStrokes: 9 },
      { id: "8-13", hanzi: "老", pinyin: "lǎo", type: "phó", meaning: "luôn luôn (biểu thị bực bội)", radical: "老", radicalMeaning: "già - già cả/luôn luôn", totalStrokes: 6 },
      { id: "8-14", hanzi: "几乎", pinyin: "jīhū", type: "phó", meaning: "hầu như, gần như", radical: "几", radicalMeaning: "bàn - mấy/vài/gần như", totalStrokes: 2 },
      { id: "8-15", hanzi: "变化", pinyin: "biànhuà", type: "dt/đgt", meaning: "sự thay đổi; thay đổi", radical: "攴", radicalMeaning: "tay - thay đổi", totalStrokes: 8 },
      { id: "8-16", hanzi: "健康", pinyin: "jiànkāng", type: "tt/dt", meaning: "khỏe mạnh; sức khỏe", radical: "人", radicalMeaning: "người - khỏe mạnh", totalStrokes: 10, example: "健康是最重要的。", exampleVi: "Sức khỏe là quan trọng nhất." },
      { id: "8-17", hanzi: "重要", pinyin: "zhòngyào", type: "tt", meaning: "quan trọng", radical: "里", radicalMeaning: "làng - nặng/quan trọng", totalStrokes: 9, example: "这件事很重要。", exampleVi: "Việc này rất quan trọng." },
    ],
    dialogues: [
      {
        title: "约好去哪里 — Hẹn đến đâu",
        lines: [
          { speaker: "小美", text: "你去哪儿我就去哪儿，你决定吧。" },
          { speaker: "小刚", text: "那我们去动物园看熊猫吧。" },
          { speaker: "小美", text: "又去动物园，上次不是去了吗？" },
          { speaker: "小刚", text: "我儿子最喜欢看熊猫，他想再去一次。" },
        ]
      },
      {
        title: "在商场 — Ở trung tâm thương mại",
        lines: [
          { speaker: "顾客", text: "请问，洗手间在哪里？" },
          { speaker: "服务员", text: "在二层，坐电梯上去就到了。" },
          { speaker: "顾客", text: "谢谢，我一会儿就回来。" },
          { speaker: "服务员", text: "好的，我在这里等您。" },
        ]
      },
      {
        title: "关于健康 — Về sức khỏe",
        lines: [
          { speaker: "医生", text: "健康是最重要的，你几乎天天喝可乐，对身体不好。" },
          { speaker: "病人", text: "我知道，但是老是改不了这个习惯。" },
          { speaker: "医生", text: "要做出改变，身体的变化会让你满意的。" },
          { speaker: "病人", text: "好的，我马上开始改变，少喝可乐。" },
        ]
      },
      {
        title: "见面 — Gặp mặt",
        lines: [
          { speaker: "小丽", text: "我们几点在哪里见面？" },
          { speaker: "小刚", text: "你去哪儿我就去哪儿，你定吧。" },
          { speaker: "小丽", text: "那就在那家安静的咖啡馆吧。" },
          { speaker: "小刚", text: "好，我马上出发，一会儿见！" },
        ]
      },
    ],
    reading: {
      text: "小刚几乎每周末都要出去，要么去公园，要么去商场。这个周末他的儿子想去动物园看熊猫，小刚满意地答应了。他们坐电梯上了三层，在那里看见了大熊猫。儿子非常开心，一直不想走。小刚觉得孩子的健康和快乐是最重要的，带孩子出去玩儿是很好的变化。",
      pinyin: "Xiǎo Gāng jīhū měi zhōumò dōu yào chūqù, yào me qù gōngyuán, yào me qù shāngchǎng.",
      meaning: "Tiểu Cương hầu như mỗi cuối tuần đều đi ra ngoài, hoặc đi công viên, hoặc đi trung tâm thương mại."
    },
    grammar: [
      {
        title: '"又"和"再" — Phân biệt 又 và 再',
        explanation: '"又" dùng cho hành động đã lặp lại (quá khứ). "再" dùng cho hành động sẽ lặp lại (tương lai/giả định).',
        examples: [
          { zh: "他又来了。", vi: "Anh ấy lại đến rồi." },
          { zh: "请你再说一遍。", vi: "Nhờ bạn nói lại một lần nữa." },
          { zh: "你怎么又迟到了？", vi: "Sao bạn lại đến muộn nữa vậy?" },
        ],
        fillInBlank: [
          { sentence: "他昨天___来了，今天___会来吗？", answer: "又...再" },
          { sentence: "这道题太难了，请老师___讲一遍。", answer: "再" },
          { sentence: "她___哭了，怎么回事？", answer: "又" },
        ]
      },
      {
        title: "疑问代词活用1 — Đại từ nghi vấn dùng linh hoạt (1)",
        explanation: "Đại từ nghi vấn (谁、什么、哪儿) dùng trong câu ghép để diễn tả tất cả mọi trường hợp.",
        examples: [
          { zh: "你去哪儿，我就去哪儿。", vi: "Bạn đi đâu thì tôi đi đó." },
          { zh: "你喜欢什么，就买什么。", vi: "Bạn thích gì thì mua cái đó." },
          { zh: "谁先到，谁就先发言。", vi: "Ai đến trước thì phát biểu trước." },
        ],
        fillInBlank: [
          { sentence: "你想吃___，我就做___。", answer: "什么...什么" },
          { sentence: "你想去___，我就陪你去___。", answer: "哪儿...哪儿" },
          { sentence: "___来得早，___就先进去。", answer: "谁...谁" },
        ]
      },
      {
        title: "几乎 — Hầu như, gần như",
        explanation: '"几乎" biểu thị mức độ gần đến tuyệt đối.',
        examples: [
          { zh: "他几乎天天运动。", vi: "Anh ấy hầu như ngày nào cũng tập thể dục." },
          { zh: "这道题几乎没人做对。", vi: "Bài tập này hầu như không ai làm đúng." },
          { zh: "我几乎把他的名字忘了。", vi: "Tôi gần như quên tên anh ấy rồi." },
        ],
        fillInBlank: [
          { sentence: "她___每天都喝一杯咖啡。", answer: "几乎" },
          { sentence: "这里___没有人知道这件事。", answer: "几乎" },
          { sentence: "他___忘了我们的约定。", answer: "几乎" },
        ]
      }
    ],
    proverb: {
      hanzi: "站得高，看得远",
      pinyin: "Zhàn dé gāo, kàn dé yuǎn",
      meaning: "Đứng càng cao, nhìn càng xa",
      explanation: "Ý nghĩa: Càng có tầm nhìn rộng, càng có thể nhìn xa trông rộng."
    }
  },
  {
    id: 9,
    title: "她的汉语说得跟中国人一样好。",
    titleVi: "Cô ấy nói tiếng Trung Quốc hay như người Trung Quốc vậy.",
    vocab: [
      { id: "9-1", hanzi: "中文", pinyin: "zhōngwén", type: "dt", meaning: "tiếng Trung (văn viết)", radical: "口", radicalMeaning: "miệng - ở giữa", totalStrokes: 4 },
      { id: "9-2", hanzi: "班", pinyin: "bān", type: "dt", meaning: "lớp học", radical: "刀", radicalMeaning: "dao - lớp học", totalStrokes: 10 },
      { id: "9-3", hanzi: "一样", pinyin: "yīyàng", type: "tt", meaning: "giống nhau, như nhau", radical: "木", radicalMeaning: "cây - hình dạng", totalStrokes: 10 },
      { id: "9-4", hanzi: "最后", pinyin: "zuìhòu", type: "dt", meaning: "cuối cùng", radical: "日", radicalMeaning: "mặt trời - nhất/tột cùng", totalStrokes: 12 },
      { id: "9-5", hanzi: "放心", pinyin: "fàngxīn", type: "đgt", meaning: "yên tâm", radical: "攴", radicalMeaning: "tay - buông ra", totalStrokes: 8 },
      { id: "9-6", hanzi: "一定", pinyin: "yīdìng", type: "phó", meaning: "nhất định, chắc chắn", radical: "宀", radicalMeaning: "mái nhà - xác định", totalStrokes: 8 },
      { id: "9-7", hanzi: "担心", pinyin: "dānxīn", type: "đgt", meaning: "lo lắng, lo ngại", radical: "手", radicalMeaning: "tay - lo lắng/gánh", totalStrokes: 8 },
      { id: "9-8", hanzi: "比较", pinyin: "bǐjiào", type: "phó", meaning: "tương đối, khá", radical: "比", radicalMeaning: "so sánh - so sánh", totalStrokes: 4 },
      { id: "9-9", hanzi: "了解", pinyin: "liǎojiě", type: "đgt", meaning: "hiểu rõ, tìm hiểu", radical: "亅", radicalMeaning: "móc - hoàn thành", totalStrokes: 2 },
      { id: "9-10", hanzi: "先", pinyin: "xiān", type: "phó", meaning: "trước, trước tiên", radical: "儿", radicalMeaning: "người - trước tiên", totalStrokes: 6 },
      { id: "9-11", hanzi: "大山", pinyin: "Dà Shān", type: "riêng", meaning: "Đại Sơn (tên người)" },
      { id: "9-12", hanzi: "季静", pinyin: "Jì Jìng", type: "riêng", meaning: "Quý Tĩnh (tên người)", radical: "禾", radicalMeaning: "lúa - mùa vụ", totalStrokes: 8 },
    ],
    dialogues: [
      {
        title: "夸汉语好 — Khen tiếng Trung giỏi",
        lines: [
          { speaker: "老师", text: "大山的汉语说得跟中国人一样好。" },
          { speaker: "同学", text: "真的吗？他学了多久了？" },
          { speaker: "老师", text: "他学了三年，而且比较了解中国文化。" },
          { speaker: "同学", text: "难怪，我也要努力学习。" },
        ]
      },
      {
        title: "担心孩子 — Lo lắng cho con",
        lines: [
          { speaker: "妈妈", text: "孩子去北京学习，我很担心他。" },
          { speaker: "爸爸", text: "放心吧，他一定能照顾好自己的。" },
          { speaker: "妈妈", text: "他第一次一个人出去，我真的很担心。" },
          { speaker: "爸爸", text: "孩子要成长，你要相信他。" },
        ]
      },
      {
        title: "了解中国 — Tìm hiểu về Trung Quốc",
        lines: [
          { speaker: "季静", text: "你对中国了解多少？" },
          { speaker: "外国朋友", text: "我比较了解中国历史和文化。" },
          { speaker: "季静", text: "那你一定知道很多中国的名胜古迹。" },
          { speaker: "外国朋友", text: "是的，我最喜欢大山，希望以后能去爬。" },
        ]
      },
      {
        title: "鼓励学汉语 — Khuyến khích học tiếng Trung",
        lines: [
          { speaker: "老师", text: "你的汉语进步很快，继续努力！" },
          { speaker: "学生", text: "谢谢老师，但我觉得还差得远。" },
          { speaker: "老师", text: "你跟上个学期比较，已经好多了。" },
          { speaker: "学生", text: "我一定努力，争取说得跟中国人一样好。" },
        ]
      },
    ],
    reading: {
      text: "大山是班里汉语说得最好的学生。他学汉语已经三年了，说得跟中国人一样好。他不但了解中国语言，而且也比较了解中国文化和历史。老师说他一定能通过汉语考试，让他放心学习。大山说他最后的目标是能用汉语写文章，他一定会继续努力的。",
      pinyin: "Dà Shān shì bān lǐ hànyǔ shuō dé zuì hǎo de xuésheng.",
      meaning: "Đại Sơn là học sinh nói tiếng Trung tốt nhất trong lớp."
    },
    grammar: [
      {
        title: "越A越B — Cấu trúc: 越A越B",
        explanation: '"越A越B" = càng A càng B. Diễn tả hai tình trạng tỷ lệ thuận.',
        examples: [
          { zh: "他的汉语越学越好。", vi: "Tiếng Trung của anh ấy càng học càng tốt." },
          { zh: "天越来越冷。", vi: "Trời ngày càng lạnh." },
          { zh: "这部电影越看越有意思。", vi: "Bộ phim này càng xem càng hay." },
        ],
        fillInBlank: [
          { sentence: "这本书___读___有意思。", answer: "越...越" },
          { sentence: "朋友间的关系___来___好。", answer: "越...越" },
          { sentence: "外边的声音___来越大了。", answer: "越" },
        ]
      },
      {
        title: "比较句1：A跟B一样 — Câu so sánh (1): A跟B一样",
        explanation: "Cấu trúc so sánh (1): A 跟 B 一样 (+ tính từ)",
        examples: [
          { zh: "她的汉语说得跟中国人一样好。", vi: "Tiếng Trung của cô ấy nói giỏi như người Trung Quốc." },
          { zh: "这件衣服跟那件一样贵。", vi: "Cái áo này đắt như cái kia." },
          { zh: "你跟我一样高。", vi: "Bạn cao bằng tôi." },
        ],
        fillInBlank: [
          { sentence: "你___他___高。", answer: "跟...一样" },
          { sentence: "这道菜___那道菜___好吃。", answer: "跟...一样" },
          { sentence: "她唱歌唱得___专业歌手___好。", answer: "跟...一样" },
        ]
      },
      {
        title: "比较句2：A比B + 形容词 — Câu so sánh (2)",
        explanation: "Cấu trúc: A比B + tính từ. A比B + tính từ + 一点儿/一些/得多/多了",
        examples: [
          { zh: "他比我高一点儿。", vi: "Anh ấy cao hơn tôi một chút." },
          { zh: "今天比昨天冷多了。", vi: "Hôm nay lạnh hơn hôm qua nhiều." },
          { zh: "她的汉语比我好得多。", vi: "Tiếng Trung của cô ấy tốt hơn tôi nhiều." },
        ],
        fillInBlank: [
          { sentence: "这件衣服___那件___贵。", answer: "比...更" },
          { sentence: "哥哥___弟弟高___。", answer: "比...一点儿" },
          { sentence: "今天___昨天冷___了。", answer: "比...多" },
        ]
      }
    ],
    proverb: {
      hanzi: "三人行，必有我师",
      pinyin: "Sān rén xíng, bì yǒu wǒ shī",
      meaning: "Ba người cùng đi ắt có người là thầy ta",
      explanation: "Ý nghĩa: Trong bất kỳ nhóm người nào, đều có điều mình có thể học từ người khác."
    }
  },
  {
    id: 10,
    title: "数学比历史难多了。",
    titleVi: "Môn Toán khó hơn môn Lịch Sử nhiều.",
    vocab: [
      { id: "10-1", hanzi: "个子", pinyin: "gèzi", type: "dt", meaning: "vóc người, chiều cao", radical: "人", radicalMeaning: "người - cái/chiếc", totalStrokes: 3 },
      { id: "10-2", hanzi: "矮", pinyin: "ǎi", type: "tt", meaning: "lùn, thấp", radical: "矢", radicalMeaning: "tên bắn - thấp/lùn", totalStrokes: 13 },
      { id: "10-3", hanzi: "历史", pinyin: "lìshǐ", type: "dt", meaning: "lịch sử", radical: "厂", radicalMeaning: "vách - trải qua", totalStrokes: 4, example: "他很喜欢学历史。", exampleVi: "Anh ấy rất thích học lịch sử." },
      { id: "10-4", hanzi: "体育", pinyin: "tǐyù", type: "dt", meaning: "thể dục", radical: "人", radicalMeaning: "người - cơ thể", totalStrokes: 7, example: "学校每周有体育课。", exampleVi: "Trường học mỗi tuần có giờ thể dục." },
      { id: "10-5", hanzi: "数学", pinyin: "shùxué", type: "dt", meaning: "môn Toán", radical: "攴", radicalMeaning: "tay - số/đếm", totalStrokes: 13, example: "数学比历史难多了。", exampleVi: "Toán khó hơn lịch sử nhiều." },
      { id: "10-6", hanzi: "方便", pinyin: "fāngbiàn", type: "tt", meaning: "tiện lợi", radical: "方", radicalMeaning: "vuông - phương hướng", totalStrokes: 4, example: "住这里上班很方便。", exampleVi: "Ở đây đi làm rất tiện lợi." },
      { id: "10-7", hanzi: "自行车", pinyin: "zìxíngchē", type: "dt", meaning: "xe đạp", radical: "自", radicalMeaning: "tự - tự mình", totalStrokes: 6, example: "他每天骑自行车上班。", exampleVi: "Anh ấy mỗi ngày đạp xe đi làm." },
      { id: "10-8", hanzi: "骑", pinyin: "qí", type: "đgt", meaning: "cưỡi (xe đạp, ngựa)", radical: "马", radicalMeaning: "ngựa - cưỡi", totalStrokes: 11, example: "我会骑自行车。", exampleVi: "Tôi biết đi xe đạp." },
      { id: "10-9", hanzi: "回", pinyin: "huí", type: "đgt", meaning: "quay về", radical: "口", radicalMeaning: "miệng - quay lại", totalStrokes: 6 },
      { id: "10-10", hanzi: "换", pinyin: "huàn", type: "đgt", meaning: "đổi, thay", radical: "手", radicalMeaning: "tay - đổi/thay", totalStrokes: 12, example: "我想换一件衣服。", exampleVi: "Tôi muốn thay một chiếc áo." },
      { id: "10-11", hanzi: "地方", pinyin: "dìfāng", type: "dt", meaning: "địa điểm, nơi chốn", radical: "土", radicalMeaning: "đất - mặt đất", totalStrokes: 6 },
      { id: "10-12", hanzi: "中介", pinyin: "zhōngjiè", type: "dt", meaning: "trung gian, môi giới", radical: "口", radicalMeaning: "miệng - ở giữa", totalStrokes: 4 },
      { id: "10-13", hanzi: "主要", pinyin: "zhǔyào", type: "tt", meaning: "chủ yếu", radical: "、", radicalMeaning: "chấm - chủ/chính", totalStrokes: 5, example: "这里主要卖水果。", exampleVi: "Ở đây chủ yếu bán hoa quả." },
      { id: "10-14", hanzi: "环境", pinyin: "huánjìng", type: "dt", meaning: "môi trường", radical: "玉", radicalMeaning: "ngọc - vòng/môi trường", totalStrokes: 8, example: "这里的环境很好。", exampleVi: "Môi trường ở đây rất tốt." },
      { id: "10-15", hanzi: "附近", pinyin: "fùjìn", type: "dt", meaning: "gần đây, lân cận", radical: "阜", radicalMeaning: "gò đất - gần kề", totalStrokes: 8, example: "学校附近有很多餐厅。", exampleVi: "Gần trường có nhiều nhà hàng." },
    ],
    dialogues: [
      {
        title: "谈学习 — Nói về học tập",
        lines: [
          { speaker: "学生A", text: "你觉得数学和历史哪个难？" },
          { speaker: "学生B", text: "数学比历史难多了，历史只要记住就行。" },
          { speaker: "学生A", text: "我觉得体育比数学容易多了。" },
          { speaker: "学生B", text: "当然，运动比学习容易。" },
        ]
      },
      {
        title: "骑车还是坐车 — Đạp xe hay đi xe",
        lines: [
          { speaker: "同事A", text: "你每天怎么上班？" },
          { speaker: "同事B", text: "我骑自行车，比坐车方便多了。" },
          { speaker: "同事A", text: "不远吗？骑车不累吗？" },
          { speaker: "同事B", text: "就十分钟，而且还能锻炼身体。" },
        ]
      },
      {
        title: "找房子 — Tìm nhà",
        lines: [
          { speaker: "小刚", text: "你在哪里找到这个房子的？" },
          { speaker: "小丽", text: "通过中介找的，这附近环境很好。" },
          { speaker: "小刚", text: "这里比市中心方便多了，而且便宜。" },
          { speaker: "小丽", text: "主要是离学校近，接送孩子很方便。" },
        ]
      },
      {
        title: "比个子 — So chiều cao",
        lines: [
          { speaker: "小孩A", text: "我比你高，你比我矮。" },
          { speaker: "小孩B", text: "才高一点儿，有什么可骄傲的。" },
          { speaker: "妈妈", text: "你们两个差不多高，别争了。" },
          { speaker: "小孩A", text: "妈妈，他比我矮，是不是？" },
        ]
      },
    ],
    reading: {
      text: "小刚最近换了一个新的住所，在学校附近，环境很好。他觉得新家比以前方便多了，骑自行车去上班只需要十分钟。孩子上学也近，不需要坐很久的车。主要是环境好，空气新鲜，比市中心安静多了。他通过中介找到这个地方，价格也比市中心便宜很多。",
      pinyin: "Xiǎo Gāng zuìjìn huàn le yī gè xīn de zhùsuǒ, zài xuéxiào fùjìn, huánjìng hěn hǎo.",
      meaning: "Gần đây Tiểu Cương chuyển đến chỗ ở mới, gần trường học, môi trường rất tốt."
    },
    grammar: [
      {
        title: "比较句2：A比B + 形容词 + 一点儿/一些/得多/多了",
        explanation: "Mức độ hơn kém được biểu thị bằng 一点儿/一些 (hơn một chút) hoặc 得多/多了 (hơn nhiều).",
        examples: [
          { zh: "数学比历史难多了。", vi: "Toán khó hơn lịch sử nhiều." },
          { zh: "今天比昨天冷一点儿。", vi: "Hôm nay lạnh hơn hôm qua một chút." },
          { zh: "骑车比坐车方便得多。", vi: "Đạp xe tiện lợi hơn đi xe nhiều." },
        ],
        fillInBlank: [
          { sentence: "她___我高___。", answer: "比...一点儿" },
          { sentence: "这里___那里便宜___了。", answer: "比...多" },
          { sentence: "新家___旧家大___多。", answer: "比...得" },
        ]
      },
      {
        title: "概数的表达1 — Cách diễn tả số ước lượng (1)",
        explanation: "Dùng 两个 (hai hoặc ba) hoặc các số liền nhau để diễn tả số ước lượng.",
        examples: [
          { zh: "他来了两三次了。", vi: "Anh ấy đến hai ba lần rồi." },
          { zh: "我等了三四分钟。", vi: "Tôi đợi ba bốn phút." },
          { zh: "他大概四十五岁。", vi: "Anh ấy khoảng bốn mươi lăm tuổi." },
        ],
        fillInBlank: [
          { sentence: "他去过那里___次。", answer: "两三" },
          { sentence: "我等了你___分钟了。", answer: "十几" },
          { sentence: "这里离车站___分钟。", answer: "三四" },
        ]
      },
      {
        title: "表达兴趣爱好 — Cách diễn tả sở thích",
        explanation: '"对……感兴趣" so sánh với "喜欢".',
        examples: [
          { zh: "他对历史很感兴趣。", vi: "Anh ấy rất hứng thú với lịch sử." },
          { zh: "我比他更喜欢数学。", vi: "Tôi thích toán hơn anh ấy." },
          { zh: "她对体育比对数学更感兴趣。", vi: "Cô ấy hứng thú với thể thao hơn toán học." },
        ],
        fillInBlank: [
          { sentence: "我___历史___数学更感兴趣。", answer: "对...比" },
          { sentence: "他___体育___语文更感兴趣。", answer: "对...比" },
          { sentence: "你___什么科目最感兴趣？", answer: "对" },
        ]
      }
    ],
    proverb: {
      hanzi: "不可同日而语",
      pinyin: "Bù kě tóng rì ér yǔ",
      meaning: "Không thể so sánh với nhau",
      explanation: "Ý nghĩa: Hai thứ chênh lệch quá lớn, không thể đem ra so sánh."
    }
  },
];

export const ALL_VOCAB = LESSONS.flatMap(lesson =>
  lesson.vocab.map(v => ({ ...v, lesson: lesson.id, lessonTitle: lesson.title }))
);

export const GRAMMAR_POINTS = [
  { id: 1, title: '结果补语\"好\"', category: "补语", lesson: 1, summary: "Bổ ngữ chỉ kết quả 好", explanation: "Dùng sau động từ để diễn tả hành động được hoàn thành và làm cho người ta cảm thấy hài lòng.", examples: ["今晚的电影买好票了。", "饭还没做好，请你等一下。", "去旅游的东西准备好了吗？"] },
  { id: 2, title: '"一……也/都 + 不/没……"', category: "否定", lesson: 1, summary: "Phủ định hoàn toàn", explanation: '用"一 + 量词 + 名词 + 也/都 + 不/没 + 动词"表示完全否定。', examples: ["我一个苹果也不想吃。", "昨天他一件衣服都没买。", "一点儿也不着急。"] },
  { id: 3, title: '连词"那"', category: "连词", lesson: 1, summary: "Liên từ 那", explanation: '"那"放在句首，表示依据上文的意思得出的结论。', examples: ["A:我不想去。B:那我也不去了。", "A:我复习好了。B:那也不能一直玩啊。"] },
  { id: 4, title: "简单趋向补语", category: "补语", lesson: 2, summary: "Bổ ngữ phương hướng đơn giản", explanation: "动词后加来/去表示动作方向，来表示向说话人，去表示离说话人。", examples: ["他上来了。", "我下去拿。", "出去了。"] },
  { id: 5, title: '"就"表示紧接', category: "副词", lesson: 2, summary: '就 biểu thị liên tiếp', explanation: "两个动作紧接发生，用就连接。", examples: ["他到了就告诉我。", "吃完就走。"] },
  { id: 6, title: '能……吗？', category: "疑问", lesson: 2, summary: "Câu hỏi khả năng", explanation: "用能……吗来询问是否可能或允许做某事。", examples: ["你能教我吗？", "这里能拍照吗？"] },
  { id: 7, title: '"还是"和"或者"', category: "连词", lesson: 3, summary: "还是 vs 或者", explanation: '"还是"用于问句，"或者"用于陈述句。', examples: ["你喝茶还是喝咖啡？", "你可以坐车或者骑车去。"] },
  { id: 8, title: "存在句：动词 + 着", category: "句型", lesson: 3, summary: "Câu tồn tại với 着", explanation: "位置词 + 动词 + 着 + 数量 + 名词，表示某处存在某物。", examples: ["桌子上放着很多饮料。", "墙上挂着一幅画。"] },
  { id: 9, title: '"会"表示可能', category: "助动词", lesson: 3, summary: "会 biểu thị khả năng", explanation: '"会"表示某事有可能发生，基于经验或推断。', examples: ["明天会下雨。", "他会来的，别担心。"] },
  { id: 10, title: '"又……又……"', category: "句型", lesson: 4, summary: "Vừa... vừa...", explanation: '"又A又B"表示两个性质或动作同时存在。', examples: ["她又聪明又热情。", "这个蛋糕又好看又好吃。"] },
  { id: 11, title: "动作伴随：动词+着", category: "补语", lesson: 4, summary: "Hành động kèm theo với 着", explanation: "动词1 + 着 + 动词2，表示动作1伴随动作2发生。", examples: ["她总是笑着说话。", "他站着回答问题。"] },
  { id: 12, title: '"了"表示变化', category: "助词", lesson: 5, summary: "了 chỉ sự thay đổi", explanation: '"了"用在句末，表示状态的变化。', examples: ["天气热了。", "她越来越胖了。", "他会说汉语了。"] },
  { id: 13, title: '"越来越……"', category: "副词", lesson: 5, summary: "Ngày càng...", explanation: '"越来越 + 形容词"表示程度随时间增加。', examples: ["天气越来越冷了。", "他的汉语越来越好了。"] },
  { id: 14, title: '"越A越B"', category: "句型", lesson: 5, summary: "Càng A càng B", explanation: '"越A越B"表示A程度加深，B也随之加深。', examples: ["越想越着急。", "越跑越累。", "天气越冷，越想吃火锅。"] },
  { id: 15, title: "可能补语：得/不", category: "补语", lesson: 6, summary: "Bổ ngữ khả năng", explanation: "动词 + 得/不 + 补语，表示能否实现某个结果。", examples: ["我听不清楚。", "这本书今天看不完。"] },
  { id: 16, title: '"呢"询问处所', category: "语气词", lesson: 6, summary: "呢 hỏi vị trí", explanation: '"名词 + 呢"用于询问某人或某物在哪里。', examples: ["我的眼镜呢？", "小刚呢？"] },
  { id: 17, title: '"刚"和"刚才"', category: "副词", lesson: 6, summary: "刚 vs 刚才", explanation: '"刚"表示刚刚完成的动作，"刚才"指刚才的时间点。', examples: ["他刚走。", "刚才还在这里。"] },
  { id: 18, title: "时段的表达", category: "时间", lesson: 7, summary: "Diễn tả khoảng thời gian", explanation: "动词 + 时量 / 动词 + 了 + 时量 + 了，表示持续了多长时间。", examples: ["我学了三年汉语了。", "他工作了五年了。"] },
  { id: 19, title: '"对……感兴趣"', category: "句型", lesson: 7, summary: "Hứng thú với...", explanation: '"对 + 事物 + 感兴趣"表示对某事有兴趣。', examples: ["他对音乐很感兴趣。", "我对历史不感兴趣。"] },
  { id: 20, title: '用"半""刻""差"表示时间', category: "时间", lesson: 7, summary: "Biểu thị giờ với 半/刻/差", explanation: "半=rưỡi, 刻=một khắc(15p), 差=thiếu.", examples: ["两点半。", "差一刻三点。", "三点一刻。"] },
  { id: 21, title: '"又"和"再"', category: "副词", lesson: 8, summary: "又 vs 再", explanation: '"又"用于已发生的重复，"再"用于将要发生的重复。', examples: ["他又来了。", "请你再说一遍。"] },
  { id: 22, title: "疑问代词活用", category: "代词", lesson: 8, summary: "Đại từ nghi vấn linh hoạt", explanation: "谁、什么、哪儿等用于复句，表示任意性。", examples: ["你去哪儿我就去哪儿。", "你喜欢什么就买什么。"] },
  { id: 23, title: "比较句1：A跟B一样", category: "比较", lesson: 9, summary: "So sánh bằng: A跟B一样", explanation: "A跟B一样(+形容词)，表示A与B相同。", examples: ["你跟我一样高。", "她说得跟中国人一样好。"] },
  { id: 24, title: "比较句2：A比B + 形容词", category: "比较", lesson: 9, summary: "So sánh hơn: A比B", explanation: "A比B + 形容词，表示A在某方面超过B。后可加一点儿/多了等。", examples: ["他比我高一点儿。", "今天比昨天冷多了。"] },
  { id: 25, title: '概数的表达', category: "数量", lesson: 10, summary: "Số ước lượng", explanation: "用相邻两个数字或多等词表示约略数。", examples: ["来了两三次。", "等了三四分钟。"] },
  { id: 26, title: '"把"字句1', category: "句型", lesson: 11, summary: "Câu 把 (1)", explanation: "A把B + 动词 + 结果，强调对宾语的处置。", examples: ["把空调关了。", "请把门打开。"] },
  { id: 27, title: '"被"字句', category: "句型", lesson: 20, summary: "Câu bị động với 被", explanation: "A被B + 动词，表示A受到B的动作影响。", examples: ["我被他影响了。", "窗户被风打开了。"] },
  { id: 28, title: '"如果……就……"', category: "句型", lesson: 16, summary: "Nếu... thì...", explanation: '"如果……（的话），（主语）就……"表示假设。', examples: ["如果明天下雨，我就不去了。", "如果你来，就告诉我。"] },
  { id: 29, title: '"只要……就……"', category: "句型", lesson: 18, summary: "Chỉ cần... là...", explanation: '"只要A，就B"表示条件关系。只要满足A，B就会发生。', examples: ["只要努力，就会成功。", "只要你来，我就高兴。"] },
  { id: 30, title: '"除了……以外，都/还/也……"', category: "句型", lesson: 15, summary: "Ngoài... ra, đều/cũng...", explanation: '"除了A以外，都/还/也B"表示排除A，其他都B。', examples: ["除了星期天，他每天都来。", "除了汉语，她还会说英语。"] },
];

export const LESSONS_11_20 = [
  {
    id: 11,
    title: "别忘了把空调关了。",
    titleVi: "Đừng quên tắt máy điều hòa không khí nhé.",
    vocab: [
      { id: "11-1", hanzi: "图书馆", pinyin: "túshūguǎn", type: "dt", meaning: "thư viện", radical: "囗", radicalMeaning: "khung - bản đồ/sơ đồ", totalStrokes: 28, example: "我每天去图书馆学习。", exampleVi: "Tôi mỗi ngày đến thư viện học." },
      { id: "11-2", hanzi: "借", pinyin: "jiè", type: "đgt", meaning: "mượn, vay", radical: "人", radicalMeaning: "người - mượn từ người khác", totalStrokes: 10, example: "我想借一本书。", exampleVi: "Tôi muốn mượn một quyển sách." },
      { id: "11-3", hanzi: "词典", pinyin: "cídiǎn", type: "dt", meaning: "từ điển", radical: "讠", radicalMeaning: "lời nói - từ ngữ", totalStrokes: 15, example: "这本词典很有用。", exampleVi: "Cuốn từ điển này rất hữu ích." },
      { id: "11-4", hanzi: "还", pinyin: "huán", type: "đgt", meaning: "trả", radical: "辶", radicalMeaning: "đi - trả lại", totalStrokes: 7, example: "请把书还给我。", exampleVi: "Xin trả sách cho tôi." },
      { id: "11-5", hanzi: "灯", pinyin: "dēng", type: "dt", meaning: "đèn", radical: "火", radicalMeaning: "lửa - đèn dùng lửa/điện", totalStrokes: 6, example: "关灯了，睡觉吧。", exampleVi: "Tắt đèn rồi, ngủ thôi." },
      { id: "11-6", hanzi: "会议", pinyin: "huìyì", type: "dt", meaning: "hội nghị, cuộc họp", radical: "人", radicalMeaning: "người - cơ hội/hội", totalStrokes: 11, example: "今天有一个重要的会议。", exampleVi: "Hôm nay có một cuộc họp quan trọng." },
      { id: "11-7", hanzi: "结束", pinyin: "jiéshù", type: "đgt", meaning: "kết thúc, chấm dứt", radical: "纟", radicalMeaning: "tơ - kết nối", totalStrokes: 16, example: "会议结束了，大家回家吧。", exampleVi: "Họp kết thúc rồi, mọi người về nhà thôi." },
      { id: "11-8", hanzi: "忘记", pinyin: "wàngjì", type: "đgt", meaning: "quên", radical: "心", radicalMeaning: "tâm - quên trong lòng", totalStrokes: 12, example: "别忘记带伞。", exampleVi: "Đừng quên mang ô." },
      { id: "11-9", hanzi: "空调", pinyin: "kōngtiáo", type: "dt", meaning: "máy điều hòa không khí", radical: "穴", radicalMeaning: "hang - rỗng/khoảng trống", totalStrokes: 23, example: "夏天没有空调很热。", exampleVi: "Mùa hè không có điều hòa rất nóng." },
      { id: "11-10", hanzi: "关", pinyin: "guān", type: "đgt", meaning: "tắt, đóng", radical: "八", radicalMeaning: "tám - liên quan đến", totalStrokes: 6, example: "出门前记得把灯关了。", exampleVi: "Trước khi ra ngoài nhớ tắt đèn." },
      { id: "11-11", hanzi: "地铁", pinyin: "dìtiě", type: "dt", meaning: "tàu điện ngầm", radical: "土", radicalMeaning: "đất - đất/nơi", totalStrokes: 16, example: "坐地铁去市中心很方便。", exampleVi: "Đi tàu điện ngầm vào trung tâm rất tiện." },
      { id: "11-12", hanzi: "双", pinyin: "shuāng", type: "lượng", meaning: "đôi", radical: "又", radicalMeaning: "lại - đôi", totalStrokes: 4 },
      { id: "11-13", hanzi: "筷子", pinyin: "kuàizi", type: "dt", meaning: "đũa", radical: "竹", radicalMeaning: "tre - đũa tre", totalStrokes: 16, example: "中国人用筷子吃饭。", exampleVi: "Người Trung Quốc dùng đũa ăn cơm." },
      { id: "11-14", hanzi: "啤酒", pinyin: "píjiǔ", type: "dt", meaning: "bia, rượu bia", radical: "口", radicalMeaning: "miệng - bia", totalStrokes: 21, example: "他不喜欢喝啤酒。", exampleVi: "Anh ấy không thích uống bia." },
      { id: "11-15", hanzi: "口", pinyin: "kǒu", type: "lượng", meaning: "miếng, ngụm, hớp", radical: "口", radicalMeaning: "miệng - cái miệng", totalStrokes: 3 },
      { id: "11-16", hanzi: "瓶子", pinyin: "píngzi", type: "dt", meaning: "lo, bình", radical: "瓦", radicalMeaning: "ngói - cái bình", totalStrokes: 13 },
      { id: "11-17", hanzi: "笔记本(电脑)", pinyin: "bǐjìběn (diànnǎo)", type: "dt", meaning: "máy tính xách tay", radical: "竹", radicalMeaning: "tre - cây bút", totalStrokes: 25 },
      { id: "11-18", hanzi: "电子邮件", pinyin: "diànzǐ yóujiàn", type: "dt", meaning: "email", radical: "田", radicalMeaning: "ruộng - điện", totalStrokes: 21 },
      { id: "11-19", hanzi: "习惯", pinyin: "xíguàn", type: "đgt/dt", meaning: "quen; thói quen", radical: "羽", radicalMeaning: "lông vũ - tập luyện", totalStrokes: 17, example: "他有早起的习惯。", exampleVi: "Anh ấy có thói quen dậy sớm." },
    ],
    dialogues: [
      {
        title: "在教室 — Trong lớp học",
        lines: [
          { speaker: "小明", text: "我先走了。" },
          { speaker: "同学", text: "你去哪儿？" },
          { speaker: "小明", text: "我去图书馆借本书。" },
          { speaker: "同学", text: "帮我把这本词典还了吧。" },
          { speaker: "小明", text: "好，等一会儿你离开教室的时候，记得把灯关了。" },
          { speaker: "同学", text: "好的，放心吧。" },
        ]
      },
      {
        title: "在会议室 — Trong phòng họp",
        lines: [
          { speaker: "周明", text: "会议结束后，别忘记把空调关了。" },
          { speaker: "小丽", text: "好的。王经理两点左右来了个电话。" },
          { speaker: "周明", text: "他已经到北京了？" },
          { speaker: "小丽", text: "是的，他正坐地铁来我们公司呢。" },
          { speaker: "周明", text: "等他到了就告诉我。" },
        ]
      },
      {
        title: "在客厅 — Trong phòng khách",
        lines: [
          { speaker: "妈妈", text: "还差一双筷子，你去拿一下。" },
          { speaker: "儿子", text: "今天怎么做了这么多菜？" },
          { speaker: "妈妈", text: "今天是你爸爸的生日。" },
          { speaker: "儿子", text: "真的啊？我把爸爸的生日忘了。那我们今天喝点儿啤酒吧。" },
          { speaker: "妈妈", text: "医生说你爸爸一口酒都不能喝，别让他看见酒瓶子。" },
        ]
      },
      {
        title: "在家 — Ở nhà",
        lines: [
          { speaker: "小明", text: "这个笔记本电脑我去年买的时候要五千块左右，现在便宜多了。" },
          { speaker: "朋友", text: "你想把这个电脑卖了吗？" },
          { speaker: "小明", text: "是的，我每天起床后的第一件事就是打开电脑，看电子邮件。" },
          { speaker: "朋友", text: "真的，现在很多人都习惯用电脑来工作了。" },
        ]
      },
    ],
    reading: {
      text: "周明在公司工作很忙，每天开很多会议。今天会议结束后，他让同事别忘了把空调关了，把灯关了。他的太太王经理两点左右打来电话，说已经到北京了，正坐地铁过来。周明很高兴，让小丽告诉他太太到了公司就给他打电话。今晚他们打算一起吃饭，庆祝爸爸的生日，但是医生说爸爸一口酒都不能喝。",
      pinyin: "Zhōu Míng zài gōngsī gōngzuò hěn máng, měitiān kāi hěn duō huìyì.",
      meaning: "Châu Minh làm việc ở công ty rất bận, mỗi ngày họp rất nhiều cuộc họp."
    },
    grammar: [
      {
        title: '"把"字句1: A把B + 动词 + ……',
        explanation: 'Câu có từ 把 (1): A 把 B + động từ + …… Dùng để biểu thị hành động xử lý đối tượng xác định.',
        examples: [
          { zh: "请你把衣服洗了。", vi: "Nhờ bạn giặt quần áo đi." },
          { zh: "别忘了把空调关了。", vi: "Đừng quên tắt máy điều hòa." },
          { zh: "我把爸爸的生日忘了。", vi: "Tôi quên mất sinh nhật của bố." },
        ],
        fillInBlank: [
          { sentence: "房间里有点儿冷，你可以___门___吗？", answer: "把...关了" },
          { sentence: "你发烧还没好，快___药___。", answer: "把...吃了" },
          { sentence: "吃饭以前别忘了___手___。", answer: "把...洗了" },
        ]
      },
      {
        title: "概数的表达2: 左右",
        explanation: '"左右" đặt sau chữ số để diễn tả số ước lượng. Ví dụ: 三点左右, 五个左右, 十年左右.',
        examples: [
          { zh: "周末我一般十点左右起床。", vi: "Cuối tuần tôi thường dậy khoảng 10 giờ." },
          { zh: "王经理两点左右来了个电话。", vi: "Giám đốc Vương khoảng 2 giờ gọi điện đến." },
          { zh: "他学了三年左右的汉语。", vi: "Anh ấy học tiếng Trung khoảng ba năm." },
        ],
        fillInBlank: [
          { sentence: "他___五点___到家。", answer: "下午...左右" },
          { sentence: "这件衣服___一百元___。", answer: "...左右" },
          { sentence: "我等了他___半个小时___。", answer: "...左右" },
        ]
      },
      {
        title: "习惯 — Quen, thói quen",
        explanation: '"习惯 + 动词" = quen làm việc gì. "习惯" còn dùng như danh từ = thói quen.',
        examples: [
          { zh: "我已经习惯用电脑来工作了。", vi: "Tôi đã quen dùng máy tính để làm việc." },
          { zh: "他有一个好习惯，每天早起。", vi: "Anh ấy có một thói quen tốt, dậy sớm mỗi ngày." },
          { zh: "刚来中国，还不习惯这里的天气。", vi: "Mới đến Trung Quốc, chưa quen thời tiết ở đây." },
        ],
        fillInBlank: [
          { sentence: "我___早上喝咖啡的___。", answer: "有...习惯" },
          { sentence: "他不___一个人出去。", answer: "习惯" },
          { sentence: "你___这里的生活了吗？", answer: "习惯" },
        ]
      }
    ],
    proverb: {
      hanzi: "贵人多忘事",
      pinyin: "Guì rén duō wàng shì",
      meaning: "Người sang thường hay quên",
      explanation: "Ý nghĩa: Người bận rộn, địa vị cao thường hay quên việc — thường dùng để nói vui khi ai đó quên điều gì."
    }
  },
  {
    id: 12,
    title: "把重要的东西放在我这儿吧。",
    titleVi: "Hãy để những đồ quan trọng ở chỗ tôi đi.",
    vocab: [
      { id: "12-1", hanzi: "太阳", pinyin: "tàiyáng", type: "dt", meaning: "mặt trời", radical: "大", radicalMeaning: "lớn - quá/mặt trời", totalStrokes: 10, example: "今天太阳很大。", exampleVi: "Hôm nay mặt trời rất to." },
      { id: "12-2", hanzi: "西", pinyin: "xī", type: "dt", meaning: "phía tây, hướng tây", radical: "西", radicalMeaning: "tây - phương tây", totalStrokes: 6 },
      { id: "12-3", hanzi: "生气", pinyin: "shēngqì", type: "đgt", meaning: "giận, tức giận", radical: "生", radicalMeaning: "sinh - sinh ra", totalStrokes: 9, example: "他为什么生气了？", exampleVi: "Tại sao anh ấy tức giận vậy?" },
      { id: "12-4", hanzi: "行李箱", pinyin: "xínglǐxiāng", type: "dt", meaning: "hành lý, vali", radical: "彳", radicalMeaning: "bước - đi/hành", totalStrokes: 28, example: "我的行李箱太重了。", exampleVi: "Va-li của tôi nặng quá." },
      { id: "12-5", hanzi: "自己", pinyin: "zìjǐ", type: "dt", meaning: "tự mình, bản thân", radical: "自", radicalMeaning: "tự - tự mình", totalStrokes: 9, example: "这件事你自己决定吧。", exampleVi: "Việc này bạn tự quyết định nhé." },
      { id: "12-6", hanzi: "包", pinyin: "bāo", type: "dt", meaning: "cặp, túi", radical: "勺", radicalMeaning: "thìa - cái túi", totalStrokes: 5 },
      { id: "12-7", hanzi: "发现", pinyin: "fāxiàn", type: "đgt", meaning: "phát hiện", radical: "又", radicalMeaning: "lại - tóc", totalStrokes: 13, example: "我发现钱包不见了。", exampleVi: "Tôi phát hiện ra ví tiền mất rồi." },
      { id: "12-8", hanzi: "护照", pinyin: "hùzhào", type: "dt", meaning: "hộ chiếu", radical: "手", radicalMeaning: "tay - bảo vệ", totalStrokes: 20, example: "出国要带护照。", exampleVi: "Đi nước ngoài phải mang hộ chiếu." },
      { id: "12-9", hanzi: "起飞", pinyin: "qǐfēi", type: "đgt", meaning: "cất cánh (máy bay)", radical: "走", radicalMeaning: "đi - khởi đầu", totalStrokes: 13, example: "飞机几点起飞？", exampleVi: "Máy bay mấy giờ cất cánh?" },
      { id: "12-10", hanzi: "司机", pinyin: "sījī", type: "dt", meaning: "tài xế", radical: "口", radicalMeaning: "miệng - quản lý", totalStrokes: 11 },
      { id: "12-11", hanzi: "教", pinyin: "jiāo", type: "đgt", meaning: "dạy", radical: "攴", radicalMeaning: "tay - dạy học", totalStrokes: 11 },
      { id: "12-12", hanzi: "画", pinyin: "huà", type: "đgt/dt", meaning: "vẽ; tranh", radical: "田", radicalMeaning: "ruộng - vẽ/tranh", totalStrokes: 8 },
      { id: "12-13", hanzi: "需要", pinyin: "xūyào", type: "đgt", meaning: "cần", radical: "雨", radicalMeaning: "mưa - cần thiết", totalStrokes: 23 },
      { id: "12-14", hanzi: "黑板", pinyin: "hēibǎn", type: "dt", meaning: "bảng đen", radical: "黑", radicalMeaning: "đen - màu đen", totalStrokes: 20 },
    ],
    dialogues: [
      {
        title: "在家 — Ở nhà",
        lines: [
          { speaker: "小丽", text: "今天太阳从西边出来了吗？" },
          { speaker: "小刚", text: "怎么了？" },
          { speaker: "小丽", text: "你怎么这么早就要睡觉了？以前都要12点以后才睡觉。" },
          { speaker: "小刚", text: "我明天8点就要到公司。" },
          { speaker: "小丽", text: "有事吗？" },
          { speaker: "小刚", text: "经理生气了，他告诉我，明天8点不到，以后就别来了。" },
        ]
      },
      {
        title: "在家 — Ở nhà",
        lines: [
          { speaker: "小刚", text: "我要跟周经理去外地办事，明天的飞机。" },
          { speaker: "小丽", text: "那我帮你把衣服放到行李箱里吧。什么时候回来？" },
          { speaker: "小刚", text: "一个星期就回来。" },
          { speaker: "小丽", text: "啊？一个星期以后才回来？你要自己照顾好自己，我已经给你准备好吃的和喝的了。" },
          { speaker: "小刚", text: "好吧。我已经把我的照片放在你的包里了。" },
        ]
      },
      {
        title: "在机场 — Ở sân bay",
        lines: [
          { speaker: "周明", text: "你怎么才来？" },
          { speaker: "小刚", text: "对不起，周经理，来机场的路上我才发现忘带护照了。" },
          { speaker: "周明", text: "快点吧，飞机就要起飞了。" },
          { speaker: "小刚", text: "您有钱吗？司机把我送到机场的时候，我才发现忘记带钱包了。" },
          { speaker: "周明", text: "我看你还是把重要的东西放在我这儿吧。" },
        ]
      },
      {
        title: "在学校 — Ở trường",
        lines: [
          { speaker: "老师", text: "我是一个中学老师，教学生画画儿。" },
          { speaker: "学生", text: "老师，您需要我们把什么带来吗？" },
          { speaker: "老师", text: "每次下课前，我都会把下次学生需要带的东西写在黑板上。" },
          { speaker: "学生", text: "好的，谢谢老师。" },
        ]
      },
    ],
    reading: {
      text: "小刚要跟周经理去外地出差，明天早上的飞机。他的行李箱已经准备好了，但是来机场的路上才发现忘带护照了。司机帮他回去拿，但是飞机快要起飞了。周经理很生气，说以后要把重要的东西放在他这儿。小刚很不好意思，决定以后要养成好习惯，把重要的东西都放在一个固定的地方。",
      pinyin: "Xiǎo Gāng yào gēn Zhōu jīnglǐ qù wàidì chūchāi, míngtiān zǎoshang de fēijī.",
      meaning: "Tiểu Cương phải đi công tác xa cùng giám đốc Châu, máy bay sáng sớm ngày mai."
    },
    grammar: [
      {
        title: '"才"和"就" —才 và 就',
        explanation: '"就" diễn tả hành động xảy ra sớm hoặc thuận lợi. "才" diễn tả hành động xảy ra muộn hoặc khó khăn.',
        examples: [
          { zh: "我早上五点就起床了。", vi: "Tôi sáng sớm 5 giờ đã dậy rồi." },
          { zh: "八点上课，他九点才起床。", vi: "8 giờ vào lớp, anh ấy 9 giờ mới dậy." },
          { zh: "来机场的路上我才发现忘带护照了。", vi: "Trên đường đến sân bay tôi mới phát hiện quên mang hộ chiếu." },
        ],
        fillInBlank: [
          { sentence: "他三个小时___做完作业。", answer: "才" },
          { sentence: "坐飞机一个小时___到了。", answer: "就" },
          { sentence: "弟弟三个小时___做完作业。", answer: "才" },
        ]
      },
      {
        title: '"把"字句2: A把B + 动词 + 在/到/给……',
        explanation: 'Câu có từ 把 (2): A 把 B + động từ + 在/到/给 + vị trí. Diễn tả thay đổi vị trí.',
        examples: [
          { zh: "我已经把我的照片放在你的包里了。", vi: "Tôi đã để ảnh của tôi vào trong túi của bạn rồi." },
          { zh: "请把重要的东西放在我这儿。", vi: "Hãy để đồ quan trọng ở chỗ tôi." },
          { zh: "他把书放到桌子上了。", vi: "Anh ấy đặt sách lên bàn rồi." },
        ],
        fillInBlank: [
          { sentence: "请你把书___桌子上。", answer: "放在" },
          { sentence: "他把包___汽车里了。", answer: "放到" },
          { sentence: "妈妈把礼物___我了。", answer: "给" },
        ]
      },
      {
        title: "自己 — Tự mình, bản thân",
        explanation: '"自己" dùng để nhấn mạnh hành động do chính chủ thể thực hiện.',
        examples: [
          { zh: "你要自己照顾好自己。", vi: "Bạn phải tự chăm sóc bản thân mình." },
          { zh: "这件事我自己来做。", vi: "Việc này tôi tự làm." },
          { zh: "她自己一个人住。", vi: "Cô ấy sống một mình." },
        ],
        fillInBlank: [
          { sentence: "这道题你___想想。", answer: "自己" },
          { sentence: "他___做了一个蛋糕。", answer: "自己" },
          { sentence: "大人的事情，孩子___别管。", answer: "自己" },
        ]
      }
    ],
    proverb: {
      hanzi: "习惯成自然",
      pinyin: "Xíguàn chéng zìrán",
      meaning: "Việc đã quen làm trở thành việc tự nhiên",
      explanation: "Ý nghĩa: Làm một việc nhiều lần thì sẽ thành thói quen, không cần phải cố gắng nữa."
    }
  },
  {
    id: 13,
    title: "我是走回来的。",
    titleVi: "Anh đi bộ về.",
    vocab: [
      { id: "13-1", hanzi: "终于", pinyin: "zhōngyú", type: "phó", meaning: "cuối cùng", radical: "纟", radicalMeaning: "tơ - cuối cùng", totalStrokes: 14, example: "终于考完试了！", exampleVi: "Cuối cùng cũng thi xong!" },
      { id: "13-2", hanzi: "爷爷", pinyin: "yéye", type: "dt", meaning: "ông nội", radical: "父", radicalMeaning: "cha - ông nội", totalStrokes: 12, example: "我爷爷今年八十岁了。", exampleVi: "Ông nội tôi năm nay tám mươi tuổi." },
      { id: "13-3", hanzi: "礼物", pinyin: "lǐwù", type: "dt", meaning: "quà biếu, quà tặng", radical: "示", radicalMeaning: "thần - lễ nghĩa", totalStrokes: 13, example: "她收到了一个漂亮的礼物。", exampleVi: "Cô ấy nhận được một món quà đẹp." },
      { id: "13-4", hanzi: "奶奶", pinyin: "nǎinai", type: "dt", meaning: "bà nội", radical: "女", radicalMeaning: "phụ nữ - sữa/bà nội", totalStrokes: 12, example: "奶奶做的菜很好吃。", exampleVi: "Món ăn của bà nội rất ngon." },
      { id: "13-5", hanzi: "遇到", pinyin: "yùdào", type: "đgt", meaning: "tình cờ gặp", radical: "辶", radicalMeaning: "đi - gặp gỡ", totalStrokes: 20, example: "今天在路上遇到了老朋友。", exampleVi: "Hôm nay trên đường gặp người bạn cũ." },
      { id: "13-6", hanzi: "一边", pinyin: "yībiān", type: "phó", meaning: "vừa (dùng để liên kết hai hành động xảy ra cùng lúc)", radical: "辶", radicalMeaning: "đi - bên cạnh", totalStrokes: 5 },
      { id: "13-7", hanzi: "过去", pinyin: "guòqù", type: "dt", meaning: "quá khứ", radical: "辶", radicalMeaning: "đi - ăn mừng/trải qua", totalStrokes: 11 },
      { id: "13-8", hanzi: "一般", pinyin: "yībān", type: "tt", meaning: "thông thường", radical: "舟", radicalMeaning: "thuyền - loại/thường", totalStrokes: 10, example: "他一般七点起床。", exampleVi: "Anh ấy thường bảy giờ thức dậy." },
      { id: "13-9", hanzi: "愿意", pinyin: "yuànyì", type: "đgt", meaning: "muốn", radical: "心", radicalMeaning: "tâm - mong muốn", totalStrokes: 27, example: "她愿意帮助别人。", exampleVi: "Cô ấy sẵn lòng giúp đỡ người khác." },
      { id: "13-10", hanzi: "起来", pinyin: "qǐlái", type: "đgt", meaning: "(chỉ sự di chuyển hướng lên) lên", radical: "走", radicalMeaning: "đi - khởi đầu", totalStrokes: 17 },
      { id: "13-11", hanzi: "应该", pinyin: "yīnggāi", type: "đgt", meaning: "nên, cần phải", radical: "广", radicalMeaning: "nhà - nên/ứng", totalStrokes: 15, example: "你应该多运动。", exampleVi: "Bạn nên tập thể dục nhiều hơn." },
      { id: "13-12", hanzi: "生活", pinyin: "shēnghuó", type: "dt", meaning: "đời sống, cuộc sống", radical: "生", radicalMeaning: "sinh - sinh ra", totalStrokes: 14, example: "这里的生活很舒服。", exampleVi: "Cuộc sống ở đây rất thoải mái." },
      { id: "13-13", hanzi: "校长", pinyin: "xiàozhǎng", type: "dt", meaning: "hiệu trưởng", radical: "木", radicalMeaning: "cây - trường học", totalStrokes: 18, example: "校长对学生很好。", exampleVi: "Hiệu trưởng rất tốt với học sinh." },
      { id: "13-14", hanzi: "坏", pinyin: "huài", type: "tt", meaning: "quá, quá mức", radical: "土", radicalMeaning: "đất - xấu/quá mức", totalStrokes: 7 },
      { id: "13-15", hanzi: "经常", pinyin: "jīngcháng", type: "phó", meaning: "thường xuyên", radical: "纟", radicalMeaning: "tơ - đi ngang qua", totalStrokes: 19, example: "他经常去图书馆。", exampleVi: "Anh ấy thường xuyên đến thư viện." },
    ],
    dialogues: [
      {
        title: "在家 — Ở nhà",
        lines: [
          { speaker: "小丽", text: "你终于回来了！从哪儿买回来这么多东西啊？" },
          { speaker: "小刚", text: "都是从那边的商店买回来的。" },
          { speaker: "小丽", text: "怎么还买红酒回来了？谁喝啊？" },
          { speaker: "小刚", text: "这是给爷爷的礼物，明天我们一起送过去，看看爷爷奶奶。" },
          { speaker: "小丽", text: "那我的礼物呢？快拿出来让我看看。" },
          { speaker: "小刚", text: "我不是已经回来了吗？" },
        ]
      },
      {
        title: "在家 — Ở nhà",
        lines: [
          { speaker: "小丽", text: "我今天看见你和一个女的进了咖啡店，她是谁啊？" },
          { speaker: "小刚", text: "她是我今天在路上遇到的一个老同学。" },
          { speaker: "小丽", text: "你们就一起去喝咖啡了？" },
          { speaker: "小刚", text: "是啊，一边喝咖啡一边说了些过去的事。" },
          { speaker: "小丽", text: "你回来得这么晚，是说了很多过去的事吗？" },
          { speaker: "小刚", text: "不是。没有公共汽车了，我是走回来的。" },
        ]
      },
      {
        title: "在打电话 — Nói chuyện qua điện thoại",
        lines: [
          { speaker: "同事", text: "小丽，周末你一般跟小刚出去看电影吗？" },
          { speaker: "小丽", text: "我很少去电影院看电影，我更愿意在家看电视。" },
          { speaker: "同事", text: "看电视有什么意思啊？" },
          { speaker: "小丽", text: "可以一边吃一边看，坐久了还可以站起来休息一会儿。" },
          { speaker: "同事", text: "你应该多出去走走，这样你们的生活会更有意思。" },
          { speaker: "小丽", text: "有他在，我的生活已经很有意思了。" },
        ]
      },
      {
        title: "在家 — Ở nhà",
        lines: [
          { speaker: "小丽", text: "你丈夫现在在哪儿工作？" },
          { speaker: "朋友", text: "他是中学老师，现在是校长了，因为太忙，每天早上我起床后都看不到他，晚上很晚才回到家。" },
          { speaker: "小丽", text: "你不担心吗？" },
          { speaker: "朋友", text: "担心是担心，但是经常看不到人，真怕他累坏了。" },
        ]
      },
    ],
    reading: {
      text: "小刚今天在路上遇到了一个老同学，他们一起去咖啡店，一边喝咖啡一边聊过去的事。聊了很久，最后没有公共汽车了，小刚就走回来了。小丽很高兴他回来，但是问他带了什么礼物。小刚说他带了爷爷最爱喝的红酒，明天一起去看看爷爷奶奶。小丽说他应该多出去走走，这样生活会更有意思。",
      pinyin: "Xiǎo Gāng jīntiān zài lù shàng yùdào le yī gè lǎo tóngxué, tāmen yīqǐ qù kāfēidiàn.",
      meaning: "Hôm nay Tiểu Cương tình cờ gặp một người bạn học cũ trên đường, họ cùng đến quán cà phê."
    },
    grammar: [
      {
        title: "复合趋向补语 — Bổ ngữ chỉ phương hướng dạng kết hợp",
        explanation: "Bổ ngữ chỉ phương hướng phức hợp gồm động từ phương hướng đơn + 来/去. Ví dụ: 走回来, 跑出去, 站起来.",
        examples: [
          { zh: "我是走回来的。", vi: "Tôi đi bộ về." },
          { zh: "他跑出去了。", vi: "Anh ấy chạy ra ngoài rồi." },
          { zh: "请站起来回答问题。", vi: "Hãy đứng dậy trả lời câu hỏi." },
        ],
        fillInBlank: [
          { sentence: "他从外面跑___来了。", answer: "进" },
          { sentence: "她把书从书包里拿___了。", answer: "出来" },
          { sentence: "请把椅子搬___去。", answer: "过" },
        ]
      },
      {
        title: "一边……一边…… — Vừa… vừa…",
        explanation: '"一边……一边……" diễn tả hai hành động xảy ra đồng thời.',
        examples: [
          { zh: "他一边喝咖啡一边说过去的事。", vi: "Anh ấy vừa uống cà phê vừa kể chuyện quá khứ." },
          { zh: "她一边看书一边听音乐。", vi: "Cô ấy vừa đọc sách vừa nghe nhạc." },
          { zh: "我们一边走一边说话。", vi: "Chúng tôi vừa đi vừa nói chuyện." },
        ],
        fillInBlank: [
          { sentence: "他___吃饭___看电视。", answer: "一边...一边" },
          { sentence: "她___唱歌___跳舞。", answer: "一边...一边" },
          { sentence: "我___走路___想问题。", answer: "一边...一边" },
        ]
      },
      {
        title: "应该 — Nên, cần phải",
        explanation: '"应该" diễn tả sự cần thiết theo đạo lý hoặc trách nhiệm.',
        examples: [
          { zh: "你应该多出去走走。", vi: "Bạn nên ra ngoài đi lại nhiều hơn." },
          { zh: "学生应该按时完成作业。", vi: "Học sinh nên hoàn thành bài tập đúng hạn." },
          { zh: "我们应该关心老人。", vi: "Chúng ta nên quan tâm đến người già." },
        ],
        fillInBlank: [
          { sentence: "你生病了___去医院。", answer: "应该" },
          { sentence: "他___道歉。", answer: "应该" },
          { sentence: "学生___尊重老师。", answer: "应该" },
        ]
      }
    ],
    proverb: {
      hanzi: "礼轻情意重",
      pinyin: "Lǐ qīng qíngyì zhòng",
      meaning: "Của ít lòng nhiều",
      explanation: "Ý nghĩa: Quà tặng dù nhỏ nhưng tình cảm chứa đựng trong đó rất lớn và sâu sắc."
    }
  },
  {
    id: 14,
    title: "你把水果拿过来。",
    titleVi: "Cậu hãy mang trái cây đến đây.",
    vocab: [
      { id: "14-1", hanzi: "打扫", pinyin: "dǎsǎo", type: "đgt", meaning: "quét dọn", radical: "手", radicalMeaning: "tay - đánh/dọn", totalStrokes: 11, example: "周末我打扫房间。", exampleVi: "Cuối tuần tôi dọn dẹp phòng." },
      { id: "14-2", hanzi: "干净", pinyin: "gānjìng", type: "tt", meaning: "sạch sẽ", radical: "干", radicalMeaning: "can - khô/sạch", totalStrokes: 11, example: "房间打扫得很干净。", exampleVi: "Phòng được dọn rất sạch sẽ." },
      { id: "14-3", hanzi: "然后", pinyin: "ránhòu", type: "liên", meaning: "sau đó", radical: "火", radicalMeaning: "lửa - đương nhiên", totalStrokes: 18, example: "先洗手，然后吃饭。", exampleVi: "Rửa tay trước, sau đó ăn cơm." },
      { id: "14-4", hanzi: "冰箱", pinyin: "bīngxiāng", type: "dt", meaning: "tủ lạnh", radical: "氵", radicalMeaning: "nước - băng đá", totalStrokes: 21, example: "把水果放进冰箱里。", exampleVi: "Để trái cây vào trong tủ lạnh." },
      { id: "14-5", hanzi: "洗澡", pinyin: "xǐzǎo", type: "đgt", meaning: "tắm, tắm rửa", radical: "水", radicalMeaning: "nước - rửa/tắm", totalStrokes: 26, example: "我每天晚上洗澡。", exampleVi: "Tôi mỗi tối đều tắm." },
      { id: "14-6", hanzi: "节目", pinyin: "jiémù", type: "dt", meaning: "chương trình (truyền hình)", radical: "竹", radicalMeaning: "tre - tiết/chương trình", totalStrokes: 10, example: "你喜欢看什么节目？", exampleVi: "Bạn thích xem chương trình gì?" },
      { id: "14-7", hanzi: "月亮", pinyin: "yuèliang", type: "dt", meaning: "mặt trăng", radical: "月", radicalMeaning: "trăng - mặt trăng", totalStrokes: 13, example: "今晚的月亮真漂亮。", exampleVi: "Mặt trăng tối nay thật đẹp." },
      { id: "14-8", hanzi: "像", pinyin: "xiàng", type: "đgt", meaning: "giống", radical: "人", radicalMeaning: "người - giống/tượng", totalStrokes: 13 },
      { id: "14-9", hanzi: "盘子", pinyin: "pánzi", type: "dt", meaning: "đĩa, mâm", radical: "皿", radicalMeaning: "chén - cái đĩa", totalStrokes: 14 },
      { id: "14-10", hanzi: "刮风", pinyin: "guā fēng", type: "đgt", meaning: "nổi gió", radical: "刀", radicalMeaning: "dao - cạo/gió thổi", totalStrokes: 12 },
      { id: "14-11", hanzi: "叔叔", pinyin: "shūshu", type: "dt", meaning: "chú", radical: "又", radicalMeaning: "lại - chú", totalStrokes: 16 },
      { id: "14-12", hanzi: "阿姨", pinyin: "āyí", type: "dt", meaning: "dì, cô", radical: "阜", radicalMeaning: "gò đất - tiếng đệm", totalStrokes: 16 },
      { id: "14-13", hanzi: "故事", pinyin: "gùshi", type: "dt", meaning: "truyện, câu chuyện", radical: "攴", radicalMeaning: "tay - câu chuyện cũ", totalStrokes: 17, example: "爷爷给我讲了一个故事。", exampleVi: "Ông nội kể cho tôi nghe một câu chuyện." },
      { id: "14-14", hanzi: "声音", pinyin: "shēngyīn", type: "dt", meaning: "âm thanh, tiếng", radical: "耳", radicalMeaning: "tai - âm thanh", totalStrokes: 16, example: "她的声音很好听。", exampleVi: "Giọng nói của cô ấy rất hay." },
      { id: "14-15", hanzi: "菜单", pinyin: "càidān", type: "dt", meaning: "thực đơn", radical: "艸", radicalMeaning: "cỏ - rau/thực đơn", totalStrokes: 19, example: "请给我看一下菜单。", exampleVi: "Xin cho tôi xem thực đơn." },
      { id: "14-16", hanzi: "简单", pinyin: "jiǎndān", type: "tt", meaning: "đơn giản", radical: "竹", radicalMeaning: "tre - đơn giản", totalStrokes: 21 },
      { id: "14-17", hanzi: "香蕉", pinyin: "xiāngjiāo", type: "dt", meaning: "chuối", radical: "禾", radicalMeaning: "lúa - thơm/hương", totalStrokes: 24 },
    ],
    dialogues: [
      {
        title: "在家 — Ở nhà",
        lines: [
          { speaker: "周太太", text: "客人就要来了，你怎么还不打扫房间啊？" },
          { speaker: "周明", text: "别着急，我让孩子们打扫吧，客人来的时候，他们会把房间打扫干净的。" },
          { speaker: "周太太", text: "那你也不能看电视啊。" },
          { speaker: "周明", text: "你让我做什么？" },
          { speaker: "周太太", text: "先把茶和杯子放好，然后把冰箱里的西瓜拿出来。" },
          { speaker: "周明", text: "太热了，我还是先把空调打开吧。" },
        ]
      },
      {
        title: "在打电话 — Nói chuyện qua điện thoại",
        lines: [
          { speaker: "同事", text: "你在忙什么呢？刚才打你的手机你也不接。" },
          { speaker: "小刚", text: "对不起，我刚洗了个澡，没听见。有什么事吗？" },
          { speaker: "同事", text: "我想问问你公司里的一些事情。" },
          { speaker: "小刚", text: "你先等一下，我去把电视关了。" },
          { speaker: "同事", text: "没关系，你先把电视节目看完吧，然后再给我回电话。" },
        ]
      },
      {
        title: "在小明家 — Tại nhà bạn Minh",
        lines: [
          { speaker: "同学", text: "今晚的月亮真漂亮，像白色的盘子一样。" },
          { speaker: "小明", text: "是啊，外边也不刮风，我们坐在外边一边看月亮一边吃东西，怎么样？" },
          { speaker: "同学", text: "好啊，我先把桌椅搬出去，然后你把水果拿过来，我们听叔叔阿姨讲他们年轻时候的故事。" },
          { speaker: "小明", text: "太好了！记得给大山打个电话，让他马上过来。" },
          { speaker: "同学", text: "不用打了，你听外边的声音，一定是大山。" },
        ]
      },
      {
        title: "在餐厅 — Ở nhà hàng",
        lines: [
          { speaker: "服务员", text: "这是菜单，请问你们需要什么？" },
          { speaker: "客人", text: "菜单太复杂了，你给我们推荐几个简单的吧。" },
          { speaker: "服务员", text: "好的，我们这里的鱼和香蕉蛋糕都很好吃。" },
          { speaker: "客人", text: "那就来这两个吧，然后再来两杯果汁。" },
        ]
      },
    ],
    reading: {
      text: "今天晚上月亮很漂亮，像白色的盘子一样。小明和同学决定坐在外边看月亮，一边吃水果一边听叔叔阿姨讲过去的故事。同学先把桌椅搬出去，小明把冰箱里的水果拿过来。他们还叫了大山来，大山到了以后，大家说说笑笑，非常开心。外边也不刮风，声音很安静，只有月光和笑声。",
      pinyin: "Jīntiān wǎnshang yuèliang hěn piàoliang, xiàng báisè de pánzi yīyàng.",
      meaning: "Tối nay trăng rất đẹp, giống như một chiếc đĩa màu trắng."
    },
    grammar: [
      {
        title: '"把"字句3: A把B + 动词 + 结果补语/趋向补语',
        explanation: 'Câu có từ 把 (3): A 把 B + động từ + bổ ngữ kết quả/bổ ngữ phương hướng.',
        examples: [
          { zh: "把房间打扫干净了。", vi: "Dọn sạch phòng rồi." },
          { zh: "把水果拿过来。", vi: "Mang trái cây lại đây." },
          { zh: "把桌椅搬出去。", vi: "Dời bàn ghế ra ngoài." },
        ],
        fillInBlank: [
          { sentence: "请你把这个东西___出去。", answer: "拿" },
          { sentence: "他把作业写___了。", answer: "完" },
          { sentence: "请把窗户打___。", answer: "开" },
        ]
      },
      {
        title: "先……，再/又……，然后…… — Trước… rồi…, sau đó…",
        explanation: '先……再/又……然后…… diễn tả chuỗi hành động theo thứ tự.',
        examples: [
          { zh: "先把茶和杯子放好，然后把西瓜拿出来。", vi: "Trước tiên để trà và cốc vào chỗ, sau đó lấy dưa hấu ra." },
          { zh: "先洗澡，再吃饭，然后睡觉。", vi: "Tắm trước, rồi ăn cơm, sau đó đi ngủ." },
          { zh: "先做完作业，然后再玩儿。", vi: "Làm xong bài tập trước, sau đó mới chơi." },
        ],
        fillInBlank: [
          { sentence: "___把衣服换了，___出去玩儿。", answer: "先...再" },
          { sentence: "___做完作业，___看电视。", answer: "先...然后" },
          { sentence: "___买菜，___做饭，___吃。", answer: "先...再...然后" },
        ]
      },
      {
        title: "像……一样 — Giống như…",
        explanation: '"像A一样" dùng để so sánh, có nghĩa là giống A.',
        examples: [
          { zh: "月亮像白色的盘子一样。", vi: "Mặt trăng giống như một chiếc đĩa màu trắng." },
          { zh: "她唱歌唱得像专业歌手一样好。", vi: "Cô ấy hát hay như ca sĩ chuyên nghiệp." },
          { zh: "他跑得像风一样快。", vi: "Anh ấy chạy nhanh như gió." },
        ],
        fillInBlank: [
          { sentence: "他的汉语说得___中国人___好。", answer: "像...一样" },
          { sentence: "这个蛋糕___盘子___大。", answer: "像...一样" },
          { sentence: "她的眼睛___星星___亮。", answer: "像...一样" },
        ]
      }
    ],
    proverb: {
      hanzi: "先到先得",
      pinyin: "Xiān dào xiān dé",
      meaning: "Người đến sớm sẽ được trước",
      explanation: "Ý nghĩa: Ai đến sớm hơn sẽ có cơ hội tốt hơn, được phục vụ hoặc nhận được thứ gì đó trước."
    }
  },
  {
    id: 15,
    title: "其他都没什么问题。",
    titleVi: "Những câu khác đều không có vấn đề gì.",
    vocab: [
      { id: "15-1", hanzi: "留学", pinyin: "liú xué", type: "đgt", meaning: "du học", radical: "田", radicalMeaning: "ruộng - lưu lại", totalStrokes: 18, example: "她在中国留学两年了。", exampleVi: "Cô ấy du học ở Trung Quốc hai năm rồi." },
      { id: "15-2", hanzi: "水平", pinyin: "shuǐpíng", type: "dt", meaning: "trình độ", radical: "水", radicalMeaning: "nước - nước", totalStrokes: 9, example: "他的汉语水平很高。", exampleVi: "Trình độ tiếng Trung của anh ấy rất cao." },
      { id: "15-3", hanzi: "提高", pinyin: "tígāo", type: "đgt", meaning: "nâng cao, tiến bộ", radical: "手", radicalMeaning: "tay - nâng lên/đề", totalStrokes: 22, example: "我想提高我的汉语水平。", exampleVi: "Tôi muốn nâng cao trình độ tiếng Trung." },
      { id: "15-4", hanzi: "练习", pinyin: "liànxí", type: "dt", meaning: "bài tập", radical: "纟", radicalMeaning: "tơ - luyện tập", totalStrokes: 11 },
      { id: "15-5", hanzi: "完成", pinyin: "wánchéng", type: "đgt", meaning: "hoàn thành", radical: "宀", radicalMeaning: "mái nhà - hoàn thành", totalStrokes: 13, example: "你完成作业了吗？", exampleVi: "Bạn hoàn thành bài tập chưa?" },
      { id: "15-6", hanzi: "句子", pinyin: "jùzi", type: "dt", meaning: "câu", radical: "口", radicalMeaning: "miệng - câu văn", totalStrokes: 8 },
      { id: "15-7", hanzi: "其他", pinyin: "qítā", type: "dt", meaning: "cái khác", radical: "八", radicalMeaning: "tám - cái khác/kỳ", totalStrokes: 13, example: "除了这个，其他都可以。", exampleVi: "Ngoài cái này, những cái khác đều được." },
      { id: "15-8", hanzi: "发", pinyin: "fā", type: "đgt", meaning: "gửi, gửi đi", radical: "又", radicalMeaning: "lại - tóc", totalStrokes: 5 },
      { id: "15-9", hanzi: "要求", pinyin: "yāoqiú", type: "dt", meaning: "yêu cầu", radical: "女", radicalMeaning: "phụ nữ - yêu cầu", totalStrokes: 16 },
      { id: "15-10", hanzi: "注意", pinyin: "zhùyì", type: "đgt", meaning: "chú ý", radical: "水", radicalMeaning: "nước - chú ý", totalStrokes: 21 },
      { id: "15-11", hanzi: "上网", pinyin: "shàng wǎng", type: "đgt", meaning: "lên mạng", radical: "一", radicalMeaning: "một - lên mạng", totalStrokes: 9, example: "她每天上网看新闻。", exampleVi: "Cô ấy mỗi ngày lên mạng xem tin tức." },
      { id: "15-12", hanzi: "除了", pinyin: "chúle", type: "giới", meaning: "ngoài... ra", radical: "阜", radicalMeaning: "gò đất - ngoài ra", totalStrokes: 11 },
      { id: "15-13", hanzi: "新闻", pinyin: "xīnwén", type: "dt", meaning: "tin tức", radical: "斤", radicalMeaning: "rìu - mới mẻ", totalStrokes: 22, example: "我喜欢看国际新闻。", exampleVi: "Tôi thích xem tin tức quốc tế." },
      { id: "15-14", hanzi: "花", pinyin: "huā", type: "đgt", meaning: "tốn, tiêu tốn", radical: "艸", radicalMeaning: "cỏ - tốn/hoa", totalStrokes: 7 },
      { id: "15-15", hanzi: "极(了)", pinyin: "jí(le)", type: "phó", meaning: "hết sức, cực kỳ", radical: "木", radicalMeaning: "cây - cực độ", totalStrokes: 9 },
    ],
    dialogues: [
      {
        title: "在办公室 — Trong văn phòng",
        lines: [
          { speaker: "大山", text: "老师，我来中国留学两年了，但是我的汉语水平提高得一点儿也不快啊。" },
          { speaker: "老师", text: "你每天认真学习、做练习、完成作业，一直不错啊。" },
          { speaker: "大山", text: "这是我昨天的作业，您帮我看看对不对。" },
          { speaker: "老师", text: "写得不错，除了这个句子意思有些不清楚外，其他都没什么问题。" },
          { speaker: "大山", text: "谢谢老师！" },
          { speaker: "老师", text: "以后有什么不明白的地方，可以给我打电话或者发电子邮件。" },
        ]
      },
      {
        title: "在教室 — Trong lớp học",
        lines: [
          { speaker: "学生", text: "老师，除了小云，其他人都来了。" },
          { speaker: "老师", text: "比赛马上就要开始了，小云怎么还没来？" },
          { speaker: "学生", text: "刚才给她打电话了，她在路上呢。" },
          { speaker: "老师", text: "不等她了，我先给大家讲讲这次比赛的要求和一些需要注意的地方。" },
          { speaker: "学生", text: "老师，您放心，今天的比赛我们一定能拿第一。" },
        ]
      },
      {
        title: "在休息室 — Trong phòng giải lao",
        lines: [
          { speaker: "同事", text: "现在用电脑上网真方便啊！" },
          { speaker: "小刚", text: "是啊，除了看新闻，人们还可以在网上听歌、看电影、买东西。" },
          { speaker: "同事", text: "对了，你从网上买的那件衣服呢？怎么没见你穿？" },
          { speaker: "小刚", text: "那件衣服我穿着有点儿小，给我弟弟了。" },
          { speaker: "同事", text: "他满意吗？" },
          { speaker: "小刚", text: "不用花钱，还有新衣服穿，他满意极了。" },
        ]
      },
      {
        title: "在学校 — Ở trường",
        lines: [
          { speaker: "老师", text: "这次作业要求大家写两百字以上。" },
          { speaker: "学生", text: "老师，除了用电脑写，可以手写吗？" },
          { speaker: "老师", text: "当然可以，不过注意要写清楚。" },
          { speaker: "学生", text: "好的，谢谢老师！" },
        ]
      },
    ],
    reading: {
      text: "大山在中国留学已经两年了，他的汉语水平提高很快。他每天认真做练习，完成作业。老师说他写得不错，除了一个句子有些不清楚外，其他都没什么问题。大山很高兴，他还经常上网看新闻，练习汉语。他说除了学习，还要注意了解中国文化，这样汉语会提高得更快。他满意极了自己的进步。",
      pinyin: "Dà Shān zài Zhōngguó liú xué yǐjīng liǎng nián le, tā de hànyǔ shuǐpíng tígāo hěn kuài.",
      meaning: "Đại Sơn du học ở Trung Quốc đã hai năm rồi, trình độ tiếng Trung của anh ấy tiến bộ rất nhanh."
    },
    grammar: [
      {
        title: "除了……以外，都/还/也…… — Ngoài… ra, đều/cũng…",
        explanation: '"除了A以外，都/还/也B" diễn tả: loại trừ A, phần còn lại đều B.',
        examples: [
          { zh: "除了这个句子，其他都没什么问题。", vi: "Ngoài câu này ra, những câu khác đều không có vấn đề gì." },
          { zh: "除了星期天，他每天都来。", vi: "Ngoài chủ nhật ra, ngày nào anh ấy cũng đến." },
          { zh: "除了汉语，她还会说英语。", vi: "Ngoài tiếng Trung, cô ấy còn biết nói tiếng Anh." },
        ],
        fillInBlank: [
          { sentence: "___小云，其他同学___来了。", answer: "除了...都" },
          { sentence: "___看新闻，他___喜欢看电影。", answer: "除了...还" },
          { sentence: "___你，大家___同意了。", answer: "除了...都" },
        ]
      },
      {
        title: "疑问代词活用2 — Đại từ nghi vấn dùng linh hoạt (2)",
        explanation: '"什么、哪儿" dùng trong câu khẳng định để diễn tả "bất kỳ, tất cả".',
        examples: [
          { zh: "他什么都会做。", vi: "Anh ấy gì cũng biết làm." },
          { zh: "她哪儿都去过了。", vi: "Cô ấy đi đâu cũng đã đi qua." },
          { zh: "这件衣服谁都喜欢。", vi: "Cái áo này ai cũng thích." },
        ],
        fillInBlank: [
          { sentence: "他___都吃，不挑食。", answer: "什么" },
          { sentence: "她___都不怕。", answer: "什么" },
          { sentence: "这道题___都做不出来。", answer: "谁" },
        ]
      },
      {
        title: "程度的表达：极了 — Cách diễn tả mức độ: 极了",
        explanation: '"极了" đặt sau tính từ để diễn tả mức độ cao nhất: hết sức, cực kỳ.',
        examples: [
          { zh: "他满意极了。", vi: "Anh ấy hài lòng hết sức." },
          { zh: "今天热极了。", vi: "Hôm nay nóng cực kỳ." },
          { zh: "这个故事有意思极了。", vi: "Câu chuyện này thú vị cực kỳ." },
        ],
        fillInBlank: [
          { sentence: "这个蛋糕好吃___。", answer: "极了" },
          { sentence: "她高兴___，跳了起来。", answer: "极了" },
          { sentence: "外边冷___，我不想出去。", answer: "极了" },
        ]
      }
    ],
    proverb: {
      hanzi: "一是一，二是二",
      pinyin: "Yī shì yī, èr shì èr",
      meaning: "Một là một, hai là hai",
      explanation: "Ý nghĩa: Nói rõ ràng, minh bạch, không mập mờ. Đen là đen, trắng là trắng."
    }
  },
  {
    id: 16,
    title: "我现在累得下了班就想睡觉。",
    titleVi: "Bây giờ tôi mệt đến nỗi chỉ muốn đi ngủ sau khi hết giờ làm việc.",
    vocab: [
      { id: "16-1", hanzi: "城市", pinyin: "chéngshì", type: "dt", meaning: "thành phố", radical: "土", radicalMeaning: "đất - thành phố", totalStrokes: 14, example: "北京是中国的首都城市。", exampleVi: "Bắc Kinh là thủ đô của Trung Quốc." },
      { id: "16-2", hanzi: "如果", pinyin: "rúguǒ", type: "liên", meaning: "nếu", radical: "女", radicalMeaning: "phụ nữ - như/nếu", totalStrokes: 14, example: "如果有时间，就来找我。", exampleVi: "Nếu có thời gian, hãy đến tìm tôi." },
      { id: "16-3", hanzi: "认为", pinyin: "rènwéi", type: "đgt", meaning: "cho rằng", radical: "讠", radicalMeaning: "lời nói - nhận biết", totalStrokes: 8, example: "我认为这个方法很好。", exampleVi: "Tôi cho rằng phương pháp này rất tốt." },
      { id: "16-4", hanzi: "皮鞋", pinyin: "píxié", type: "dt", meaning: "giày da", radical: "皮", radicalMeaning: "da - da/bề mặt", totalStrokes: 20 },
      { id: "16-5", hanzi: "帽子", pinyin: "màozi", type: "dt", meaning: "mũ, nón", radical: "巾", radicalMeaning: "vải - mũ nón", totalStrokes: 15 },
      { id: "16-6", hanzi: "长", pinyin: "zhǎng", type: "đgt", meaning: "trưởng thành, lớn lên", radical: "长", radicalMeaning: "dài - lớn lên", totalStrokes: 8 },
      { id: "16-7", hanzi: "可爱", pinyin: "kě'ài", type: "tt", meaning: "đáng yêu, dễ thương", radical: "口", radicalMeaning: "miệng - có thể", totalStrokes: 15, example: "这只小狗真可爱！", exampleVi: "Con chó nhỏ này thật đáng yêu!" },
      { id: "16-8", hanzi: "米", pinyin: "mǐ", type: "dt", meaning: "mét", radical: "米", radicalMeaning: "gạo - mét/gạo", totalStrokes: 6 },
      { id: "16-9", hanzi: "公斤", pinyin: "gōngjīn", type: "dt", meaning: "kilôgram", radical: "八", radicalMeaning: "tám - công/kilogram", totalStrokes: 8 },
      { id: "16-10", hanzi: "鼻子", pinyin: "bízi", type: "dt", meaning: "mũi", radical: "鼻", radicalMeaning: "mũi - cái mũi", totalStrokes: 17 },
      { id: "16-11", hanzi: "头发", pinyin: "tóufa", type: "dt", meaning: "tóc", radical: "大", radicalMeaning: "lớn - đầu/tóc", totalStrokes: 10 },
      { id: "16-12", hanzi: "检查", pinyin: "jiǎnchá", type: "đgt", meaning: "kiểm tra, khám", radical: "木", radicalMeaning: "cây - kiểm tra", totalStrokes: 20, example: "医生检查了我的身体。", exampleVi: "Bác sĩ đã kiểm tra sức khỏe cho tôi." },
      { id: "16-13", hanzi: "刷牙", pinyin: "shuā yá", type: "đgt", meaning: "chải răng", radical: "刀", radicalMeaning: "dao - chải/quét", totalStrokes: 12, example: "每天刷牙两次。", exampleVi: "Mỗi ngày chải răng hai lần." },
      { id: "16-14", hanzi: "关系", pinyin: "guānxi", type: "dt", meaning: "quan hệ", radical: "八", radicalMeaning: "tám - liên quan đến", totalStrokes: 13, example: "我们的关系很好。", exampleVi: "Quan hệ của chúng tôi rất tốt." },
      { id: "16-15", hanzi: "别人", pinyin: "biérén", type: "dt", meaning: "người khác", radical: "刀", radicalMeaning: "dao - người khác", totalStrokes: 9 },
    ],
    dialogues: [
      {
        title: "在公司 — Trong công ty",
        lines: [
          { speaker: "小丽", text: "我不喜欢一直住在同一个城市，想去其他城市看一看。" },
          { speaker: "周明", text: "我年轻的时候也这么想，但是那时候没有钱，如果有钱，就去了。" },
          { speaker: "小丽", text: "那您现在为什么不去？" },
          { speaker: "周明", text: "现在钱不是问题了，主要是没有时间。" },
          { speaker: "小丽", text: "我认为现在您有时间也不会出去玩儿的。" },
          { speaker: "周明", text: "你说得对，我现在累得下了班就想睡觉。" },
        ]
      },
      {
        title: "在同事家 — Tại nhà đồng nghiệp",
        lines: [
          { speaker: "同事", text: "谢谢你们来看我女儿。你送的小皮鞋和小帽子真漂亮！" },
          { speaker: "小丽", text: "别客气，你女儿长得白白的、胖胖的，真可爱！现在多高了？" },
          { speaker: "同事", text: "快1米了，25公斤。" },
          { speaker: "小丽", text: "你看她鼻子小小的，头发黑黑的，长得像谁？" },
          { speaker: "同事", text: "像她爸爸，刚出生时她爸爸高兴得一个晚上都没睡着。" },
        ]
      },
      {
        title: "在公司 — Trong công ty",
        lines: [
          { speaker: "小刚", text: "我的牙还是很疼。" },
          { speaker: "同事", text: "如果不舒服，就去医院检查一下吧。" },
          { speaker: "小刚", text: "检查好几次了，但是没什么用。" },
          { speaker: "同事", text: "大夫怎么说的？" },
          { speaker: "小刚", text: "每次医生都告诉我，回家好好儿刷牙。" },
        ]
      },
      {
        title: "谈关系 — Nói về quan hệ",
        lines: [
          { speaker: "朋友A", text: "你觉得你和别人的关系怎么样？" },
          { speaker: "朋友B", text: "我认为我跟大家的关系都很好啊。" },
          { speaker: "朋友A", text: "如果有人说你的坏话，你会怎么办？" },
          { speaker: "朋友B", text: "那我会认为他们说得对，然后想想怎么改变。" },
        ]
      },
    ],
    reading: {
      text: "周明工作很忙，他现在累得下了班就想睡觉。他认为如果有时间，他一定要去其他城市看看。他同事的女儿刚出生不久，长得很可爱，鼻子小小的，头发黑黑的。小刚最近牙疼，去医院检查了好几次，但是医生只说让他好好刷牙，注意口腔卫生。小刚认为只要好好照顾自己，关系就会好起来的。",
      pinyin: "Zhōu Míng gōngzuò hěn máng, tā xiànzài lèi de xià le bān jiù xiǎng shuìjiào.",
      meaning: "Châu Minh làm việc rất bận, bây giờ anh ấy mệt đến mức tan làm là muốn ngủ ngay."
    },
    grammar: [
      {
        title: '"如果……（的话），（主语）就……" — Nếu… thì…',
        explanation: '"如果……就……" diễn tả điều kiện giả định và kết quả tương ứng.',
        examples: [
          { zh: "如果有钱，就去了。", vi: "Nếu có tiền thì đã đi rồi." },
          { zh: "如果不舒服，就去医院检查一下。", vi: "Nếu không khỏe, thì hãy đi bệnh viện kiểm tra." },
          { zh: "如果明天下雨，我们就不出去了。", vi: "Nếu ngày mai trời mưa, chúng tôi sẽ không ra ngoài." },
        ],
        fillInBlank: [
          { sentence: "___你有时间，___来找我玩儿。", answer: "如果...就" },
          { sentence: "___天气好，我们___去爬山。", answer: "如果...就" },
          { sentence: "___你不去，我___不去了。", answer: "如果...也" },
        ]
      },
      {
        title: "复杂的状态补语 — Bổ ngữ chỉ trạng thái có得",
        explanation: "动词 + 得 + 补语，补语说明动作的程度或状态。",
        examples: [
          { zh: "我累得下了班就想睡觉。", vi: "Tôi mệt đến mức tan làm là muốn ngủ." },
          { zh: "她高兴得跳起来了。", vi: "Cô ấy vui đến mức nhảy lên." },
          { zh: "他说得我都不好意思了。", vi: "Anh ấy nói làm tôi xấu hổ cả người." },
        ],
        fillInBlank: [
          { sentence: "他忙___没时间吃饭。", answer: "得" },
          { sentence: "她高兴___睡不着觉。", answer: "得" },
          { sentence: "这个故事有意思___我看了三遍。", answer: "得" },
        ]
      },
      {
        title: "单音节形容词重叠 — Tính từ một âm tiết được lặp lại",
        explanation: "Tính từ một âm tiết lặp lại (AA) biểu thị mức độ nhẹ nhàng, dễ chịu. Ví dụ: 白白的、胖胖的、小小的.",
        examples: [
          { zh: "她鼻子小小的，头发黑黑的，很可爱。", vi: "Mũi cô ấy nhỏ xíu, tóc đen nhánh, rất đáng yêu." },
          { zh: "他的眼睛大大的。", vi: "Mắt anh ấy to tròn." },
          { zh: "外边冷冷的，穿多一点儿吧。", vi: "Ngoài trời lạnh lạnh, mặc thêm một chút nhé." },
        ],
        fillInBlank: [
          { sentence: "他的手___的，很干净。", answer: "白白" },
          { sentence: "这个小猫___的，很可爱。", answer: "小小" },
          { sentence: "外边的空气___的，很舒服。", answer: "凉凉" },
        ]
      }
    ],
    proverb: {
      hanzi: "站得高，看得远",
      pinyin: "Zhàn dé gāo, kàn dé yuǎn",
      meaning: "Đứng càng cao, nhìn càng xa",
      explanation: "Ý nghĩa: Có tầm nhìn cao xa thì mới thấy được nhiều hơn, hiểu rõ hơn về sự vật."
    }
  },
  {
    id: 17,
    title: '谁都有办法看好你的"病"。',
    titleVi: "Ai cũng có cách chữa khỏi 'bệnh' của em.",
    vocab: [
      { id: "17-1", hanzi: "请假", pinyin: "qǐng jià", type: "đgt", meaning: "xin nghỉ phép", radical: "讠", radicalMeaning: "lời nói - mời/xin", totalStrokes: 21, example: "他今天请假了。", exampleVi: "Hôm nay anh ấy xin nghỉ phép." },
      { id: "17-2", hanzi: "一共", pinyin: "yīgòng", type: "phó", meaning: "tổng cộng", radical: "八", radicalMeaning: "tám - cùng nhau", totalStrokes: 6, example: "一共多少钱？", exampleVi: "Tất cả bao nhiêu tiền?" },
      { id: "17-3", hanzi: "邻居", pinyin: "línjū", type: "dt", meaning: "láng giềng", radical: "阜", radicalMeaning: "gò đất - hàng xóm", totalStrokes: 15, example: "我的邻居很友好。", exampleVi: "Hàng xóm của tôi rất thân thiện." },
      { id: "17-4", hanzi: "后来", pinyin: "hòulái", type: "dt", meaning: "sau này, sau đó", radical: "口", radicalMeaning: "miệng - sau này", totalStrokes: 13, example: "后来他去了北京。", exampleVi: "Sau đó anh ấy đến Bắc Kinh." },
      { id: "17-5", hanzi: "爱好", pinyin: "àihào", type: "dt", meaning: "sở thích", radical: "心", radicalMeaning: "tâm - yêu thương", totalStrokes: 16, example: "你有什么爱好？", exampleVi: "Bạn có sở thích gì?" },
      { id: "17-6", hanzi: "办法", pinyin: "bànfǎ", type: "dt", meaning: "cách, biện pháp", radical: "力", radicalMeaning: "sức - giải quyết", totalStrokes: 12, example: "我没有办法解决这个问题。", exampleVi: "Tôi không có cách nào giải quyết vấn đề này." },
      { id: "17-7", hanzi: "饱", pinyin: "bǎo", type: "tt", meaning: "no", radical: "食", radicalMeaning: "ăn uống - no", totalStrokes: 8 },
      { id: "17-8", hanzi: "为了", pinyin: "wèile", type: "giới", meaning: "để, vì", radical: "、", radicalMeaning: "chấm - vì/để", totalStrokes: 6, example: "为了健康，我每天跑步。", exampleVi: "Vì sức khỏe, tôi mỗi ngày đi chạy bộ." },
      { id: "17-9", hanzi: "决定", pinyin: "juédìng", type: "đgt", meaning: "quyết định", radical: "水", radicalMeaning: "nước - quyết/giải quyết", totalStrokes: 14, example: "我决定明天去北京。", exampleVi: "Tôi quyết định ngày mai đến Bắc Kinh." },
      { id: "17-10", hanzi: "必须", pinyin: "bìxū", type: "phó", meaning: "phải, nhất định phải", radical: "心", radicalMeaning: "tâm - nhất định phải", totalStrokes: 14, example: "你必须按时交作业。", exampleVi: "Bạn phải nộp bài tập đúng hạn." },
      { id: "17-11", hanzi: "根据", pinyin: "gēnjù", type: "giới", meaning: "dựa vào, theo", radical: "木", radicalMeaning: "cây - căn cứ/gốc", totalStrokes: 21, example: "请根据要求完成作业。", exampleVi: "Vui lòng hoàn thành bài tập theo yêu cầu." },
      { id: "17-12", hanzi: "情况", pinyin: "qíngkuàng", type: "dt", meaning: "tình huống, tình trạng", radical: "心", radicalMeaning: "tâm - tình huống", totalStrokes: 18 },
      { id: "17-13", hanzi: "口", pinyin: "kǒu", type: "lượng", meaning: "miệng/người (lượng từ)", radical: "口", radicalMeaning: "miệng - cái miệng", totalStrokes: 3 },
      { id: "17-14", hanzi: "渴", pinyin: "kě", type: "tt", meaning: "khát", radical: "水", radicalMeaning: "nước - khát", totalStrokes: 12 },
    ],
    dialogues: [
      {
        title: "在公司 — Trong công ty",
        lines: [
          { speaker: "小丽", text: "周经理，下个星期我可以请几天假吗？" },
          { speaker: "周明", text: "你有什么事？" },
          { speaker: "小丽", text: "我的一个老朋友结婚，我跟他两年没见了。" },
          { speaker: "周明", text: "你一共想请几天假？" },
          { speaker: "小丽", text: "三天。" },
        ]
      },
      {
        title: "在公司 — Trong công ty",
        lines: [
          { speaker: "同事", text: "小丽，那个高高的男人是你们公司的吗？你对他了解吗？" },
          { speaker: "小丽", text: "我们过去是邻居，后来是大学同学，关系一直很不错。" },
          { speaker: "同事", text: "他一般喜欢做什么？" },
          { speaker: "小丽", text: "他有很多爱好，唱歌、画画儿、踢足球，什么都会。" },
          { speaker: "同事", text: "真的？那你介绍我们认识认识吧。" },
          { speaker: "小丽", text: "不行，现在他是我丈夫。" },
        ]
      },
      {
        title: "在家 — Ở nhà",
        lines: [
          { speaker: "周太太", text: "最近我觉得哪儿都不舒服，你带我去医院检查检查吧。" },
          { speaker: "周明", text: "不用去医院，谁都有办法看好你的'病'。我问你，你多久没运动了？" },
          { speaker: "周太太", text: "我三年没运动了。" },
          { speaker: "周明", text: "谁都知道运动对身体好。但是你吃饱了就睡。" },
          { speaker: "周太太", text: "为了健康，我真应该多锻炼锻炼了。从明天起，我决定每天去长跑。" },
        ]
      },
      {
        title: "谈饮食 — Nói về ăn uống",
        lines: [
          { speaker: "朋友A", text: "你必须根据自己的情况来选择食物。" },
          { speaker: "朋友B", text: "是的，比如我吃饱了就不想动，渴了才喝水。" },
          { speaker: "朋友A", text: "这样对身体不好，应该多喝水，多运动。" },
          { speaker: "朋友B", text: "好的，为了健康，我决定改变这个习惯。" },
        ]
      },
    ],
    reading: {
      text: "小丽的一个老朋友要结婚了，她想请三天假去参加婚礼。她和这个朋友过去是邻居，后来是大学同学，关系一直很好。周太太最近身体不舒服，周明认为她不需要去医院，只要多锻炼就行。周太太决定为了健康，从明天起每天去跑步。她还决定必须根据身体情况来选择食物，少吃多动。",
      pinyin: "Xiǎo Lì de yī gè lǎo péngyou yào jiéhūn le, tā xiǎng qǐng sān tiān jià.",
      meaning: "Người bạn cũ của Tiểu Lệ sắp kết hôn, cô ấy muốn xin nghỉ ba ngày."
    },
    grammar: [
      {
        title: "双音节动词重叠 — Động từ có hai âm tiết được lặp lại",
        explanation: "Động từ hai âm tiết lặp lại (ABAB) biểu thị hành động thực hiện nhẹ nhàng, thử thử. Ví dụ: 检查检查, 锻炼锻炼, 了解了解.",
        examples: [
          { zh: "你带我去医院检查检查吧。", vi: "Bạn đưa tôi đến bệnh viện kiểm tra kiểm tra đi." },
          { zh: "我真应该多锻炼锻炼了。", vi: "Tôi thực sự nên luyện tập nhiều hơn." },
          { zh: "你介绍我们认识认识吧。", vi: "Bạn giới thiệu để chúng tôi quen nhau đi." },
        ],
        fillInBlank: [
          { sentence: "有时间来我们公司___看___。", answer: "参观参观" },
          { sentence: "你可以___试试这件衣服。", answer: "穿穿" },
          { sentence: "我去___问问他。", answer: "问问" },
        ]
      },
      {
        title: "疑问代词活用3 — Đại từ nghi vấn dùng linh hoạt (3)",
        explanation: '"谁都、什么都" = ai/cái gì cũng, biểu thị toàn bộ không có ngoại lệ.',
        examples: [
          { zh: "谁都有办法看好你的'病'。", vi: "Ai cũng có cách chữa khỏi 'bệnh' của bạn." },
          { zh: "谁都知道运动对身体好。", vi: "Ai cũng biết luyện tập tốt cho sức khỏe." },
          { zh: "什么都吃，身体才好。", vi: "Ăn gì cũng được thì sức khỏe mới tốt." },
        ],
        fillInBlank: [
          { sentence: "___都喜欢他，他很受欢迎。", answer: "谁" },
          { sentence: "那里的东西___很贵。", answer: "什么都" },
          { sentence: "她___都不怕，很勇敢。", answer: "什么" },
        ]
      },
      {
        title: "为了 — Để, vì",
        explanation: '"为了" biểu thị mục đích của hành động.',
        examples: [
          { zh: "为了健康，我决定每天去跑步。", vi: "Vì sức khỏe, tôi quyết định mỗi ngày đi chạy bộ." },
          { zh: "为了学好汉语，她每天学习三个小时。", vi: "Để học tốt tiếng Trung, cô ấy mỗi ngày học ba tiếng." },
          { zh: "他为了考上大学，努力学习。", vi: "Anh ấy cố gắng học để thi đỗ đại học." },
        ],
        fillInBlank: [
          { sentence: "___减肥，她每天锻炼。", answer: "为了" },
          { sentence: "___孩子，妈妈每天工作很忙。", answer: "为了" },
          { sentence: "他___买房子，存了很多钱。", answer: "为了" },
        ]
      }
    ],
    proverb: {
      hanzi: "先到先得",
      pinyin: "Xiān dào xiān dé",
      meaning: "Người đến sớm sẽ được trước",
      explanation: "Ý nghĩa: Ai nhanh chân hơn thì sẽ có được cơ hội tốt hơn."
    }
  },
  {
    id: 18,
    title: "我相信他们会同意的。",
    titleVi: "Tôi tin họ sẽ đồng ý.",
    vocab: [
      { id: "18-1", hanzi: "向", pinyin: "xiàng", type: "giới", meaning: "về phía, đến", radical: "口", radicalMeaning: "miệng - hướng về", totalStrokes: 6, example: "他向我问路。", exampleVi: "Anh ấy hỏi đường tôi." },
      { id: "18-2", hanzi: "万", pinyin: "wàn", type: "số", meaning: "vạn (10.000)", radical: "一", radicalMeaning: "một - vạn (10000)", totalStrokes: 3 },
      { id: "18-3", hanzi: "只", pinyin: "zhī", type: "lượng", meaning: "con (lượng từ cho động vật)", radical: "口", radicalMeaning: "miệng - chỉ có", totalStrokes: 5 },
      { id: "18-4", hanzi: "嘴", pinyin: "zuǐ", type: "dt", meaning: "miệng", radical: "口", radicalMeaning: "miệng - cái miệng", totalStrokes: 16 },
      { id: "18-5", hanzi: "动物", pinyin: "dòngwù", type: "dt", meaning: "động vật", radical: "力", radicalMeaning: "sức - chuyển động", totalStrokes: 14, example: "我最喜欢的动物是熊猫。", exampleVi: "Động vật tôi thích nhất là gấu trúc." },
      { id: "18-6", hanzi: "段", pinyin: "duàn", type: "lượng", meaning: "đoạn", radical: "殳", radicalMeaning: "gậy - đoạn", totalStrokes: 9 },
      { id: "18-7", hanzi: "不但……而且……", pinyin: "búdàn……érqiě……", type: "liên", meaning: "không những… mà còn…", radical: "人", radicalMeaning: "người - nhưng", totalStrokes: 18 },
      { id: "18-8", hanzi: "有名", pinyin: "yǒumíng", type: "tt", meaning: "nổi tiếng", radical: "月", radicalMeaning: "trăng - chỉ có", totalStrokes: 12, example: "这家餐厅很有名。", exampleVi: "Nhà hàng này rất nổi tiếng." },
      { id: "18-9", hanzi: "同意", pinyin: "tóngyì", type: "đgt", meaning: "đồng ý", radical: "口", radicalMeaning: "miệng - đồng ý/cùng", totalStrokes: 19, example: "大家都同意这个决定。", exampleVi: "Mọi người đều đồng ý với quyết định này." },
      { id: "18-10", hanzi: "相信", pinyin: "xiāngxìn", type: "đgt", meaning: "tin tưởng", radical: "木", radicalMeaning: "cây - lẫn nhau/hình ảnh", totalStrokes: 18, example: "我相信你能做到。", exampleVi: "Tôi tin bạn có thể làm được." },
      { id: "18-11", hanzi: "关于", pinyin: "guānyú", type: "giới", meaning: "về, liên quan đến", radical: "八", radicalMeaning: "tám - liên quan đến", totalStrokes: 9, example: "关于这件事，我有话说。", exampleVi: "Về việc này, tôi có điều muốn nói." },
      { id: "18-12", hanzi: "机会", pinyin: "jīhuì", type: "dt", meaning: "cơ hội", radical: "木", radicalMeaning: "cây - cơ hội", totalStrokes: 12, example: "这是一个很好的机会。", exampleVi: "Đây là một cơ hội rất tốt." },
      { id: "18-13", hanzi: "国家", pinyin: "guójiā", type: "dt", meaning: "đất nước, quốc gia", radical: "口", radicalMeaning: "miệng - đất nước", totalStrokes: 18, example: "中国是一个大国家。", exampleVi: "Trung Quốc là một đất nước lớn." },
      { id: "18-14", hanzi: "种", pinyin: "zhǒng", type: "lượng", meaning: "loại, giống", radical: "禾", radicalMeaning: "lúa - loại/giống", totalStrokes: 9 },
      { id: "18-15", hanzi: "特点", pinyin: "tèdiǎn", type: "dt", meaning: "đặc điểm", radical: "牛", radicalMeaning: "bò - đặc điểm", totalStrokes: 19 },
      { id: "18-16", hanzi: "奇怪", pinyin: "qíguài", type: "tt", meaning: "kỳ lạ, lạ lùng", radical: "大", radicalMeaning: "lớn - kỳ lạ", totalStrokes: 16, example: "这件事真奇怪。", exampleVi: "Việc này thật kỳ lạ." },
      { id: "18-17", hanzi: "地", pinyin: "dì", type: "dt", meaning: "đất, nơi chốn", radical: "土", radicalMeaning: "đất - đất/nơi", totalStrokes: 6 },
    ],
    dialogues: [
      {
        title: "在公司 — Trong công ty",
        lines: [
          { speaker: "大山", text: "我们想向公司提一个建议，但是不知道大家会不会同意。" },
          { speaker: "小丽", text: "什么建议？" },
          { speaker: "大山", text: "我们想在公司里养一只小狗，不但可以让大家开心，而且还可以让公司的气氛更活跃。" },
          { speaker: "小丽", text: "你觉得经理会同意吗？" },
          { speaker: "大山", text: "我相信他们会同意的。" },
        ]
      },
      {
        title: "在教室 — Trong lớp học",
        lines: [
          { speaker: "小明", text: "你怎么突然关心起体育来了？" },
          { speaker: "朋友", text: "我的男朋友喜欢看足球比赛，我被他影响的。" },
          { speaker: "小明", text: "看来只有爱，才能让人有变化。" },
          { speaker: "朋友", text: "是啊，为了和他的爱好一样，我天天看球赛。" },
          { speaker: "小明", text: "除了足球，他还影响你什么了？" },
          { speaker: "朋友", text: "我最近天天上网玩儿游戏，我的成绩差极了。" },
        ]
      },
      {
        title: "在饭馆儿 — Ở quán ăn",
        lines: [
          { speaker: "朋友", text: "那个拿着碗吃饭的人是你哥哥吗？他和你长得真像。" },
          { speaker: "大卫", text: "我们经常被别人认错。" },
          { speaker: "朋友", text: "只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。" },
          { speaker: "大卫", text: "除了父母以外，还有我们自己也能啊。" },
        ]
      },
      {
        title: "谈动物 — Nói về động vật",
        lines: [
          { speaker: "同学A", text: "你觉得世界上最有名的动物是什么？" },
          { speaker: "同学B", text: "我觉得是熊猫，中国的熊猫不但有名，而且很可爱。" },
          { speaker: "同学A", text: "是啊，关于熊猫有很多有意思的故事。" },
          { speaker: "同学B", text: "希望以后有机会能去看看真正的熊猫。" },
        ]
      },
    ],
    reading: {
      text: "大山和同学想向公司提一个建议，在公司里养一只小狗。他相信经理会同意的，因为小狗不但可以让大家开心，而且还可以让公司的气氛更好。关于这件事，他们还没有机会跟经理说。公司里的同事都喜欢动物，特别是喜欢熊猫这种中国有名的动物。大山觉得人和动物之间有很多有意思的特点值得了解。",
      pinyin: "Dà Shān hé tóngxué xiǎng xiàng gōngsī tí yī gè jiànyì, zài gōngsī lǐ yǎng yī zhī xiǎo gǒu.",
      meaning: "Đại Sơn và bạn học muốn đề xuất với công ty nuôi một con chó nhỏ trong văn phòng."
    },
    grammar: [
      {
        title: '只要……就…… — Chỉ cần… là…',
        explanation: '"只要A，就B" diễn tả: chỉ cần điều kiện A được thỏa mãn thì kết quả B sẽ xảy ra.',
        examples: [
          { zh: "只要我有时间，就一定跟你去旅游。", vi: "Chỉ cần tôi có thời gian là nhất định sẽ đi du lịch cùng bạn." },
          { zh: "只要努力学习，就能考上好大学。", vi: "Chỉ cần chăm chỉ học tập là có thể thi đỗ trường tốt." },
          { zh: "只要你高兴，怎么都行。", vi: "Chỉ cần bạn vui là được." },
        ],
        fillInBlank: [
          { sentence: "___你喜欢，___可以买。", answer: "只要...就" },
          { sentence: "___天气好，我们___出去玩儿。", answer: "只要...就" },
          { sentence: "___有爱，___能让人有变化。", answer: "只要...才" },
        ]
      },
      {
        title: '介词"关于" — Giới từ 关于',
        explanation: '"关于" đặt trước danh từ để dẫn ra đối tượng đề cập.',
        examples: [
          { zh: "关于这件事，我们还没决定呢。", vi: "Về việc này, chúng tôi chưa quyết định." },
          { zh: "关于中国文化，他了解很多。", vi: "Về văn hóa Trung Quốc, anh ấy hiểu rất nhiều." },
          { zh: "关于出国学习的事，妈妈已经同意了。", vi: "Về việc du học nước ngoài, mẹ đã đồng ý rồi." },
        ],
        fillInBlank: [
          { sentence: "___这个问题，你有什么看法？", answer: "关于" },
          { sentence: "___熊猫的故事有很多。", answer: "关于" },
          { sentence: "___这次旅游，我们还没有计划。", answer: "关于" },
        ]
      },
      {
        title: '不但……而且…… — Không những… mà còn…',
        explanation: '"不但A，而且B" diễn tả A và B cùng đúng, B bổ sung thêm cho A.',
        examples: [
          { zh: "小狗不但可以让大家开心，而且让公司气氛更好。", vi: "Chó con không những khiến mọi người vui, mà còn giúp không khí công ty tốt hơn." },
          { zh: "她不但聪明，而且努力。", vi: "Cô ấy không những thông minh mà còn cố gắng." },
          { zh: "这道菜不但好吃，而且便宜。", vi: "Món này không những ngon mà còn rẻ." },
        ],
        fillInBlank: [
          { sentence: "他___会说汉语，___会说英语。", answer: "不但...而且" },
          { sentence: "这里___风景好，___空气新鲜。", answer: "不但...而且" },
          { sentence: "学习汉语___有意思，___有用。", answer: "不但...而且" },
        ]
      }
    ],
    proverb: {
      hanzi: "一是一，二是二",
      pinyin: "Yī shì yī, èr shì èr",
      meaning: "Một là một, hai là hai",
      explanation: "Ý nghĩa: Nói thẳng thắn, rõ ràng, không quanh co."
    }
  },
  {
    id: 19,
    title: "你没看出来吗？",
    titleVi: "Anh không nhìn ra được à?",
    vocab: [
      { id: "19-1", hanzi: "耳朵", pinyin: "ěrduo", type: "dt", meaning: "tai", radical: "耳", radicalMeaning: "tai - cái tai", totalStrokes: 12, example: "他的耳朵很大。", exampleVi: "Tai anh ấy rất to." },
      { id: "19-2", hanzi: "脸", pinyin: "liǎn", type: "dt", meaning: "mặt, khuôn mặt", radical: "肉", radicalMeaning: "thịt - khuôn mặt", totalStrokes: 11, example: "她的脸很漂亮。", exampleVi: "Khuôn mặt cô ấy rất đẹp." },
      { id: "19-3", hanzi: "短", pinyin: "duǎn", type: "tt", meaning: "ngắn", radical: "矢", radicalMeaning: "tên bắn - ngắn", totalStrokes: 12, example: "她喜欢留短头发。", exampleVi: "Cô ấy thích để tóc ngắn." },
      { id: "19-4", hanzi: "马", pinyin: "mǎ", type: "dt", meaning: "ngựa", radical: "马", radicalMeaning: "ngựa - con ngựa", totalStrokes: 3 },
      { id: "19-5", hanzi: "张", pinyin: "zhāng", type: "lượng", meaning: "tờ, tấm", radical: "弓", radicalMeaning: "cung - tờ/tấm", totalStrokes: 7 },
      { id: "19-6", hanzi: "位", pinyin: "wèi", type: "lượng", meaning: "vị (lượng từ kính trọng cho người)", radical: "人", radicalMeaning: "người - vị trí/vị", totalStrokes: 7 },
      { id: "19-7", hanzi: "蓝", pinyin: "lán", type: "tt", meaning: "màu xanh da trời", radical: "艸", radicalMeaning: "cỏ - màu xanh dương", totalStrokes: 13 },
      { id: "19-8", hanzi: "秋(天)", pinyin: "qiū(tiān)", type: "dt", meaning: "(mùa) thu", radical: "禾", radicalMeaning: "lúa - mùa thu", totalStrokes: 9 },
      { id: "19-9", hanzi: "过", pinyin: "guò", type: "đgt", meaning: "ăn (mừng), trải qua", radical: "辶", radicalMeaning: "đi - ăn mừng/trải qua", totalStrokes: 6 },
      { id: "19-10", hanzi: "鸟", pinyin: "niǎo", type: "dt", meaning: "chim", radical: "鸟", radicalMeaning: "chim - con chim", totalStrokes: 5, example: "公园里有很多鸟。", exampleVi: "Trong công viên có nhiều chim." },
      { id: "19-11", hanzi: "哭", pinyin: "kū", type: "đgt", meaning: "khóc", radical: "口", radicalMeaning: "miệng - khóc", totalStrokes: 10, example: "孩子在哭，怎么了？", exampleVi: "Đứa bé đang khóc, sao vậy?" },
      { id: "19-12", hanzi: "黄河", pinyin: "Huáng Hé", type: "riêng", meaning: "Hoàng Hà (con sông lớn thứ hai ở Trung Quốc)", radical: "黄", radicalMeaning: "vàng - màu vàng", totalStrokes: 19, example: "黄河是中国的母亲河。", exampleVi: "Hoàng Hà là con sông mẹ của Trung Quốc." },
      { id: "19-13", hanzi: "船", pinyin: "chuán", type: "dt", meaning: "thuyền, tàu", radical: "舟", radicalMeaning: "thuyền - con thuyền", totalStrokes: 11, example: "我们坐船游览了湖。", exampleVi: "Chúng tôi đi thuyền tham quan hồ." },
      { id: "19-14", hanzi: "经过", pinyin: "jīngguò", type: "đgt", meaning: "đi ngang qua", radical: "纟", radicalMeaning: "tơ - đi ngang qua", totalStrokes: 14 },
    ],
    dialogues: [
      {
        title: "在家 — Ở nhà",
        lines: [
          { speaker: "爸爸", text: "女儿最近喜欢把头发放在耳朵后面，你知道为什么吗？" },
          { speaker: "妈妈", text: "这样可以使她的脸看上去漂亮一些。" },
          { speaker: "爸爸", text: "我最近觉得她和以前不太一样了。" },
          { speaker: "妈妈", text: "女儿变化不小，她小时候喜欢短头发、像男孩子一样。" },
          { speaker: "爸爸", text: "我也想起来了。她现在慢慢地开始像个女孩子了。" },
        ]
      },
      {
        title: "在看照片 — Đang xem ảnh",
        lines: [
          { speaker: "小丽", text: "上次我们参加骑马比赛的照片，我选了几张洗出来了。" },
          { speaker: "同事", text: "快给我看看。骑得最快的这位是谁？" },
          { speaker: "小丽", text: "你没看出来吗？他是小刚啊。" },
          { speaker: "同事", text: "怎么看上去跟现在不太一样？" },
          { speaker: "小丽", text: "他上班穿西服、衬衫，比赛的时候穿的是运动服。" },
          { speaker: "同事", text: "他今天穿蓝西服，看上去像四十多岁，还是穿运动服让他更年轻。" },
        ]
      },
      {
        title: "在小丽家 — Tại nhà chị Lệ",
        lines: [
          { speaker: "朋友", text: "我们一年没见面了吧？" },
          { speaker: "小丽", text: "听说你都有女儿了？她多大了？" },
          { speaker: "朋友", text: "她去年秋天出生的，刚过完一岁生日。" },
          { speaker: "小丽", text: "她喜欢什么？我送给她。" },
          { speaker: "朋友", text: "她就喜欢听她爸爸学鸟叫。哭的时候，只要他爸爸学小鸟叫，她马上就安静下来了。" },
          { speaker: "小丽", text: "啊？这个礼物我没办法送。" },
        ]
      },
      {
        title: "在旅途中 — Trong chuyến đi",
        lines: [
          { speaker: "游客", text: "这次旅游，我去了不少地方，每个地方都让我非常难忘。" },
          { speaker: "导游", text: "您去了黄河了吗？" },
          { speaker: "游客", text: "去了，我坐在船上，一边看一边照相。一路上经过了很多地方，每个地方都不一样。" },
          { speaker: "导游", text: "是啊，黄河是中国有名的大河，值得好好看看。" },
        ]
      },
    ],
    reading: {
      text: "小丽和同事一起看上次骑马比赛的照片。同事没认出骑得最快的那位是小刚，因为小刚平时穿西服，比赛时穿运动服，看上去很不一样。小丽的朋友来拜访，她一年前秋天生了一个女儿，刚过完一岁生日。这个小女孩最喜欢听爸爸学鸟叫，一哭就安静下来，真有意思。这个礼物没办法送给她，只能让爸爸来。",
      pinyin: "Xiǎo Lì hé tóngshì yīqǐ kàn shàng cì qímǎ bǐsài de zhàopiàn.",
      meaning: "Tiểu Lệ và đồng nghiệp cùng xem ảnh cuộc thi cưỡi ngựa lần trước."
    },
    grammar: [
      {
        title: "趋向补语的引申意义 — Nghĩa mở rộng của bổ ngữ phương hướng",
        explanation: "起来 không chỉ có nghĩa vật lý là 'đứng lên' mà còn có nghĩa trừu tượng là 'bắt đầu, phát sinh'.",
        examples: [
          { zh: "她马上就安静下来了。", vi: "Cô bé lập tức yên tĩnh lại ngay." },
          { zh: "他慢慢地想起来了。", vi: "Anh ấy từ từ nhớ ra rồi." },
          { zh: "天气冷起来了。", vi: "Thời tiết bắt đầu lạnh rồi." },
        ],
        fillInBlank: [
          { sentence: "听了这个消息，他高兴___了。", answer: "起来" },
          { sentence: "她突然哭___了。", answer: "起来" },
          { sentence: "孩子慢慢安静___了。", answer: "下来" },
        ]
      },
      {
        title: '"使""叫""让" — Sử,叫, 让',
        explanation: '"使/叫/让" dùng trước tân ngữ + động từ để diễn tả khiến/cho/để ai đó làm gì.',
        examples: [
          { zh: "这样可以使她的脸看上去漂亮一些。", vi: "Như vậy có thể khiến mặt cô ấy trông đẹp hơn." },
          { zh: "只要他爸爸学小鸟叫，她马上就安静下来了。", vi: "Chỉ cần bố học tiếng chim hót là cô bé yên ngay." },
          { zh: "让我想想。", vi: "Để tôi suy nghĩ đã." },
        ],
        fillInBlank: [
          { sentence: "这件衣服___我看起来更年轻了。", answer: "使/让" },
          { sentence: "妈妈___我去买东西。", answer: "让" },
          { sentence: "这首歌___我想起了家乡。", answer: "使/让" },
        ]
      },
      {
        title: "看出来 — Nhìn ra, nhận ra",
        explanation: '"看出来" = nhìn mà nhận ra được. Kết hợp 看 + 出 + 来, biểu thị kết quả của việc nhìn.',
        examples: [
          { zh: "你没看出来吗？他是小刚啊。", vi: "Bạn không nhìn ra à? Đó là Tiểu Cương đấy." },
          { zh: "我看出来了，他很累。", vi: "Tôi nhìn ra rồi, anh ấy rất mệt." },
          { zh: "你能看出来她有多大吗？", vi: "Bạn có thể đoán được cô ấy bao nhiêu tuổi không?" },
        ],
        fillInBlank: [
          { sentence: "你___他是谁吗？", answer: "看出来" },
          { sentence: "我没___他在生气。", answer: "看出来" },
          { sentence: "她没___照片上的人是自己。", answer: "看出来" },
        ]
      }
    ],
    proverb: {
      hanzi: "不可同日而语",
      pinyin: "Bù kě tóng rì ér yǔ",
      meaning: "Không thể so sánh với nhau",
      explanation: "Ý nghĩa: Hai thứ quá chênh lệch nhau, không thể đem ra so sánh được."
    }
  },
  {
    id: 20,
    title: "我被他影响了。",
    titleVi: "Mình chịu ảnh hưởng từ anh ấy.",
    vocab: [
      { id: "20-1", hanzi: "照相机", pinyin: "zhàoxiàngjī", type: "dt", meaning: "máy chụp ảnh", radical: "火", radicalMeaning: "lửa - máy ảnh/chiếu sáng", totalStrokes: 28, example: "我新买了一台照相机。", exampleVi: "Tôi mới mua một chiếc máy ảnh." },
      { id: "20-2", hanzi: "被", pinyin: "bèi", type: "giới", meaning: "(được dùng để chỉ thể bị động) bị", radical: "衣", radicalMeaning: "áo - bị (bị động)", totalStrokes: 10, example: "我的钱包被人拿走了。", exampleVi: "Ví tiền của tôi bị ai đó lấy mất." },
      { id: "20-3", hanzi: "难过", pinyin: "nánguò", type: "tt", meaning: "buồn", radical: "隹", radicalMeaning: "chim - khó/buồn", totalStrokes: 16, example: "听到这个消息，她很难过。", exampleVi: "Nghe tin này, cô ấy rất buồn." },
      { id: "20-4", hanzi: "东", pinyin: "dōng", type: "dt", meaning: "phía đông", radical: "木", radicalMeaning: "cây - phía đông", totalStrokes: 5 },
      { id: "20-5", hanzi: "信用卡", pinyin: "xìnyòngkǎ", type: "dt", meaning: "thẻ tín dụng", radical: "人", radicalMeaning: "người - thẻ tín dụng/tin", totalStrokes: 19, example: "我用信用卡付款。", exampleVi: "Tôi dùng thẻ tín dụng để thanh toán." },
      { id: "20-6", hanzi: "关心", pinyin: "guānxīn", type: "đgt", meaning: "quan tâm, chú ý", radical: "八", radicalMeaning: "tám - liên quan đến", totalStrokes: 10, example: "她很关心家人。", exampleVi: "Cô ấy rất quan tâm đến gia đình." },
      { id: "20-7", hanzi: "只有……才……", pinyin: "zhǐyǒu……cái……", type: "liên", meaning: "chỉ có… mới…", radical: "口", radicalMeaning: "miệng - chỉ có", totalStrokes: 14 },
      { id: "20-8", hanzi: "成绩", pinyin: "chéngjì", type: "dt", meaning: "thành tích, kết quả", radical: "戈", radicalMeaning: "giáo - thành tích", totalStrokes: 17, example: "他这次考试成绩很好。", exampleVi: "Kết quả thi lần này của anh ấy rất tốt." },
      { id: "20-9", hanzi: "碗", pinyin: "wǎn", type: "dt", meaning: "bát", radical: "石", radicalMeaning: "đá - cái bát", totalStrokes: 13, example: "请给我一个碗。", exampleVi: "Vui lòng cho tôi một cái bát." },
      { id: "20-10", hanzi: "分", pinyin: "fēn", type: "đgt", meaning: "phân biệt", radical: "刀", radicalMeaning: "dao - phân biệt", totalStrokes: 4 },
      { id: "20-11", hanzi: "解决", pinyin: "jiějué", type: "đgt", meaning: "giải quyết", radical: "角", radicalMeaning: "sừng - giải quyết", totalStrokes: 19, example: "我们要想办法解决这个问题。", exampleVi: "Chúng ta phải tìm cách giải quyết vấn đề này." },
      { id: "20-12", hanzi: "试", pinyin: "shì", type: "đgt", meaning: "thử", radical: "讠", radicalMeaning: "lời nói - thử", totalStrokes: 8, example: "你可以先试一试。", exampleVi: "Bạn có thể thử trước đã." },
      { id: "20-13", hanzi: "真正", pinyin: "zhēnzhèng", type: "phó", meaning: "thật sự", radical: "目", radicalMeaning: "mắt - thật sự", totalStrokes: 15 },
      { id: "20-14", hanzi: "多么", pinyin: "duōme", type: "phó", meaning: "(mức độ tương đối cao) mấy, bao nhiêu", radical: "夕", radicalMeaning: "chiều tối - nhiều", totalStrokes: 9 },
    ],
    dialogues: [
      {
        title: "在休息室 — Trong phòng giải lao",
        lines: [
          { speaker: "小丽", text: "我的照相机被谁拿走了？怎么找不到了？" },
          { speaker: "同事", text: "你再找找。是不是没带来？" },
          { speaker: "小丽", text: "我找了，没找到。" },
          { speaker: "同事", text: "别难过了，再买一个吧，公司东门外不就有一个大商场吗？" },
          { speaker: "小丽", text: "但是我这个月信用卡里的钱已经花得差不多了。" },
        ]
      },
      {
        title: "在教室 — Trong lớp học",
        lines: [
          { speaker: "小明", text: "你怎么突然关心起体育来了？" },
          { speaker: "朋友", text: "我的男朋友喜欢看足球比赛，我被他影响的。" },
          { speaker: "小明", text: "看来只有爱，才能让人有变化。" },
          { speaker: "朋友", text: "是啊，为了和他的爱好一样，我天天看球赛。" },
          { speaker: "小明", text: "除了足球，他还影响你什么了？" },
          { speaker: "朋友", text: "我最近天天上网玩儿游戏，我的成绩差极了。" },
        ]
      },
      {
        title: "在饭馆儿 — Ở quán ăn",
        lines: [
          { speaker: "朋友", text: "那个拿着碗吃饭的人是你哥哥吗？他和你长得真像。" },
          { speaker: "大卫", text: "我们经常被别人认错。" },
          { speaker: "朋友", text: "只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。" },
          { speaker: "大卫", text: "除了父母以外，还有我们自己也能啊。" },
          { speaker: "朋友", text: "你们两个除了长得像，还有什么相同的地方？" },
          { speaker: "大卫", text: "我们住在同一个楼、同一个房间……" },
        ]
      },
      {
        title: "在学校 — Ở trường",
        lines: [
          { speaker: "同学", text: "年轻人遇到难题，常常很着急，不知道怎么办。" },
          { speaker: "老师", text: "其实，不同的问题有不同的解决办法。有些问题看上去很难，但是做起来非常简单。" },
          { speaker: "同学", text: "老师，您的意思是要试着去做？" },
          { speaker: "老师", text: "对，所以只有真正做事情的时候，才能了解有多难。不过，我们一定要相信：多么难的问题，都会被解决的。" },
        ]
      },
    ],
    reading: {
      text: "小丽的照相机被人拿走了，她很难过，但是同事安慰她再买一个就好了。小明的朋友被男朋友影响，开始关心体育了，为了和他的爱好一样，天天看球赛，但是成绩差极了。老师说，遇到难题不要着急，要试着去解决。只有真正做事情的时候，才能了解有多难。但是我们要相信，多么难的问题，都会被解决的。",
      pinyin: "Xiǎo Lì de zhàoxiàngjī bèi rén ná zǒu le, tā hěn nánguò.",
      meaning: "Máy chụp ảnh của Tiểu Lệ bị ai đó lấy đi rồi, cô ấy rất buồn."
    },
    grammar: [
      {
        title: '"被"字句 — Câu bị động với 被',
        explanation: '"A被B + 动词" diễn tả A chịu tác động của hành động do B thực hiện (câu bị động).',
        examples: [
          { zh: "我的照相机被谁拿走了？", vi: "Máy chụp ảnh của tôi bị ai lấy đi rồi?" },
          { zh: "我被他影响的。", vi: "Tôi bị anh ấy ảnh hưởng." },
          { zh: "我们经常被别人认错。", vi: "Chúng tôi thường bị người khác nhận nhầm." },
        ],
        fillInBlank: [
          { sentence: "他的手机___弟弟拿走了。", answer: "被" },
          { sentence: "那本书___同学借去了。", answer: "被" },
          { sentence: "门___风吹开了。", answer: "被" },
        ]
      },
      {
        title: '只有……才…… — Chỉ có… mới…',
        explanation: '"只有A，才B" diễn tả chỉ khi điều kiện A được thỏa mãn, B mới xảy ra.',
        examples: [
          { zh: "只有爱，才能让人有变化。", vi: "Chỉ có tình yêu mới có thể khiến người ta thay đổi." },
          { zh: "只有真正做事情的时候，才能了解有多难。", vi: "Chỉ khi thực sự làm việc mới hiểu được khó đến mức nào." },
          { zh: "只有你们的爸爸妈妈才能分出来。", vi: "Chỉ có bố mẹ các bạn mới phân biệt được." },
        ],
        fillInBlank: [
          { sentence: "___努力学习，___能考上好大学。", answer: "只有...才" },
          { sentence: "___有健康的身体，___能做更多的事。", answer: "只有...才" },
          { sentence: "___你来，他___会来。", answer: "只有...才" },
        ]
      },
      {
        title: "多么…… — Biết bao, mấy, bao nhiêu",
        explanation: '"多么" biểu thị mức độ cao trong câu cảm thán hoặc câu điều kiện.',
        examples: [
          { zh: "多么难的问题，都会被解决的。", vi: "Dù khó đến đâu cũng sẽ được giải quyết." },
          { zh: "这里的风景多么美啊！", vi: "Phong cảnh ở đây đẹp biết bao!" },
          { zh: "多么好的机会啊！", vi: "Một cơ hội tốt biết bao!" },
        ],
        fillInBlank: [
          { sentence: "___难的事，他都能做到。", answer: "多么" },
          { sentence: "今天的天气___好啊！", answer: "多么" },
          { sentence: "___长的路，他都走过来了。", answer: "多么" },
        ]
      }
    ],
    proverb: {
      hanzi: "早睡早起身体好",
      pinyin: "Zǎo shuì zǎo qǐ shēntǐ hǎo",
      meaning: "Ngủ sớm dậy sớm tốt cho sức khỏe",
      explanation: "Ý nghĩa: Ngủ sớm và dậy sớm là thói quen tốt giúp cơ thể khỏe mạnh."
    }
  },
];
