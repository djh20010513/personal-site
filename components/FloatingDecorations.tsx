"use client";

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 左上 - 大圆 */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full border border-ink-900/5 animate-float-slow" />
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full border border-ink-900/5" />

      {/* 右上 - 小圆 */}
      <div className="absolute top-40 -right-20 w-60 h-60 rounded-full border border-ink-900/5" />
      <div className="absolute top-1/3 right-0 w-2 h-2 rounded-full bg-rainbow-pink" />
      <div className="absolute top-1/2 right-20 w-3 h-3 rounded-full bg-rainbow-yellow" />

      {/* 中部 - 散点 */}
      <div className="absolute top-2/3 left-10 w-2 h-2 rounded-full bg-accent-purple/60" />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-accent-warm/60" />

      {/* 左下 - 圆圈 */}
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full border border-ink-900/5" />

      {/* 右下 - 大圆 */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border border-ink-900/5 animate-float-slow" />
      <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full border border-ink-900/5" />
    </div>
  );
}