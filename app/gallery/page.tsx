import { imagePath } from "@/lib/imagePath";

const artworks = [
  { title: "Make Hay While the Sun Shines", price: 700, image: "/original/IMG-20230326-WA0002.jpg", sold: false },
  { title: "The Reek", price: 700, image: "/original/20251030_124510.jpg", sold: true },
  { title: "Adare Cottages", price: 600, image: "/original/19b2f4e3-e00a-42ed-8d64-823b79229415.jpg", sold: true },
  { title: "Bunratty", price: 600, image: "/original/f27a45c9-ec39-4608-ad92-dd791d6f9ce7.jpg", sold: false },
  { title: "The Wild Atlantic Way", price: 600, image: "/original/20251030_124759.jpg", sold: true },
  { title: "Whispers of Summer", price: 700, image: "/original/20251030_124316.jpg", sold: false },
  { title: "Sunrise at Skerries", price: 0, image: "/original/IMG-20230326-WA0001.jpg", sold: true },
  { title: "Sunset at Salthill", price: 0, image: "/original/IMG-20230326-WA0003.jpg", sold: true },
  { title: "Better Together", price: 700, image: "/original/image.jpg", sold: true },
  { title: "The Calf", price: 0, image: "/original/IMG-20230104-WA0007.jpg", sold: true },
  { title: "The Bridge", price: 0, image: "/original/IMG-20230104-WA0005.jpg", sold: true },
  { title: "The Farm", price: 0, image: "/original/IMG-20230104-WA0008.jpg", sold: true },
  { title: "Limousin", price: 0, image: "/original/IMG-20230104-WA0006.jpg", sold: true },
  { title: "Bales of Gold", price: 500, image: "/original/20191111_172622.jpg", sold: true },
  { title: "Symmetry", price: 500, image: "/original/IMG-20211220-WA0003.jpg", sold: true },
  { title: "Taking a Rest", price: 500, image: "/original/Taking+a+Rest_18x14in.jpg", sold: true },
  { title: "Gougane Barra", price: 500, image: "/original/IMG-20211115-WA0015.jpg", sold: true },
  { title: "The Grand Canal", price: 500, image: "/original/IMG-20211115-WA0017.jpg", sold: true },
  { title: "Havin' a Gander", price: 500, image: "/original/Havin+a+Gander.jpg", sold: true },
  { title: "The Blue Door", price: 500, image: "/original/Blue+Door.jpg", sold: true },
  { title: "The Carmelite and St. Patrick's Churches", price: 500, image: "/original/2019-08-28+11.05.17.jpg", sold: true },
  { title: "After the Rain", price: 500, image: "/original/IMG-20211124-WA0006.jpg", sold: true },
  { title: "Kinsale Pier", price: 500, image: "/original/2018-08-20+21.56.51new.jpg", sold: true },
  { title: "Bluebell Wood", price: 500, image: "/original/2019-08-28+11.03.00.jpg", sold: true },
  { title: "Kilcatherine Bridge", price: 500, image: "/original/2019-10-03+13.58.40.jpg", sold: true },
  { title: "Pink Petals and Berries", price: 500, image: "/original/Roses.jpg", sold: true },
  { title: "Farmer and Sheep", price: 700, image: "/original/Farmer.jpg", sold: true },
  { title: "Anticipation", price: 800, image: "/original/JGalvin_Anticipation_16x20in_Rev02.jpg", sold: true },
  { title: "Morning Reflections", price: 500, image: "/original/JGalvin_Kinsale-Morning_14x18in_Rev01.jpg", sold: true },
  { title: "Cycle Track", price: 500, image: "/original/2018-08-20+19.55.42.jpg", sold: true },
  { title: "Nature's Bounty", price: 500, image: "/original/Nature%27s+Bounty_14x18in.jpg", sold: true },
  { title: "Ready and Waiting", price: 500, image: "/original/JGalvin_Ready%2BWaiting_16x12in_Rev01.jpg", sold: true },
];

export default function GalleryPage() {
  return (
    <div className="pt-16">
      <main className="max-w-7xl mx-auto p-8 pb-20 sm:p-20">
        <h1 className="text-4xl sm:text-5xl font-serif text-center mb-4">Art Catalogue</h1>
        <p className="text-center text-gray-600 mb-12">Complete collection by John Galvin</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {artworks.map((artwork, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square bg-gray-200 mb-4 overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300">
                <img
                  src={imagePath(artwork.image)}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-lg mb-1">{artwork.title}</h3>
              {artwork.price > 0 && (
                <p className="text-gray-700 font-medium">€{artwork.price.toFixed(2)}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
