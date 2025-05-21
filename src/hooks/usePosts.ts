import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Post, ApiError } from '@/lib/types';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export function usePosts() {
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<Post[], ApiError>({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      return response.json();
    },
  });

  const createPost = useMutation({
    mutationFn: async (newPost: Omit<Post, 'id'>) => {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Post created successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to create post');
    },
  });

  const updatePost = useMutation({
    mutationFn: async ({ id, ...data }: Post) => {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to update post');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Post updated successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update post');
    },
  });

  const deletePost = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Post deleted successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to delete post');
    },
  });

  return {
    posts,
    isLoading,
    error,
    createPost,
    updatePost,
    deletePost,
  };
} 