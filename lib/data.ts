// ============================================================
// 个人站 · 内容数据 (董静涵 · 2026.09 更新)
// 设计风格:@HOWTO 小赵同学吖 - 档案卡式 portfolio
// ============================================================

export const profile = {
  // === 基础信息 ===
  name: "董静涵",
  shortName: "静涵",
  title: "AI 产品经理",
  subtitle: "从 0 到 1 搭建 AI Agent 产品 · 让模型能力真正落地到业务",
  location: "上海",
  email: "djh1721695188@163.com",
  phone: "13524038865",
  avatar: "/avatar.jpg",
  resume: "/resume.pdf",

  // === 社交链接 ===
  socials: [
    { label: "Email",    url: "mailto:djh1721695188@163.com",  icon: "email" },
    { label: "GitHub",   url: "https://github.com/djh20010513", icon: "github" },
    { label: "小红书",   url: "https://www.xiaohongshu.com",     icon: "xhs" },
  ],

  // === 关键标签 (首页 Hero 下方) ===
  skillTags: [
    { label: "AI 产品",       color: "bg-rainbow-pink/40" },
    { label: "Agent / RAG",   color: "bg-rainbow-purple/40" },
    { label: "从 0 到 1",      color: "bg-rainbow-blue/40" },
    { label: "AIGC",          color: "bg-rainbow-yellow/40" },
    { label: "数据驱动",      color: "bg-rainbow-mint/40" },
  ],

  // === 个人简介 (Hero 用) ===
  intro: [
    "华东师范大学港口、海岸及近海工程硕士(AI+水利方向),保研 985。",
    "3 段大厂 AI 产品实习:字节 / 小红书 / B站,围绕 AI Agent 与 AIGC 方向做从 0 到 1。",
    "熟悉多 Agent、RAG、Harness 技术栈,熟练 Coze / Claude Code / Figma 等工具,独立搭建原型验证从 5 天缩到 1 天。",
  ],

  // === 当前状态 ===
  status: {
    emoji: "✦",
    text: "2026 校招 · 寻找 AI 产品经理全职机会",
  },
};

// ============================================================
// 档案卡 · 互动抽取数据 (首页核心特色)
// ============================================================
export const archiveCards = [
  {
    id: "agent-design",
    title: "Agent 体系设计",
    subtitle: "Multi-Agent",
    desc: "围绕业务场景设计 Main Agent + 子 Agent / Skill / Tool 协同链路,用 Harness 管理上下文、任务状态与结果校验。",
    tags: ["Multi-Agent", "Skill", "Harness"],
    color: "mint",
    icon: "🤖",
  },
  {
    id: "rag",
    title: "RAG & 检索增强",
    subtitle: "RAG",
    desc: "把商品知识库、UGC 内容库、导购策略库通过 RAG 增强商品理解与推荐依据,推动匹配效果提升 40%。",
    tags: ["RAG", "向量检索", "多路召回"],
    color: "blue",
    icon: "🔍",
  },
  {
    id: "aigc",
    title: "AIGC 素材生成",
    subtitle: "AIGC",
    desc: "设计多模态 AIGC 素材生成链路,搭建五级素材质量评估体系,推动 AI 衍生素材消耗占比达到 45%。",
    tags: ["多模态", "AIGC", "质量评估"],
    color: "pink",
    icon: "✨",
  },
  {
    id: "data-driven",
    title: "数据驱动决策",
    subtitle: "Data Driven",
    desc: "围绕 GMV / CTR / VV / ROI 等指标做效果衡量,A/B 实验 + 漏斗分析 + 案例库对比,数据驱动迭代。",
    tags: ["A/B 测试", "指标体系", "SQL"],
    color: "yellow",
    icon: "📊",
  },
  {
    id: "rapid-prototype",
    title: "AI Demo 快速验证",
    subtitle: "Vibe Coding",
    desc: "独立完成 5 个 AI Demo,熟练 Claude Code / Qoder CN / WorkBuddy / Coze / Figma,验证周期从 5 天缩到 1 天。",
    tags: ["Claude Code", "Coze", "Figma"],
    color: "purple",
    icon: "🛠️",
  },
  {
    id: "research",
    title: "科研 & 技术理解",
    subtitle: "Research",
    desc: "机器学习科研背景,发表 5 篇 SCI 论文,理解模型能力边界,与算法 / 研发高效协同。",
    tags: ["机器学习", "SCI 论文 × 5", "跨团队"],
    color: "mint",
    icon: "🧠",
  },
  {
    id: "user-insight",
    title: "用户行为洞察",
    subtitle: "User Insight",
    desc: "从用户行为与业务数据中识别核心问题,围绕素材供给、消费决策、个性化推荐等场景抽象产品方案。",
    tags: ["用户调研", "行为分析", "业务洞察"],
    color: "pink",
    icon: "💡",
  },
  {
    id: "business-result",
    title: "业务结果导向",
    subtitle: "Impact",
    desc: "核心项目实现 GMV 提升 12% /CTR 提升 24% /推荐匹配效果提升 40%,坚持用业务结果衡量产品价值。",
    tags: ["GMV +12%", "CTR +24%", "匹配 +40%"],
    color: "yellow",
    icon: "🎯",
  },
  {
    id: "cross-team",
    title: "跨团队协同",
    subtitle: "Collaboration",
    desc: "在算法 / 设计 / 研发之间斡旋,推动 0→1 方案设计、跨团队协同与上线迭代,能 Ship It。",
    tags: ["0→1", "跨团队", "敏捷"],
    color: "blue",
    icon: "🚀",
  },
];

// ============================================================
// 教育背景
// ============================================================
export const education = [
  {
    school: "华东师范大学",
    schoolEn: "ECNU · 985",
    major: "港口、海岸及近海工程 · AI+水利方向",
    period: "2024.09 - 2027.06",
    badge: "🌟",
    badgeIcon: "🎓",
    desc: "985 保研。核心方向:机器学习科研背景,发表 5 篇 SCI 论文,获上海市优秀毕业生、华东师范大学优秀学业奖学金。",
    courses: ["机器学习", "数据挖掘", "海洋数值模拟", "Python"],
    highlight: "保研 · SCI × 5",
  },
  {
    school: "上海海洋大学",
    schoolEn: "SHOU · 双一流",
    major: "环境工程 & 计算机科学与技术(双专业)",
    period: "2020.09 - 2024.06",
    badge: "✨",
    badgeIcon: "🎓",
    desc: "双一流 · 双专业。具备跨学科背景:既能理解水利 / 环境工程领域知识,又掌握计算机科学与技术,适合做 AI+垂直领域产品。",
    courses: ["环境工程", "数据结构", "数据库", "算法"],
    highlight: "双一流 · 双专业",
  },
];

// ============================================================
// 工作 / 实习经历 (按时间倒序)
// ============================================================
export const experiences = [
  {
    year: "2026.06 - 至今",
    company: "字节跳动 · 抖音生活服务",
    role: "AI 产品经理",
    desc: "负责抖音生活服务商家 AI 创意经营方向,搭建 AI 创意生产 Agent 能力体系,实现从创意策略沉淀、内容生产到投放反馈的自动化闭环,推动 AI 从单点内容生成工具向商家创意经营 Agent 演进。",
    highlights: [
      "爆款视频策略蒸馏:基于行业、商品类型、营销目标筛选大盘高表现视频,结构化沉淀为创意标签与 Skill,供 Agent 自动匹配",
      "AI 创意视频较商家原生视频带动 GMV 提升 12%、VV 提升 16%",
      "设计素材生成与优化、爆款复刻、自动托管三类创意生产链路,Main Agent 统一调度 Agent / Skill / Tool",
      "结合 Harness 管理上下文、任务状态及结果校验,提升视频生产效率约 50%,任务执行异常率降低约 12%",
    ],
    cover: "/exp/bytedance.jpg",
    tags: ["Agent", "AIGC", "抖音生活服务"],
  },
  {
    year: "2026.03 - 2026.06",
    company: "小红书 · 点点 App",
    role: "Agent 产品经理",
    desc: "负责点点 App「好物穿搭」AI 购物方向,围绕用户需求表达模糊、个性化信息利用不足、消费决策链路长等问题,搭建 AI 好物买手能力,推动 Agent 从通用问答向个性化购物决策助手演进。",
    highlights: [
      "个性化决策策略:融合基础画像、近期兴趣、历史行为与会话上下文,通过 Memory 沉淀跨会话稳定偏好",
      "建立\"显式需求 > 会话上下文 > 近期兴趣 > 长期偏好 > 基础画像\"的信号优先级与冲突更新机制",
      "推动推荐匹配效果提升 40%,减少重复澄清与泛化推荐",
      "搭建 Main Agent + Search Agent 协同导购能力,Search Agent 调用商品知识库、UGC 内容库、导购策略库",
      "蒸馏金牌客服历史对话的导购策略为 Skill,推动方案采纳率提升约 18%,种草转化率提升 15%",
    ],
    cover: "/exp/xhs.jpg",
    tags: ["Agent", "RAG", "个性化推荐"],
  },
  {
    year: "2026.01 - 2026.03",
    company: "哔哩哔哩 · 三连推广平台",
    role: "AI 产品经理",
    desc: "负责三连推广平台「创意智能衍生」AIGC 素材生成方向,围绕广告主素材供给不足、优质创意生产成本高、低效素材优化滞后等问题,搭建多模态 AIGC 素材生成与多 Agent 素材优化体系。",
    highlights: [
      "多模态 AIGC 素材生成:基于用户上传图片理解商品品类、营销场景、核心卖点,结合百万级历史素材库检索优质案例",
      "搭建五级素材质量评估体系筛选优质创意,自动生成标题与封面",
      "AI 衍生素材消耗占比达到 45%,AI 封面 CTR 较非 AI 封面提升 24%",
      "设计监控 Agent + 裁判 Agent + 生成 Agent 协同优化链路,识别低效素材并自动触发 AIGC 重生成",
      "新素材保底跑量比例提升 72%,实现持续迭代闭环",
    ],
    cover: "/exp/bilibili.jpg",
    tags: ["AIGC", "Multi-Agent", "B站"],
  },
];

// ============================================================
// 个人作品 (Vibe Coding 项目 + AI Demo)
// ============================================================
export const projects = [
  {
    id: "job-hunter",
    title: "职途 AI · 求职助手",
    tagline: "聚合 / 追踪 / 匹配 / 优化 — 一站式求职工作台",
    role: "Vibe Coding 全栈",
    period: "2026.08",
    tags: ["Vibe Coding", "产品", "AI"],
    desc: "聚合国内互联网公司招聘信息(大厂/中厂/小厂/校招/实习),支持关键词、公司、城市、校招/社招筛选。",
    features: [
      "📋 4 大模块:发现 / 追踪 / 匹配 / 优化",
      "🤖 关键词匹配算法 + 智能打分",
      "🎯 一键生成改写简历建议",
    ],
    cover: "/projects/job-hunter.jpg",
    color: "pink",
    link: "https://peisonal-site.vercel.app",
  },
  {
    id: "ai-demos",
    title: "5 个 AI Demo 矩阵",
    tagline: "独立完成的 AI 产品验证原型",
    role: "独立开发",
    period: "2026",
    tags: ["Claude Code", "Coze", "Multi-Agent"],
    desc: "围绕 AI 产品核心场景,用 Coze / Claude Code / Figma 独立搭建 5 个 AI Demo,验证周期从 5 天缩到 1 天。",
    features: [
      "🤖 Agent 工作流可视化原型",
      "🎨 AIGC 创意生成 Demo",
      "📊 智能分析报告 Demo",
    ],
    cover: "/projects/ai-demos.jpg",
    color: "blue",
    link: "#",
  },
  {
    id: "research",
    title: "机器学习科研 × 5",
    tagline: "5 篇 SCI 论文发表",
    role: "科研",
    period: "2024 - 至今",
    tags: ["机器学习", "SCI × 5", "上海市优秀毕业生"],
    desc: "围绕机器学习方向做科研,目前已发表 5 篇 SCI 论文。具备扎实的模型理解能力,能与算法 / 研发高效协同。",
    features: [
      "📚 5 篇 SCI 论文",
      "🏆 上海市优秀毕业生",
      "🎓 华东师范大学优秀学业奖学金",
    ],
    cover: "/projects/research.jpg",
    color: "purple",
    link: "#",
  },
  {
    id: "personal-site",
    title: "本作品集网站",
    tagline: "彩虹渐变风格的个人 Portfolio",
    role: "Vibe Coding",
    period: "2026.09",
    tags: ["Next.js", "Tailwind", "AI 产品"],
    desc: "温暖人文风格的 Next.js 14 个人网站,可一键部署到 Vercel。档案卡式设计 + 随机抽取互动。",
    features: [
      "🎴 档案卡随机抽取互动",
      "🌈 彩虹渐变背景 + 玻璃拟态卡片",
      "📱 完美响应式,移动端友好",
    ],
    cover: "/projects/site.jpg",
    color: "yellow",
    link: "https://peisonal-site.vercel.app",
  },
];

// ============================================================
// 技能与爱好
// ============================================================
export const skills = [
  {
    category: "产品能力",
    items: ["PRD 撰写", "需求分析", "A/B 实验", "用户调研", "跨团队协同", "0→1 落地"],
  },
  {
    category: "AI 技术栈",
    items: ["Multi-Agent", "RAG", "Harness", "Skill 设计", "Prompt 工程", "向量检索"],
  },
  {
    category: "工具 / 编程",
    items: ["Claude Code", "Qoder CN", "WorkBuddy", "Coze", "Figma", "Python", "SQL"],
  },
];

export const hobbies = [
  { emoji: "🌊", label: "海洋" },
  { emoji: "📚", label: "阅读" },
  { emoji: "🎬", label: "影视" },
  { emoji: "✍️", label: "写作" },
  { emoji: "🏃", label: "跑步" },
  { emoji: "☕", label: "咖啡" },
];