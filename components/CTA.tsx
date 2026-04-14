"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Aurora background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-zinc-950 to-cyan-950/30 animate-gradient"
        style={{ backgroundSize: "200% 200%" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Попробуйте — это бесплатно
        </motion.h2>

        <motion.p
          className="text-xl text-zinc-400 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Напишите Kent прямо сейчас. Он ответит за 5 секунд.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://t.me/ask_kent_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full px-8 py-4 font-bold text-lg hover:scale-105 transition-transform inline-block"
          >
            Написать Kent →
          </a>
          <a
            href="https://t.me/refusned"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-zinc-700 hover:border-zinc-500 text-zinc-300 rounded-full px-8 py-4 font-bold text-lg transition-colors inline-block"
          >
            Задать вопрос
          </a>
        </motion.div>

        <motion.p
          className="text-sm text-zinc-500 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          7 дней бесплатно. Ничего сложного. Гарантия 30 дней.
        </motion.p>

        <motion.div
          className="mt-8 pt-6 border-t border-zinc-800/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-zinc-500 text-sm mb-3">
            Не готовы пробовать? Подпишитесь на канал — кейсы, обновления, советы:
          </p>
          <a
            href="https://t.me/kent_assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            @kent_assistant
          </a>
        </motion.div>
      </div>
    </section>
  );
}
