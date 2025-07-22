# Cambridge Dictionary Clone

A modern dictionary website inspired by Cambridge Dictionary, built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Search Functionality**: Search for word definitions with autocomplete
- **Word Definitions**: Comprehensive definitions with pronunciations (UK/US)
- **Translations**: Multi-language translation support
- **Word of the Day**: Daily featured words with definitions
- **Popular Searches**: Trending word searches
- **Browse by Alphabet**: Easy navigation through dictionary entries
- **Grammar & Thesaurus**: Additional language learning resources
- **Responsive Design**: Mobile-first, clean interface
- **Modern UI**: Professional design with blue and white theme

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Radix UI primitives

## 📁 Project Structure

```
src/
├── app/
│   ├── dictionary/english/hello/    # Dictionary entry pages
│   ├── layout.tsx                   # Root layout
│   └── page.tsx                     # Home page
├── components/
│   ├── Header.tsx                   # Navigation header
│   ├── Footer.tsx                   # Site footer
│   ├── WordOfTheDay.tsx            # Daily word feature
│   ├── PopularSearches.tsx         # Trending searches
│   ├── AlphabetBrowser.tsx         # A-Z navigation
│   ├── DictionaryCategories.tsx    # Dictionary types
│   ├── TranslationDictionaries.tsx # Translation pairs
│   ├── NewWords.tsx                # New word additions
│   └── WordScramble.tsx            # Word game
└── .github/
    └── copilot-instructions.md     # AI coding instructions
```

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📖 Dictionary Features

### Core Components

- **Header with Search**: Prominent search bar with language selection
- **Dictionary Categories**: English, Learner's, British/American variants
- **Translation Support**: Multiple language pairs
- **Word Entries**: Detailed definitions with examples and pronunciations
- **Interactive Elements**: Audio playback, related words, synonyms

### Pages

- **Home** (`/`): Main dashboard with all features
- **Dictionary Entry** (`/dictionary/english/[word]`): Individual word pages
- **Browse** (`/browse/[letter]`): Alphabetical browsing
- **Translation** (`/translate`): Translation interface
- **Grammar** (`/grammar`): Grammar guides
- **Thesaurus** (`/thesaurus`): Synonyms and antonyms

## 🎨 Design Philosophy

- **Clean & Professional**: Mimics Cambridge Dictionary's trusted appearance
- **Typography-focused**: Emphasizes readability and clarity
- **Accessible**: Semantic HTML and proper ARIA labels
- **Mobile-responsive**: Works seamlessly across all devices
- **Performance-optimized**: Fast loading with Next.js optimizations

## 🔮 Future Enhancements

- [ ] Dictionary API integration
- [ ] User accounts and saved words
- [ ] Advanced search filters
- [ ] Pronunciation audio files
- [ ] Interactive vocabulary tests
- [ ] Offline functionality
- [ ] Multi-language interface

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is for educational purposes and is not affiliated with Cambridge University Press.
