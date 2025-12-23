import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import Timeline from './components/Timeline';
import ScrollToTop from './components/ScrollToTop';
import { sampleTimelineEvents } from './data/sampleData';
import { FilterOptions } from './types';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    period: 'All',
    keyword: ''
  });

  // Filter and search logic
  const filteredEvents = useMemo(() => {
    let filtered = sampleTimelineEvents;

    // Filter by period
    if (filters.period && filters.period !== 'All') {
      filtered = filtered.filter(event => event.period === filters.period);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.historicalContext.toLowerCase().includes(query) ||
        event.ayahs.some(ayah => 
          ayah.surahName.toLowerCase().includes(query) ||
          ayah.translation.toLowerCase().includes(query) ||
          ayah.tafsir.toLowerCase().includes(query) ||
          ayah.keywords.some(keyword => keyword.toLowerCase().includes(query))
        )
      );
    }

    // Filter by keyword
    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase();
      filtered = filtered.filter(event =>
        event.ayahs.some(ayah =>
          ayah.keywords.some(k => k.toLowerCase().includes(keyword)) ||
          ayah.tafsir.toLowerCase().includes(keyword) ||
          ayah.translation.toLowerCase().includes(keyword)
        ) ||
        event.title.toLowerCase().includes(keyword) ||
        event.description.toLowerCase().includes(keyword)
      );
    }

    return filtered;
  }, [searchQuery, filters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  // Close filter panel when clicking outside on mobile
  const handleFilterClose = () => {
    setIsFilterOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onSearch={handleSearch}
        onFilterToggle={handleFilterToggle}
      />
      
      <FilterPanel
        isOpen={isFilterOpen}
        onClose={handleFilterClose}
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      <main className="pb-8">
        <Timeline events={filteredEvents} />
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-qawli-400 to-qawli-600 rounded flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-base sm:text-lg font-semibold text-gray-900">Qawli</span>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm px-4">
              Tafsir Timeline - Memahami Al-Qur'an melalui kronologi sejarah
            </p>
            <p className="text-gray-500 text-xs mt-2 px-4">
              © 2024 Qawli. Dibuat dengan ❤️ untuk umat Islam
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;