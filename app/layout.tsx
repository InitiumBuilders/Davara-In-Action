import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
