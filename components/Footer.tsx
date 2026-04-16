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
            <p className="text-xs text-zinc-600 mt-3">
              Персональный AI-помощник для предпринимателей, фрилансеров и малого бизнеса
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
              <p className="text-sm text-zinc-500">
                Email: kent@kent-ai.ru
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-400 mb-2">Информация</p>
            <div className="space-y-1 text-sm text-zinc-500">
              <a href="#pricing" className="block hover:text-blue-400 transition-colors">
                Тарифы
              </a>
              <a href="#faq" className="block hover:text-blue-400 transition-colors">
                Частые вопросы
              </a>
              <a
                href="https://t.me/ask_kent_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-400 transition-colors"
              >
                Попробовать бесплатно
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Kent AI. Все права защищены.
          </p>
          <p className="text-xs text-zinc-600">
            Оплата: российские карты, СБП, Тинькофф
          </p>
        </div>
      </div>
    </footer>
  );
}
