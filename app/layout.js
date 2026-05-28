import "./globals.css";

export const metadata = {
  title: "Focus Desk",
  description: "A calm desk for daily focus and lightweight task planning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
