import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-32 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-ink-900 text-white grid place-items-center font-serif text-xs font-bold">
            {profile.name.charAt(0)}
          </div>
          <span className="font-serif text-lg font-bold text-ink-900">
            {profile.name}<span className="text-accent-warm">.</span>
          </span>
        </div>
        <p className="text-sm text-ink-500 mb-2">{profile.subtitle}</p>
        <p className="text-xs text-ink-300 font-mono">
          © 2026 {profile.name} · 用心搭建 · Inspired by @HOWTO
        </p>
      </div>
    </footer>
  );
}