import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'

export default function Home() {
  const posts = getSortedPostsData()
  const recent = posts.slice(0, 5)

  return (
    <div>
      <section className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 tracking-tight">
          Hey, I&apos;m sheepbun
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
          I write about code, servers, and whatever else I find interesting.
          This is where I put things I want to remember.
        </p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">
            Recent posts
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

        {recent.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-500 py-8 text-center">
            No posts yet.
          </p>
        ) : (
          <div>
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
