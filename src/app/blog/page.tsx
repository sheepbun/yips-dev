import type { Metadata } from 'next'
import { getSortedPostsData } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'
import { GradientText } from '@/components/GradientText'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'All posts on yips.dev',
}

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8 tracking-tight">
        <GradientText>{'Blog'}</GradientText>
      </h1>

      {posts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-500 text-center py-16">
          No posts yet.
        </p>
      ) : (
        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
