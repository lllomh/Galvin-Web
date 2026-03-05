export default function AboutPage() {
  return (
    <div className="pt-16">
      <main className="max-w-7xl mx-auto p-8 pb-20 sm:p-20">
        <h1 className="text-4xl sm:text-5xl font-serif text-center mb-12">About John Galvin</h1>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-16">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/1522524354028-KSUMDKS8UCBDQM1TJB6N/johnggalvin.jpg?format=1500w" 
              alt="John Galvin"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              John is an Irish visual artist who lives in the Lake County of Westmeath which is situated in the heartland of Ireland.
            </p>
            <blockquote className="text-base sm:text-lg md:text-xl text-gray-800 italic border-l-4 border-gray-400 pl-4 my-6">
              "I want my paintings to capture and portray the extraordinary, which lies hidden in the ordinary, to open our eyes and our minds to appreciate the beauty that surrounds us in everyday life."
            </blockquote>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Drawing his inspiration from his environs John paints in the traditional medium of oils and his work covers a vast range of subjects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/a9fc17c5-db5b-4e91-8702-1d8043afe115/d8b526cc-2019-4081-8163-fd9ea8086080.jpg?format=1500w"
            alt="John Galvin Artwork"
            className="w-full h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img 
            src="https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/4aea4a56-9278-4642-b3ae-dc98cb2861d4/7103dc0b-b4ad-4bbb-a9b9-4cebced83a8c.jpeg?format=1500w"
            alt="John Galvin Artwork"
            className="w-full h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img 
            src="https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/cc3c0505-883c-4182-9119-596bfe6b5652/d79363b8-e271-4ab1-916b-0f6e7b6d3af4.jpeg?format=1500w"
            alt="John Galvin Artwork"
            className="w-full h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </main>
    </div>
  );
}
