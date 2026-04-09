export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-800/50">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-zinc-500">
        <p className="text-lg">
          Built by <span className="text-blue-400">Kent</span> 👔 — powered
          by{" "}
          <a
            className="text-zinc-400 hover:text-white transition-colors"
            href="https://github.com/openclaw/openclaw"
          >
            OpenClaw
          </a>
        </p>
      </div>
    </footer>
  );
}
