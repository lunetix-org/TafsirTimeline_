import React from 'react';
import { X } from 'lucide-react';
import { FilterOptions } from '../types';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
}) => {
  if (!isOpen) return null;

  const handlePeriodChange = (period: 'Makkah' | 'Madinah' | 'All') => {
    onFilterChange({ ...filters, period });
  };

  const handleKeywordChange = (keyword: string) => {
    onFilterChange({ ...filters, keyword });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-end">
      <div className="bg-white w-80 h-full shadow-2xl transform transition-transform">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Filter Timeline</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Period Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Periode Turun</h3>
            <div className="space-y-2">
              {['All', 'Makkah', 'Madinah'].map((period) => (
                <label key={period} className="flex items-center">
                  <input
                    type="radio"
                    name="period"
                    value={period}
                    checked={filters.period === period}
                    onChange={() => handlePeriodChange(period as any)}
                    className="w-4 h-4 text-qawli-500 border-gray-300 focus:ring-qawli-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{period}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Keyword Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Kata Kunci</h3>
            <input
              type="text"
              placeholder="Masukkan kata kunci..."
              value={filters.keyword || ''}
              onChange={(e) => handleKeywordChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qawli-500 focus:border-transparent"
            />
          </div>

          {/* Quick Filters */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Filter Cepat</h3>
            <div className="flex flex-wrap gap-2">
              {['wahyu pertama', 'perang', 'hijrah', 'dakwah', 'kemenangan'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleKeywordChange(tag)}
                  className="px-3 py-1 text-xs bg-qawli-50 text-qawli-700 rounded-full hover:bg-qawli-100 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => onFilterChange({ period: 'All', keyword: '' })}
            className="w-full btn-secondary"
          >
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;