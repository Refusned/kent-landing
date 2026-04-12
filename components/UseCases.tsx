"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";

const useCases = [
  {
    emoji: "\u270d\ufe0f",
    title: "SMM на автопилоте",
    description:
      "Скажи тему \u2014 получи готовый пост с хэштегами за 30 секунд. Для Telegram, Instagram, VK и X. Контент-план на месяц \u2014 одним сообщением.",
  },
  {
    emoji: "\ud83d\udcec",
    title: "Секретарь, который не спит",
    description:
      "Дайджест почты утром. Напоминание о звонке днём. Follow-up клиенту вечером. Как живой помощник, только без выходных и больничных.",
  },
  {
    emoji: "\ud83d\udcc4",
    title: "Документы без юриста",
    description:
      "Договор за минуту. КП за 30 секунд. Акт \u2014 одной фразой. Просто скажи что нужно \u2014 Kent оформит и пришлёт файлом.",
  },
  {
    emoji: "\ud83d\udcb0",
    title: "Бухгалтерия в чате",
    description:
      "\u00ab+50000 от Иванова\u00bb \u2014 и Kent записал. Считает налоги, ведёт баланс, готовит отчёт. Проще любой таблицы.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function UseCases() {
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    },
    []
  );

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-black text-center bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Что Kent делает за вас
        </motion.h2>
        <motion.p
          className="text-zinc-500 text-center mt-3 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Не просто отвечает \u2014 действует. Вот задачи, которые Kent закрывает каждый день.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {useCases.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="spotlight-card group bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-300"
              onMouseMove={handleMouseMove}
            >
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.emoji}
                </div>
                <h3 className="text-2xl font-bold text-zinc-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
