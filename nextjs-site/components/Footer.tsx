export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-sm sm:text-base">© John Galvin 2026 All Rights Reserved</p>
          <div className="flex gap-4 sm:gap-6 text-sm sm:text-base">
            <a href="mailto:johnggalvin@gmail.com" className="hover:text-gray-300 hover:scale-110 transition-all duration-300">Email</a>
            <a href="http://instagram.com/johngalvinfineart" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 hover:scale-110 transition-all duration-300">Instagram</a>
            <a href="https://www.facebook.com/johngalvinfineart/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 hover:scale-110 transition-all duration-300">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
