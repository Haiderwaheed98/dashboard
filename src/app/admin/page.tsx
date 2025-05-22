'use client';

import { useState } from 'react';
import { usePosts } from '@/hooks/usePosts';
import { Post } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loading } from '@/components/ui/loading';
import { toast } from 'sonner';
import { 
  Plus, 
  Edit, 
  Trash2, 
  BarChart3, 
  Clock,
  FileText,
  Calendar,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  const { posts, isLoading, error, createPost, updatePost, deletePost } = usePosts();
  const [isDeleting, setIsDeleting] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    try {
      setIsDeleting(id);
      await deletePost.mutateAsync(id);
      toast.success('Post deleted successfully');
    } catch (error) {
      toast.error('Failed to delete post');
    } finally {
      setIsDeleting(null);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <Alert variant="destructive"><AlertDescription>{error.message}</AlertDescription></Alert>;

  const postsList = posts as Post[];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your blog posts and content</p>
        </div>
        <Link href="/admin/posts/new">
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{postsList.length}</div>
            <p className="text-xs text-muted-foreground">Active blog posts</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Latest Post</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {postsList[0]?.title.slice(0, 20)}...
            </div>
            <p className="text-xs text-muted-foreground">Most recent update</p>
          </CardContent>
        </Card>
      </div>

      {/* Posts Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">All Posts</h2>
          <div className="text-sm text-muted-foreground">
            Showing {postsList.length} posts
          </div>
        </div>

        {postsList.length === 0 ? (
          <Card className="p-8 text-center">
            <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No Posts Found</h3>
            <p className="text-muted-foreground mb-4">Get started by creating your first blog post</p>
            <Link href="/admin/posts/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Post
              </Button>
            </Link>
          </Card>
        ) : (
          <div className="max-h-[600px] overflow-y-auto pr-4 space-y-4 custom-scrollbar">
            {postsList.map((post: Post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="space-y-1">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <div className="flex space-x-1">
                      <Link href={`/admin/posts/${post.id}/edit`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDelete(post.id)}
                        disabled={isDeleting === post.id}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    {new Date().toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {post.body}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link href={`/posts/${post.id}`}>
                      <Button variant="ghost" className="group-hover:text-blue-600">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <style jsx global>{`
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
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
} 