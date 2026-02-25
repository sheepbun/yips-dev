import Link from 'next/link'
import { ThemeToggle } from './ThemeProvider'
import { GradientText } from './GradientText'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl">
          <span className="yips-gradient-text">yips</span><span className="text-yips-blue">.dev</span>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/blog"
            className="px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            <GradientText>{'Blog'}</GradientText>
          </Link>
          <Link
            href="/about"
            className="px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            <GradientText>{'About'}</GradientText>
          </Link>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
