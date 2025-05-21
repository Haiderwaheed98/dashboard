# Modern Blog Dashboard with Next.js

A full-featured blog dashboard built with Next.js, featuring a modern UI, CRUD operations, and real-time search functionality.

## 🚀 Features

- **Modern UI/UX**
  - Responsive design
  - Beautiful animations and transitions
  - Dark mode support
  - Grid and list views
  - Real-time search functionality

- **Blog Management**
  - Create new blog posts
  - Edit existing posts
  - Delete posts
  - View all posts in a grid layout
  - Search and filter posts

- **Technical Features**
  - Server-side rendering with Next.js
  - Client-side state management with React Query
  - Modern UI components with shadcn/ui
  - TypeScript for type safety
  - Tailwind CSS for styling

## 📋 Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager
- Basic knowledge of React and TypeScript

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd <project-directory>
```

2. **Install dependencies**
```bash
npm install
```

3. **Install required packages**
```bash
# Core dependencies
npm install @tanstack/react-query
npm install @tanstack/react-query-devtools
npm install lucide-react

# UI Components
npm install @radix-ui/react-slot
npm install class-variance-authority
npm install clsx
npm install tailwind-merge
```

4. **Install shadcn/ui components**
```bash
npx shadcn@latest init
# Choose the following options:
# - Style: Default
# - Base color: Slate
# - CSS variables: Yes
# - React Server Components: Yes
# - Components directory: src/components
# - Utils directory: src/lib/utils
# - Include example components: No

# Install required components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add table
npx shadcn@latest add sonner
```

## 📁 Project Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── page.tsx              # Admin dashboard page
│   │   ├── posts/
│   │   │   ├── [id]/
│   │   │   │   └── edit/
│   │   │   │       └── page.tsx  # Edit post page
│   │   │   └── new/
│   │   │       └── page.tsx      # Create new post page
│   │   └── layout.tsx            # Admin layout
│   ├── components/
│   │   └── PostForm.tsx          # Reusable post form component
│   ├── providers.tsx             # React Query provider
│   └── page.tsx                  # Home page
├── components/
│   └── ui/                       # shadcn/ui components
└── lib/
    └── utils.ts                  # Utility functions
```

## 🔧 Configuration

1. **Tailwind CSS Configuration**
```javascript
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... other color configurations
      },
    },
  },
}
```

2. **React Query Configuration**
```typescript
// src/app/providers.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
      <Toaster />
    </QueryClientProvider>
  );
}
```

## 🚀 Running the Application

1. **Start the development server**
```bash
npm run dev
```

2. **Access the application**
- Main blog: http://localhost:3000
- Admin dashboard: http://localhost:3000/admin

## 📝 Key Features Implementation

### 1. Blog Post Management
- Uses JSONPlaceholder API for mock data
- Implements CRUD operations
- Real-time updates with React Query

### 2. Search Functionality
- Real-time search across titles and content
- Debounced search for performance
- Memoized results for optimization

### 3. Modern UI Components
- Responsive grid layout
- Card-based design
- Smooth animations and transitions
- Loading states and error handling

### 4. State Management
- React Query for server state
- Local state for UI interactions
- Optimistic updates for better UX

## 🔍 API Integration

The project uses JSONPlaceholder API for demonstration:
- Base URL: `https://jsonplaceholder.typicode.com`
- Endpoints:
  - GET /posts - Fetch all posts
  - GET /posts/:id - Fetch single post
  - POST /posts - Create new post
  - PUT /posts/:id - Update post
  - DELETE /posts/:id - Delete post

## 🎨 Styling

- Tailwind CSS for utility-first styling
- shadcn/ui for component styling
- Custom animations and transitions
- Responsive design patterns

## 🔐 Security Considerations

- Input validation
- Error handling
- Loading states
- Type safety with TypeScript

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🚀 Performance Optimizations

- React Query for efficient data fetching
- Memoization of filtered results
- Optimized re-renders
- Lazy loading of components

## 🔄 Future Improvements

1. **Authentication**
   - User authentication
   - Role-based access control

2. **Enhanced Features**
   - Image upload
   - Rich text editor
   - Categories and tags
   - Comments system

3. **Performance**
   - Server-side rendering
   - Image optimization
   - Caching strategies

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
