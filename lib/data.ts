// ============================================================
// 个人站 · 内容数据
// 设计风格参考:@HOWTO 小赵同学吖 - 档案卡式 portfolio
// ============================================================

export const profile = {
  name: "张三",
  title: "AI 产品经理 / Product Manager",
  subtitle: "在 LLM 产品化与人机交互之间找平衡",
  location: "北京 · 望京",
  email: "zhangsan@example.com",
  avatar: "/avatar.jpg",

  socials: [
    { label: "GitHub",   url: "https://github.com/yourname",  icon: "github" },
    { label: "知乎",     url: "https://www.zhihu.com/people/yourname", icon: "zhihu" },
    { label: "小红书",   url: "https://www.xiaohongshu.com/user/yourname", icon: "xhs" },
  ],

  intro: [
    "北大计算机硕士 · 现就职于某互联网大厂,做 AI 产品。",
    "最近在折腾 Agent / RAG / 多模态,关注产品从 0 到 1 的过程。",
    "业余写点产品思考,相信 AI 时代的核心是\"重新理解用户需求\"。",
  ],

  status: {
    emoji: "✦",
    text: "AI × 用户决策 · 正在新项目探索",
  },

  // 技能标签 (首页 Hero 下方)
  skillTags: [
    { label: "用户产品", color: "bg-rainbow-pink/40" },
    { label: "AI 产品", color: "bg-rainbow-purple/40" },
    { label: "策略产品", color: "bg-rainbow-blue/40" },
    { label: "数据分析", color: "bg-rainbow-mint/40" },
  ],
};

// ============================================================
// 档案卡 · 互动抽取数据
// (首页核心特色:点击随机抽一张)
// ============================================================
export const archiveCards = [
  {
    id: "ai-skill",
    title: "AI 技能",
    subtitle: "AI Native",
    desc: "熟练使用 LLM / RAG / Agent 工具链,把 AI 能力封装成产品功能",
    tags: ["Prompt", "RAG", "Workflow"],
    color: "mint",       // mint / pink / yellow / blue / purple
    icon: "✨",
  },
  {
    id: "product-thinking",
    title: "产品 Sense",
    subtitle: "User Sense",
    desc: "能从用户视角拆解需求,把模糊的痛点变成可落地的产品方案",
    tags: ["用户访谈", "需求分析", "PRD"],
    color: "pink",
    icon: "💡",
  },
  {
    id: "data-driven",
    title: "数据驱动",
    subtitle: "Data Driven",
    desc: "A/B 测试、漏斗分析、用户分群,从数据中找到增长杠杆",
    tags: ["A/B 测试", "SQL", "指标体系"],
    color: "blue",
    icon: "📊",
  },
  {
    id: "execution",
    title: "项目推动",
    subtitle: "Ship It",
    desc: "能在算法 / 设计 / 研发之间斡旋,把项目按期上线",
    tags: ["跨部门协作", "敏捷", "OKR"],
    color: "yellow",
    icon: "🚀",
  },
  {
    id: "research",
    title: "用户研究",
    subtitle: "Research",
    desc: "深度访谈 + 行为数据分析,挖掘用户真实需求",
    tags: ["访谈", "问卷", "可用性测试"],
    color: "purple",
    icon: "🔍",
  },
  {
    id: "writing",
    title: "内容表达",
    subtitle: "Writing",
    desc: "能把复杂技术讲清楚,撰写可读性强的 PRD 和文档",
    tags: ["PRD", "技术博客", "文档"],
    color: "pink",
    icon: "✍️",
  },
  {
    id: "ai-research",
    title: "AI 前沿",
    subtitle: "Frontier AI",
    desc: "关注 LLM / Agent / 多模态前沿动态,定期做行业研究",
    tags: ["论文阅读", "竞品分析", "趋势研判"],
    color: "blue",
    icon: "🧠",
  },
  {
    id: "team-lead",
    title: "团队管理",
    subtitle: "Leadership",
    desc: "带过 5 人 PM 小组,擅长目标拆解与人才培养",
    tags: ["目标管理", "1on1", "招聘"],
    color: "mint",
    icon: "👥",
  },
  {
    id: "vibe-coding",
    title: "Vibe Coding",
    subtitle: "Maker",
    desc: "业余时间用 AI 工具独立开发,做有创意的小产品",
    tags: ["Cursor", "Claude Code", "Side Project"],
    color: "purple",
    icon: "🛠️",
  },
];

// ============================================================
// 教育背景 (THE LEARNING PATH)
// ============================================================
export const education = [
  {
    school: "中国科学院大学",
    schoolEn: "UCAS",
    major: "金融工程 / 硕士",
    period: "2024.09 - 2027.06",
    badge: "🌟",
    desc: "大数据与机器学习、金融统计分析与运用、高级计量经济学、人工智能与金融市场。",
    courses: ["机器学习", "金融工程", "计量经济", "Python"],
    badgeIcon: "🎓",
  },
  {
    school: "北京科技大学",
    schoolEn: "USTB",
    major: "金融工程 / 本科",
    period: "2020.09 - 2024.06",
    badge: "✨",
    desc: "金融数学基础扎实,获校级奖学金,主攻量化方向。",
    courses: ["数学分析", "金融工程", "计量经济", "数据库"],
    badgeIcon: "🎓",
  },
];

// ============================================================
// 工作 / 实习经历 (THE CREATOR)
// ============================================================
export const experiences = [
  {
    year: "2025.06 - 2026.07",
    company: "全栈开发 · Vibe Coding",
    role: "独立开发者",
    desc: "独立完成 3 个完整 Web 项目,涉及产品设计、UI 设计、前后端开发、部署上线全流程。",
    highlights: [
      "主导 0 到 1 产品规划,产出完整 PRD",
      "用 Cursor + Claude Code 完成前后端开发",
      "用 Cloudflare Pages 一键部署,带 HTTPS",
    ],
    cover: "/exp/vibe.jpg",
    tags: ["Vibe Coding", "独立开发", "全栈"],
  },
  {
    year: "2024.06 - 2024.09",
    company: "字节跳动 · AI 产品实习生",
    role: "AI 产品实习",
    desc: "参与豆包 AI 助手功能迭代,主导 3 个核心模块的产品设计。",
    highlights: [
      "参与豆包 AI 助手功能迭代",
      "与算法团队协作,推动 LLM 在对话场景的落地",
      "产出 5 篇 PRD,跟踪上线后核心指标提升 18%",
    ],
    cover: "/exp/bytedance.jpg",
    tags: ["LLM", "B 端", "实习"],
  },
  {
    year: "2023.07 - 2023.10",
    company: "腾讯 · 产品实习生",
    role: "产品实习",
    desc: "参与微信视频号推荐策略优化,撰写数据分析报告。",
    highlights: [
      "参与微信视频号推荐策略优化",
      "撰写数据分析报告,识别 3 个增长机会点",
    ],
    cover: "/exp/tencent.jpg",
    tags: ["推荐", "策略"],
  },
];

// ============================================================
// 个人作品 / 项目 (VIBE CODING + AI 作品)
// ============================================================
export const projects = [
  {
    id: "job-hunter-pro",
    title: "职途 AI · 求职助手",
    tagline: "聚合 / 追踪 / 匹配 / 优化 — 一站式求职工作台",
    role: "产品 + 全栈开发",
    period: "2026.08",
    tags: ["Vibe Coding", "产品", "AI"],
    desc: "聚合国内互联网公司招聘信息,支持关键词、公司、城市筛选;追踪投递全流程;JD 与简历智能匹配;基于 JD 智能改写简历。",
    features: [
      "📋 4 大模块:发现 / 追踪 / 匹配 / 优化",
      "🤖 关键词匹配算法,智能打分",
      "🎯 一键生成改写简历建议",
    ],
    cover: "/projects/job-hunter.jpg",
    color: "pink",
    link: "#",
  },
  {
    id: "personal-site",
    title: "本作品集网站",
    tagline: "彩虹渐变风格的个人 Portfolio",
    role: "产品 + 全栈开发",
    period: "2026.09",
    tags: ["Next.js", "Tailwind", "个人品牌"],
    desc: "温暖人文风格的 Next.js 14 个人网站,可一键部署到 Vercel。档案卡式设计 + 随机抽取互动。",
    features: [
      "🎴 档案卡随机抽取互动",
      "🌈 彩虹渐变背景 + 玻璃拟态卡片",
      "📱 完美响应式,移动端友好",
    ],
    cover: "/projects/site.jpg",
    color: "yellow",
    link: "#",
  },
  {
    id: "ai-tools",
    title: "AI 工具合集",
    tagline: "Prompt 模板 + Agent 工作流",
    role: "AI 产品探索",
    period: "2026.07",
    tags: ["AI", "Prompt", "工具"],
    desc: "为产品经理设计的 AI 工具集,包含 50+ Prompt 模板和自动化工作流。",
    features: [
      "📝 50+ 精选 Prompt 模板",
      "⚙️ 自动化工作流配置",
      "📊 使用数据分析",
    ],
    cover: "/projects/ai-tools.jpg",
    color: "blue",
    link: "#",
  },
  {
    id: "growth-platform",
    title: "增长实验平台",
    tagline: "A/B 测试全流程平台",
    role: "产品经理",
    period: "2024.03",
    tags: ["增长", "A/B 测试", "B 端"],
    desc: "设计 0 拖拽可视化实验配置界面,接入 12 个业务线。",
    features: [
      "🎯 可视化实验配置",
      "📊 12 个业务线接入",
      "📈 月均 50+ 实验",
    ],
    cover: "/projects/growth.jpg",
    color: "purple",
    link: "#",
  },
];

// ============================================================
// 技能与爱好 (SKILLS & LIFE)
// ============================================================
export const skills = [
  { category: "产品能力", items: ["PRD 撰写", "用户调研", "A/B 测试", "数据分析", "竞品分析", "项目管理"] },
  { category: "AI 技术", items: ["LLM 应用", "Prompt 工程", "RAG", "Agent", "Coze", "Dify", "LangChain"] },
  { category: "工具", items: ["Axure", "Figma", "SQL", "Python", "Tableau", "Notion", "Cursor"] },
];

export const hobbies = [
  { emoji: "📚", label: "阅读" },
  { emoji: "🏃", label: "跑步" },
  { emoji: "✍️", label: "写作" },
  { emoji: "🎸", label: "吉他" },
  { emoji: "☕", label: "咖啡" },
  { emoji: "🎮", label: "游戏" },
];