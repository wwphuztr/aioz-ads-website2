import Link from 'next/link';

export default function Footer() {
  const footerSections = [
    {
      title: "Dictionary",
      links: [
        { name: "English Dictionary", href: "/dictionary/english" },
        { name: "Learner's Dictionary", href: "/dictionary/learner-english" },
        { name: "Essential Dictionary", href: "/dictionary/essential" },
        { name: "Browse Dictionary", href: "/browse" },
      ]
    },
    {
      title: "Grammar & Thesaurus",
      links: [
        { name: "Grammar", href: "/grammar" },
        { name: "Thesaurus", href: "/thesaurus" },
        { name: "Word of the Day", href: "/word-of-the-day" },
        { name: "New Words", href: "/new-words" },
      ]
    },
    {
      title: "Pronunciation & Translation",
      links: [
        { name: "Pronunciation", href: "/pronunciation" },
        { name: "Translation", href: "/translate" },
        { name: "Dictionary API", href: "/api" },
        { name: "Double-Click Lookup", href: "/tools/lookup" },
      ]
    },
    {
      title: "About",
      links: [
        { name: "About Cambridge Dictionary", href: "/about" },
        { name: "Cambridge University Press", href: "/press" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Use", href: "/terms" },
      ]
    }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social media and newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-gray-200">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-gray-600 text-sm">Follow us:</span>
            <div className="flex space-x-3">
              <Link href="/facebook" className="text-gray-400 hover:text-blue-600">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/twitter" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Cambridge University Press & Assessment
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
