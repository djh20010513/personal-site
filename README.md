# 🌈 个人作品集 · Portfolio

> 彩虹渐变风格 + 档案卡随机抽取互动的 Next.js 14 个人网站
> 设计灵感:@HOWTO 小赵同学吖

**项目位置**：`/Users/djh/personal-site`

---

## 🎨 设计风格

- **背景**：彩虹渐变（粉 → 黄 → 蓝 → 紫），固定到 viewport
- **配色**：
  - 主文字 `#1A1A2E`
  - 强调色：`#FF6B6B / #8B7FFF / #7BC8A4 / #FFB547 / #5B9DFF / #FF8FB1`
- **字体**：思源宋体 (Noto Serif SC) 标题 + PingFang 正文 + JetBrains Mono 装饰
- **氛围**：玻璃拟态卡片 + 漂浮气泡 + 角落圆圈装饰
- **响应式**：完美适配手机 / 平板 / 桌面

---

## 🎴 核心特色

**档案卡随机抽取**：首页核心互动
- 9 张档案卡（技能、爱好、风格）
- 点击"随机抽一张"按钮 → 翻牌动画 → 显示档案卡
- 点击卡片可翻面查看详情
- 颜色随档案类型区分

---

## 🚀 快速启动

```bash
cd /Users/djh/personal-site
npm install
npm run dev
```

打开 http://localhost:3000

---

## 📁 目录结构

```
personal-site/
├── app/
│   ├── layout.tsx        # 全局布局 + 导航栏 + 页脚
│   ├── page.tsx          # 首页 (Hero + 教育 + 经历 + 档案卡 + 作品 + 联系)
│   └── globals.css       # 全局样式 + 彩虹渐变背景
├── components/
│   ├── Navbar.tsx              # 顶部胶囊导航
│   ├── Footer.tsx              # 页脚
│   ├── ArchiveCardDeck.tsx     # ⭐ 档案卡随机抽取（核心互动）
│   ├── FloatingDecorations.tsx # 漂浮装饰圆圈
│   └── ScrollHint.tsx          # "继续下滑"浮动提示
├── lib/
│   └── data.ts           # ⭐ 所有内容在这里改
├── public/
│   ├── avatar.jpg        # 你的头像
│   ├── resume.pdf        # 简历 PDF
│   └── projects/         # 项目封面图
├── tailwind.config.js    # 自定义配色
└── package.json
```

---

## 📝 替换内容

**只改 `lib/data.ts` 一个文件**，包含：

- `profile` — 姓名 / 标题 / 简介 / 联系方式 / 技能标签
- `archiveCards` — 9 张档案卡（技能 / 爱好 / 风格）
- `education` — 教育背景
- `experiences` — 工作 / 实习经历
- `projects` — 个人作品 / Vibe Coding 项目
- `skills` — 技能清单
- `hobbies` — 生活爱好

---

## 🚢 部署到 Vercel

```bash
# 1. 推到 GitHub
git init && git add . && git commit -m "init"
git remote add origin <your-repo-url>
git push -u origin main

# 2. 在 vercel.com 点 Import Project,自动识别 Next.js
# 3. 等待部署完成,获得 yourname.vercel.app 域名
```

**Vercel 免费额度永久够用**：无限静态网站 + 自动 HTTPS + 全球 CDN。

---

## 💡 后续可扩展

- [ ] 接入 MDX 写博客（在 `content/posts/*.mdx`）
- [ ] 接入 Giscus 评论
- [ ] 接入 Vercel Analytics
- [ ] 档案卡加入 3D 翻转效果（Three.js）
- [ ] 多语言（i18n）