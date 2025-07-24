import Link from 'next/link';

export default function AlphabetBrowser() {
  const letters = ['0–9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return (
    <div className="bg-white rounded-lg shadow-md p-1">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Browse the English Dictionary</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {letters.map((letter) => (
          <Link
            key={letter}
            href={`/browse/english/${letter}`}
            className="inline-block px-3 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded text-sm font-medium min-w-[35px] text-center"
          >
            {letter}
          </Link>
        ))}
      </div>
      
      <p className="text-sm text-gray-600">
        Or, browse the Cambridge Dictionary{' '}
        <Link href="/browse" className="text-blue-600 hover:text-blue-800">
          index
        </Link>
      </p>
    </div>
  );
}
