'use client';

import { ReactNode } from 'react';
import MobileNav from './components/MobileNav';
import SearchBar from './components/SearchBar';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-gray-900">
              Charitable Candle
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/products" className="text-gray-600 hover:text-gray-900">Products</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              <a href="/account" className="text-gray-600 hover:text-gray-900">Account</a>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>

          {/* Search Bar */}
          <div className="py-4">
            <SearchBar />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Charitable Candle. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 