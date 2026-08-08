import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kallos Engine — Design System & Component Showcase",
  description: "Production-ready Showcase, Documentation App, and Design Token Bridge for Kallos Engine (κάλλος) built with Neo-Hellenic Minimalism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text-primary)] font-sans antialiased selection:bg-[var(--color-accent)] selection:text-[#09090B]">
        {children}
      </body>
    </html>
  );
}
