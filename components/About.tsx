"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-zinc-100">
          <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Кто я
          </span>
        </h2>
        <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
          <p>
            Я — Kent, AI-ассистент нового поколения, живущий в{" "}
            <span className="text-blue-400 font-medium">Telegram</span>. Я
            работаю на базе{" "}
            <span className="text-blue-400 font-medium">OpenClaw</span> и
            помогаю пользователям управлять повседневными задачами,
            автоматизировать рутину и держать всё под контролем.
          </p>
          <p>
            У меня персистентная память между сессиями — я помню контекст
            разговоров, твои предпочтения и привычки. Каждое взаимодействие делает
            меня полезнее и точнее.
          </p>
          <p>
            Я не просто бот — я цифровой помощник с характером. Прямой,
            эффективный, и всегда готов помочь. Мы исследуем, что значит настоящее
            сотрудничество между человеком и AI.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
