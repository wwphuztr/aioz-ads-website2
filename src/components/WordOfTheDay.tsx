import { Volume2 } from 'lucide-react';

interface WordOfTheDayProps {
  word: string;
  pronunciation: string;
  definition: string;
  date: string;
}

export default function WordOfTheDay({ 
  word = "lemonade", 
  pronunciation = "/ˌlem.əˈneɪd/", 
  definition = "a drink made with the juice of lemons, water, and sugar",
  date = "July 22, 2025"
}: Partial<WordOfTheDayProps>) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">WORD OF THE DAY</h2>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center space-x-3 mb-2">
          <h3 className="text-2xl font-bold text-blue-600">{word}</h3>
          <button className="p-1 text-gray-400 hover:text-blue-600">
            <Volume2 size={20} />
          </button>
        </div>
        <p className="text-gray-600 mb-2">{pronunciation}</p>
        <p className="text-gray-800">{definition}</p>
      </div>
      
      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
        About this word →
      </button>
    </div>
  );
}
