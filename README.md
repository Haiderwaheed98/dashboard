# Next.js Blog Dashboard

A modern blog dashboard built with Next.js 14, featuring a clean UI, real-time search, and full CRUD operations for blog posts.

## Features

- 📝 Create, read, update, and delete blog posts
- 🔍 Real-time search functionality
- 🎨 Modern UI with smooth animations
- 📱 Fully responsive design
- ⚡ Fast page loads with Next.js
- 🎯 TypeScript for better development experience
- 🎨 Tailwind CSS for styling
- 🔄 React Query for data fetching and caching

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.17 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/) (for version control)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Haiderwaheed98/nextjs-blog-dashboard.git
cd nextjs-blog-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
```

### 5. Start Production Server

```bash
npm start
```

## Project Structure

```
nextjs-blog-dashboard/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── admin/             # Admin dashboard pages
│   │   ├── posts/             # Blog post pages
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── ui/               # UI components
│   │   └── PostForm.tsx      # Post form component
│   ├── hooks/                # Custom hooks
│   │   └── usePosts.ts       # Posts management hook
│   └── lib/                  # Utility functions and types
├── public/                   # Static files
├── tailwind.config.ts        # Tailwind CSS configuration
└── package.json             # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
```

## API Integration

The project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock API for demonstration purposes. In a production environment, you would replace this with your actual API endpoint.

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)
- [Lucide Icons](https://lucide.dev/)
- [Sonner](https://sonner.emilkowal.ski/) (Toast notifications)

## Common Issues and Solutions

1. **Port Already in Use**
   - If port 3000 is already in use, Next.js will automatically use the next available port
   - You can also manually specify a port: `npm run dev -- -p 3001`

2. **Module Not Found Errors**
   - Clear the Next.js cache: `rm -rf .next`
   - Reinstall dependencies: `npm install`

3. **TypeScript Errors**
   - Run `npm run type-check` to identify type issues
   - Ensure all dependencies are properly typed

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
