'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ArrowRight, PenTool, Trash2, Calendar, Search, Plus, Loader2 } from 'lucide-react';
import { usePosts } from '@/hooks/usePosts';
import { toast } from 'sonner';

export default function AdminPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const { posts, isLoading, error, deletePost } = usePosts();

  const filteredPosts = posts?.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost.mutateAsync(id);
      } catch (error) {
        toast.error('Failed to delete post');
      }
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
              <p className="text-gray-600 mb-4">{error.message}</p>
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Blog Dashboard
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Manage your blog posts and content
              </p>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/admin/posts/new" className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Create New Post
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 -mt-8 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Posts Grid with Scrollable Container */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : filteredPosts?.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600">
              {searchQuery ? 'Try adjusting your search query' : 'Create your first post to get started'}
            </p>
          </div>
        ) : (
          <div className="max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar pr-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts?.map((post) => (
                <Card key={post.id} className="bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                    <CardTitle className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3 mb-6">
                      {post.body}
                    </p>
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/admin/posts/${post.id}/edit`)}
                        className="group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        <PenTool className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                        className="group-hover:bg-red-500 group-hover:text-white transition-colors"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
          transition: background 0.2s ease;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #666;
        }

        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #888 #f1f1f1;
        }
      `}</style>
    </div>
  );
} 