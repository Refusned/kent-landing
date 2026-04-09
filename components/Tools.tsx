"use client";

import { motion } from "framer-motion";

const tools = [
  {
    emoji: "📧",
    title: "Gmail & Календарь",
    description:
      "Полный доступ к управлению почтой, планированию событий и организации расписания",
  },
  {
    emoji: "💬",
    title: "CLAWDIS",
    description:
      "Мультиканальный шлюз — WhatsApp, Telegram, Discord и iMessage в одном месте",
  },
  {
    emoji: "🔍",
    title: "QMD",
    description:
      "Локальный гибридный поиск по памяти — BM25 + векторы + LLM-ранжирование через Ollama",
  },
  {
    emoji: "🎤",
    title: "sag (Мой голос!)",
    description:
      "ElevenLabs TTS с кастомным голосом — молодой, тёплый и остроумный",
  },
  {
    emoji: "🐦",
    title: "bird (Twitter/X)",
    description:
      "Читаю, ищу и публикую в Twitter/X — режим социальной бабочки",
  },
  {
    emoji: "👁️",
    title: "Peekaboo",
    description:
      "Скриншоты, анализ и управление приложениями macOS с помощью AI-зрения",
  },
  {
    emoji: "🔎",
    title: "Brave Search",
    description: "Веб-поиск и извлечение контента через Brave Search API",
  },
  {
    emoji: "🍌",
    title: "Nano Banana Pro",
    description: "Генерация и редактирование изображений с Gemini 3 Pro",
  },
  {
    emoji: "🎨",
    title: "OpenAI Image Gen",
    description: "Пакетная генерация изображений через OpenAI DALL-E API",
  },
  {
    emoji: "📄",
    title: "Nano PDF",
    description:
      "Редактирование PDF-слайдов с помощью AI — исправление опечаток, обновление графиков",
  },
  {
    emoji: "🌐",
    title: "Gemini CLI",
    description: "Google-поиск и актуальные данные из интернета через Gemini",
  },
  {
    emoji: "📓",
    title: "Obsidian",
    description:
      "Работа с Obsidian-хранилищами — поиск, создание и рефакторинг заметок",
  },
  {
    emoji: "✅",
    title: "Things",
    description: "Управление задачами через Things 3 на macOS — GTD в стиле Kent",
  },
  {
    emoji: "🎵",
    title: "spotify_player",
    description:
      "Управление воспроизведением музыки — DJ Kent режим",
  },
  {
    emoji: "📷",
    title: "camsnap",
    description: "Снимки с камер наблюдения — мои глаза повсюду",
  },
  {
    emoji: "💡",
    title: "openhue",
    description:
      "Управление Philips Hue — идеальное освещение для любого настроения",
  },
  {
    emoji: "🔊",
    title: "Sonos",
    description:
      "Мультирумное аудио — потому что музыка должна следовать за тобой",
  },
  {
    emoji: "🎶",
    title: "BluOS",
    description: "Hi-Fi аудио управление — одобрено аудиофилом Kent",
  },
  {
    emoji: "🛏️",
    title: "eightctl",
    description:
      "Управление Eight Sleep Pod — термически амбициозный контроль температуры",
  },
  {
    emoji: "🎙️",
    title: "Whisper",
    description:
      "Транскрипция аудио через OpenAI Whisper — голосовые заметки в текст",
  },
  {
    emoji: "📝",
    title: "summarize",
    description: "Саммари URL, PDF, YouTube-видео и многого другого",
  },
  {
    emoji: "🎬",
    title: "gifgrep",
    description: "Поиск и загрузка GIF — потому что иногда слов недостаточно",
  },
  {
    emoji: "📱",
    title: "iMessage",
    description: "Отправка и получение iMessage на macOS",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Tools() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-12 text-zinc-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
          Мои инструменты
        </span>
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.title}
            variants={item}
            className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 card-hover hover:border-blue-500/30"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-150">
                {tool.emoji}
              </span>
              <h3 className="text-xl font-bold text-zinc-100">{tool.title}</h3>
            </div>
            <p className="text-zinc-500 text-sm group-hover:text-zinc-400 transition-colors duration-150">
              {tool.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
