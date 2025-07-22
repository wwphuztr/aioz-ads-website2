import Link from 'next/link';

export default function NewWords() {
  const newWord = {
    word: "nanoship",
    date: "July 21, 2025",
    href: "/blog/new-words/2025/07/21/nanoship"
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">NEW WORDS</h2>
      
      <Link 
        href={newWord.href}
        className="block hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors"
      >
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-600 mb-1">{newWord.word}</h3>
            <p className="text-sm text-gray-500">{newWord.date}</p>
          </div>
        </div>
      </Link>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <Link 
          href="/blog/new-words"
          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          More new words →
        </Link>
      </div>
    </div>
  );
}
