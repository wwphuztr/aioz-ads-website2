import Link from 'next/link';

export default function TranslationDictionaries() {
  const translationPairs = [
    { from: "English", to: "Chinese (Simplified)", href: "/dictionary/english-chinese-simplified" },
    { from: "English", to: "Chinese (Traditional)", href: "/dictionary/english-chinese-traditional" },
    { from: "English", to: "Dutch", href: "/dictionary/english-dutch" },
    { from: "English", to: "French", href: "/dictionary/english-french" },
    { from: "English", to: "German", href: "/dictionary/english-german" },
    { from: "English", to: "Italian", href: "/dictionary/english-italian" },
    { from: "English", to: "Japanese", href: "/dictionary/english-japanese" },
    { from: "English", to: "Spanish", href: "/dictionary/english-spanish" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Translation dictionaries</h2>
      <p className="text-sm text-gray-600 mb-4">
        Click on the arrows to change the translation direction.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {translationPairs.map((pair, index) => (
          <Link
            key={index}
            href={pair.href}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-colors"
          >
            <span className="text-blue-600 hover:text-blue-800 text-sm">
              {pair.from}–{pair.to}
            </span>
            <svg 
              className="w-4 h-4 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          See more
        </button>
      </div>
    </div>
  );
}
