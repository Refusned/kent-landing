"use client";

import { motion } from "framer-motion";

const badges = [
  { emoji: "\u26a1", text: "Отвечает за секунды" },
  { emoji: "\ud83d\udd12", text: "Ваши данные в безопасности" },
  { emoji: "\ud83e\udde0", text: "Помнит всё" },
  { emoji: "\ud83c\udfaf", text: "Подстраивается под вас" },
];

export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-zinc-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Кто такой Kent
          </span>
        </motion.h2>

        <motion.div
          className="space-y-6 text-lg text-zinc-400 leading-relaxed mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>
            Kent — это помощник в{" "}
            <span className="text-blue-400 font-medium">Телеграме</span>.
            Вы пишете ему как обычному человеку, а он делает работу за вас.
          </p>
          <p>
            Он запоминает всё: ваших клиентов, ваш бизнес, как вам
            нравится общаться. Чем больше вы с ним работаете, тем лучше
            он вас понимает.
          </p>
          <p className="text-zinc-300 font-medium">
            Не нужно ничего устанавливать. Не нужны никакие знания.
            Просто откройте Телеграм и напишите.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {badges.map((badge) => (
            <span
              key={badge.text}
              className="text-sm px-4 py-2 rounded-full bg-zinc-900/60 border border-zinc-800/50 text-zinc-400 hover:border-blue-500/30 hover:text-zinc-300 transition-colors"
            >
              {badge.emoji} {badge.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
