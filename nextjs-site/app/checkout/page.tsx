'use client';

import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Ireland'
  });

  if (items.length === 0) {
    router.push('/cart');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store shipping info in localStorage for payment page
    localStorage.setItem('shippingInfo', JSON.stringify(formData));
    
    // Redirect to payment method selection
    router.push('/checkout/payment');
  };

  return (
    <div className="pt-16 min-h-screen">
      <main className="max-w-7xl mx-auto p-8 pb-20 sm:p-20">
        <h1 className="text-4xl sm:text-5xl font-serif text-center mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif mb-6 text-white">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-white bg-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-white bg-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Address *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-white bg-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-white bg-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Postal Code *</label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-white bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Country *</label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-white bg-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-black text-white hover:bg-gray-800 transition"
              >
                Continue to Payment
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-serif mb-6 text-black">Order Summary</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              {items.map((item) => (
                <div key={item.slug} className="flex gap-4 pb-4 border-b">
                  <img 
                    src={`/original/${item.image}`}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-black">{item.title}</h3>
                    <p className="text-sm text-black">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-black">€{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              
              <div className="pt-4 space-y-2">
                <div className="flex justify-between text-black">
                  <span>Subtotal</span>
                  <span>€{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-black">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold text-xl text-black">
                  <span>Total</span>
                  <span>€{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
