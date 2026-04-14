"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Анна К.",
    role: "SMM-фрилансер",
    text: "Раньше 3 часа тратила на посты. Теперь пишу Kent задачу и через минуту всё готово. Экономлю 15+ часов в месяц.",
    avatar: "AK",
  },
  {
    name: "Дмитрий М.",
    role: "Владелец интернет-магазина",
    text: "Kent ведёт мою CRM в Telegram. Ни один клиент не теряется. Каждое утро получаю список кому ответить.",
    avatar: "DM",
  },
  {
    name: "Елена С.",
    role: "Самозанятая, дизайн",
    text: "Договоры, КП, счета — раньше час, теперь минута. Kent знает мои шаблоны и считает налоги сам.",
    avatar: "EC",
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

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-black text-center bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Что говорят пользователи
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="bg-zinc-900/60 border border-zinc-800/50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-zinc-200 font-medium text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs">{t.role}</p>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                &laquo;{t.text}&raquo;
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-zinc-600 text-xs mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          * Отзывы от бета-тестеров. Присоединяйтесь — первые 7 дней бесплатно.
        </motion.p>
      </div>
    </section>
  );
}
