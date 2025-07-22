import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top navigation */}
      <div className="bg-blue-900 text-white py-1">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <Link href="/learn" className="hover:underline">LEARN</Link>
            <Link href="/develop" className="hover:underline">DEVELOP</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/login" className="hover:underline">Log in</Link>
            <Link href="/signup" className="hover:underline">Sign up</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Cambridge Dictionary</span>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dictionary" className="text-gray-700 hover:text-blue-600 font-medium">
              Dictionary
            </Link>
            <Link href="/translate" className="text-gray-700 hover:text-blue-600 font-medium">
              Translate
            </Link>
            <Link href="/grammar" className="text-gray-700 hover:text-blue-600 font-medium">
              Grammar
            </Link>
            <Link href="/thesaurus" className="text-gray-700 hover:text-blue-600 font-medium">
              Thesaurus
            </Link>
            <Link href="/plus" className="bg-blue-600 text-white px-3 py-1 rounded font-medium hover:bg-blue-700">
              +Plus
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Type a word, e.g. hello"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-blue-600">
                <Search size={24} />
              </button>
            </div>
            
            {/* Language selector */}
            <div className="flex items-center justify-center mt-3 space-x-4">
              <span className="text-sm text-gray-600">Language:</span>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500">
                <option value="english">English</option>
                <option value="english-chinese">English–Chinese (Simplified)</option>
                <option value="english-french">English–French</option>
                <option value="english-german">English–German</option>
                <option value="english-spanish">English–Spanish</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
