import Link from "next/link";
import { imagePath } from "@/lib/imagePath";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src={imagePath("/hero/hero-main.jpg")}
          alt="John Galvin Fine Art Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-4 sm:mb-6 animate-fadeInUp text-white">
            John Galvin Fine Art
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 animate-fadeInUp [animation-delay:200ms] opacity-0" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
            Irish Artist | Oil Paintings | Still Life & Landscape
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap animate-fadeInUp [animation-delay:400ms] opacity-0" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
            <Link href="/original-art" className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              Original Art
            </Link>
            <Link href="/prints" className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base border-2 border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 hover:shadow-lg">
              Prints
            </Link>
            <Link href="/gallery" className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base border-2 border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 hover:shadow-lg">
              Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-8 sm:mb-12 animate-fadeIn">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {[
            { 
              title: "Farmleigh House Conservatory", 
              category: "Original",
              image: imagePath("/gallery/farmleigh.jpg"),
              link: "/original-art-for-sale/farmleigh-house"
            },
            {
              title: "Make Hay When the Sun Shines",
              category: "Original",
              image: imagePath("/gallery/make-hay.jpg"),
              link: "/original-art-for-sale/make-hay-while-sun-shines"
            },
            {
              title: "Blue Elegance",
              category: "Original",
              image: imagePath("/gallery/blue-elegance.jpg"),
              link: "/original-art-for-sale/blue-elegance"
            },
            {
              title: "Sunrise Skerries",
              category: "Original",
              image: imagePath("/gallery/farmleigh.jpg"),
              link: "/original-art"
            },
            {
              title: "Better Together",
              category: "Original",
              image: imagePath("/gallery/make-hay.jpg"),
              link: "/original-art"
            },
            {
              title: "Nature's Way",
              category: "Print",
              image: imagePath("/gallery/blue-elegance.jpg"),
              link: "/prints"
            },
          ].map((work, i) => (
            <Link key={i} href={work.link} className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-4 hover:scale-105">
              <div className="aspect-square bg-gray-200 mb-4 overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-base sm:text-lg group-hover:text-gray-600 transition-colors duration-300">{work.title}</h3>
              <p className="text-gray-600 text-sm">{work.category}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-8 sm:mb-12 animate-slideInLeft text-black">About John Galvin</h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
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
        </div>
      </section>
    </main>
  );
}