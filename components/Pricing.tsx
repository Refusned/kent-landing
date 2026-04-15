"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Старт",
    monthlyPrice: "2 990",
    annualPrice: "2 490",
    annualTotal: "29 900",
    setup: "4 990",
    description: "Для тех, кто хочет попробовать",
    features: [
      "Посты для соцсетей",
      "Ответы на вопросы",
      "Голосовые сообщения",
      "Работает 24 часа",
      "Поддержка в чате",
      "3 дня бесплатно",
    ],
    highlight: false,
    cta: "Попробовать",
    href: "https://t.me/ask_kent_bot",
  },
  {
    name: "Бизнес",
    monthlyPrice: "6 990",
    annualPrice: "5 825",
    annualTotal: "69 900",
    setup: "14 990",
    description: "Для тех, кто хочет всё",
    features: [
      "Всё из Старт",
      "Работа с почтой и календарём",
      "Создание картинок",
      "Документы и договоры",
      "Учёт расходов и доходов",
      "Приоритетная поддержка",
      "3 дня бесплатно",
    ],
    highlight: true,
    cta: "Выбрать",
    href: "https://t.me/ask_kent_bot",
  },
  {
    name: "Для компаний",
    monthlyPrice: "14 990",
    annualPrice: "12 490",
    annualTotal: "149 900",
    setup: "49 990",
    description: "Для тех, кому нужен максимум",
    features: [
      "Всё из Бизнес",
      "Помощник под названием вашей компании",
      "Настройка под ваши задачи",
      "Отдельный сервер",
      "Персональный менеджер",
    ],
    highlight: false,
    cta: "Обсудить",
    href: "https://t.me/refusned",
  },
];

const faqItems = [
  {
    q: "Как это работает?",
    a: "Вы открываете Telegram, пишете Kent задачу — он отвечает. Всё как в обычном чате. Можно писать текстом или голосом.",
  },
  {
    q: "А если я не разбираюсь в технологиях?",
    a: "Никаких знаний не нужно. Если умеете писать в Telegram — уже умеете работать с Kent.",
  },
  {
    q: "Можно попробовать?",
    a: "Да. Напишите @ask_kent_bot — это бесплатно. Первые 3 дня полной версии тоже бесплатно.",
  },
  {
    q: "А если не понравится?",
    a: "Вернём деньги. В течение 30 дней, без вопросов.",
  },
  {
    q: "Чем Kent отличается от ChatGPT?",
    a: "ChatGPT — чат без памяти. Kent — полноценный помощник: помнит контекст, 17 навыков, работает с почтой и календарём, сам присылает отчёты.",
  },
  {
    q: "Это безопасно? Где хранятся данные?",
    a: "На отдельном сервере, доступном только вам. Данные не передаются третьим лицам. Все внешние действия — только с вашего подтверждения.",
  },
  {
    q: "Можно настроить под нашу компанию?",
    a: "В тарифе «Для компаний» — да. Также работаем с почтой, календарём, соцсетями и другими сервисами.",
  },
  {
    q: "Сколько времени на запуск?",
    a: "Старт: 1 день. Бизнес: 3–5 дней. Для компаний: до недели. Мы настраиваем всё за вас.",
  },
];

function FAQItem({ item }: { item: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left cursor-pointer"
      >
        <span className="font-medium text-zinc-200 pr-4">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-zinc-500 shrink-0"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-zinc-400 text-sm leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 px-6 scroll-mt-16" id="pricing">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-black text-center bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Тарифы
        </motion.h2>
        <motion.p
          className="text-zinc-400 text-center mt-3 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          От 100 ₽ в день. Мы всё настроим за вас. 3 дня бесплатно.
        </motion.p>

        {/* Early bird promo */}
        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full px-5 py-2">
            <span className="text-amber-400 text-sm">🔥</span>
            <span className="text-amber-300 text-sm font-medium">
              Первым 20 клиентам — настройка бесплатно
            </span>
          </div>
        </motion.div>

        {/* Toggle */}
        <motion.div
          className="flex justify-center mt-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex bg-zinc-900/60 rounded-full p-1 border border-zinc-800/50">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual ? "bg-zinc-800 text-white" : "text-zinc-500"
              }`}
            >
              Месяц
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual ? "bg-zinc-800 text-white" : "text-zinc-500"
              }`}
            >
              Год <span className="text-xs text-cyan-400 ml-1">-17%</span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative p-8 rounded-2xl border backdrop-blur-sm card-hover flex flex-col ${
                plan.highlight
                  ? "border-beam bg-gradient-to-br from-blue-950/40 to-cyan-950/20 border-blue-500/30 md:scale-105"
                  : "bg-zinc-900/60 border-zinc-800/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold z-10">
                  Популярный
                </div>
              )}

              <h3 className="text-xl font-bold text-zinc-300">{plan.name}</h3>
              <p className="text-zinc-500 text-sm mt-1">{plan.description}</p>

              <div className="mt-4 mb-1">
                <span className="text-4xl font-black text-white">
                  {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-zinc-500 ml-2 text-sm">
                  ₽/мес
                </span>
              </div>
              {isAnnual && (
                <p className="text-xs text-zinc-500">
                  {plan.annualTotal} ₽/год
                </p>
              )}
              <p className="text-xs text-zinc-600 mt-1">
                Настройка: {plan.setup} ₽
              </p>

              <ul className="space-y-3 mt-6 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-zinc-400"
                  >
                    <span className="text-blue-400 mt-0.5 shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block text-center py-3 rounded-full font-bold text-sm transition-all duration-150 ${
                  plan.highlight
                    ? "shimmer-btn bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:scale-105"
                    : "border-2 border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 border border-blue-500/20 bg-blue-950/20 rounded-xl px-8 py-4">
            <span className="text-2xl">🛡️</span>
            <span className="text-zinc-300 text-sm">
              Гарантия 30 дней — не устроит, вернём деньги.
            </span>
          </div>
          <p className="text-xs text-zinc-600 mt-3">
            Оплата: российские карты, СБП, Тинькофф, переводом
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          className="mt-20 max-w-3xl mx-auto scroll-mt-16"
          id="faq"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-zinc-100 mb-8">
            Частые вопросы
          </h3>
          <div>
            {faqItems.map((faq) => (
              <FAQItem key={faq.q} item={faq} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
