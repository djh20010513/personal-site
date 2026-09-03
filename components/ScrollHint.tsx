"use client";

import { useEffect, useState } from "react";

export default function ScrollHint() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY < 200);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-fade-up">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl border border-white rounded-full shadow-card text-sm">
        <span className="text-ink-700">继续下滑,探索更多</span>
        <div className="w-6 h-6 rounded-full bg-ink-900 text-white grid place-items-center animate-bounce">
          ↓
        </div>
      </div>
    </div>
  );
}