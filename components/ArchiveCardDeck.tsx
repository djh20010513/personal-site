"use client";

import { useState } from "react";

type Card = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  color: string;
  icon: string;
};

const colorStyles: Record<string, { bg: string; border: string; text: string; ring: string }> = {
  pink:   { bg: "from-rainbow-pink/50 to-rainbow-purple/30",   border: "border-rainbow-pink/40",   text: "text-pink-700",   ring: "ring-rainbow-pink/30" },
  yellow: { bg: "from-rainbow-yellow/50 to-rainbow-peach/30",  border: "border-rainbow-yellow/50", text: "text-amber-700",  ring: "ring-rainbow-yellow/30" },
  blue:   { bg: "from-rainbow-blue/50 to-rainbow-mint/30",     border: "border-rainbow-blue/40",   text: "text-blue-700",   ring: "ring-rainbow-blue/30" },
  mint:   { bg: "from-rainbow-mint/50 to-rainbow-blue/30",     border: "border-rainbow-mint/40",   text: "text-emerald-700", ring: "ring-rainbow-mint/30" },
  purple: { bg: "from-rainbow-purple/50 to-rainbow-pink/30",   border: "border-rainbow-purple/40", text: "text-purple-700", ring: "ring-rainbow-purple/30" },
};

export default function ArchiveCardDeck({ cards }: { cards: Card[] }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const current = cards[currentIdx];
  const style = colorStyles[current.color] || colorStyles.pink;

  const draw = () => {
    if (animating) return;
    setAnimating(true);
    setShowBack(false);

    setTimeout(() => {
      let next;
      do { next = Math.floor(Math.random() * cards.length); }
      while (next === currentIdx && cards.length > 1);
      setCurrentIdx(next);
      setAnimating(false);
    }, 400);
  };

  const flip = () => setShowBack(!showBack);

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center justify-center py-8">
      {/* 左:卡背堆叠 + 抽取按钮 */}
      <div className="flex flex-col items-center gap-6">
        {/* 卡堆叠 - 视觉装饰 */}
        <div className="relative w-56 h-72">
          {cards.slice(0, 3).map((_, i) => (
            <div
              key={i}
              className={`absolute inset-0 rounded-3xl border-2 ${style.border} bg-gradient-to-br ${style.bg}`}
              style={{
                transform: `rotate(${(i - 1) * 4}deg) translateY(${i * -2}px)`,
                zIndex: 3 - i,
              }}
            >
              <div className="w-full h-full grid place-items-center">
                <div className="text-center">
                  <div className="font-mono text-xs opacity-50 mt-4 tracking-widest">✦</div>
                  <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur mx-auto mt-32 grid place-items-center text-ink-900 font-serif font-bold">
                    ZW
                  </div>
                  <div className="mt-4 font-mono text-xs tracking-widest text-ink-700">MY FILES</div>
                  <div className="font-mono text-xs tracking-widest text-ink-700 mt-1">SKILLS × LIFE</div>
                </div>
              </div>
            </div>
          ))}

          {/* 顶部 + / - 装饰 */}
          <div className="absolute top-3 left-3 text-white/60 text-xs">+</div>
          <div className="absolute top-3 right-3 text-white/60 text-xs">+</div>
          <div className="absolute bottom-3 left-3 text-white/60 text-xs">+</div>
        </div>

        <div className="text-center mt-2">
          <div className="font-mono text-xs text-ink-500 mb-1">牌库剩 {cards.length} 张卡片</div>
          <div className="text-xs text-ink-300 mb-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-purple mr-1" />
            已浏览 <span className="text-ink-700 font-bold">3</span> 张牌
          </div>
        </div>

        <button
          onClick={draw}
          disabled={animating}
          className="btn-primary disabled:opacity-50"
        >
          <span>{animating ? "洗牌中..." : "随机抽一张"}</span>
          <span className="text-xs">✦</span>
        </button>
      </div>

      {/* 右:展示当前卡片 */}
      <div className="flex flex-col items-center">
        <div
          className={`relative w-80 aspect-[3/4.2] rounded-3xl border-2 ${style.border} bg-gradient-to-br ${style.bg} p-8 shadow-card-lg cursor-pointer transition-all duration-300 ${
            animating ? "scale-95 opacity-0 rotate-3" : "scale-100 opacity-100 rotate-0"
          }`}
          onClick={flip}
        >
          {/* 角落装饰 */}
          <div className="absolute top-4 left-4 text-xs font-mono opacity-50">+</div>
          <div className="absolute top-4 right-4 text-xs font-mono font-bold tracking-wider">{current.subtitle}</div>

          {/* 中心图标 */}
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-white/30 backdrop-blur-sm border border-white/60 grid place-items-center text-6xl shadow-card">
                {showBack ? current.icon : "✦"}
              </div>
              {!showBack && (
                <>
                  <div className="absolute top-2 left-0 w-3 h-3 rounded-full bg-rainbow-mint" />
                  <div className="absolute bottom-2 right-0 w-3 h-3 rounded-full bg-rainbow-pink" />
                </>
              )}
            </div>
          </div>

          {!showBack ? (
            /* 卡片正面 - 神秘感 */
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-xs font-mono opacity-50 mb-2">DRAWN FILE</div>
              <div className="text-2xl font-bold text-ink-900 mb-2">{current.title}</div>
              <div className="flex justify-between items-end">
                <div className="font-mono text-xs text-ink-500">
                  {current.tags.join(' · ')}
                </div>
                <div className="text-xs text-ink-500 underline">点击翻面查看</div>
              </div>
            </div>
          ) : (
            /* 卡片背面 - 详细信息 */
            <div className="absolute inset-8 bg-white/85 backdrop-blur-md rounded-2xl p-6 flex flex-col">
              <div className="font-mono text-xs text-ink-500 mb-1">{current.subtitle}</div>
              <div className="text-2xl font-bold text-ink-900 mb-3">{current.title}</div>
              <p className="text-sm text-ink-700 leading-relaxed mb-4 flex-1">{current.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {current.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 bg-ink-900/5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 计数器 */}
        <div className="flex items-center gap-3 mt-6">
          <div className="font-mono text-xs text-ink-500">
            0{currentIdx + 1} ——— 0{cards.length}
          </div>
        </div>
      </div>
    </div>
  );
}