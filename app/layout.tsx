import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Davara-In-Use · The Davara Protocol — Multi-Sig for Emergent Intelligence",
  description:
    "A consent architecture for high-leverage AI. Case Study 001 from Davara EI — live research, architecture, and the manifesto for Emergent Intelligence in the Emergent Age.",
  openGraph: {
    title: "The Davara Protocol — Multi-Sig for Emergent Intelligence",
    description:
      "How do you build consent infrastructure for intelligence itself? Case Study 001 from Davara EI.",
    url: "https://davara-in-use.vercel.app",
    siteName: "Davara-In-Use",
    type: "website",
  },
  metadataBase: new URL("https://davara-in-use.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
