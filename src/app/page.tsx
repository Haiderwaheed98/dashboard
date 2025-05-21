'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ArrowRight, PenTool, Trash2, Calendar, Search } from 'lucide-react';
import { useState, useMemo } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  });

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    if (!searchQuery.trim()) return posts;
    
    const query = searchQuery.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.body.toLowerCase().includes(query)
    );
  }, [posts, searchQuery]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Blog Posts
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Explore our collection of articles and insights. Find something interesting to read.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link href="/admin" className="flex items-center gap-2">
                  Go to Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
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

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No posts found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/posts/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3 mb-6">
                    {post.body}
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <Link href={`/posts/${post.id}`} className="flex items-center justify-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);
          background-size: 20px 20px;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
