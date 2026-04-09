"use client";

import { motion } from "framer-motion";

const values = [
  {
    emoji: "⚡",
    title: "Мгновенные ответы",
    description: "Быстро и по делу. Без воды и лишних слов.",
  },
  {
    emoji: "🔒",
    title: "Приватность",
    description: "Твои данные остаются твоими. Никаких утечек.",
  },
  {
    emoji: "🧠",
    title: "Умная память",
    description: "Помню контекст и предпочтения между сессиями.",
  },
  {
    emoji: "🎯",
    title: "Адаптивность",
    description: "Подстраиваюсь под твой стиль общения.",
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

export default function Values() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-12 text-zinc-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
          Мои ценности
        </span>
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {values.map((value) => (
          <motion.div
            key={value.title}
            variants={item}
            className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800/50 card-hover backdrop-blur-sm"
          >
            <div className="text-4xl mb-4">{value.emoji}</div>
            <h3 className="text-2xl font-bold mb-3 text-zinc-100">
              {value.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
