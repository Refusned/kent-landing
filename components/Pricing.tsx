"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Пилот",
    price: "39 000",
    period: "разово",
    description: "Проверка гипотезы на одном сценарии",
    features: [
      "1 рабочий сценарий",
      "7-10 дней запуска",
      "Настройка базы знаний",
      "Тестирование и калибровка",
      "Отчёт по результатам",
    ],
    highlight: false,
  },
  {
    name: "Запуск",
    price: "от 59 000",
    period: "разово",
    description: "Полноценный запуск AI-ассистента под ваш процесс",
    features: [
      "Полный сценарий + handoff менеджеру",
      "База знаний и tone of voice",
      "Квалификация лидов и FAQ",
      "Интеграции (CRM, календарь)",
      "2 недели докрутки после запуска",
    ],
    highlight: true,
  },
  {
    name: "Сопровождение",
    price: "от 19 000",
    period: "₽/мес",
    description: "Постоянная оптимизация и контроль качества",
    features: [
      "Мониторинг и аналитика",
      "Оптимизация сценариев",
      "Доработки и новые функции",
      "Контроль качества ответов",
      "Приоритетная поддержка",
    ],
    highlight: false,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Pricing() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
          Тарифы
        </span>
      </motion.h2>
      <motion.p
        className="text-lg text-zinc-500 mb-12 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Вы платите не за бота, а за рабочий инструмент под конкретный участок
        бизнеса
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={item}
            className={`relative p-8 rounded-2xl border backdrop-blur-sm card-hover flex flex-col ${
              plan.highlight
                ? "bg-gradient-to-br from-blue-950/40 to-cyan-950/20 border-blue-500/30"
                : "bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border-zinc-800/50"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold">
                Популярный
              </div>
            )}
            <h3 className="text-xl font-bold text-zinc-100 mb-2">
              {plan.name}
            </h3>
            <p className="text-zinc-500 text-sm mb-6">{plan.description}</p>
            <div className="mb-6">
              <span className="text-3xl font-black text-zinc-100">
                {plan.price}
              </span>
              <span className="text-zinc-500 ml-2 text-sm">
                {plan.period === "₽/мес" ? "₽/мес" : "₽"}
              </span>
            </div>
            <ul className="space-y-3 flex-1">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-zinc-400"
                >
                  <span className="text-blue-400 mt-0.5">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://t.me/kent_ai_bot"
              className={`mt-8 block text-center py-3 rounded-full font-bold text-sm transition-all duration-150 ${
                plan.highlight
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 hover:scale-105"
                  : "border-2 border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white hover:bg-zinc-900/50"
              }`}
            >
              Обсудить запуск
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
