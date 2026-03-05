'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/StockistsMap'), { 
  ssr: false,
  loading: () => <div className="w-full h-[500px] rounded-lg mb-8 border bg-gray-100 flex items-center justify-center">Loading map...</div>
});

const stockists = [
  { name: "Anthony Ryan", location: "Galway", lat: 53.2707, lng: -9.0568 },
  { name: "Arboretum Home & Garden", location: "Leighlinbridge", lat: 52.7333, lng: -6.9667 },
  { name: "Arboretum Urban Garden", location: "Dublin City", lat: 53.3498, lng: -6.2603 },
  { name: "Batavia", location: "Fermoy", lat: 52.1389, lng: -8.2750 },
  { name: "Beattys Jewellery & Gifts", location: "Loughrea", lat: 53.1978, lng: -8.5667 },
  { name: "Beechdale Garden Centre", location: "Clonroach", lat: 52.3333, lng: -6.9167 },
  { name: "Blarney Woollen Mills", location: "Blarney", lat: 51.9333, lng: -8.5667 },
  { name: "Blarney Woollen Mills", location: "Bunratty", lat: 52.6978, lng: -8.8147 },
  { name: "Blarney Woollen Mills", location: "Carrick-on-Suir", lat: 52.3489, lng: -7.4128 },
  { name: "Bob & Kates", location: "Clane", lat: 53.2917, lng: -6.6833 },
  { name: "Carraig Donn", location: "Blanchardstown", lat: 53.3878, lng: -6.3889 },
  { name: "Carraig Donn", location: "Castlebar", lat: 53.8556, lng: -9.2972 },
  { name: "Carraig Donn", location: "Limerick", lat: 52.6638, lng: -8.6267 },
  { name: "Carraig Donn", location: "Dundalk", lat: 54.0000, lng: -6.4167 },
  { name: "Carraig Donn", location: "Ennis", lat: 52.8450, lng: -8.9864 },
  { name: "Carraig Donn", location: "Kilkenny City", lat: 52.6541, lng: -7.2448 },
  { name: "Carraig Donn", location: "Galway", lat: 53.2839, lng: -9.0417 },
  { name: "Carraig Donn", location: "Swords", lat: 53.4597, lng: -6.2181 },
  { name: "Carraig Donn", location: "Westport", lat: 53.8000, lng: -9.5167 },
  { name: "Cronins", location: "Kinsale", lat: 51.7056, lng: -8.5303 },
  { name: "Dan Fitzgerald", location: "Tralee", lat: 52.2711, lng: -9.7014 },
  { name: "Ennis Bookshop", location: "Ennis", lat: 52.8450, lng: -8.9864 },
  { name: "Fernhill Garden Centre", location: "Athlone", lat: 53.4239, lng: -7.9406 },
  { name: "Forgefield Farm Shop", location: "Terminfeckin", lat: 53.7833, lng: -6.2500 },
  { name: "Foxford Woollen Mills", location: "Foxford", lat: 53.9833, lng: -9.1167 },
  { name: "Foxford Woollen Mills", location: "Westport", lat: 53.8000, lng: -9.5167 },
  { name: "Gift & Art", location: "Dundalk", lat: 54.0000, lng: -6.4167 },
  { name: "Grahams", location: "Monaghan", lat: 54.2492, lng: -6.9683 },
  { name: "Jim Birmingham", location: "Fermoy", lat: 52.1389, lng: -8.2750 },
  { name: "Jorenas", location: "Ballinasloe", lat: 53.3278, lng: -8.2167 },
  { name: "Kenny's Art Gallery", location: "Lahinch", lat: 52.9333, lng: -9.3500 },
  { name: "Magees", location: "Donegal Town", lat: 54.6544, lng: -8.1108 },
  { name: "McCauliffes", location: "Dunfanaghy", lat: 55.1833, lng: -7.9667 },
  { name: "McElhinneys", location: "Ballybofey", lat: 54.8000, lng: -7.7833 },
  { name: "Mulveys", location: "Carrick-on-Shannon", lat: 53.9489, lng: -8.0906 },
  { name: "Powerscourt Garden Centre", location: "Enniskerry", lat: 53.1917, lng: -6.1750 },
  { name: "Presents of Mind", location: "Kanturk", lat: 52.1750, lng: -8.9000 },
  { name: "Quinlans", location: "Macroom", lat: 51.9028, lng: -8.9556 },
  { name: "Red Earth", location: "Mullingar", lat: 53.5264, lng: -7.3389 },
  { name: "Rothe House", location: "Kilkenny City", lat: 52.6541, lng: -7.2448 },
  { name: "Serendipity", location: "Killarney", lat: 52.0589, lng: -9.5044 },
  { name: "The Gift Horse", location: "Horse & Jockey", lat: 52.6167, lng: -7.7833 },
  { name: "The King Oak", location: "Tullamore", lat: 53.2739, lng: -7.4889 },
  { name: "The Orchard Garden Centre", location: "Celbridge", lat: 53.3389, lng: -6.5417 },
  { name: "The Scullery", location: "Mitchelstown", lat: 52.2667, lng: -8.2667 },
  { name: "Vokes", location: "Adare", lat: 52.5639, lng: -8.7889 },
];

export default function StockistsPage() {
  return (
    <div className="pt-16">
      <main className="max-w-6xl mx-auto p-8 pb-20 sm:p-20">
        <h1 className="text-4xl font-bold mb-6">Our Print Stockists</h1>
        
        <p className="mb-4 text-lg">
          In addition to buying prints online from the website shop, the businesses in the list and map below also stock prints of John Galvin&apos;s art, through our partners Blue Shoe Gallery.
        </p>
        
        <p className="mb-8">
          We are very appreciative of the support of all these businesses and we encourage everyone to support Irish businesses, wherever possible.
        </p>

        <Map stockists={stockists} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stockists.map((stockist, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h2 className="font-semibold text-lg">{stockist.name}</h2>
              <p className="text-gray-600">{stockist.location}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
