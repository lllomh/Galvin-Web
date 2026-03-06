'use client';

import { useCart } from '@/contexts/CartContext';

export default function AddToCartButton({ artwork }: { artwork: { slug: string; title: string; price: number; image: string } }) {
  const { addToCart } = useCart();
  
  return (
    <button 
      onClick={() => {
        addToCart(artwork);
        alert('Added to cart!');
      }}
      className="mt-8 px-8 py-3 bg-black text-white hover:bg-gray-800 transition"
    >
      Add To Cart
    </button>
  );
}
