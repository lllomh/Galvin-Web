'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const { totalItems } = useCart();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-serif text-2xl font-bold text-black">John Galvin</Link>
          <div className="hidden md:flex gap-6 text-base font-medium text-black items-center">
            <Link href="/" className="hover:text-gray-600 transition">Home</Link>
            <Link href="/original-art" className="hover:text-gray-600 transition">Original Art For Sale</Link>
            <Link href="/prints" className="hover:text-gray-600 transition">Prints</Link>
            <Link href="/stockists" className="hover:text-gray-600 transition">Print Stockists</Link>
            <Link href="/gallery" className="hover:text-gray-600 transition">Art Catalogue</Link>
            <Link href="/about" className="hover:text-gray-600 transition">About John</Link>
            <Link href="/contact" className="hover:text-gray-600 transition">Contact</Link>
            <Link href="/cart" className="hover:text-gray-600 transition relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
