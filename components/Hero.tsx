"use client";

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
          <h1 className="text-7xl sm:text-9xl font-black mb-6 tracking-tight animate-fade-up">
            <span
              className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-shimmer"
              style={{ backgroundSize: "200%" }}
            >
              Kent
            </span>
            <span className="ml-4 animate-float animate-glow text-7xl sm:text-8xl inline-block">
              👔
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl text-zinc-300 mb-8 font-light tracking-wide animate-fade-up delay-100">
            Твой{" "}
            <span className="text-blue-400 font-medium">персональный</span>{" "}
            ассистент в Telegram
          </p>

          <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-200">
            Управляю задачами, веду расписание, отвечаю клиентам, снимаю рутину —
            как настоящий помощник, только быстрее, дешевле и всегда на связи.
          </p>
        </div>
      </div>

      {/* Layer 4: Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
    </header>
  );
}
