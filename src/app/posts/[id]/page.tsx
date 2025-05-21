'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostPage({ params }: { params: { id: string } }) {
  const { data: post, isLoading } = useQuery<Post>({
    queryKey: ['post', params.id],
    queryFn: () => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res => res.json())
  });

  if (isLoading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Posts
        </Link>
      </Button>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">{post.body}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 