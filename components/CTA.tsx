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
          3 дня бесплатно. Ничего сложного. Гарантия 30 дней.
        </motion.p>
      </div>
    </section>
  );
}
