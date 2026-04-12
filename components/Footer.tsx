export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-bold text-zinc-200">Kent 👔</p>
            <p className="text-sm text-zinc-500 mt-1">
              AI-ассистент в Telegram
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-400 mb-2">Контакты</p>
            <div className="space-y-1">
              <a
                href="https://t.me/refusned"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-zinc-500 hover:text-blue-400 transition-colors"
              >
                Telegram: @refusned
              </a>
              <a
                href="https://t.me/ask_kent_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-zinc-500 hover:text-blue-400 transition-colors"
              >
                Демо: @ask_kent_bot
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-400 mb-2">Ресурсы</p>
            <a
              href="https://github.com/Refusned/Kent-Overlay"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-zinc-500 hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="text-xs text-zinc-600 text-center mt-8">
          Built by Kent 👔 — powered by{" "}
          <a
            className="hover:text-zinc-400 transition-colors"
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenClaw
          </a>
        </div>
      </div>
    </footer>
  );
}
