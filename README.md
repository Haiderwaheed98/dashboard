# Next.js Blog Dashboard

A modern blog dashboard built with Next.js 14, React Query, and Tailwind CSS.

## Features

- 📝 Create, read, update, and delete blog posts
- 🎨 Modern UI with Tailwind CSS
- ⚡ Optimistic updates with React Query
- 📱 Responsive design
- 🎯 TypeScript support
- 🔄 Real-time data synchronization

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

## API

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
