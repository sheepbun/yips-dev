import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}/`} className="group block">
      <article className="py-6 border-b last:border-0">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-2">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.tags.length > 0 && (
            <>
              <span>·</span>
              <span>{post.tags.join(', ')}</span>
            </>
          )}
        </div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors mb-1">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        )}
      </article>
    </Link>
  )
}
