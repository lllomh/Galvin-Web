import Link from 'next/link';
import AddToCartButton from './AddToCartButton';

const artworks = [
  { title: "Make Hay While the Sun Shines", price: 700, image: "IMG-20230326-WA0002.jpg", sold: false, size: "18 inches x 16 inches", slug: "make-hay-while-sun-shines" },
  { title: "The Reek", price: 700, image: "20251030_124510.jpg", sold: true, size: "18 inches x 16 inches", slug: "the-reek" },
  { title: "Adare Cottages", price: 600, image: "19b2f4e3-e00a-42ed-8d64-823b79229415.jpg", sold: true, size: "18 inches x 16 inches", slug: "adare-cottages" },
  { title: "Bunratty", price: 600, image: "f27a45c9-ec39-4608-ad92-dd791d6f9ce7.jpg", sold: false, size: "18 inches x 16 inches", slug: "bunratty" },
  { title: "Farmleigh House Conservatory", price: 600, image: "IMG-20230728-WA0008.jpg", sold: false, size: "18 inches x 16 inches", slug: "farmleigh-house" },
  { title: "The Wild Atlantic Way", price: 600, image: "20251030_124759.jpg", sold: true, size: "18 inches x 16 inches", slug: "wild-atlantic-way" },
  { title: "Whispers of Summer", price: 700, image: "20251030_124316.jpg", sold: false, size: "18 inches x 16 inches", slug: "whispers-of-summer" },
  { title: "Blue Elegance", price: 700, image: "DSC_0803+%282%29.JPG", sold: true, size: "18 inches x 16 inches", slug: "blue-elegance" },
  { title: "Sunrise at Skerries", price: 0, image: "IMG-20230326-WA0001.jpg", sold: true, size: "18 inches x 16 inches", slug: "sunrise-skerries" },
  { title: "Sunset at Salthill", price: 0, image: "IMG-20230326-WA0003.jpg", sold: true, size: "18 inches x 16 inches", slug: "sunset-salthill" },
  { title: "Better Together", price: 700, image: "image.jpg", sold: true, size: "18 inches x 16 inches", slug: "better-together" },
  { title: "The Calf", price: 0, image: "IMG-20230104-WA0007.jpg", sold: true, size: "18 inches x 16 inches", slug: "the-calf" },
  { title: "Nature's Bounty", price: 500, image: "Nature%27s+Bounty_14x18in.jpg", sold: true, size: "14 inches x 18 inches", slug: "natures-bounty" },
  { title: "The Bridge", price: 0, image: "IMG-20230104-WA0005.jpg", sold: true, size: "18 inches x 16 inches", slug: "the-bridge" },
  { title: "The Farm", price: 0, image: "IMG-20230104-WA0008.jpg", sold: true, size: "18 inches x 16 inches", slug: "the-farm" },
  { title: "Limousin", price: 0, image: "IMG-20230104-WA0006.jpg", sold: true, size: "18 inches x 16 inches", slug: "limousin" },
  { title: "Bales of Gold", price: 500, image: "20191111_172622.jpg", sold: true, size: "18 inches x 16 inches", slug: "bales-of-gold" },
  { title: "Symmetry", price: 500, image: "IMG-20211220-WA0003.jpg", sold: true, size: "18 inches x 16 inches", slug: "symmetry" },
  { title: "Original Art by John Galvin", price: 500, image: "IMG-20211109-WA0001.jpg", sold: true, size: "18 inches x 16 inches", slug: "original-art-1" },
  { title: "Taking a Rest", price: 500, image: "Taking+a+Rest_18x14in.jpg", sold: true, size: "18 inches x 14 inches", slug: "taking-a-rest" },
  { title: "Gougane Barra", price: 500, image: "IMG-20211115-WA0015.jpg", sold: true, size: "18 inches x 16 inches", slug: "gougane-barra" },
  { title: "The Grand Canal", price: 500, image: "IMG-20211115-WA0017.jpg", sold: true, size: "18 inches x 16 inches", slug: "grand-canal" },
  { title: "Havin' a Gander", price: 500, image: "Havin+a+Gander.jpg", sold: true, size: "18 inches x 16 inches", slug: "havin-a-gander" },
  { title: "The Blue Door", price: 500, image: "Blue+Door.jpg", sold: true, size: "18 inches x 16 inches", slug: "the-blue-door" },
  { title: "The Carmelite and St. Patrick's Churches", price: 500, image: "2019-08-28+11.05.17.jpg", sold: true, size: "18 inches x 16 inches", slug: "carmelite-st-patricks" },
  { title: "After the Rain", price: 500, image: "IMG-20211124-WA0006.jpg", sold: true, size: "18 inches x 16 inches", slug: "after-the-rain" },
  { title: "Ready and Waiting", price: 500, image: "JGalvin_Ready%2BWaiting_16x12in_Rev01.jpg", sold: true, size: "16 inches x 12 inches", slug: "ready-and-waiting" },
  { title: "Kinsale Pier", price: 500, image: "2018-08-20+21.56.51new.jpg", sold: true, size: "18 inches x 16 inches", slug: "kinsale-pier" },
  { title: "Bluebell Wood", price: 500, image: "2019-08-28+11.03.00.jpg", sold: true, size: "18 inches x 16 inches", slug: "bluebell-wood" },
  { title: "Kilcatherine Bridge", price: 500, image: "2019-10-03+13.58.40.jpg", sold: true, size: "18 inches x 16 inches", slug: "kilcatherine-bridge" },
  { title: "Pink Petals and Berries", price: 500, image: "Roses.jpg", sold: true, size: "18 inches x 16 inches", slug: "pink-petals-berries" },
  { title: "Farmer and Sheep", price: 700, image: "Farmer.jpg", sold: true, size: "18 inches x 16 inches", slug: "farmer-and-sheep" },
  { title: "Anticipation", price: 800, image: "JGalvin_Anticipation_16x20in_Rev02.jpg", sold: true, size: "16 inches x 20 inches", slug: "anticipation" },
  { title: "Morning Reflections", price: 500, image: "JGalvin_Kinsale-Morning_14x18in_Rev01.jpg", sold: true, size: "14 inches x 18 inches", slug: "morning-reflections" },
  { title: "Cycle Track", price: 500, image: "2018-08-20+19.55.42.jpg", sold: true, size: "18 inches x 16 inches", slug: "cycle-track" },
  { title: "Original Art by John Galvin", price: 500, image: "IMG-20211109-WA0010.jpg", sold: true, size: "18 inches x 16 inches", slug: "original-art-2" }
];

export function generateStaticParams() {
  return artworks.map(artwork => ({ slug: artwork.slug }));
}

export default function ArtworkDetailPage({ params }: { params: { slug: string } }) {
  const artwork = artworks.find(a => a.slug === params.slug);
  
  if (!artwork) {
    return <div className="pt-16 min-h-screen flex items-center justify-center">Artwork not found</div>;
  }

  return (
    <div className="pt-16">
      <main className="max-w-7xl mx-auto p-8 pb-20 sm:p-20">
        <Link href="/original-art" className="inline-block mb-8 text-gray-600 hover:text-black transition">
          ← Back to Original Art For Sale
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img 
              src={`/original/${artwork.image}`} 
              alt={artwork.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif mb-4">{artwork.title} - Original Art by John Galvin</h1>
            {artwork.price > 0 && (
              <p className="text-2xl font-bold mb-6">€{artwork.price.toFixed(2)}</p>
            )}
            {artwork.sold && (
              <p className="text-red-600 font-bold mb-4">SOLD</p>
            )}
            
            <div className="space-y-4 text-gray-700">
              <p>Original artwork by John Galvin. This is an oil on canvas painting of size {artwork.size}.</p>
              <p>Oil on pure linen canvas</p>
              <p>Price includes the frame</p>
            </div>
            
            {!artwork.sold && artwork.price > 0 && (
              <AddToCartButton artwork={{
                slug: artwork.slug,
                title: artwork.title,
                price: artwork.price,
                image: artwork.image
              }} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
