import React from 'react';
import { TimelineEvent } from '../types';
import TimelineCard from './TimelineCard';

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 sm:py-16 px-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v1.306m6 0V7a2 2 0 012 2v11a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6a2 2 0 012 2v1.306z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">Tidak ada hasil ditemukan</h3>
        <p className="text-gray-500 text-center max-w-md text-sm sm:text-base px-4">
          Coba ubah filter atau kata kunci pencarian untuk menemukan peristiwa yang Anda cari.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Timeline Turunnya Al-Qur'an
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Menelusuri kronologi turunnya ayat-ayat Al-Qur'an berdasarkan peristiwa sejarah
        </p>
      </div>

      <div className="relative">
        {/* Timeline line for mobile */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-qawli-400 to-qawli-600 sm:hidden" />
        
        {events.map((event, index) => (
          <TimelineCard
            key={event.id}
            event={event}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;