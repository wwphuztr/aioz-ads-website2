import Link from 'next/link';
import { Book, Globe, Volume2, PenTool } from 'lucide-react';

export default function DictionaryCategories() {
  const categories = [
    {
      title: "English dictionaries",
      icon: <Book className="w-12 h-12 text-blue-600" />,
      links: [
        { name: "English", href: "/dictionary/english" },
        { name: "Learner's Dictionary", href: "/dictionary/learner-english" },
        { name: "Essential British English", href: "/dictionary/essential-british-english" },
        { name: "Essential American English", href: "/dictionary/essential-american-english" },
      ]
    },
    {
      title: "Grammar",
      icon: <PenTool className="w-12 h-12 text-green-600" />,
      links: [
        { name: "British Grammar", href: "/grammar/british-grammar" },
        { name: "Grammar Guide", href: "/grammar" },
      ]
    },
    {
      title: "Thesaurus",
      icon: <Globe className="w-12 h-12 text-purple-600" />,
      links: [
        { name: "English Thesaurus", href: "/thesaurus" },
        { name: "Synonyms & Antonyms", href: "/thesaurus/synonyms" },
      ]
    },
    {
      title: "Pronunciation",
      icon: <Volume2 className="w-12 h-12 text-orange-600" />,
      links: [
        { name: "Pronunciation Guide", href: "/pronunciation" },
        { name: "Audio Dictionary", href: "/pronunciation/audio" },
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {categories.map((category, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-4">
            {category.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            {category.title}
          </h3>
          <ul className="space-y-2">
            {category.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  href={link.href}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
