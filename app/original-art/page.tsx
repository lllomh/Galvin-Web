'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { imagePath } from '@/lib/imagePath';

const artworks = [
  { title: "Make Hay While the Sun Shines", price: 700, image: "IMG-20230326-WA0002.jpg", sold: false, slug: "make-hay-while-sun-shines" },
  { title: "The Reek", price: 700, image: "20251030_124510.jpg", sold: true, slug: "the-reek" },
  { title: "Adare Cottages", price: 600, image: "19b2f4e3-e00a-42ed-8d64-823b79229415.jpg", sold: true, slug: "adare-cottages" },
  { title: "Bunratty", price: 600, image: "f27a45c9-ec39-4608-ad92-dd791d6f9ce7.jpg", sold: false, slug: "bunratty" },
  { title: "The Wild Atlantic Way", price: 600, image: "20251030_124759.jpg", sold: true, slug: "wild-atlantic-way" },
  { title: "Whispers of Summer", price: 700, image: "20251030_124316.jpg", sold: false, slug: "whispers-of-summer" },
  { title: "Sunrise at Skerries", price: 0, image: "IMG-20230326-WA0001.jpg", sold: true, slug: "sunrise-skerries" },
  { title: "Sunset at Salthill", price: 0, image: "IMG-20230326-WA0003.jpg", sold: true, slug: "sunset-salthill" },
  { title: "Better Together", price: 700, image: "image.jpg", sold: true, slug: "better-together" },
  { title: "The Calf", price: 0, image: "IMG-20230104-WA0007.jpg", sold: true, slug: "the-calf" },
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
      const items = Array.from(ref.children);
      let closestIndex = -1;
      let minDistance = Infinity;

      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      });
      
      console.log('Center index:', closestIndex);
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
      <main className="h-screen flex flex-col">
        <h1 className="text-4xl sm:text-5xl font-serif text-center mb-4">Original Art For Sale</h1>
        <p className="text-center text-gray-600 mb-12">Oil paintings by John Galvin</p>

        <div className="relative flex-1 flex items-center overflow-hidden">
          {/* Scrolling carousel */}
          <div
            ref={scrollRef}
            className={`flex gap-8 overflow-x-auto scrollbar-hide items-center w-full absolute inset-0 ${styles.carouselContainer}`}
          >
            {tripleArtworks.map((artwork, index) => {
              const isCenter = index === centerIndex;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-56 relative transition-opacity duration-300"
                  style={{ opacity: isCenter ? 0 : 1 }}
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                    <Link href={`/original-art/${artwork.slug}`}>
                      <img src={imagePath(`/original/${artwork.image}`)} alt={artwork.title} className="w-full h-full object-cover cursor-pointer" />
                    </Link>

                    {artwork.sold && (
                      <div className={styles.soldOverlay}>
                        <span className="text-white text-2xl font-bold">SOLD</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 opacity-60">
                    <h3 className="font-serif text-lg mb-1">{artwork.title}</h3>
                    {artwork.price > 0 && (
                      <p className="text-gray-700 font-medium">€{artwork.price.toFixed(2)}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center zoom display */}
          {centerIndex >= 0 && (
            <div
              className={styles.zoomSection}
            >
              <div className="pointer-events-auto">
                <div className={styles.zoomCard}>
                  <Link href={`/original-art/${tripleArtworks[centerIndex].slug}`}>
                    <img 
                      key={centerIndex}
                      src={imagePath(`/original/${tripleArtworks[centerIndex].image}`)}
                      alt={tripleArtworks[centerIndex].title} 
                      className={`w-full h-full object-cover cursor-pointer ${styles.zoomImage}`}
                    />
                  </Link>
                  <style jsx>{`
                    @keyframes fadeSlide {
                      0% {
                        opacity: 0;
                        transform: scale(0.95) translateX(20px);
                      }
                      100% {
                        opacity: 1;
                        transform: scale(1) translateX(0);
                      }
                    }
                  `}</style>

                  {tripleArtworks[centerIndex].sold && (
                    <div className={styles.soldOverlay}>
                      <span className="text-white text-4xl font-bold">SOLD</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 text-center">
                  <h3 className="font-serif text-lg mb-1">{tripleArtworks[centerIndex].title}</h3>
                  {tripleArtworks[centerIndex].price > 0 && (
                    <p className="text-gray-700 font-medium">€{tripleArtworks[centerIndex].price.toFixed(2)}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

    </div>
  );
}
