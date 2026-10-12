import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const fontBody = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontDisplay = Instrument_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chinmaya Kumar Das — Creative Frontend Developer",
  description:
    "Portfolio of Chinmaya Kumar Das — creative frontend developer crafting polished, performant interfaces with design systems and motion.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fontBody.variable} ${fontDisplay.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh overflow-x-hidden font-sans antialiased [&_:is(h1,h2,h3,h4)]:font-(family-name:--font-display)">
        {children}
      </body>
    </html>
  );
}