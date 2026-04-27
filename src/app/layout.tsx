import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Bill Warren — Product Leader",
  description:
    "Product leader with 7+ years of experience building and scaling AI-powered platforms, financial tools, and community engagement systems. Head of Product at Game7/Summon, former corporate attorney.",
  keywords: [
    "product manager",
    "AI",
    "Web3",
    "platform strategy",
    "product leader",
    "Bill Warren",
  ],
  openGraph: {
    title: "Bill Warren — Product Leader",
    description:
      "Product leader with 7+ years building AI-powered platforms, financial tools, and community engagement systems.",
    type: "website",
    url: "https://billsclub.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bill Warren — Product Leader",
    description:
      "Product leader with 7+ years building AI-powered platforms, financial tools, and community engagement systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${bricolage.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
