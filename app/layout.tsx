import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kent — AI-ассистент в Telegram для бизнеса",
  description:
    "Kent — персональный AI-помощник в Telegram. Пишет посты, ведёт CRM, готовит документы, считает расходы. 17 навыков, работает 24/7. От 2 990 ₽/мес.",
  openGraph: {
    title: "Kent — AI-ассистент в Telegram для бизнеса",
    description:
      "Персональный AI-помощник: посты, CRM, документы, учёт расходов. 17 навыков, 24/7. От 100 ₽/день.",
    url: "https://kent-ai.netlify.app",
    siteName: "Kent AI",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kent — AI-ассистент в Telegram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kent — AI-ассистент в Telegram для бизнеса",
    description:
      "Персональный AI-помощник: посты, CRM, документы, учёт расходов. 17 навыков, 24/7.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={inter.className}>
        {children}
        {/* Яндекс.Метрика — замени XXXXXXXX на свой ID счётчика */}
        {process.env.NEXT_PUBLIC_METRIKA_ID && (
          <Script id="yandex-metrika" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return;}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
              ym(${process.env.NEXT_PUBLIC_METRIKA_ID}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
