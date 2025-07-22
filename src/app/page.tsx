import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DictionaryCategories from '@/components/DictionaryCategories';
import TranslationDictionaries from '@/components/TranslationDictionaries';
import WordOfTheDay from '@/components/WordOfTheDay';
import PopularSearches from '@/components/PopularSearches';
import AlphabetBrowser from '@/components/AlphabetBrowser';
import NewWords from '@/components/NewWords';
import WordScramble from '@/components/WordScramble';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore the Cambridge Dictionary
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The most popular dictionary and thesaurus for learners of English. 
            Meanings and definitions of words with pronunciations and translations.
          </p>
        </div>

        {/* Dictionary Categories */}
        <DictionaryCategories />

        {/* Translation Dictionaries */}
        <TranslationDictionaries />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <WordOfTheDay />
            <NewWords />
          </div>

          {/* Middle Column */}
          <div className="space-y-8">
            <PopularSearches />
            <WordScramble />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <AlphabetBrowser />
            
            {/* Blog Post Preview */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">BLOG</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-blue-600 hover:text-blue-800 font-medium mb-2">
                    Up north and down south: prepositions for expressing directions
                  </h3>
                  <p className="text-sm text-gray-500">July 16, 2025</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CambridgeDictionary Plus Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">CambridgeDictionary +Plus</h2>
          <p className="mb-6 text-blue-100">
            Free word lists and quizzes to create, download and share!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Go to + Plus
            </button>
            <span className="text-blue-100">or</span>
            <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Log in
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
