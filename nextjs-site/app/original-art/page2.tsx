'use client';

import { useRef, useState, useEffect } from 'react';

const artworks = [
  {
    title: "Make Hay While the Sun Shines",
    price: 700,
    image: "IMG-20230326-WA0002.jpg",
    sold: false
  },
  {
    title: "The Reek",
    price: 700,
    image: "20251030_124510.jpg",
    sold: true
  },
  {
    title: "Adare Cottages",
    price: 600,
    image: "19b2f4e3-e00a-42ed-8d64-823b79229415.jpg",
    sold: true
  },
  {
    title: "Bunratty",
    price: 600,
    image: "f27a45c9-ec39-4608-ad92-dd791d6f9ce7.jpg",
    sold: false
  },
  {
    title: "Farmleigh House Conservatory",
    price: 600,
    image: "IMG-20230728-WA0008.jpg",
    sold: false
  },
  {
    title: "The Wild Atlantic Way",
    price: 600,
    image: "20251030_124759.jpg",
    sold: true
  },
  {
    title: "Whispers of Summer",
    price: 700,
    image: "20251030_124316.jpg",
    sold: false
  },
  {
    title: "Blue Elegance",
    price: 700,
    image: "DSC_0803 (2).JPG",
    sold: true
  },
  {
    title: "Sunrise at Skerries",
    price: 0,
    image: "IMG-20230326-WA0001.jpg",
    sold: true
  },
  {
    title: "Sunset at Salthill",
    price: 0,
    image: "IMG-20230326-WA0003.jpg",
    sold: true
  },
  {
    title: "Better Together",
    price: 700,
    image: "image.jpg",
    sold: true
  },
  {
    title: "The Calf",
    price: 0,
    image: "IMG-20230104-WA0007.jpg",
    sold: true
  },
  {
    title: "Nature's Bounty",
    price: 500,
    image: "Nature's Bounty_14x18in.jpg",
    sold: true
  },
  {
    title: "The Bridge",
    price: 0,
    image: "IMG-20230104-WA0005.jpg",
    sold: true
  },
  {
    title: "The Farm",
    price: 0,
    image: "IMG-20230104-WA0008.jpg",
    sold: true
  },
  {
    title: "Limousin",
    price: 0,
    image: "IMG-20230104-WA0006.jpg",
    sold: true
  },
  {
    title: "Bales of Gold",
    price: 500,
    image: "20191111_172622.jpg",
    sold: true
  },
  {
    title: "Symmetry",
    price: 500,
    image: "IMG-20211220-WA0003.jpg",
    sold: true
  },
  {
    title: "Original Art by John Galvin",
    price: 500,
    image: "IMG-20211109-WA0001.jpg",
    sold: true
  },
  {
    title: "Taking a Rest",
    price: 500,
    image: "Taking a Rest_18x14in.jpg",
    sold: true
  },
  {
    title: "Gougane Barra",
    price: 500,
    image: "IMG-20211115-WA0015.jpg",
    sold: true
  },
  {
    title: "The Grand Canal",
    price: 500,
    image: "IMG-20211115-WA0017.jpg",
    sold: true
  },
  {
    title: "Havin' a Gander",
    price: 500,
    image: "Havin a Gander.jpg",
    sold: true
  },
  {
    title: "The Blue Door",
    price: 500,
    image: "Blue Door.jpg",
    sold: true
  },
  {
    title: "The Carmelite and St. Patrick's Churches",
    price: 500,
    image: "2019-08-28 11.05.17.jpg",
    sold: true
  },
  {
    title: "After the Rain",
    price: 500,
    image: "IMG-20211124-WA0006.jpg",
    sold: true
  },
  {
    title: "Ready and Waiting",
    price: 500,
    image: "Ready and Waiting",
    sold: true
  },
  {
    title: "Kinsale Pier",
    price: 500,
    image: "2018-08-20 21.56.51new.jpg",
    sold: true
  },
  {
    title: "Bluebell Wood",
    price: 500,
    image: "2019-08-28 11.03.00.jpg",
    sold: true
  },
  {
    title: "Kilcatherine Bridge",
    price: 500,
    image: "2019-10-03 13.58.40.jpg",
    sold: true
  },
  {
    title: "Pink Petals and Berries",
    price: 500,
    image: "Roses.jpg",
    sold: true
  },
  {
    title: "Farmer and Sheep",
    price: 700,
    image: "Farmer.jpg",
    sold: true
  },
  {
    title: "Anticipation",
    price: 800,
    image: "JGalvin_Anticipation_16x20in_Rev02.jpg",
    sold: true
  },
  {
    title: "Morning Reflections",
    price: 500,
    image: "JGalvin_Kinsale-Morning_14x18in_Rev01.jpg",
    sold: true
  },
  {
    title: "Cycle Track",
    price: 500,
    image: "2018-08-20 19.55.42.jpg",
    sold: true
  },
  {
    title: "Original Art by John Galvin",
    price: 500,
    image: "IMG-20211109-WA0010.jpg",
    sold: true
  }
];

export default function OriginalArtPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(-1);

  useEffect(() => {
    if (scrollRef.current) {
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = maxScroll * 0.33;
    }

    const handleScroll = () => {
      if (scrollRef.current) {
        const containerRect = scrollRef.current.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        
        const items = scrollRef.current.children;
        let closestIndex = -1;
        let minDistance = Infinity;
        
        for (let i = 0; i < items.length; i++) {
          const item = items[i] as HTMLElement;
          const rect = item.getBoundingClientRect();
          const itemCenterX = rect.left + rect.width / 2;
          const distance = Math.abs(centerX - itemCenterX);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = i;
          }
        }
        
        setCenterIndex(closestIndex);
      }
    };

    const ref = scrollRef.current;
    ref?.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => ref?.removeEventListener('scroll', handleScroll);
  }, []);

  const tripleArtworks = [...artworks, ...artworks, ...artworks];

  return (
    <div className="pt-16">
      <main className="max-w-7xl mx-auto p-8 pb-20 sm:p-20">
        <h1 className="text-4xl sm:text-5xl font-serif text-center mb-4">Original Art For Sale</h1>
        <p className="text-center text-gray-600 mb-12">Oil paintings by John Galvin</p>

        <div ref={scrollRef} className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide mt-64 relative">
          {tripleArtworks.map((artwork, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <div className={`relative aspect-square bg-gray-200 mb-4 rounded-lg shadow-lg transition-all duration-300 ${index === centerIndex ? 'scale-[2] z-40' : 'z-0'}`}>
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                {artwork.sold && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">SOLD</span>
                  </div>
                )}
              </div>
              <h3 className="font-serif text-lg mb-2">{artwork.title}</h3>
              {artwork.price > 0 && (
                <p className="text-gray-700 font-medium">€{artwork.price.toFixed(2)}</p>
              )}
            </div>
          ))}
        </div>
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none z-50">
          <div className="w-full h-full border-4 border-blue-500 rounded-lg scale-[2]"></div>
        </div>
      </main>
    </div>
  );
}
