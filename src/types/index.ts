export interface Ayah {
  id: string;
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
  arabicText: string;
  translation: string;
  tafsir: string;
  revelationOrder: number;
  revelationPlace: 'Makkah' | 'Madinah';
  revelationContext: string;
  historicalEvent?: string;
  relatedAyahs?: string[];
  keywords: string[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  period: 'Makkah' | 'Madinah';
  description: string;
  ayahs: Ayah[];
  historicalContext: string;
}

export interface FilterOptions {
  period?: 'Makkah' | 'Madinah' | 'All';
  surah?: string;
  keyword?: string;
}