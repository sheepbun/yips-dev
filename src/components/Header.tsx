import Link from 'next/link'
import { ThemeToggle } from './ThemeProvider'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
        >
          yips.dev
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/blog"
            className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            About
          </Link>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
