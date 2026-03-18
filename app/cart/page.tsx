'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { imagePath } from '@/lib/imagePath';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-16 min-h-screen">
        <main className="max-w-7xl mx-auto p-8 pb-20 sm:p-20">
          <h1 className="text-4xl sm:text-5xl font-serif text-center mb-8">Shopping Cart</h1>
          <div className="text-center">
            <p className="text-gray-600 mb-8">Your cart is empty</p>
            <Link href="/original-art" className="inline-block px-8 py-3 bg-black text-white hover:bg-gray-800 transition">
              Continue Shopping
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      <main className="max-w-7xl mx-auto p-8 pb-20 sm:p-20">
        <h1 className="text-4xl sm:text-5xl font-serif text-center mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.slug} className="flex gap-6 border-b pb-6">
                <img 
                  src={imagePath(`/original/${item.image}`)}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">€{item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded">
                      <button 
                        onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-x">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.slug)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">€{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h2 className="text-2xl font-serif mb-6 text-black">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-black">
                  <span>Subtotal</span>
                  <span>€{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-black">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold text-xl text-black">
                  <span>Total</span>
                  <span>€{totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <Link 
                href="/checkout"
                className="block w-full text-center px-8 py-3 bg-black text-white hover:bg-gray-800 transition mb-4"
              >
                Proceed to Checkout
              </Link>
              <Link 
                href="/original-art"
                className="block w-full text-center px-8 py-3 border border-black text-black hover:bg-gray-100 transition"
              >
                Continue Shopping
              </Link>
              <button 
                onClick={clearCart}
                className="block w-full text-center mt-4 text-sm text-red-600 hover:text-red-800"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
