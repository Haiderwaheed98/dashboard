'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post, PostFormData } from '@/lib/types';

interface PostFormProps {
  initialData?: Post;
  onSubmit: (data: PostFormData) => Promise<void>;
  isSubmitting?: boolean;
}

export function PostForm({ initialData, onSubmit, isSubmitting }: PostFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<PostFormData>({
    title: initialData?.title || '',
    body: initialData?.body || '',
  });
  const [errors, setErrors] = useState<Partial<PostFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<PostFormData> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }
    
    if (!formData.body.trim()) {
      newErrors.body = 'Content is required';
    } else if (formData.body.length < 10) {
      newErrors.body = 'Content must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await onSubmit(formData);
      router.push('/admin');
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {initialData ? 'Edit Post' : 'Create New Post'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary/20`}
              placeholder="Enter post title"
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="body" className="text-sm font-medium">
              Content
            </label>
            <textarea
              id="body"
              value={formData.body}
              onChange={(e) => setFormData({ ...formData, body: e.target.value })}
              className={`w-full px-3 py-2 border rounded-md min-h-[200px] ${
                errors.body ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary/20`}
              placeholder="Write your post content"
            />
            {errors.body && (
              <p className="text-sm text-red-500">{errors.body}</p>
            )}
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
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? 'Saving...' : initialData ? 'Update Post' : 'Create Post'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
} 