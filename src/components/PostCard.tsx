import { useRouter } from "@tanstack/react-router";
import type { Post } from "../models/Post";

export default function PostCard({post}: {post: Post}) {
  const router = useRouter();
  const handleClick = () => {
    router.navigate({to: '/post/$postId', params: {postId: post.id}});
  }

  return (
    <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-400/20 to-pink-400/20 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
            </svg>
            Post #{post.id}
          </div>
          
          {/* Author Avatar */}
          {post.user && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">
                {post.user.name.charAt(0).toUpperCase()}
              </div>
            </div>
          )}
        </div>
        
        {/* Title */}
        <h2 className="font-display text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2">
          {post.title}
        </h2>
        
        {/* Body Preview */}
        {post.body && (
          <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 font-medium">
            {post.body.length > 120 ? `${post.body.substring(0, 120)}...` : post.body}
          </p>
        )}
        
        {/* Author Info */}
        {post.user && (
          <div className="flex items-center mb-6 p-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold mr-3">
              {post.user.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 text-sm">{post.user.name}</p>
              <p className="text-gray-500 text-xs font-mono">@{post.user.username}</p>
            </div>
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button onClick={handleClick} className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
            <span>Read More</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          {/* Like & Share buttons */}
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-red-50 transition-colors duration-200 group/like">
              <svg className="w-5 h-5 text-gray-400 group-hover/like:text-red-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            
            <button className="p-2 rounded-full hover:bg-blue-50 transition-colors duration-200 group/share">
              <svg className="w-5 h-5 text-gray-400 group-hover/share:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>
  )
}