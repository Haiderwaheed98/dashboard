'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePosts } from '@/hooks/usePosts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Post } from '@/lib/types';

interface PostFormProps {
  initialData?: Post;
  isEditing?: boolean;
}

export function PostForm({ initialData, isEditing = false }: PostFormProps) {
  const router = useRouter();
  const { createPost, updatePost } = usePosts();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    body: initialData?.body || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (isEditing && initialData) {
        await updatePost.mutateAsync({ ...initialData, ...formData });
        toast.success('Post updated successfully');
      } else {
        await createPost.mutateAsync(formData);
        toast.success('Post created successfully');
      }
      router.push('/admin');
      router.refresh();
    } catch (error) {
      toast.error(isEditing ? 'Failed to update post' : 'Failed to create post');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium">
          Title
        </label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Enter post title"
          required
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="body" className="text-sm font-medium">
          Content
        </label>
        <Textarea
          id="body"
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          placeholder="Write your post content"
          required
          className="min-h-[200px] w-full"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : isEditing ? 'Update Post' : 'Create Post'}
        </Button>
      </div>
    </form>
  );
} 