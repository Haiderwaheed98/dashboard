# Next.js Blog Dashboard

A modern, full-featured blog dashboard built with Next.js 14, React Query, and Tailwind CSS. This project provides a clean and intuitive interface for managing blog posts with comprehensive features for creating, reading, updating, and deleting posts.

![Dashboard Preview](https://github.com/Haiderwaheed98/dashboard/blob/main/public/preview.png)

## 🌟 Features

### Core Features
- 📝 Full CRUD operations for blog posts
- 🎨 Modern UI with Tailwind CSS
- ⚡ Optimistic updates with React Query
- 📱 Responsive design for all devices
- 🎯 TypeScript support for type safety
- 🔄 Real-time data synchronization
- 📊 Admin dashboard with statistics
- 🎨 Beautiful UI components with shadcn/ui

### Admin Dashboard Features
- 📊 Post statistics and analytics
- 📝 Rich text editor for post creation
- 🔄 Real-time updates
- 🎯 Post management tools
- 📱 Mobile-responsive interface
- 🔍 Search and filter capabilities

### Blog Features
- 📱 Responsive grid layout
- 🌟 Featured post section
- 📝 Post preview with excerpt
- 🔗 Read more functionality
- 🎨 Clean and modern design
- 📱 Mobile-first approach

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **State Management:** React Query
- **UI Components:** shadcn/ui
- **Icons:** Lucide Icons
- **Notifications:** Sonner
- **Type Safety:** TypeScript

### Development Tools
- **Package Manager:** npm
- **Code Quality:** ESLint
- **Type Checking:** TypeScript
- **Version Control:** Git

## 📦 Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "@hookform/resolvers": "^3.3.4",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@tanstack/react-query": "^5.24.1",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.344.0",
    "next": "14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.50.1",
    "sonner": "^1.4.0",
    "tailwind-merge": "^2.2.1",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.22.4"
  }
}
```

### Development Dependencies
```json
{
  "devDependencies": {
    "@types/node": "^20.11.20",
    "@types/react": "^18.2.58",
    "@types/react-dom": "^18.2.19",
    "autoprefixer": "^10.4.17",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.1.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.3"
  }
}
```

### Installation Steps

1. **Node.js Setup**
   ```bash
   # Check Node.js version (should be 18.0 or later)
   node --version
   
   # Check npm version (should be 9.0 or later)
   npm --version
   ```

2. **Install Dependencies**
   ```bash
   # Install all dependencies
   npm install
   
   # Install specific dependencies if needed
   npm install @tanstack/react-query
   npm install @radix-ui/react-dialog
   npm install lucide-react
   npm install sonner
   ```

3. **Environment Setup**
   ```bash
   # Create .env.local file
   touch .env.local
   
   # Add required environment variables
   echo "NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com" > .env.local
   ```

4. **Development Tools**
   ```bash
   # Install development tools
   npm install -D typescript @types/react @types/node
   npm install -D eslint eslint-config-next
   npm install -D tailwindcss postcss autoprefixer
   ```

### Version Requirements
- Node.js: >= 18.0.0
- npm: >= 9.0.0
- Next.js: 14.1.0
- React: ^18.2.0
- TypeScript: ^5.3.3

### Optional Dependencies
```json
{
  "optionalDependencies": {
    "@typescript-eslint/eslint-plugin": "^7.0.2",
    "@typescript-eslint/parser": "^7.0.2",
    "prettier": "^3.2.5",
    "prettier-plugin-tailwindcss": "^0.5.11"
  }
}
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── admin/          # Admin dashboard pages
│   │   ├── page.tsx    # Admin dashboard
│   │   └── layout.tsx  # Admin layout
│   ├── posts/          # Blog post pages
│   │   └── [id]/       # Individual post pages
│   ├── page.tsx        # Home page
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
│   ├── ui/            # UI components
│   └── shared/        # Shared components
├── hooks/             # Custom React hooks
│   └── usePosts.ts    # Posts management hook
├── lib/               # Utility functions and types
│   └── types.ts       # TypeScript types
└── styles/            # Global styles
    └── globals.css    # Global CSS
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm 9.0 or later
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Haiderwaheed98/dashboard.git
   cd dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Development Guidelines

1. **Code Style**
   - Follow TypeScript best practices
   - Use functional components
   - Implement proper error handling
   - Add comments for complex logic

2. **Component Structure**
   - Keep components small and focused
   - Use proper prop typing
   - Implement error boundaries
   - Follow the single responsibility principle

3. **State Management**
   - Use React Query for server state
   - Implement optimistic updates
   - Handle loading and error states
   - Use proper caching strategies

## 📱 Features in Detail

### Admin Dashboard
- **Post Management**
  - Create new posts with rich text editor
  - Edit existing posts
  - Delete posts with confirmation
  - View post statistics
  - Real-time updates

- **Statistics**
  - Total posts count
  - Latest post information
  - Post creation trends
  - User engagement metrics

### Blog Posts
- **Layout**
  - Responsive grid system
  - Featured post section
  - Post preview cards
  - Pagination support

- **Post Display**
  - Rich text content
  - Image support
  - Excerpt generation
  - Read more functionality

### UI/UX Features
- **Animations**
  - Smooth transitions
  - Loading states
  - Hover effects
  - Page transitions

- **Responsive Design**
  - Mobile-first approach
  - Tablet optimization
  - Desktop layouts
  - Adaptive components

## 🔌 API Integration

The project uses JSONPlaceholder API for demonstration purposes. In a production environment, you would replace this with your own backend API.

### API Endpoints
- `GET /posts` - Fetch all posts
- `GET /posts/:id` - Fetch single post
- `POST /posts` - Create new post
- `PUT /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Pull Request Process
1. Update the README.md with details of changes
2. Update the documentation
3. Add tests if applicable
4. Ensure all tests pass
5. Update the version number if needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## 📞 Support

For support, please:
1. Check the [documentation](https://github.com/Haiderwaheed98/dashboard/wiki)
2. Open an [issue](https://github.com/Haiderwaheed98/dashboard/issues)
3. Contact the maintainers

## 🔄 Updates

Stay updated with the latest changes by:
1. Watching the repository
2. Following the release notes
3. Checking the changelog

---

Made with ❤️ by [Haider Waheed](https://github.com/Haiderwaheed98)