import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.title}`,
  description: profile.subtitle,
  // OG / Twitter 等元信息(部署后分享给面试官 / 朋友圈会用)
  openGraph: {
    title: `${profile.name} · ${profile.title}`,
    description: profile.subtitle,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}