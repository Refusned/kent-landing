"use client";

import { motion } from "framer-motion";

export default function LearnMore() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-zinc-100">
          <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Узнать больше
          </span>
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:from-blue-500 hover:to-cyan-500 transition-transform duration-150 hover:scale-105"
          >
            Попробовать Kent{" "}
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-150">
              →
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
