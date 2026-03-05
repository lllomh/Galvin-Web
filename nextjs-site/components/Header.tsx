import Link from 'next/link';

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-serif text-2xl font-bold text-black">John Galvin</Link>
          <div className="hidden md:flex gap-6 text-base font-medium text-black">
            <Link href="/" className="hover:text-gray-600 transition">Home</Link>
            <Link href="/original-art" className="hover:text-gray-600 transition">Original Art For Sale</Link>
            <Link href="/prints" className="hover:text-gray-600 transition">Prints</Link>
            <Link href="/stockists" className="hover:text-gray-600 transition">Print Stockists</Link>
            <Link href="/catalogue" className="hover:text-gray-600 transition">Art Catalogue</Link>
            <Link href="/about" className="hover:text-gray-600 transition">About John</Link>
            <Link href="/contact" className="hover:text-gray-600 transition">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
