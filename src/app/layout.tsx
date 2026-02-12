import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naani's Closet — Curated Fashion for the Modern You",
  description:
    "Soft, stylish, and effortlessly chic. Discover hand-picked fashion pieces designed for Gen Z aesthetics. Shop dresses, knitwear, tops & more.",
  keywords: ["fashion", "clothing", "aesthetic", "Gen Z fashion", "Naani's Closet", "online store"],
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Naani's Closet — Curated Fashion",
    description: "Soft, stylish, and effortlessly chic fashion pieces.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
