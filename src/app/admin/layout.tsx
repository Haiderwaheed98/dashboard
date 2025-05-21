import { ReactNode } from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-white shadow-md">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          </div>
          <nav className="mt-4">
            <Link 
              href="/admin" 
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Posts
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
} 