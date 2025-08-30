import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useMutate } from '../hooks/useMutation'
import { createPostMutation } from '../utils/mutations'
import type { Post } from '../models/Post'

export const Route = createFileRoute('/create')({
  component: RouteComponent,
})

function RouteComponent() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const isFormValid = title.trim().length > 0 && body.trim().length > 0
  const [data, submitting, error, mutate] = useMutate<Post>(createPostMutation, (data) => data.createPost)
  const router = useRouter()

  useEffect(() => {
    if (data && !error) {
      router.navigate({ to: '/post/$postId', params: { postId: data.id } })
    }
  }, [data, submitting, error])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return
    mutate(
      {
        variables: {
          input: {
            title: title.trim(),
            body: body.trim(),
          }
        },
      }
    )
  }

  const handleCancel = () => {
    setTitle('')
    setBody('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  Create New Post
                </h1>
                <p className="text-lg text-gray-600">
                  Share your thoughts and ideas with the community
                </p>
              </div>
              <Link 
                to="/" 
                className="hidden md:flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Posts
              </Link>
            </div>
          </div>

          {/* Main Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            
            {/* Form Header */}
            <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 p-6 md:p-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Write Your Post</h2>
                  <p className="text-white/80">Express yourself and engage with others</p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
              
              {/* Title Input */}
              <div className="space-y-3">
                <label htmlFor="title" className="block text-lg font-semibold text-gray-800">
                  Post Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter an engaging title for your post..."
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-0 text-lg placeholder-gray-400 transition-colors duration-200"
                    required
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <span className={`text-sm ${title.length > 60 ? 'text-red-500' : 'text-gray-400'}`}>
                      {title.length}/100
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  A compelling title helps attract readers to your post
                </p>
              </div>

              {/* Body Input */}
              <div className="space-y-3">
                <label htmlFor="body" className="block text-lg font-semibold text-gray-800">
                  Post Content
                </label>
                <div className="relative">
                  <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Share your thoughts, experiences, or insights..."
                    rows={12}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-0 text-lg placeholder-gray-400 resize-none transition-colors duration-200"
                    required
                  />
                  <div className="absolute right-4 bottom-4">
                    <span className={`text-sm ${body.length > 500 ? 'text-red-500' : 'text-gray-400'}`}>
                      {body.length}/1000
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Share your story, insights, or ask questions to engage the community
                </p>
              </div>

              {/* Preview Section */}
              {(title || body) && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">Preview</h3>
                  <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100">
                    {title && (
                      <h4 className="font-display text-2xl font-bold text-gray-800 mb-3">
                        {title}
                      </h4>
                    )}
                    {body && (
                      <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                        {body}
                      </p>
                    )}
                    {!title && !body && (
                      <p className="text-gray-400 italic">Start typing to see a preview...</p>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={!title.trim() || !body.trim() || submitting}
                  className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Publishing...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Publish Post
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-4 bg-gray-100 text-gray-700 font-semibold rounded-2xl hover:bg-gray-200 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear
                </button>
                
                <Link
                  to="/"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Cancel
                </Link>
              </div>

              {/* Tips Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Writing Tips
                </h4>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• Use a clear, descriptive title that captures your main idea</li>
                  <li>• Write in a conversational tone to engage your readers</li>
                  <li>• Break up long paragraphs for better readability</li>
                  <li>• Share personal experiences or insights when relevant</li>
                  <li>• Proofread your content before publishing</li>
                </ul>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
