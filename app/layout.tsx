import type { Metadata } from "next";
import "../assets/styles/ui.scss";

export const metadata: Metadata = {
  title: "Don's Portfolio",
  description: "Don의 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
