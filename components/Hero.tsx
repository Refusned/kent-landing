"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = Math.round(v) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* Layer 1: Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-zinc-950 to-cyan-950/30 animate-gradient"
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Layer 2: Radial glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl" />

      {/* Layer 3: Content */}
      <div className="relative max-w-4xl mx-auto px-6 py-24 sm:py-32">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-blue-400/80 uppercase mb-4 animate-fade-up">
            AI-ассистент в Telegram
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight animate-fade-up leading-tight">
            <span className="text-zinc-100">
              Рутина сжирает
            </span>
            <br />
            <span
              className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-shimmer"
              style={{ backgroundSize: "200%" }}
            >
              ваше время?
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-300 mb-4 font-light tracking-wide animate-fade-up delay-100">
            <span className="text-blue-400 font-medium">Kent</span>{" "}
            берёт её на себя
            <span className="ml-2 animate-float inline-block">👔</span>
          </p>

          <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-200">
            Посты для соцсетей, ответы клиентам, договоры, учёт расходов.
            Напишите задачу в Telegram — Kent сделает. 24/7, дешевле стажёра.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="https://t.me/ask_kent_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full px-8 py-4 font-bold text-lg hover:scale-105 transition-transform inline-block"
            >
              Попробовать бесплатно →
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
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            7 дней бесплатно. Ничего сложного.
          </motion.p>

          {/* Metrics */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-14 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                <AnimatedNumber value={30} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 mt-1">постов/мес</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                <AnimatedNumber value={17} />
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 mt-1">скиллов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 mt-1">на связи</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Layer 4: Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
    </header>
  );
}
