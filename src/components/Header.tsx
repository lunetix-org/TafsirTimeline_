import React from 'react';
import { Star, Search, Filter } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  onFilterToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onFilterToggle }) => {
  return (
    <header className="bg-gradient-to-r from-qawli-500 to-qawli-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-qawli-400 to-qawli-600 rounded-lg flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Tafsir Timeline</h1>
              <p className="text-qawli-100 text-sm">Qawli</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari ayat, surah, atau peristiwa..."
                className="pl-10 pr-4 py-2 w-80 rounded-lg border-0 bg-white/10 backdrop-blur-sm text-white placeholder-qawli-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
            <button
              onClick={onFilterToggle}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;