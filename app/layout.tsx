import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/lib/data";

const SITE_URL = "https://dongjinghan.cn";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} · ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.subtitle,
  keywords: ["董静涵", "AI 产品经理", "Agent", "AIGC", "华东师范大学", "字节跳动", "小红书", "哔哩哔哩", "校招"],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  // Open Graph (分享到小红书/微信/LinkedIn 时显示的卡片)
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: SITE_URL,
    title: `${profile.name} · ${profile.title}`,
    description: profile.subtitle,
    siteName: `${profile.name} · 个人作品集`,
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.title}`,
    description: profile.subtitle,
  },
  // 搜索引擎
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}