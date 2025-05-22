'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Post, ApiError } from '@/lib/types';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};

const createPostRequest = async (newPost: Omit<Post, 'id'>): Promise<Post> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPost),
  });
  if (!response.ok) throw new Error('Failed to create post');
  return response.json();
};

const updatePostRequest = async ({ id, ...post }: Post): Promise<Post> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error('Failed to update post');
  return response.json();
};

const deletePostRequest = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete post');
};

export function usePosts() {
  const queryClient = useQueryClient();

  const { data: posts, isLoading, error } = useQuery<Post[], ApiError>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const createPost = useMutation({
    mutationFn: createPostRequest,
    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey: ['posts'] });
      const previousPosts = queryClient.getQueryData<Post[]>(['posts']);
      
      queryClient.setQueryData<Post[]>(['posts'], (old = []) => [
        { ...newPost, id: Date.now() },
        ...old,
      ]);

      return { previousPosts };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['posts'], context?.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const updatePost = useMutation({
    mutationFn: updatePostRequest,
    onMutate: async (updatedPost) => {
      await queryClient.cancelQueries({ queryKey: ['posts'] });
      const previousPosts = queryClient.getQueryData<Post[]>(['posts']);
      
      queryClient.setQueryData<Post[]>(['posts'], (old = []) =>
        old.map((post) => (post.id === updatedPost.id ? updatedPost : post))
      );

      return { previousPosts };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['posts'], context?.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const deletePost = useMutation({
    mutationFn: deletePostRequest,
    onMutate: async (deletedId) => {
      await queryClient.cancelQueries({ queryKey: ['posts'] });
      const previousPosts = queryClient.getQueryData<Post[]>(['posts']);
      
      queryClient.setQueryData<Post[]>(['posts'], (old = []) =>
        old.filter((post) => post.id !== deletedId)
      );

      return { previousPosts };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['posts'], context?.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return { posts, isLoading, error, createPost, updatePost, deletePost };
} 