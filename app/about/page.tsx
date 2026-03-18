import { imagePath } from "@/lib/imagePath";

export default function AboutPage() {
  return (
    <div className="pt-16">
      <main className="max-w-7xl mx-auto p-8 pb-20 sm:p-20">
        <h1 className="text-4xl sm:text-5xl font-serif text-center mb-12">About John Galvin</h1>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-16">
          <div className="w-full md:w-1/2">
            <img 
              src={imagePath("/about/john-portrait.jpg")}
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
            src={imagePath("/about/studio1.jpg")}
            alt="John Galvin Artwork"
            className="w-full h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img 
            src={imagePath("/about/studio2.jpg")}
            alt="John Galvin Artwork"
            className="w-full h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img 
            src={imagePath("/about/studio3.jpg")}
            alt="John Galvin Artwork"
            className="w-full h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </main>
    </div>
  );
}
