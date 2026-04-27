<div align="center">

<img src="public/og-image.png" width="640" alt="Kent — AI-ассистент в Telegram"/>

# Kent Landing — kent-ai.ru

**Лендинг персонального AI-ассистента Kent в Telegram.**
Production-сайт на Next.js 16 + React 19 + Tailwind v4, развёрнут на kent-ai.ru.

[![Live](https://img.shields.io/badge/Live-kent--ai.ru-26A5E4?style=for-the-badge)](https://kent-ai.ru)
[![Try the bot](https://img.shields.io/badge/Telegram-@ask__kent__bot-26A5E4?logo=telegram&logoColor=white&style=for-the-badge)](https://t.me/ask_kent_bot)

[![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![CI](https://github.com/Refusned/kent-landing/actions/workflows/ci.yml/badge.svg)](https://github.com/Refusned/kent-landing/actions/workflows/ci.yml)

</div>

---

## Что это

Маркетинговый лендинг для продукта **Kent** — production-ready AI-ассистента, который ставится клиенту на VPS и работает как цифровой сотрудник в Telegram. Цель сайта — конвертировать посетителя в установку демо-бота или заявку на установку коммерческой версии.

Реальный продакшн: [https://kent-ai.ru](https://kent-ai.ru)
Связанный репо с самим продуктом: [Refusned/Kent-Overlay](https://github.com/Refusned/Kent-Overlay)

## Стек

| Слой | Технология |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, RSC, Static Export) |
| UI | [React 19](https://react.dev/) + TypeScript 5 |
| Стили | [Tailwind CSS v4](https://tailwindcss.com/) (новый engine, без конфиг-файла) |
| Анимации | [Framer Motion 12](https://www.framer.com/motion/) (scroll-triggered, stagger, spring) |
| Линтер | ESLint 9 (`eslint-config-next`) |
| Деплой | Static export → kent-ai.ru |

## Секции лендинга

| Компонент | Назначение |
|---|---|
| `Navbar.tsx` | Навигация со скроллом, sticky header |
| `Hero.tsx` | Первый экран: логотип, USP, CTA в Telegram |
| `Superpowers.tsx` | 6 ключевых способностей Kent (грид с иконками) |
| `About.tsx` | Описание продукта и кому он подходит |
| `HowItWorks.tsx` | 3-4 шага установки |
| `UseCases.tsx` | Кейсы использования по аудитории |
| `Comparison.tsx` | Сравнительная таблица: Kent vs ChatGPT vs найм помощника |
| `Testimonials.tsx` | Отзывы клиентов |
| `ROI.tsx` | Интерактивный калькулятор ROI |
| `Pricing.tsx` | Тарифы (Trial · Pro · Business) |
| `CTA.tsx` | Финальный CTA-блок перед футером |
| `Footer.tsx` | Контакты, ссылки, NAP |

Все секции — отдельные React-компоненты с собственной анимацией через Framer Motion.

## Локальная разработка

```bash
git clone https://github.com/Refusned/kent-landing.git
cd kent-landing

npm install
npm run dev
# → http://localhost:3000
```

## Production-сборка

```bash
npm run build         # Next.js production build
npm run start         # запуск собранного сайта
```

Для статического экспорта (деплой на любой статический хостинг):

```bash
npm run build
# → out/ — готовая статика
```

## SEO и аналитика

- ✅ `metadataBase` для абсолютных OG-image URL
- ✅ `sitemap.xml` и `robots.txt` в `public/`
- ✅ Open Graph + Twitter Card мета-теги в `app/layout.tsx`
- ✅ Семантический HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- ✅ Mobile-first responsive

## Структура проекта

```
kent-landing/
├── app/
│   ├── layout.tsx       # Root layout, metadata, OG, шрифты
│   ├── page.tsx         # Главная страница: композиция всех секций
│   ├── globals.css      # Tailwind v4 + CSS variables
│   └── favicon.ico
├── components/          # 12 секций лендинга (Navbar, Hero, ROI, …)
├── public/
│   ├── og-image.png     # OG/Twitter preview
│   ├── favicon.svg
│   ├── sitemap.xml
│   └── robots.txt
├── package.json
├── next.config.ts
├── tsconfig.json
└── eslint.config.mjs
```

## Лицензия

[MIT](LICENSE) © 2026 Refusned (Roman Barmin)

---

<div align="center">

> *Лендинг сделан собственными руками для собственного продукта Kent —
> от компонентного дизайна до SEO и анимаций. Открыт к работе по фронтенду на Next.js / React.*

</div>
