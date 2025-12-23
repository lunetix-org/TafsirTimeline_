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
    <div className="relative pl-20 pb-12">
      {/* Timeline Line */}
      {index > 0 && <div className="timeline-line" />}
      
      {/* Timeline Dot */}
      <div 
        className={`timeline-dot ${
          event.period === 'Makkah' ? 'bg-orange-500' : 'bg-qawli-500'
        }`}
        style={{ top: '1.5rem' }}
      />

      {/* Card Content */}
      <div className="qawli-card p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {event.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
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
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">{event.description}</p>

        {/* Historical Context */}
        <div className="bg-qawli-50 rounded-lg p-4 mb-4">
          <h4 className="font-medium text-qawli-800 mb-2">Konteks Sejarah</h4>
          <p className="text-qawli-700 text-sm leading-relaxed">
            {event.historicalContext}
          </p>
        </div>

        {/* Ayahs */}
        {isExpanded && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-qawli-700">
              <Book className="w-4 h-4" />
              <h4 className="font-medium">Ayat-ayat Terkait</h4>
            </div>
            
            {event.ayahs.map((ayah) => (
              <div key={ayah.id} className="border border-gray-200 rounded-lg p-4">
                {/* Surah Info */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-qawli-600">
                    QS. {ayah.surahName} ({ayah.surahNumber}): {ayah.ayahNumber}
                  </span>
                  <span className="text-xs text-gray-500">
                    Wahyu ke-{ayah.revelationOrder}
                  </span>
                </div>

                {/* Arabic Text */}
                <div className="text-arabic text-xl mb-4 p-4 bg-gray-50 rounded-lg">
                  {ayah.arabicText}
                </div>

                {/* Translation */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Terjemahan:</h5>
                  <p className="text-gray-800 italic">"{ayah.translation}"</p>
                </div>

                {/* Tafsir */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Tafsir:</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {ayah.tafsir}
                  </p>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2">
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