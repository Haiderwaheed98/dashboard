'use client';

import { useQuery } from '@tanstack/react-query';
import PostForm from '@/app/components/PostForm';
import { useParams } from 'next/navigation';

export default function EditPostPage() {
  const params = useParams();
  const postId = params.id as string;

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json())
  });

  if (isLoading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return <PostForm mode="edit" initialData={post} />;
} 