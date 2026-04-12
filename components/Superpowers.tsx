"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";

const superpowers = [
  {
    emoji: "\ud83c\udf99",
    title: "Скажи голосом \u2014 Kent сделает",
    description:
      "Отправь голосовое: \u00abПодготовь КП для Иванова, лестницы, 50 штук по 15 тысяч\u00bb. Kent расшифрует, поймёт и пришлёт готовый документ.",
    tag: "Голосовой ввод",
  },
  {
    emoji: "\ud83e\udd16",
    title: "Работает без вас",
    description:
      "Утренний брифинг в 7:00. Напоминание о посте в 10:00. Еженедельный отчёт в понедельник. Kent работает, даже когда вы спите.",
    tag: "Автономные задачи",
  },
  {
    emoji: "\ud83e\udde0",
    title: "Помнит всё",
    description:
      "Имя клиента, его предпочтения, последний разговор месяц назад. Kent не забывает \u2014 он становится умнее с каждым днём.",
    tag: "Вечная память",
  },
  {
    emoji: "\u2728",
    title: "Убивает бото-текст",
    description:
      "Присылаете AI-текст \u2014 Kent переписывает так, что ни один антиплагиат не заметит. 6 режимов: от лёгкой правки до полного рерайта.",
    tag: "Очеловечивание",
  },
  {
    emoji: "\ud83d\udcca",
    title: "Считает вашу выгоду",
    description:
      "Каждый понедельник \u2014 отчёт: сколько постов, документов, писем обработал и сколько денег сэкономил. Вы видите ROI каждую неделю.",
    tag: "ROI-отчёты",
  },
  {
    emoji: "\ud83d\udd2c",
    title: "Разберёт ваш бизнес",
    description:
      "Kent подключается к вашему бизнесу: изучает процессы, находит узкие места, предлагает решения. Через неделю знает бизнес лучше любого сотрудника.",
    tag: "Бизнес-аналитик",
  },
  {
    emoji: "\ud83c\udf10",
    title: "Сёрфит интернет за вас",
    description:
      "Открывает браузер, ищет информацию, сравнивает цены, читает статьи и собирает данные. Вы получаете готовый результат \u2014 без вкладок и переключений.",
    tag: "Веб-исследование",
  },
  {
    emoji: "\ud83d\udc41",
    title: "Видит и понимает фото",
    description:
      "Фото визитки \u2014 сохранит контакт. Скриншот ошибки \u2014 объяснит и поможет. Фото товара конкурента \u2014 проанализирует. Просто отправьте картинку.",
    tag: "Зрение AI",
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
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-black text-center bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Не просто чат. Цифровой сотрудник.
        </motion.h2>
        <motion.p
          className="text-zinc-500 text-center mt-3 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Kent умеет то, что не умеет ни один чат-бот.
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
