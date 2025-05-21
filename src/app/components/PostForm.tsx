'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Bold, Italic, List, Link as LinkIcon, Image as ImageIcon } from 'lucide-react';

interface PostFormProps {
  initialData?: {
    id?: number;
    title: string;
    body: string;
  };
  mode: 'create' | 'edit';
}

export default function PostForm({ initialData, mode }: PostFormProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [title, setTitle] = useState(initialData?.title || '');
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content: initialData?.body || '',
  });

  const mutation = useMutation({
    mutationFn: async (data: { title: string; body: string }) => {
      const url = mode === 'create' 
        ? 'https://jsonplaceholder.typicode.com/posts'
        : `https://jsonplaceholder.typicode.com/posts/${initialData?.id}`;
      
      const response = await fetch(url, {
        method: mode === 'create' ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          userId: 1, // Required by the API
        }),
      });
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success(`Post ${mode === 'create' ? 'created' : 'updated'} successfully`);
      router.push('/admin');
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editor) return;

    mutation.mutate({
      title,
      body: editor.getHTML(),
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{mode === 'create' ? 'Create New Post' : 'Edit Post'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Content
            </label>
            <div className="border rounded-md">
              <div className="border-b p-2 bg-muted flex gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                  className={editor?.isActive('bold') ? 'bg-accent' : ''}
                >
                  <Bold className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                  className={editor?.isActive('italic') ? 'bg-accent' : ''}
                >
                  <Italic className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => editor?.chain().focus().toggleBulletList().run()}
                  className={editor?.isActive('bulletList') ? 'bg-accent' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const url = window.prompt('Enter URL');
                    if (url) {
                      editor?.chain().focus().setLink({ href: url }).run();
                    }
                  }}
                  className={editor?.isActive('link') ? 'bg-accent' : ''}
                >
                  <LinkIcon className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const url = window.prompt('Enter image URL');
                    if (url) {
                      editor?.chain().focus().setImage({ src: url }).run();
                    }
                  }}
                >
                  <ImageIcon className="h-4 w-4" />
                </Button>
              </div>
              <EditorContent editor={editor} className="p-4 min-h-[200px] prose max-w-none" />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? 'Saving...' : mode === 'create' ? 'Create Post' : 'Update Post'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
} 