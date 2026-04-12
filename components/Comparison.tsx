"use client";

import { motion } from "framer-motion";

const rows = [
  { label: "Память", chatgpt: "Забывает", kent: "Помнит всё о вас" },
  { label: "Скиллы", chatgpt: "Просто чат", kent: "17 бизнес-скиллов" },
  { label: "Интеграции", chatgpt: "Нет", kent: "Google, Twitter, CRM" },
  { label: "Telegram", chatgpt: "Только браузер", kent: "Живёт в Telegram 24/7" },
  { label: "Проактивность", chatgpt: "Ждёт вопроса", kent: "Брифинги, напоминания" },
  { label: "Голос", chatgpt: "Нет в Telegram", kent: "Надиктуй \u2014 сделает" },
  { label: "Действия", chatgpt: "Только текст", kent: "Посты, CRM, документы" },
  { label: "Цена", chatgpt: "~3 200\u00a0\u20bd/мес", kent: "от 2 990\u00a0\u20bd/мес", noBullets: true },
];

export default function Comparison() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-black text-center bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Kent vs ChatGPT
        </motion.h2>
        <motion.p
          className="text-zinc-400 text-center mt-3 text-lg mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ChatGPT \u2014 отличный чат. Kent \u2014 ваш сотрудник.
        </motion.p>

        <motion.div
          className="rounded-2xl overflow-hidden border border-zinc-800/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-zinc-900/80 px-6 py-4">
            <div />
            <div className="text-sm text-zinc-500 font-medium text-center">
              ChatGPT Plus
            </div>
            <div className="text-sm text-blue-400 font-bold text-center">
              Kent
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 px-6 py-4 border-b border-zinc-800/30 ${
                i % 2 === 0 ? "bg-zinc-900/20" : ""
              }`}
            >
              <div className="text-zinc-400 text-sm font-medium">
                {row.label}
              </div>
              <div className="text-zinc-500 text-sm text-center">
                {!row.noBullets && (
                  <span className="text-zinc-600 mr-1">\u2715</span>
                )}
                {row.chatgpt}
              </div>
              <div className="text-zinc-200 text-sm text-center">
                {!row.noBullets && (
                  <span className="text-blue-400 font-medium mr-1">\u2713</span>
                )}
                {row.kent}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
