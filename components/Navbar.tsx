"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about",     label: "关于我",   id: "about" },
  { href: "#education", label: "教育背景", id: "education" },
  { href: "#work",      label: "工作经历", id: "work" },
  { href: "#projects",  label: "个人作品", id: "projects" },
  { href: "#skills",    label: "技能与爱好", id: "skills" },
  { href: "#contact",   label: "联系我",   id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // 滚动监听: 改变背景 + 当前 section 高亮
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // 找到当前可见的 section
      const scrollY = window.scrollY + 150; // 提前 150px 触发
      let currentId = "";
      for (const link of links) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollY) {
          currentId = link.id;
        }
      }
      setActive(currentId);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-4 z-50 mx-auto transition-all duration-500 ${
        scrolled ? "w-[95%]" : "w-[90%]"
      }`}
      style={{ maxWidth: "1100px" }}
    >
      <nav className={`flex items-center justify-between px-6 py-3 rounded-full transition-all ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border border-white/80 shadow-card"
          : "bg-white/40 backdrop-blur-md border border-white/40"
      }`}>
        {/* Logo - 仅圆形头像,无 PORTFOLIO 字 */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-full bg-ink-900 text-white grid place-items-center font-serif text-sm font-bold">
            {profile.name.charAt(0)}
          </div>
        </Link>

        {/* 桌面端 */}
        <div className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 transition rounded-full ${
                  isActive
                    ? "text-white bg-ink-900 font-medium"
                    : "text-ink-700 hover:text-ink-900 hover:bg-white/60"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* 简历按钮 */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          className="hidden md:flex items-center gap-1 px-4 py-2 bg-white border border-ink-900/10 rounded-full text-sm hover:border-ink-900/30 transition"
        >
          <span>简历.pdf</span>
          <span className="text-xs">↗</span>
        </a>

        {/* 移动端按钮 */}
        <button
          className="md:hidden w-9 h-9 grid place-items-center"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-ink-900 transition ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-ink-900 transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-ink-900 transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* 移动端菜单 */}
      {open && (
        <div className="md:hidden mt-2 bg-white/90 backdrop-blur-xl border border-white/80 rounded-3xl shadow-card p-4 flex flex-col gap-1">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-2xl ${
                  isActive
                    ? "bg-ink-900 text-white font-medium"
                    : "text-ink-700 hover:bg-rainbow-pink/30"
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}