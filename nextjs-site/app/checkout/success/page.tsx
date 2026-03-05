'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { clearCart } = useCart();
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      setOrderId(sessionId.slice(-8).toUpperCase());
      clearCart();
    } else {
      router.push('/');
    }
  }, [searchParams, clearCart, router]);

  return (
    <div className="pt-16 min-h-screen">
      <main className="max-w-4xl mx-auto p-8 pb-20 sm:p-20 text-center">
        <div className="mb-8">
          <svg className="w-24 h-24 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-serif mb-4">Order Confirmed!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        
        {orderId && (
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-sm text-gray-600 mb-2">Order ID</p>
            <p className="text-2xl font-bold">{orderId}</p>
          </div>
        )}
        
        <p className="text-gray-700 mb-8">
          You will receive a confirmation email shortly with your order details and tracking information.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link href="/" className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition">
            Back to Home
          </Link>
          <Link href="/original-art" className="px-8 py-3 border border-black hover:bg-gray-100 transition">
            Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  );
}
