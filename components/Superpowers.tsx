"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";

const superpowers = [
  {
    emoji: "🎙",
    title: "Говорите голосом",
    description:
      "Запишите голосовое сообщение — Kent поймёт и сделает. Как будто диктуете живому помощнику.",
    tag: "Голосовые",
  },
  {
    emoji: "🤖",
    title: "Работает сам",
    description:
      "Утром пришлёт план на день. Напомнит о встрече. В понедельник — отчёт за неделю. Вам не нужно ничего запускать.",
    tag: "Автоматически",
  },
  {
    emoji: "🧠",
    title: "Помнит о вас всё",
    description:
      "Имена клиентов, что обсуждали месяц назад, ваши привычки. Чем больше общаетесь — тем точнее понимает.",
    tag: "Память",
  },
  {
    emoji: "✨",
    title: "Делает текст живым",
    description:
      "Написали текст, но звучит как робот? Отправьте Kent — перепишет так, что никто не отличит от живого.",
    tag: "Тексты",
  },
  {
    emoji: "📊",
    title: "Показывает результат",
    description:
      "Каждую неделю — отчёт: сколько сделал, сколько времени сэкономил, сколько это стоило бы руками.",
    tag: "Отчёты",
  },
  {
    emoji: "🔍",
    title: "Разберётся в вашем деле",
    description:
      "Расскажите Kent о вашем бизнесе — через неделю он будет знать его лучше нового сотрудника.",
    tag: "Бизнес",
  },
  {
    emoji: "🌐",
    title: "Найдёт информацию",
    description:
      "Попросите найти что-то в интернете — Kent найдёт, прочитает и пришлёт готовый ответ. Без 20 открытых вкладок.",
    tag: "Поиск",
  },
  {
    emoji: "📸",
    title: "Понимает фото",
    description:
      "Сфоткайте визитку — сохранит контакт. Скриншот ошибки — объяснит. Фото товара — опишет для объявления.",
    tag: "Фото",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Superpowers() {
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    },
    []
  );

  return (
    <section className="py-24 px-6 scroll-mt-16" id="superpowers">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-black text-center bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Что умеет Kent
        </motion.h2>
        <motion.p
          className="text-zinc-500 text-center mt-3 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Не просто отвечает на вопросы — делает работу за вас.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {superpowers.map((item) => (
            <motion.div
              key={item.tag}
              variants={itemVariants}
              className="spotlight-card bg-zinc-900/60 border border-zinc-800/50 hover:border-blue-500/30 rounded-xl p-6 transition-all duration-300"
              onMouseMove={handleMouseMove}
            >
              <div className="relative z-10">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-bold text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-block mt-4 text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
