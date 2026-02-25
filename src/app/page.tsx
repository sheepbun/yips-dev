import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'
import { InstallCommand } from '@/components/InstallCommand'
import { GradientText } from '@/components/GradientText'

export default function Home() {
  const posts = getSortedPostsData()
  const recent = posts.slice(0, 5)

  return (
    <div>
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          <GradientText>{'Yips'}</GradientText>
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl mb-8">
          <GradientText>{'Local Personal Assistant, Code Editor, and Self-Hosted Gateway. Runs entirely on your machine — no cloud required.'}</GradientText>
        </p>

        {/* Install block */}
        <div className="mb-4">
          <InstallCommand />
        </div>
        <p className="text-sm yips-gradient-text">
          For GPU builds, append{' '}
          <code className="font-mono text-yips-blue border border-yips-blue bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs">
            --cuda
          </code>{' '}
          to the install command.
        </p>
      </section>

      {/* Recent posts */}
      {recent.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-medium uppercase tracking-wider">
              <GradientText>{'Recent posts'}</GradientText>
            </h2>
            {posts.length > 5 && (
              <Link
                href="/blog"
                className="text-sm text-indigo-500 hover:text-indigo-400 transition-colors"
              >
                All posts →
              </Link>
            )}
          </div>
          <div>
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
