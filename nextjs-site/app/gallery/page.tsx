export default function GalleryPage() {
  const galleryImages = [
    "https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/8089b132-79b6-45db-b950-ba0fb56650e2/IMG-20230601-WA0010.jpg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/44d61431-b13c-4fbd-9430-7a1da5ce5912/IMG-20230601-WA0009.jpg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/f2649937-8ee8-48ea-bdbc-1f1dd50c7f8f/IMG-20230601-WA0011.jpg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/919dae19-7b17-4abd-863a-26d60c6d5660/IMG-20230601-WA0015.jpg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/a9fc17c5-db5b-4e91-8702-1d8043afe115/d8b526cc-2019-4081-8163-fd9ea8086080.jpg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/4aea4a56-9278-4642-b3ae-dc98cb2861d4/7103dc0b-b4ad-4bbb-a9b9-4cebced83a8c.jpeg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/cc3c0505-883c-4182-9119-596bfe6b5652/d79363b8-e271-4ab1-916b-0f6e7b6d3af4.jpeg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/1522524354028-KSUMDKS8UCBDQM1TJB6N/johnggalvin.jpg?format=1500w"
  ];

  return (
    <div className="pt-16">
      <main className="max-w-7xl mx-auto p-8 pb-20 sm:p-20">
        <h1 className="text-4xl sm:text-5xl font-serif text-center mb-4">Full Catalogue</h1>
        <p className="text-center text-gray-600 mb-12">Gallery of John Galvin's Artwork</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group">
              <div className="relative aspect-square bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
