import Link from "next/link";
import { profile, archiveCards, education, experiences, projects, skills, hobbies } from "@/lib/data";
import ArchiveCardDeck from "@/components/ArchiveCardDeck";
import FloatingDecorations from "@/components/FloatingDecorations";
import ScrollHint from "@/components/ScrollHint";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <FloatingDecorations />

      {/* ============ Hero ============ */}
      <section className="min-h-screen flex items-center px-6 pt-32 pb-20 relative">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative">
          {/* 左侧文字 */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-white/60 backdrop-blur-md border border-white/80 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-sage animate-pulse" />
              <span className="font-mono text-xs tracking-wider text-ink-700">
                HELLO / 你好
              </span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl font-black tracking-tightish leading-[0.95] mb-6">
              <span className="text-ink-900">Hi,</span>
              <br />
              <span className="text-ink-900">我是 {profile.name.charAt(0)}</span>
              <span className="inline-block w-3 h-12 md:h-16 bg-ink-900 align-middle ml-1 animate-pulse" />
            </h1>

            <div className="mb-6">
              <span className="text-2xl md:text-3xl font-bold text-gradient-rainbow">
                {profile.title}
              </span>
            </div>

            {/* MY FILE 标签条 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur border border-white/80 rounded-full mb-6">
              <span className="font-mono text-xs text-ink-500">MY FILE /</span>
              <span className="text-sm text-ink-700">{profile.subtitle}</span>
            </div>

            {/* 简介文字 */}
            <p className="text-ink-700 leading-relaxed mb-4 max-w-md">
              {profile.intro[0]}
            </p>
            <p className="text-ink-500 leading-relaxed mb-8 max-w-md text-sm">
              {profile.intro.slice(1).join(' ')}
            </p>

            {/* 技能标签 */}
            <div className="flex flex-wrap gap-2 mb-8">
              {profile.skillTags.map((s) => (
                <span key={s.label} className={`chip ${s.color}`}>
                  {s.label}
                </span>
              ))}
            </div>

            {/* CTA 按钮 */}
            <div className="flex gap-3">
              <a href="/resume.pdf" target="_blank" rel="noopener" className="btn-primary">
                <span>下载简历</span>
                <span className="text-xs">↓</span>
              </a>
              <Link href="#contact" className="btn-ghost">
                <span>联系我</span>
              </Link>
            </div>
          </div>

          {/* 右侧 Hero 装饰 - 用 NOW 卡片 */}
          <div className="relative hidden md:block">
            <div className="absolute top-10 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-rainbow-purple/40 to-rainbow-pink/40 blur-3xl animate-float-slow" />
            <div className="absolute top-40 right-32 w-32 h-32 rounded-full bg-gradient-to-br from-rainbow-blue/40 to-rainbow-mint/40 blur-2xl animate-float-fast" />

            {/* 大圆头像区 */}
            <div className="relative w-[420px] h-[420px] mx-auto rounded-full overflow-hidden border-8 border-white shadow-card-lg">
              <div className="w-full h-full bg-gradient-to-br from-rainbow-pink via-rainbow-yellow to-rainbow-blue grid place-items-center">
                <span className="font-serif text-9xl font-black text-white/80">
                  {profile.name.charAt(0)}
                </span>
              </div>
              {/* 漂浮气泡 */}
              <div className="absolute top-12 -left-8 w-12 h-12 rounded-full bg-white/60 backdrop-blur border-2 border-white animate-float-slow" />
              <div className="absolute top-32 -right-4 w-16 h-16 rounded-full bg-white/60 backdrop-blur border-2 border-white animate-float-fast" />
              <div className="absolute bottom-16 left-4 w-10 h-10 rounded-full bg-white/60 backdrop-blur border-2 border-white animate-float-slow" />
            </div>

            {/* NOW 标签 */}
            <div className="absolute bottom-12 right-8 bg-white/80 backdrop-blur-xl border border-white rounded-2xl p-4 shadow-card max-w-[200px]">
              <div className="font-mono text-xs text-ink-500 mb-1">NOW</div>
              <div className="text-sm font-bold text-ink-900 mb-1">AI × 用户决策</div>
              <div className="text-xs text-ink-500">正在做新的探索</div>
            </div>
          </div>
        </div>
      </section>

      <ScrollHint />

      {/* ============ 01 / THE LEARNING PATH ============ */}
      <section id="education" className="px-6 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-num justify-center">01 / THE LEARNING PATH</div>
            <h2 className="section-title">我的学习坐标</h2>
            <p className="text-ink-500 text-sm">从金融到 AI,一以贯之的是对"用数据做决策"的执念</p>
          </div>

          <div className="relative grid md:grid-cols-2 gap-6">
            {/* 中间连接线 */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
              <div className="px-4 py-2 bg-white border border-ink-900/10 rounded-full shadow-card">
                <span className="text-xs text-ink-700 font-mono">成长路径 →</span>
              </div>
            </div>

            {education.map((e, i) => (
              <div key={i} className="card overflow-hidden p-0">
                {/* 顶部学校图 */}
                <div className="h-48 bg-gradient-to-br from-rainbow-blue/40 to-rainbow-mint/40 relative overflow-hidden">
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">{e.badge}</div>
                      <div className="font-mono text-xs text-ink-700 tracking-widest">{e.schoolEn}</div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white grid place-items-center shadow-card">
                    <span className="text-lg">{e.badgeIcon}</span>
                  </div>
                </div>
                {/* 下方信息 */}
                <div className="p-6">
                  <div className="font-mono text-xs text-ink-500 mb-2">{e.period}</div>
                  <div className="text-xs text-ink-500 mb-3">{e.major}</div>
                  <h3 className="font-serif text-2xl font-bold text-ink-900 mb-3">
                    {e.school}
                  </h3>
                  <p className="text-sm text-ink-700 leading-relaxed mb-4">{e.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.courses.map((c) => (
                      <span key={c} className="text-xs px-3 py-1 bg-white/80 border border-ink-900/10 rounded-full text-ink-700">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 02 / THE CREATOR ============ */}
      <section id="work" className="px-6 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-num justify-center">02 / THE CREATOR</div>
            <h2 className="section-title">没有排期,也想把它做出来</h2>
            <p className="text-ink-500 text-sm max-w-2xl mx-auto">从一个真实的小问题出发,独立完成从想法、模型到可用产品</p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="grid md:grid-cols-5 gap-8 items-center">
                {/* 左侧图片 */}
                <div className="md:col-span-2">
                  <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-card-lg aspect-[4/3] bg-gradient-to-br from-rainbow-pink/30 via-rainbow-yellow/30 to-rainbow-blue/30">
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="text-9xl">{i === 0 ? '🛠️' : i === 1 ? '🤖' : '📊'}</div>
                    </div>
                    <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-white/80 backdrop-blur rounded-full text-xs font-medium">
                      完整流程
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 px-2">
                    <div className="flex gap-1">
                      {[0,1,2,3].map(d => (
                        <div key={d} className={`w-1.5 h-1.5 rounded-full ${d === i ? 'bg-ink-900' : 'bg-ink-900/20'}`} />
                      ))}
                    </div>
                    <div className="font-mono text-xs text-ink-500">
                      0{i+1} / 0{experiences.length}
                    </div>
                  </div>
                </div>

                {/* 右侧内容 */}
                <div className="md:col-span-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink-900 text-white font-bold mb-4">
                    0{i+1}
                  </div>
                  <div className="font-mono text-xs text-ink-500 mb-2">{exp.year}</div>
                  <h3 className="font-serif text-3xl font-bold text-ink-900 mb-4">
                    {exp.company}
                  </h3>
                  <p className="text-ink-700 leading-relaxed mb-4">{exp.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-ink-700">
                        <span className="text-accent-purple mt-1">●</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tags.map(t => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                  <Link href="#projects" className="btn-primary">
                    <span>了解作品</span>
                    <span className="text-xs">↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 / SKILLS & LIFE - 档案卡抽取 ============ */}
      <section id="skills" className="px-6 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-num justify-center">03 / SKILLS & LIFE</div>
            <h2 className="section-title">随机抽取一张我的档案卡</h2>
            <p className="text-ink-500 text-sm">技能、爱好与生活兴趣都在同一张牌库里,抽一张,看看缘分</p>
          </div>

          <ArchiveCardDeck cards={archiveCards} />

          {/* 技能列表 + 爱好 */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">技能地图</h3>
              <div className="space-y-6">
                {skills.map((s) => (
                  <div key={s.category}>
                    <div className="font-mono text-xs text-ink-500 mb-2 tracking-wider">{s.category}</div>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <span key={it} className="chip">{it}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">生活爱好</h3>
              <div className="grid grid-cols-3 gap-3">
                {hobbies.map((h) => (
                  <div key={h.label} className="card p-4 text-center hover:scale-105 transition cursor-pointer">
                    <div className="text-3xl mb-2">{h.emoji}</div>
                    <div className="text-xs text-ink-700">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 04 / 个人作品 ============ */}
      <section id="projects" className="px-6 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-num justify-center">04 / PROJECTS</div>
            <h2 className="section-title">个人作品</h2>
            <p className="text-ink-500 text-sm">独立完成的产品 + Vibe Coding 项目</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => {
              const colorMap: Record<string, string> = {
                pink: 'from-rainbow-pink/40 to-rainbow-purple/30',
                yellow: 'from-rainbow-yellow/40 to-rainbow-peach/30',
                blue: 'from-rainbow-blue/40 to-rainbow-mint/30',
                purple: 'from-rainbow-purple/40 to-rainbow-blue/30',
                mint: 'from-rainbow-mint/40 to-rainbow-blue/30',
              };
              return (
                <div key={p.id} className="card overflow-hidden p-0 group">
                  {/* 封面 */}
                  <div className={`h-40 bg-gradient-to-br ${colorMap[p.color] || colorMap.pink} relative overflow-hidden`}>
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="text-7xl opacity-50 group-hover:scale-110 transition">
                        {p.tags.includes('Vibe Coding') ? '🛠️' :
                         p.tags.includes('Next.js') ? '⚡' :
                         p.tags.includes('AI') ? '🤖' : '📊'}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-3">
                      <div className="font-mono text-xs text-ink-500">{p.period}</div>
                      <div className="text-xs px-2 py-0.5 bg-white border border-ink-900/10 rounded-full">{p.role}</div>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-ink-900 mb-2 group-hover:text-accent-warm transition">
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink-700 mb-4">{p.tagline}</p>
                    <ul className="space-y-1 mb-4">
                      {p.features.slice(0, 2).map((f, i) => (
                        <li key={i} className="text-xs text-ink-500">· {f}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 bg-white/60 border border-ink-900/10 rounded-full text-ink-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 05 / 联系我 ============ */}
      <section id="contact" className="px-6 py-20 relative">
        <div className="max-w-4xl mx-auto">
          <div className="card p-12 text-center relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-rainbow-pink/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-rainbow-blue/30 blur-3xl" />

            <div className="relative">
              <div className="section-num justify-center">05 / CONTACT</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">聊聊?</h2>
              <p className="text-ink-700 mb-8 max-w-lg mx-auto">
                如果你想聊 AI 产品 / 求职 / Vibe Coding,欢迎邮件我。
                <br />
                一般 24 小时内回复 ✨
              </p>
              <a href={`mailto:${profile.email}`} className="btn-primary text-base">
                ✉️ {profile.email}
              </a>

              <div className="flex justify-center gap-3 mt-8">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener"
                    className="chip"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}