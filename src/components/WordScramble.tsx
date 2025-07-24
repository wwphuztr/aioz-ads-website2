import Link from 'next/link';
import { Gamepad2 } from 'lucide-react';

export default function WordScramble() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md p-4 text-white">
      <div className="flex items-center space-x-2 mb-5">
        <Gamepad2 className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Word Scramble</h2>
      </div>
      
      <p className="mb-2 text-blue-100">
        Challenge yourself with word games from Cambridge Dictionary.
      </p>
      
      <p className="mb-4 text-sm text-blue-100">
        Read the definition.
      </p>
      
      <Link
        href="/games/word-scramble"
        className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
      >
        Play
      </Link>
    </div>
  );
}
