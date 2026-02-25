export function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-yips-blue">
        <span>yips.dev</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sheepbun"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
