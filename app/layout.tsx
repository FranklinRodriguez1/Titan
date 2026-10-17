import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TitanTech — Desarrollo de software",
  description:
    "Webs, apps y automatizaciones con IA. TitanTech: precisión, disciplina y resiliencia en cada proyecto.",
  icons: { icon: "/brand/titantech-favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Sora:wght@300;400;600;800&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t&&t!=='acero')document.documentElement.setAttribute('data-theme',t)}catch(e){}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
