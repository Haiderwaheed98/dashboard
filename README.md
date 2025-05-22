# Next.js Blog Dashboard

A modern blog dashboard built with Next.js 14, React Query, and Tailwind CSS. This project provides a clean and intuitive interface for managing blog posts with features like creating, reading, updating, and deleting posts.

## Features

- 📝 Full CRUD operations for blog posts
- 🎨 Modern UI with Tailwind CSS
- ⚡ Optimistic updates with React Query
- 📱 Responsive design
- 🎯 TypeScript support
- 🔄 Real-time data synchronization
- 📊 Admin dashboard with statistics
- 🎨 Beautiful UI components with shadcn/ui

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **State Management:** React Query
- **UI Components:** shadcn/ui
- **Icons:** Lucide Icons
- **Notifications:** Sonner
- **Type Safety:** TypeScript

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── admin/          # Admin dashboard pages
│   ├── posts/          # Blog post pages
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   └── ui/            # UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and types
└── styles/            # Global styles
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nextjs-blog-dashboard.git
   cd nextjs-blog-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Features in Detail

### Admin Dashboard
- View all blog posts in a scrollable list
- Create new posts
- Edit existing posts
- Delete posts
- View post statistics
- Real-time updates

### Blog Posts
- Responsive grid layout
- Featured post section
- Post preview with excerpt
- Read more functionality
- Clean and modern design

### UI/UX
- Smooth animations and transitions
- Loading states
- Error handling
- Toast notifications
- Responsive design for all screen sizes

## API Integration

The project uses JSONPlaceholder API for demonstration purposes. In a production environment, you would replace this with your own backend API.

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
- [shadcn/ui](https://ui.shadcn.com/)
