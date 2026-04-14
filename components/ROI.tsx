"use client";

import { motion } from "framer-motion";

const savings = [
  { task: "Посты для соцсетей", hours: "15-20", icon: "✍️" },
  { task: "Ответы на вопросы клиентов", hours: "5-10", icon: "💬" },
  { task: "Письма и рассылки", hours: "5-8", icon: "📧" },
  { task: "Документы и договоры", hours: "3-5", icon: "📄" },
  { task: "CRM и напоминания", hours: "2-3", icon: "📋" },
  { task: "Учёт расходов", hours: "2-3", icon: "💰" },
];

export default function ROI() {
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
          Сколько стоит ваша рутина?
        </motion.h2>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Left: task list */}
          <div className="space-y-3">
            {savings.map((item) => (
              <div
                key={item.task}
                className="flex items-center justify-between bg-zinc-900/60 border border-zinc-800/50 rounded-xl px-5 py-3"
              >
                <span className="text-zinc-300 text-sm">
                  <span className="mr-2">{item.icon}</span>
                  {item.task}
                </span>
                <span className="text-zinc-500 text-sm font-mono shrink-0 ml-4">
                  {item.hours} ч/мес
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between bg-zinc-800/60 border border-zinc-700/50 rounded-xl px-5 py-3 mt-2">
              <span className="text-zinc-200 font-bold text-sm">Итого</span>
              <span className="text-blue-400 font-bold text-sm font-mono">
                32-49 часов/мес
              </span>
            </div>
          </div>

          {/* Right: ROI calculation */}
          <div className="bg-gradient-to-br from-blue-950/40 to-cyan-950/20 border border-blue-500/20 rounded-2xl p-8 text-center">
            <p className="text-zinc-400 text-sm mb-2">
              При ставке 500-1000 ₽/час это
            </p>
            <p className="text-4xl sm:text-5xl font-black text-white mb-1">
              16 000 - 49 000 ₽
            </p>
            <p className="text-zinc-400 text-sm mb-6">
              в месяц на рутину
            </p>

            <div className="border-t border-blue-500/20 pt-6">
              <p className="text-zinc-400 text-sm mb-2">Kent:</p>
              <p className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                от 2 990 ₽/мес
              </p>
              <p className="text-cyan-400 font-bold text-lg mt-3">
                Окупается за первую неделю
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
