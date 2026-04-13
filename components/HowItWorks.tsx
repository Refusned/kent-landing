"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Откройте Телеграм",
    description: "У вас уже есть всё, что нужно. Никаких новых приложений.",
  },
  {
    number: "2",
    title: "Найдите Kent",
    description: "Нажмите кнопку ниже или найдите @ask_kent_bot в поиске.",
  },
  {
    number: "3",
    title: "Напишите задачу",
    description: "Текстом или голосом. Kent ответит через несколько секунд.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function HowItWorks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-black text-center bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Как начать
        </motion.h2>
        <motion.p
          className="text-zinc-500 text-center mt-3 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Три простых шага. Занимает меньше минуты.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://t.me/ask_kent_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full px-8 py-4 font-bold text-lg hover:scale-105 transition-transform inline-block"
          >
            Написать Kent
          </a>
        </motion.div>
      </div>
    </section>
  );
}
