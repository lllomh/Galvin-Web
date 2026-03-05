'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const artworks = [
  { title: "Make Hay While the Sun Shines", price: 700, image: "IMG-20230326-WA0002.jpg", sold: false, slug: "make-hay-while-sun-shines" },
  { title: "The Reek", price: 700, image: "20251030_124510.jpg", sold: true, slug: "the-reek" },
  { title: "Adare Cottages", price: 600, image: "19b2f4e3-e00a-42ed-8d64-823b79229415.jpg", sold: true, slug: "adare-cottages" },
  { title: "Bunratty", price: 600, image: "f27a45c9-ec39-4608-ad92-dd791d6f9ce7.jpg", sold: false, slug: "bunratty" },
  { title: "Farmleigh House Conservatory", price: 600, image: "IMG-20230728-WA0008.jpg", sold: false, slug: "farmleigh-house" },
  { title: "The Wild Atlantic Way", price: 600, image: "20251030_124759.jpg", sold: true, slug: "wild-atlantic-way" },
  { title: "Whispers of Summer", price: 700, image: "20251030_124316.jpg", sold: false, slug: "whispers-of-summer" },
  { title: "Blue Elegance", price: 700, image: "DSC_0803+%282%29.JPG", sold: true, slug: "blue-elegance" },
  { title: "Sunrise at Skerries", price: 0, image: "IMG-20230326-WA0001.jpg", sold: true, slug: "sunrise-skerries" },
  { title: "Sunset at Salthill", price: 0, image: "IMG-20230326-WA0003.jpg", sold: true, slug: "sunset-salthill" },
  { title: "Better Together", price: 700, image: "image.jpg", sold: true, slug: "better-together" },
  { title: "The Calf", price: 0, image: "IMG-20230104-WA0007.jpg", sold: true, slug: "the-calf" },
  { title: "Nature's Bounty", price: 500, image: "Nature%27s+Bounty_14x18in.jpg", sold: true, slug: "natures-bounty" },
  { title: "The Bridge", price: 0, image: "IMG-20230104-WA0005.jpg", sold: true, slug: "the-bridge" },
  { title: "The Farm", price: 0, image: "IMG-20230104-WA0008.jpg", sold: true, slug: "the-farm" },
  { title: "Limousin", price: 0, image: "IMG-20230104-WA0006.jpg", sold: true, slug: "limousin" },
  { title: "Bales of Gold", price: 500, image: "20191111_172622.jpg", sold: true, slug: "bales-of-gold" },
  { title: "Symmetry", price: 500, image: "IMG-20211220-WA0003.jpg", sold: true, slug: "symmetry" },
  { title: "Original Art by John Galvin", price: 500, image: "IMG-20211109-WA0001.jpg", sold: true, slug: "original-art-1" },
  { title: "Taking a Rest", price: 500, image: "Taking+a+Rest_18x14in.jpg", sold: true, slug: "taking-a-rest" },
  { title: "Gougane Barra", price: 500, image: "IMG-20211115-WA0015.jpg", sold: true, slug: "gougane-barra" },
  { title: "The Grand Canal", price: 500, image: "IMG-20211115-WA0017.jpg", sold: true, slug: "grand-canal" },
  { title: "Havin' a Gander", price: 500, image: "Havin+a+Gander.jpg", sold: true, slug: "havin-a-gander" },
  { title: "The Blue Door", price: 500, image: "Blue+Door.jpg", sold: true, slug: "the-blue-door" },
  { title: "The Carmelite and St. Patrick's Churches", price: 500, image: "2019-08-28+11.05.17.jpg", sold: true, slug: "carmelite-st-patricks" },
  { title: "After the Rain", price: 500, image: "IMG-20211124-WA0006.jpg", sold: true, slug: "after-the-rain" },
  { title: "Ready and Waiting", price: 500, image: "JGalvin_Ready%2BWaiting_16x12in_Rev01.jpg", sold: true, slug: "ready-and-waiting" },
  { title: "Kinsale Pier", price: 500, image: "2018-08-20+21.56.51new.jpg", sold: true, slug: "kinsale-pier" },
  { title: "Bluebell Wood", price: 500, image: "2019-08-28+11.03.00.jpg", sold: true, slug: "bluebell-wood" },
  { title: "Kilcatherine Bridge", price: 500, image: "2019-10-03+13.58.40.jpg", sold: true, slug: "kilcatherine-bridge" },
  { title: "Pink Petals and Berries", price: 500, image: "Roses.jpg", sold: true, slug: "pink-petals-berries" },
  { title: "Farmer and Sheep", price: 700, image: "Farmer.jpg", sold: true, slug: "farmer-and-sheep" },
  { title: "Anticipation", price: 800, image: "JGalvin_Anticipation_16x20in_Rev02.jpg", sold: true, slug: "anticipation" },
  { title: "Morning Reflections", price: 500, image: "JGalvin_Kinsale-Morning_14x18in_Rev01.jpg", sold: true, slug: "morning-reflections" },
  { title: "Cycle Track", price: 500, image: "2018-08-20+19.55.42.jpg", sold: true, slug: "cycle-track" },
  { title: "Original Art by John Galvin", price: 500, image: "IMG-20211109-WA0010.jpg", sold: true, slug: "original-art-2" }
];

export default function OriginalArtPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(-1);

  const tripleArtworks = [...artworks, ...artworks, ...artworks];

  useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;

    // Start scrolled to the middle third
    const maxScroll = ref.scrollWidth - ref.clientWidth;
    ref.scrollLeft = maxScroll * 0.33;

    const handleScroll = () => {
      if (!ref) return;
      const centerX = ref.getBoundingClientRect().left + ref.clientWidth / 2;
      const items = ref.children;
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
      
      // Infinite loop logic
      const scrollLeft = ref.scrollLeft;
      const maxScroll = ref.scrollWidth - ref.clientWidth;
      const sectionWidth = ref.scrollWidth / 3;
      
      if (scrollLeft < sectionWidth * 0.1) {
        ref.scrollLeft = scrollLeft + sectionWidth;
      } else if (scrollLeft > sectionWidth * 2.9) {
        ref.scrollLeft = scrollLeft - sectionWidth;
      }
    };

    ref.addEventListener('scroll', handleScroll);
    // Start at middle section
    setTimeout(() => {
      if (ref) {
        const sectionWidth = ref.scrollWidth / 3;
        ref.scrollLeft = sectionWidth + (ref.clientWidth / 2);
      }
    }, 0);
    handleScroll();
    return () => ref.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-16">
      <main className="max-w-7xl mx-auto p-8 pb-20 sm:p-20">
        <h1 className="text-4xl sm:text-5xl font-serif text-center mb-4">Original Art For Sale</h1>
        <p className="text-center text-gray-600 mb-12">Oil paintings by John Galvin</p>

        {/*
          Key layout decisions:
          - The scroll container has overflow-x: auto and py-32 to give vertical
            room for the 2x scaled center card without clipping it.
          - Each card wrapper uses `relative` and `transition-transform` so the
            scale pops the card up visually without shifting its neighbours.
          - The blue ring is rendered INSIDE the card div (not a fixed overlay),
            so it scales with the card automatically.
          - z-index is bumped on the center card so it sits above neighbours.
        */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto py-32 scrollbar-hide"
          style={{ scrollBehavior: 'auto', paddingLeft: 'calc(50vw - 7rem)', paddingRight: 'calc(50vw - 7rem)' }}
        >
          {tripleArtworks.map((artwork, index) => {
            const isCenter = index === centerIndex;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-56"
                style={{
                  // Keep column in flow; scale only the visual via transform
                  position: 'relative',
                  zIndex: isCenter ? 40 : 0,
                }}
              >
                {/* Card image area */}
                <div
                  style={{
                    transform: isCenter ? 'scale(2)' : 'scale(1)',
                    transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transformOrigin: 'center center',
                    position: 'relative',
                    aspectRatio: '1 / 1',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    boxShadow: isCenter
                      ? '0 0 0 4px #3b82f6, 0 25px 50px -12px rgba(0,0,0,0.5)'
                      : '0 4px 15px rgba(0,0,0,0.2)',
                  }}
                >
                  <Link href={`/original-art/${artwork.slug}`}>
                    <img src={`/original/${artwork.image}`} alt={artwork.title} className="w-full h-full object-cover cursor-pointer" />
                  </Link>

                  {artwork.sold && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span className="text-white text-2xl font-bold">SOLD</span>
                    </div>
                  )}
                </div>

                {/* Text below the card — fade slightly when not centered */}
                <div
                  style={{
                    marginTop: '1rem',
                    opacity: isCenter ? 1 : 0.6,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <h3 className="font-serif text-lg mb-1">{artwork.title}</h3>
                  {artwork.price > 0 && (
                    <p className="text-gray-700 font-medium">€{artwork.price.toFixed(2)}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    
    </div>
  );
}
