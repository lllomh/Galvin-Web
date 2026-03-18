import { imagePath } from "@/lib/imagePath";

const prints = [
  { title: "Make Hay While the Sun Shines", price: 60, image: "/original/IMG-20230326-WA0002.jpg" },
  { title: "The Reek", price: 60, image: "/original/20251030_124510.jpg" },
  { title: "Adare Cottages", price: 60, image: "/original/19b2f4e3-e00a-42ed-8d64-823b79229415.jpg" },
  { title: "Bunratty", price: 60, image: "/original/f27a45c9-ec39-4608-ad92-dd791d6f9ce7.jpg" },
  { title: "The Wild Atlantic Way", price: 60, image: "/original/20251030_124759.jpg" },
  { title: "Whispers of Summer", price: 60, image: "/original/20251030_124316.jpg" },
  { title: "Sunrise at Skerries", price: 60, image: "/original/IMG-20230326-WA0001.jpg" },
  { title: "Sunset at Salthill", price: 60, image: "/original/IMG-20230326-WA0003.jpg" },
  { title: "Better Together", price: 60, image: "/original/image.jpg" },
  { title: "The Calf", price: 60, image: "/original/IMG-20230104-WA0007.jpg" },
  { title: "The Bridge", price: 60, image: "/original/IMG-20230104-WA0005.jpg" },
  { title: "The Farm", price: 60, image: "/original/IMG-20230104-WA0008.jpg" },
  { title: "Limousin", price: 60, image: "/original/IMG-20230104-WA0006.jpg" },
  { title: "Bales of Gold", price: 60, image: "/original/20191111_172622.jpg" },
  { title: "Symmetry", price: 60, image: "/original/IMG-20211220-WA0003.jpg" },
  { title: "Taking a Rest", price: 60, image: "/original/Taking+a+Rest_18x14in.jpg" },
  { title: "Gougane Barra", price: 60, image: "/original/IMG-20211115-WA0015.jpg" },
  { title: "The Grand Canal", price: 60, image: "/original/IMG-20211115-WA0017.jpg" },
  { title: "Havin' a Gander", price: 60, image: "/original/Havin+a+Gander.jpg" },
  { title: "The Blue Door", price: 60, image: "/original/Blue+Door.jpg" },
  { title: "The Carmelite and St. Patrick's Churches", price: 60, image: "/original/2019-08-28+11.05.17.jpg" },
  { title: "After the Rain", price: 60, image: "/original/IMG-20211124-WA0006.jpg" },
  { title: "Kinsale Pier", price: 60, image: "/original/2018-08-20+21.56.51new.jpg" },
  { title: "Bluebell Wood", price: 60, image: "/original/2019-08-28+11.03.00.jpg" },
  { title: "Kilcatherine Bridge", price: 60, image: "/original/2019-10-03+13.58.40.jpg" },
  { title: "Pink Petals and Berries", price: 60, image: "/original/Roses.jpg" },
  { title: "Farmer and Sheep", price: 60, image: "/original/Farmer.jpg" },
  { title: "Anticipation", price: 60, image: "/original/JGalvin_Anticipation_16x20in_Rev02.jpg" },
  { title: "Morning Reflections", price: 60, image: "/original/JGalvin_Kinsale-Morning_14x18in_Rev01.jpg" },
  { title: "Cycle Track", price: 60, image: "/original/2018-08-20+19.55.42.jpg" },
  { title: "Nature's Bounty", price: 60, image: "/original/Nature%27s+Bounty_14x18in.jpg" },
  { title: "Ready and Waiting", price: 60, image: "/original/JGalvin_Ready%2BWaiting_16x12in_Rev01.jpg" },
];

export default function PrintsPage() {
  return (
    <div className="pt-16">
      <main className="max-w-7xl mx-auto p-8 pb-20 sm:p-20">
        <h1 className="text-4xl sm:text-5xl font-serif text-center mb-4">Prints for Sale</h1>
        <p className="text-center text-gray-600 mb-12">Oil paintings by John Galvin</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {prints.map((print, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square bg-gray-200 mb-4 overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300">
                <img
                  src={imagePath(print.image)}
                  alt={print.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-lg mb-1">{print.title}</h3>
              <p className="text-gray-700 font-medium">from €{print.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
