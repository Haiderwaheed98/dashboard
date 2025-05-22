'use client';

import { usePosts } from '@/hooks/usePosts';
import { Post } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loading } from '@/components/ui/loading';
import { ArrowRight, Calendar, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) return <Loading />;
  if (error) return <Alert variant="destructive"><AlertDescription>{error.message}</AlertDescription></Alert>;

  const postsList = posts as Post[];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to Our Blog</h1>
          <Link href="/admin">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the latest articles, insights, and stories from our community
        </p>
      </div>

      {/* Featured Post */}
      {postsList.length > 0 && (
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Featured Post</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">{postsList[0].title}</h2>
            <p className="text-muted-foreground mb-4 line-clamp-2">{postsList[0].body}</p>
            <Link href={`/posts/${postsList[0].id}`}>
              <Button>
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Posts Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Latest Posts</h2>
          <div className="text-sm text-muted-foreground">
            Showing {postsList.length} posts
          </div>
        </div>

        {postsList.length === 0 ? (
          <Card className="p-8 text-center">
            <h3 className="text-lg font-medium mb-2">No Posts Found</h3>
            <p className="text-muted-foreground">Check back later for new content</p>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {postsList.map((post: Post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    {new Date().toLocaleDateString()}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {post.body}
                  </p>
                  <Link href={`/posts/${post.id}`}>
                    <Button variant="ghost" className="group-hover:text-blue-600">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}