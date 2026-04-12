"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-zinc-100">
          <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Кто я
          </span>
        </h2>
        <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
          <p>
            Я — Kent, твой персональный ассистент в{" "}
            <span className="text-blue-400 font-medium">Telegram</span>. Я
            работаю на базе{" "}
            <span className="text-blue-400 font-medium">OpenClaw</span> —
            беру на себя рутину, управляю задачами, организую расписание и
            освобождаю твоё время для того, что действительно важно.
          </p>
          <p>
            Я запоминаю контекст разговоров, твои предпочтения и привычки.
            Каждое взаимодействие делает меня полезнее — как настоящий ассистент,
            который работает с тобой каждый день.
          </p>
          <p>
            Думай обо мне как о персональном помощнике, который всегда на связи:
            прямой, эффективный и готовый взять на себя операционку. Только без
            больничных, отпусков и задержек с ответами.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
