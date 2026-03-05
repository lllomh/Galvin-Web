'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PaymentMethodPage() {
  const router = useRouter();
  const { items, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [shippingInfo, setShippingInfo] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('shippingInfo');
    if (!saved || items.length === 0) {
      router.push('/checkout');
      return;
    }
    setShippingInfo(JSON.parse(saved));
  }, [items, router]);

  const handleStripePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          customerEmail: shippingInfo.email,
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          alert('Payment failed. Please try again.');
        }
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePayPal = () => {
    alert('PayPal integration coming soon!');
  };

  const handleBankTransfer = () => {
    alert('Bank transfer details will be sent to your email.');
  };

  if (!shippingInfo) {
    return null;
  }

  return (
    <div className="pt-16 min-h-screen">
      <main className="max-w-4xl mx-auto p-8 pb-20 sm:p-20">
        <h1 className="text-4xl sm:text-5xl font-serif text-center mb-12">Select Payment Method</h1>

        <div className="grid grid-cols-1 gap-6 mb-12">
          <button
            onClick={handleStripePayment}
            disabled={loading}
            className="p-6 border-2 border-gray-300 rounded-lg hover:border-black transition text-left disabled:opacity-50"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-2xl">
                💳
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif mb-2">Credit / Debit Card</h3>
                <p className="text-gray-600">Pay securely with Stripe</p>
              </div>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button
            onClick={handleStripePayment}
            disabled={loading}
            className="p-6 border-2 border-gray-300 rounded-lg hover:border-black transition text-left disabled:opacity-50"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-black rounded flex items-center justify-center">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif mb-2">Apple Pay</h3>
                <p className="text-gray-600">Pay with Apple Pay</p>
              </div>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button
            onClick={handleStripePayment}
            disabled={loading}
            className="p-6 border-2 border-gray-300 rounded-lg hover:border-black transition text-left disabled:opacity-50"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded flex items-center justify-center">
                <svg className="w-10 h-10" viewBox="0 0 48 48">
                  <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
                  <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
                  <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
                  <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif mb-2">Google Pay</h3>
                <p className="text-gray-600">Pay with Google Pay</p>
              </div>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button
            onClick={handlePayPal}
            className="p-6 border-2 border-gray-300 rounded-lg hover:border-black transition text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-yellow-400 rounded flex items-center justify-center text-white font-bold text-2xl">
                P
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif mb-2">PayPal</h3>
                <p className="text-gray-600">Pay with your PayPal account</p>
              </div>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button
            onClick={handleBankTransfer}
            className="p-6 border-2 border-gray-300 rounded-lg hover:border-black transition text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-600 rounded flex items-center justify-center text-white font-bold text-2xl">
                🏦
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif mb-2">Bank Transfer</h3>
                <p className="text-gray-600">Direct bank transfer</p>
              </div>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-serif mb-4 text-black">Order Summary</h2>
          <div className="space-y-2 mb-4">
            {items.map((item) => (
              <div key={item.slug} className="flex justify-between text-sm text-black">
                <span>{item.title} x {item.quantity}</span>
                <span>€{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 flex justify-between font-bold text-xl text-black">
            <span>Total</span>
            <span>€{totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={() => router.push('/checkout')}
          className="mt-6 w-full px-8 py-3 border border-black text-black hover:bg-gray-100 transition"
        >
          Back to Shipping
        </button>
      </main>
    </div>
  );
}
