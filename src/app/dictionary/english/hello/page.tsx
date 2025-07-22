import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Volume2, BookOpen, Globe } from 'lucide-react';

// Mock dictionary data
const wordData = {
  word: "hello",
  pronunciation: {
    uk: "/ˈhel.əʊ/",
    us: "/ˈhel.oʊ/"
  },
  partOfSpeech: "exclamation",
  definitions: [
    {
      meaning: "used as a greeting or to begin a phone conversation",
      examples: [
        "Hello John, how are you?",
        "Hello, is that David?"
      ]
    }
  ],
  translations: {
    spanish: "hola",
    french: "bonjour",
    german: "hallo",
    chinese: "你好"
  }
};

export default function DictionaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Word Entry */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{wordData.word}</h1>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {wordData.partOfSpeech}
              </span>
            </div>
            <button className="p-2 text-gray-400 hover:text-blue-600">
              <BookOpen size={24} />
            </button>
          </div>

          {/* Pronunciation */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Pronunciation</h3>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-600">UK</span>
                <span className="text-blue-600">{wordData.pronunciation.uk}</span>
                <button className="p-1 text-gray-400 hover:text-blue-600">
                  <Volume2 size={16} />
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-600">US</span>
                <span className="text-blue-600">{wordData.pronunciation.us}</span>
                <button className="p-1 text-gray-400 hover:text-blue-600">
                  <Volume2 size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Definitions */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Definition</h3>
            {wordData.definitions.map((def, index) => (
              <div key={index} className="mb-4">
                <p className="text-gray-800 mb-3">{def.meaning}</p>
                <div className="space-y-2">
                  {def.examples.map((example, exIndex) => (
                    <p key={exIndex} className="text-gray-600 italic pl-4 border-l-2 border-gray-200">
                      &quot;{example}&quot;
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Translations */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Globe className="mr-2" size={20} />
              Translations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Spanish:</span>
                <span className="font-medium">{wordData.translations.spanish}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">French:</span>
                <span className="font-medium">{wordData.translations.french}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">German:</span>
                <span className="font-medium">{wordData.translations.german}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Chinese:</span>
                <span className="font-medium">{wordData.translations.chinese}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Words */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Words</h3>
            <div className="space-y-2">
              <a href="/dictionary/english/goodbye" className="text-blue-600 hover:text-blue-800">goodbye</a>
              <a href="/dictionary/english/hi" className="text-blue-600 hover:text-blue-800">hi</a>
              <a href="/dictionary/english/greeting" className="text-blue-600 hover:text-blue-800">greeting</a>
              <a href="/dictionary/english/welcome" className="text-blue-600 hover:text-blue-800">welcome</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">See Also</h3>
            <div className="space-y-2">
              <a href="/thesaurus/hello" className="text-blue-600 hover:text-blue-800">Thesaurus: hello</a>
              <a href="/grammar/greetings" className="text-blue-600 hover:text-blue-800">Grammar: Greetings</a>
              <a href="/pronunciation/hello" className="text-blue-600 hover:text-blue-800">Pronunciation: hello</a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
