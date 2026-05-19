import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JellyMate 🪼 · 屏幕边缘的陪伴",
  description: "一只住在你电脑边缘的小水母，轻轻陪着你上班。低打扰，有边界感，治愈。",
  openGraph: {
    title: "JellyMate 🪼",
    description: "屏幕边缘的陪伴",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
