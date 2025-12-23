import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Book } from 'lucide-react';
import { TimelineEvent } from '../types';

interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ event, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative pl-12 sm:pl-20 pb-8 sm:pb-12">
      {/* Timeline Line */}
      {index > 0 && <div className="timeline-line" />}
      
      {/* Timeline Dot */}
      <div 
        className={`absolute left-4 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 border-white shadow-lg ${
          event.period === 'Makkah' ? 'bg-orange-500' : 'bg-qawli-500'
        }`}
        style={{ top: '1.5rem' }}
      />

      {/* Card Content */}
      <div className="qawli-card p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 pr-2">
              {event.title}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  event.period === 'Makkah' 
                    ? 'bg-orange-100 text-orange-700' 
                    : 'bg-qawli-100 text-qawli-700'
                }`}>
                  {event.period}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">{event.description}</p>

        {/* Historical Context */}
        <div className="bg-qawli-50 rounded-lg p-3 sm:p-4 mb-4">
          <h4 className="font-medium text-qawli-800 mb-2 text-sm sm:text-base">Konteks Sejarah</h4>
          <p className="text-qawli-700 text-xs sm:text-sm leading-relaxed">
            {event.historicalContext}
          </p>
        </div>

        {/* Ayahs */}
        {isExpanded && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-qawli-700">
              <Book className="w-4 h-4" />
              <h4 className="font-medium text-sm sm:text-base">Ayat-ayat Terkait</h4>
            </div>
            
            {event.ayahs.map((ayah) => (
              <div key={ayah.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                {/* Surah Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 space-y-1 sm:space-y-0">
                  <span className="text-sm font-medium text-qawli-600">
                    QS. {ayah.surahName} ({ayah.surahNumber}): {ayah.ayahNumber}
                  </span>
                  <span className="text-xs text-gray-500">
                    Wahyu ke-{ayah.revelationOrder}
                  </span>
                </div>

                {/* Arabic Text */}
                <div className="text-arabic text-lg sm:text-xl mb-4 p-3 sm:p-4 bg-gray-50 rounded-lg leading-loose">
                  {ayah.arabicText}
                </div>

                {/* Translation */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Terjemahan:</h5>
                  <p className="text-gray-800 italic text-sm sm:text-base leading-relaxed">"{ayah.translation}"</p>
                </div>

                {/* Tafsir */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Tafsir:</h5>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    {ayah.tafsir}
                  </p>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {ayah.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-qawli-100 text-qawli-700 text-xs rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineCard;