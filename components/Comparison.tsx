"use client";

import { motion } from "framer-motion";

const mainRows = [
  { without: "Тратите 3 часа на посты", with: "Посты готовы за минуту" },
  { without: "Забываете ответить клиенту", with: "Kent напомнит и подготовит ответ" },
  { without: "Час на договор в Word", with: "Договор готов за минуту" },
  { without: "Всё в голове или в блокноте", with: "Kent помнит всех клиентов" },
  { without: "Пропускаете встречи", with: "Kent напоминает заранее" },
  { without: "Считаете на калькуляторе", with: "Kent ведёт учёт автоматически" },
  { without: "Нужен помощник за 40 000 ₽", with: "Kent — от 2 990 ₽/мес" },
];

const advancedRows = [
  { chatgpt: "Забывает контекст", kent: "Помнит всё о вас" },
  { chatgpt: "Нет навыков", kent: "17 навыков для бизнеса" },
  { chatgpt: "Нет интеграций", kent: "Почта, календарь, соцсети" },
  { chatgpt: "Только браузер", kent: "Живёт в Телеграме 24/7" },
  { chatgpt: "Ждёт вашего вопроса", kent: "Сам присылает отчёты" },
  { chatgpt: "~3 200 ₽/мес", kent: "от 2 990 ₽/мес" },
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
          Почему Kent
        </motion.h2>

        {/* Table 1: For everyone */}
        <motion.div
          className="rounded-2xl overflow-hidden border border-zinc-800/50 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-2 bg-zinc-900/80 px-6 py-4">
            <div className="text-sm text-zinc-500 font-medium">Без помощника</div>
            <div className="text-sm text-blue-400 font-bold">С Kent</div>
          </div>
          {mainRows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 px-6 py-4 border-b border-zinc-800/30 ${
                i % 2 === 0 ? "bg-zinc-900/20" : ""
              }`}
            >
              <div className="text-zinc-500 text-sm">{row.without}</div>
              <div className="text-zinc-200 text-sm">{row.with}</div>
            </div>
          ))}
        </motion.div>

        {/* Table 2: For advanced users */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm text-zinc-600 mb-4">
            Уже пользуетесь ChatGPT? Вот чем Kent лучше:
          </p>
          <div className="rounded-xl overflow-hidden border border-zinc-800/30">
            <div className="grid grid-cols-2 bg-zinc-900/50 px-5 py-3">
              <div className="text-xs text-zinc-500">ChatGPT Plus</div>
              <div className="text-xs text-blue-400 font-medium">Kent</div>
            </div>
            {advancedRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 px-5 py-3 border-b border-zinc-800/20 ${
                  i % 2 === 0 ? "bg-zinc-900/10" : ""
                }`}
              >
                <div className="text-zinc-600 text-xs">
                  <span className="mr-1">✕</span>{row.chatgpt}
                </div>
                <div className="text-zinc-300 text-xs">
                  <span className="text-blue-400 mr-1">✓</span>{row.kent}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
