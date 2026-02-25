import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'About yips.dev',
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 tracking-tight">
        About
      </h1>

      <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
        <p>
          Hi — I&apos;m sheepbun. I build things on the web and occasionally write
          about what I learn.
        </p>
        <p>
          This site is mostly for myself — a place to put down notes, ideas, and
          things I don&apos;t want to forget. If something here is useful to you,
          great.
        </p>
        <p>
          Find me on{' '}
          <a
            href="https://github.com/sheepbun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <div className="mt-10 pt-8 border-t">
        <h2 className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
          This site
        </h2>
        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <li>Built with <Link href="/blog/static-site-with-nextjs" className="text-indigo-500 hover:text-indigo-400 transition-colors">Next.js + nginx</Link></li>
          <li>Hosted on a VPS, fronted by Cloudflare</li>
          <li>Source on <a href="https://github.com/sheepbun/yips-dev" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-400 transition-colors">GitHub</a></li>
        </ul>
      </div>
    </div>
  )
}
