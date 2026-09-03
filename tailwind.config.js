/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 彩虹渐变背景色
        rainbow: {
          pink:   "#FFD4E0",
          yellow: "#FFF4C7",
          blue:   "#C7E0FF",
          mint:   "#C8F4E0",
          purple: "#E0D4FF",
          peach:  "#FFE0CC",
        },
        ink: {
          900: "#1A1A2E",   // 主文字
          700: "#3D3D5C",   // 次文字
          500: "#7A7A9A",   // 弱文字
          300: "#B8B8D0",   // 占位
        },
        accent: {
          dark:   "#1A1A2E",  // 主按钮黑
          warm:   "#FF6B6B",  // 强调红
          purple: "#8B7FFF",  // 紫
          sage:   "#7BC8A4",  // 鼠尾草绿
          gold:   "#FFB547",  // 焦糖
          blue:   "#5B9DFF",  // 蓝
          pink:   "#FF8FB1",  // 粉
        }
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Noto Serif SC"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'monospace'],
      },
      letterSpacing: {
        tightish: '-0.02em',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(26, 26, 46, 0.08)',
        'card-lg': '0 12px 48px -8px rgba(26, 26, 46, 0.12)',
        'btn': '0 6px 16px -4px rgba(26, 26, 46, 0.2)',
      }
    },
  },
  plugins: [],
};