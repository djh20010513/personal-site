"use client";

import { useState, useEffect } from "react";

const BUBBLES = [
  { text: "Hi, 我是静涵 👋", side: "right" },
  { text: "在做 AI 产品 ✨", side: "right" },
  { text: "在看你的简历呢~", side: "right" },
  { text: "想聊聊吗?", side: "right" },
  { text: "点这里看看我的作品 ↓", side: "right" },
];

export default function CartoonAvatar() {
  const [waving, setWaving] = useState(false);
  const [bubbleIdx, setBubbleIdx] = useState(0);
  const [showBubble, setShowBubble] = useState(true);

  // 挥手动画 - 每 5 秒挥一次
  useEffect(() => {
    const t = setInterval(() => {
      setWaving(true);
      setTimeout(() => setWaving(false), 1200);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  // 气泡内容轮换 - 每 4 秒换一句
  useEffect(() => {
    const t = setInterval(() => {
      setShowBubble(false);
      setTimeout(() => {
        setBubbleIdx((i) => (i + 1) % BUBBLES.length);
        setShowBubble(true);
      }, 300);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  // 点击切换
  const handleClick = () => {
    setWaving(true);
    setTimeout(() => setWaving(false), 1200);
    setShowBubble(false);
    setTimeout(() => {
      setBubbleIdx((i) => (i + 1) % BUBBLES.length);
      setShowBubble(true);
    }, 300);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center cursor-pointer select-none" onClick={handleClick}>
      {/* 背景柔光 */}
      <div className="absolute top-8 right-0 w-72 h-72 rounded-full bg-gradient-to-br from-rainbow-purple/40 to-rainbow-pink/40 blur-3xl animate-float-slow" />
      <div className="absolute bottom-8 left-0 w-56 h-56 rounded-full bg-gradient-to-br from-rainbow-blue/40 to-rainbow-mint/40 blur-3xl animate-float-fast" />

      {/* 卡通人物 */}
      <svg
        viewBox="0 0 320 360"
        className="w-[320px] h-[360px] md:w-[380px] md:h-[420px] relative z-10 drop-shadow-2xl"
        style={{ filter: "drop-shadow(0 12px 24px rgba(26,26,46,0.15))" }}
      >
        <defs>
          {/* 渐变 */}
          <linearGradient id="hair" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a2820" />
            <stop offset="100%" stopColor="#5a3a2c" />
          </linearGradient>
          <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fde8d0" />
            <stop offset="100%" stopColor="#f8d8b8" />
          </linearGradient>
          <linearGradient id="shirt" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8d4ff" />
            <stop offset="100%" stopColor="#c8a8ff" />
          </linearGradient>
          <radialGradient id="cheek" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#ffb8c8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffb8c8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* === 身体 (衬衫) === */}
        <path
          d="M 80 280 Q 80 240 130 235 L 190 235 Q 240 240 240 280 L 240 360 L 80 360 Z"
          fill="url(#shirt)"
        />
        {/* 衬衫领口 */}
        <path d="M 140 235 L 160 250 L 180 235 L 175 245 L 160 258 L 145 245 Z" fill="#fdfbf6" opacity="0.9" />
        {/* 衬衫扣子 */}
        <circle cx="160" cy="275" r="2.5" fill="#9b7ed9" />
        <circle cx="160" cy="295" r="2.5" fill="#9b7ed9" />

        {/* === 脖子 === */}
        <rect x="148" y="218" width="24" height="22" fill="url(#skin)" />
        <path d="M 148 218 Q 160 226 172 218" fill="none" stroke="#e8c5a0" strokeWidth="0.5" opacity="0.5" />

        {/* === 头发 (后背 - 长发披肩) === */}
        <path
          d="M 90 130 Q 80 180 80 240 L 90 250 L 100 200 Q 95 160 100 130 Z"
          fill="url(#hair)"
          opacity="0.9"
        />
        <path
          d="M 230 130 Q 240 180 240 240 L 230 250 L 220 200 Q 225 160 220 130 Z"
          fill="url(#hair)"
          opacity="0.9"
        />
        <path
          d="M 100 220 Q 90 270 100 310 L 115 310 Q 110 270 115 220 Z"
          fill="url(#hair)"
          opacity="0.85"
        />
        <path
          d="M 220 220 Q 230 270 220 310 L 205 310 Q 210 270 205 220 Z"
          fill="url(#hair)"
          opacity="0.85"
        />

        {/* === 脸 === */}
        <ellipse cx="160" cy="160" rx="58" ry="62" fill="url(#skin)" />

        {/* === 头发 (前面刘海 + 顶部) === */}
        <path
          d="M 100 145 Q 95 90 160 85 Q 225 90 220 145 Q 215 130 200 125 Q 175 115 160 118 Q 145 115 120 125 Q 105 130 100 145 Z"
          fill="url(#hair)"
        />
        {/* 刘海 - 中分 */}
        <path
          d="M 130 120 Q 140 100 158 105 Q 165 95 175 102 Q 180 110 175 125 L 170 122 L 165 130 L 160 115 L 155 128 L 150 118 L 145 130 L 140 122 Z"
          fill="url(#hair)"
          opacity="0.95"
        />
        {/* 一缕发丝垂在额头 */}
        <path d="M 155 125 Q 152 145 158 155 L 162 155 Q 160 140 158 125 Z" fill="url(#hair)" />

        {/* === 马尾 (左侧) === */}
        <g style={{ transformOrigin: "100px 130px", animation: "ponyTail 3s ease-in-out infinite" }}>
          <path
            d="M 100 130 Q 70 140 60 200 Q 55 240 75 270 Q 80 230 85 200 Q 90 165 105 140 Z"
            fill="url(#hair)"
          />
          {/* 马尾发圈 */}
          <ellipse cx="98" cy="135" rx="6" ry="4" fill="#c2736b" />
        </g>

        {/* === 眼镜 === */}
        <g>
          {/* 左边镜片 */}
          <circle cx="138" cy="160" r="14" fill="none" stroke="#2a3a4a" stroke-width="2.5" />
          <circle cx="138" cy="160" r="12" fill="rgba(200,220,255,0.15)" />
          {/* 右边镜片 */}
          <circle cx="182" cy="160" r="14" fill="none" stroke="#2a3a4a" stroke-width="2.5" />
          <circle cx="182" cy="160" r="12" fill="rgba(200,220,255,0.15)" />
          {/* 眼镜横梁 */}
          <path d="M 152 160 L 168 160" stroke="#2a3a4a" stroke-width="2.5" />
          {/* 镜腿 */}
          <path d="M 124 160 L 110 158" stroke="#2a3a4a" stroke-width="2.5" />
          <path d="M 196 160 L 210 158" stroke="#2a3a4a" stroke-width="2.5" />
        </g>

        {/* === 眼睛 (眼镜片内) === */}
        <g style={{ transformOrigin: "138px 162px" }}>
          {/* 左眼 */}
          <ellipse cx="138" cy="162" rx="4" ry="5" fill="#2a3a4a" />
          <circle cx="139.5" cy="160" r="1.5" fill="#ffffff" />
          {/* 眨眼 */}
          <rect x="134" y="159" width="8" height="0" fill="#fde8d0">
            <animate
              attributeName="height"
              values="0;0;0;0;0;0;0;0;0;0;0;7;0;0;0"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g style={{ transformOrigin: "182px 162px" }}>
          {/* 右眼 */}
          <ellipse cx="182" cy="162" rx="4" ry="5" fill="#2a3a4a" />
          <circle cx="183.5" cy="160" r="1.5" fill="#ffffff" />
          {/* 眨眼 */}
          <rect x="178" y="159" width="8" height="0" fill="#fde8d0">
            <animate
              attributeName="height"
              values="0;0;0;0;0;0;0;0;0;0;0;7;0;0;0"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
        </g>

        {/* === 眉毛 === */}
        <path d="M 130 145 Q 138 142 146 145" stroke="#3a2820" stroke-width="2.2" fill="none" stroke-linecap="round" />
        <path d="M 174 145 Q 182 142 190 145" stroke="#3a2820" stroke-width="2.2" fill="none" stroke-linecap="round" />

        {/* === 鼻子 === */}
        <path d="M 158 175 Q 160 178 162 175" stroke="#e8c5a0" stroke-width="1.5" fill="none" stroke-linecap="round" />

        {/* === 嘴巴 (微笑) === */}
        <path d="M 150 188 Q 160 195 170 188" stroke="#c2736b" stroke-width="2.2" fill="none" stroke-linecap="round" />

        {/* === 腮红 === */}
        <ellipse cx="120" cy="180" rx="10" ry="6" fill="url(#cheek)" />
        <ellipse cx="200" cy="180" rx="10" ry="6" fill="url(#cheek)" />

        {/* === 右手 (挥手) === */}
        <g
          style={{
            transformOrigin: "240px 250px",
            animation: waving ? "wave 1.2s ease-in-out" : "none",
          }}
        >
          {/* 手臂 */}
          <path
            d="M 235 250 Q 250 230 245 200 Q 245 195 240 195"
            stroke="#fde8d0"
            stroke-width="14"
            fill="none"
            stroke-linecap="round"
          />
          {/* 手掌 */}
          <circle cx="240" cy="192" r="10" fill="url(#skin)" />
          {/* 手指 */}
          <path d="M 234 184 Q 232 178 235 174" stroke="#fde8d0" stroke-width="3" fill="none" stroke-linecap="round" />
          <path d="M 240 182 Q 240 174 242 170" stroke="#fde8d0" stroke-width="3" fill="none" stroke-linecap="round" />
          <path d="M 246 184 Q 248 178 250 175" stroke="#fde8d0" stroke-width="3" fill="none" stroke-linecap="round" />
        </g>

        {/* === 左手 (自然下垂) === */}
        <path
          d="M 85 260 Q 75 290 80 320"
          stroke="#fde8d0"
          stroke-width="14"
          fill="none"
          stroke-linecap="round"
        />
        <circle cx="80" cy="320" r="8" fill="url(#skin)" />

        {/* 一些闪光装饰 */}
        <circle cx="240" cy="120" r="2" fill="#FFB547" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="150" r="1.5" fill="#8B7FFF" opacity="0.8">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="260" cy="200" r="1.5" fill="#FF8FB1" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* === 气泡 (打招呼) === */}
      <div
        className={`absolute top-4 md:top-8 -right-2 md:-right-8 z-20 transition-all duration-300 ${
          showBubble ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="relative bg-white border-2 border-ink-900 rounded-2xl px-4 py-2 shadow-card-lg max-w-[200px]">
          <p className="text-sm font-medium text-ink-900 whitespace-nowrap">
            {BUBBLES[bubbleIdx].text}
          </p>
          {/* 小三角指向 IP */}
          <div className="absolute -bottom-2 left-6 w-3 h-3 bg-white border-r-2 border-b-2 border-ink-900 rotate-45" />
        </div>
      </div>

      {/* === NOW 状态卡 (右上角) === */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-0 bg-white/80 backdrop-blur-xl border border-white rounded-2xl p-3 shadow-card">
        <div className="font-mono text-xs text-ink-500 mb-1">NOW</div>
        <div className="text-sm font-bold text-ink-900 mb-1">AI × 用户决策</div>
        <div className="text-xs text-ink-500">正在做新的探索</div>
      </div>

      {/* === 互动提示 (左下角) === */}
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-0 text-xs text-ink-500 font-mono flex items-center gap-1 opacity-70">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-warm animate-pulse" />
        点击和我互动
      </div>

      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(-30deg); }
          40% { transform: rotate(15deg); }
          60% { transform: rotate(-20deg); }
          80% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }
          @keyframes ponyTail {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-5deg); }
          }
        `}</style>
    </div>
  );
}