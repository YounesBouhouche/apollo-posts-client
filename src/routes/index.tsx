import { createFileRoute } from '@tanstack/react-router'
import { useFetch } from '../hooks/useFetch'
import { postsQuery } from '../utils/queries'
import { useEffect } from 'react'
import type { Post } from '../models/Post'
import PostCard from '../components/PostCard'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'
import SectionHeader from '../components/SectionHeader'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [posts, loading, error, refresh] = useFetch<Post[]>(
    postsQuery,
    {
      options: {
        paginate: {
          page: 1,
          limit: 20
        }
      }
    },
    'posts',
    (data) => data.posts.data,
  )
  useEffect(() => {
    console.log({posts, loading, error})
  }, [posts, loading, error])
  
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-24 pt-12">
        <div className="relative py-8">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8 leading-none tracking-tight">
            Apollo GraphQL
          </h1>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-10 tracking-wide">
            Posts Collection
          </h2>
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse animation-delay-150"></div>
          <div className="absolute top-20 left-1/4 w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-15 blur-xl animate-pulse animation-delay-300"></div>
        </div>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
          Discover amazing posts powered by Apollo Client and GraphQL. Beautiful, fast, and modern web experiences.
        </p>
        <div className="mt-8">
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Loading State */}
      {loading && <Loading text="Loading amazing content..." />}

      {/* Error State */}
      {error && <ErrorMessage error={error} onRefresh={refresh} />}

      {/* Posts Grid */}
      {posts && (
        <div className="space-y-8">
          <SectionHeader 
            title="Latest Posts" 
            subtitle="Curated content from our amazing community"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="transform transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
