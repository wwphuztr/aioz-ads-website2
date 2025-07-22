import Link from 'next/link';

interface PopularSearchesProps {
  searches?: string[];
}

export default function PopularSearches({ 
  searches = [
    'cam', 'pronunciation', 'experience', 'hello', 'your',
    'chard', 'look', 'scot-free', 'modal', 'Oxford'
  ]
}: PopularSearchesProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular searches</h2>
      <p className="text-sm text-gray-600 mb-4">English Dictionary</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {searches.slice(0, 5).map((search, index) => (
            <Link 
              key={search}
              href={`/dictionary/english/${search}`}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              <span className="text-gray-400 font-mono text-xs w-6">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{search}</span>
            </Link>
          ))}
        </div>
        
        <div className="space-y-2">
          {searches.slice(5, 10).map((search, index) => (
            <Link 
              key={search}
              href={`/dictionary/english/${search}`}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              <span className="text-gray-400 font-mono text-xs w-6">
                {String(index + 6).padStart(2, '0')}
              </span>
              <span>{search}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
