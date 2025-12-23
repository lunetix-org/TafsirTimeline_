# Tafsir Timeline

Aplikasi web untuk mempelajari Al-Qur'an berdasarkan kronologi turunnya ayat. Menampilkan tafsir, terjemahan, dan konteks sejarah dari setiap peristiwa turunnya wahyu.

## 🌟 Fitur

- **Timeline Kronologis**: Menelusuri ayat-ayat Al-Qur'an berdasarkan urutan waktu turunnya
- **Filter Periode**: Pisahkan antara ayat Makkiyah dan Madaniyah
- **Pencarian Cerdas**: Cari berdasarkan ayat, surah, peristiwa, atau kata kunci
- **Tafsir Lengkap**: Setiap ayat dilengkapi terjemahan dan penjelasan konteks
- **Konteks Sejarah**: Latar belakang peristiwa turunnya setiap ayat
- **Responsive Design**: Tampilan optimal di desktop dan mobile

## 🎨 Design System

Aplikasi ini menggunakan brand guidelines **Qawli** dengan:
- Palet warna hijau (#10B981) sebagai warna utama
- Font Inter untuk teks Latin dan Amiri untuk teks Arab
- Komponen UI yang konsisten dengan identitas brand Qawli

## 🚀 Teknologi

- **React 18** - Library UI modern
- **TypeScript** - Type safety dan developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool yang cepat
- **Lucide React** - Icon library

## 📦 Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd tafsir-timeline
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:5173`

## 🏗️ Build untuk Production

```bash
npm run build
```

File hasil build akan tersedia di folder `dist/`.

## 📁 Struktur Proyek

```
src/
├── components/          # Komponen React
│   ├── Header.tsx      # Header dengan logo dan pencarian
│   ├── FilterPanel.tsx # Panel filter dan pencarian lanjutan
│   ├── Timeline.tsx    # Komponen timeline utama
│   └── TimelineCard.tsx # Kartu individual untuk setiap peristiwa
├── data/               # Data dan mock data
│   └── sampleData.ts   # Data sample peristiwa sejarah
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface dan type definitions
├── App.tsx             # Komponen utama aplikasi
├── main.tsx           # Entry point aplikasi
└── index.css          # Global styles dan Tailwind imports
```

## 📊 Data Structure

Setiap peristiwa dalam timeline memiliki struktur:

```typescript
interface TimelineEvent {
  id: string;
  title: string;              // Judul peristiwa
  date: string;               // Tanggal/tahun peristiwa
  period: 'Makkah' | 'Madinah'; // Periode turun
  description: string;        // Deskripsi singkat
  historicalContext: string;  // Konteks sejarah lengkap
  ayahs: Ayah[];             // Array ayat-ayat terkait
}
```

## 🎯 Roadmap

- [ ] Tambah lebih banyak data peristiwa sejarah
- [ ] Implementasi pencarian berdasarkan nomor surah/ayat
- [ ] Fitur bookmark ayat favorit
- [ ] Mode gelap (dark mode)
- [ ] Audio recitation untuk ayat-ayat
- [ ] Export timeline ke PDF
- [ ] Integrasi dengan API tafsir online

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🙏 Acknowledgments

- Data tafsir dan terjemahan berdasarkan sumber-sumber terpercaya
- Design system mengikuti brand guidelines Qawli
- Inspirasi dari kebutuhan umat Islam untuk memahami Al-Qur'an secara kontekstual

---

**Dibuat dengan ❤️ untuk umat Islam**