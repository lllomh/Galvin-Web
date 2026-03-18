import { imagePath } from "@/lib/imagePath";

export default function ContactPage() {
  return (
    <div className="pt-16">
      <main className="max-w-7xl mx-auto p-8 pb-20 sm:p-20">
        <h1 className="text-4xl sm:text-5xl font-serif mb-12">Gallery Location</h1>
        <div className="space-y-2 text-lg mb-12">
          <p className="font-semibold">John Galvin Fine Art</p>
          <p>Main Street, Moate, Co Westmeath</p>
          <p>Ireland N37C5F6</p>
          <a href="tel:+353906481286" className="inline-block mt-4 text-blue-600 hover:underline">
            +353 (0)90 6481286
          </a>
        </div>

        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.8!2d-7.7186!3d53.3947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485c4e0000000001%3A0x0!2sMain%20Street%2C%20Moate%2C%20Co.%20Westmeath%2C%20Ireland!5e0!3m2!1sen!2sie!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={imagePath("/contact/gallery1.jpg")}
              alt="Gallery Interior"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src={imagePath("/contact/gallery2.jpg")}
              alt="Gallery Interior"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src={imagePath("/contact/gallery3.jpg")}
              alt="Gallery Interior"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src={imagePath("/contact/gallery4.jpg")}
              alt="Gallery Interior"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          <section>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">Contact Us</h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-black text-white hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}