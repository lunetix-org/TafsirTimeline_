import { TimelineEvent } from '../types';

export const sampleTimelineEvents: TimelineEvent[] = [
  {
    id: '1',
    title: 'Wahyu Pertama - Iqra',
    date: '610 M',
    period: 'Makkah',
    description: 'Turunnya wahyu pertama di Gua Hira',
    historicalContext: 'Nabi Muhammad SAW sedang berkhalwat di Gua Hira ketika Malaikat Jibril datang membawa wahyu pertama. Peristiwa ini menandai dimulainya risalah Islam.',
    ayahs: [
      {
        id: 'alaq-1-5',
        surahNumber: 96,
        surahName: 'Al-Alaq',
        ayahNumber: 1,
        arabicText: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
        translation: 'Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan',
        tafsir: 'Ayat ini merupakan wahyu pertama yang diterima Nabi Muhammad SAW. Perintah "Iqra" (bacalah) menunjukkan pentingnya ilmu pengetahuan dalam Islam. Membaca di sini bukan hanya membaca tulisan, tetapi juga memahami, merenungkan, dan mengamalkan.',
        revelationOrder: 1,
        revelationPlace: 'Makkah',
        revelationContext: 'Diturunkan di Gua Hira saat Nabi Muhammad SAW berkhalwat',
        historicalEvent: 'Wahyu pertama',
        keywords: ['wahyu pertama', 'iqra', 'ilmu', 'gua hira']
      }
    ]
  },
  {
    id: '2',
    title: 'Perintah Shalat dan Bersuci',
    date: '610-611 M',
    period: 'Makkah',
    description: 'Turunnya perintah untuk bersuci dan mendirikan shalat',
    historicalContext: 'Setelah wahyu pertama, Allah menurunkan ayat-ayat yang mengajarkan tentang bersuci dan shalat sebagai fondasi ibadah dalam Islam.',
    ayahs: [
      {
        id: 'muddatsir-1-7',
        surahNumber: 74,
        surahName: 'Al-Muddatsir',
        ayahNumber: 4,
        arabicText: 'وَثِيَابَكَ فَطَهِّرْ',
        translation: 'Dan pakaianmu bersihkanlah',
        tafsir: 'Ayat ini memerintahkan kebersihan lahir dan batin. Kebersihan pakaian melambangkan kesucian jiwa dan persiapan untuk menghadap Allah dalam ibadah.',
        revelationOrder: 2,
        revelationPlace: 'Makkah',
        revelationContext: 'Diturunkan sebagai perintah bersuci',
        historicalEvent: 'Perintah bersuci',
        keywords: ['bersuci', 'kebersihan', 'shalat', 'ibadah']
      }
    ]
  },
  {
    id: '3',
    title: 'Dakwah Keluarga Terdekat',
    date: '613 M',
    period: 'Makkah',
    description: 'Perintah untuk berdakwah kepada keluarga terdekat',
    historicalContext: 'Allah memerintahkan Nabi Muhammad SAW untuk memulai dakwah dari keluarga terdekat sebelum meluas ke masyarakat umum.',
    ayahs: [
      {
        id: 'syuara-214',
        surahNumber: 26,
        surahName: 'Asy-Syu\'ara',
        ayahNumber: 214,
        arabicText: 'وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ',
        translation: 'Dan berilah peringatan kepada kerabat-kerabatmu yang terdekat',
        tafsir: 'Ayat ini memerintahkan Nabi untuk memulai dakwah dari lingkaran terdekat. Dakwah dimulai dari keluarga karena mereka yang paling mengenal akhlak dan kepribadian Nabi.',
        revelationOrder: 26,
        revelationPlace: 'Makkah',
        revelationContext: 'Diturunkan sebagai perintah dakwah kepada keluarga',
        historicalEvent: 'Dakwah keluarga',
        keywords: ['dakwah keluarga', 'kerabat', 'peringatan', 'tabligh']
      }
    ]
  },
  {
    id: '4',
    title: 'Perintah Dakwah Terbuka',
    date: '613 M',
    period: 'Makkah',
    description: 'Allah memerintahkan Nabi untuk berdakwah secara terbuka',
    historicalContext: 'Setelah 3 tahun berdakwah secara sembunyi-sembunyi, Allah memerintahkan Nabi Muhammad SAW untuk berdakwah secara terbuka kepada seluruh masyarakat Makkah.',
    ayahs: [
      {
        id: 'hijr-94',
        surahNumber: 15,
        surahName: 'Al-Hijr',
        ayahNumber: 94,
        arabicText: 'فَاصْدَعْ بِمَا تُؤْمَرُ وَأَعْرِضْ عَنِ الْمُشْرِكِينَ',
        translation: 'Maka sampaikanlah secara terang-terangan apa yang diperintahkan (kepadamu) dan berpalinglah dari orang-orang musyrik',
        tafsir: 'Ayat ini memerintahkan Nabi Muhammad SAW untuk menyampaikan dakwah Islam secara terang-terangan tanpa takut kepada siapapun. Perintah ini menandai fase baru dalam dakwah Islam, dari yang semula dilakukan secara sembunyi menjadi terbuka.',
        revelationOrder: 54,
        revelationPlace: 'Makkah',
        revelationContext: 'Diturunkan sebagai perintah untuk berdakwah secara terbuka',
        historicalEvent: 'Dakwah terbuka',
        keywords: ['dakwah terbuka', 'fasdak', 'keberanian', 'tabligh']
      }
    ]
  },
  {
    id: '5',
    title: 'Boikot Bani Hasyim',
    date: '616-619 M',
    period: 'Makkah',
    description: 'Kaum Quraisy memboikot Bani Hasyim dan pengikut Nabi',
    historicalContext: 'Kaum Quraisy melakukan boikot ekonomi dan sosial terhadap Bani Hasyim selama 3 tahun. Mereka dikurung di Syi\'ib Abi Thalib dalam kondisi yang sangat sulit.',
    ayahs: [
      {
        id: 'ankabut-2-3',
        surahNumber: 29,
        surahName: 'Al-Ankabut',
        ayahNumber: 2,
        arabicText: 'أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ',
        translation: 'Apakah manusia itu mengira bahwa mereka dibiarkan (saja) mengatakan: "Kami telah beriman", sedang mereka tidak diuji lagi?',
        tafsir: 'Ayat ini menjelaskan bahwa ujian adalah bagian dari iman. Boikot yang dialami kaum Muslim awal adalah ujian untuk menguji keimanan mereka. Allah tidak akan membiarkan orang beriman tanpa ujian.',
        revelationOrder: 85,
        revelationPlace: 'Makkah',
        revelationContext: 'Diturunkan saat periode boikot dan kesulitan',
        historicalEvent: 'Boikot Bani Hasyim',
        keywords: ['ujian', 'boikot', 'kesabaran', 'iman']
      }
    ]
  },
  {
    id: '6',
    title: 'Tahun Kesedihan (Am al-Huzn)',
    date: '619 M',
    period: 'Makkah',
    description: 'Wafatnya Khadijah dan Abu Thalib dalam satu tahun',
    historicalContext: 'Tahun yang sangat berat bagi Nabi Muhammad SAW karena kehilangan istri tercinta Khadijah dan paman pelindungnya Abu Thalib. Ini membuat posisi Nabi semakin sulit di Makkah.',
    ayahs: [
      {
        id: 'duha-3-4',
        surahNumber: 93,
        surahName: 'Ad-Duha',
        ayahNumber: 3,
        arabicText: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ',
        translation: 'Tuhanmu tiada meninggalkan kamu dan tiada (pula) benci kepadamu',
        tafsir: 'Ayat ini turun untuk menghibur Nabi Muhammad SAW saat mengalami kesedihan dan kesulitan. Allah meyakinkan bahwa Dia tidak pernah meninggalkan hamba-Nya yang beriman.',
        revelationOrder: 11,
        revelationPlace: 'Makkah',
        revelationContext: 'Diturunkan saat Nabi mengalami kesedihan',
        historicalEvent: 'Tahun kesedihan',
        keywords: ['kesedihan', 'penghiburan', 'kasih sayang allah', 'duha']
      }
    ]
  },
  {
    id: '7',
    title: 'Isra dan Mi\'raj',
    date: '621 M',
    period: 'Makkah',
    description: 'Perjalanan malam Nabi dari Masjidil Haram ke Masjidil Aqsa dan naik ke langit',
    historicalContext: 'Peristiwa mukjizat terbesar Nabi Muhammad SAW berupa perjalanan malam dari Makkah ke Yerusalem dan dilanjutkan ke Sidratul Muntaha. Dalam perjalanan ini, Nabi menerima perintah shalat 5 waktu.',
    ayahs: [
      {
        id: 'isra-1',
        surahNumber: 17,
        surahName: 'Al-Isra',
        ayahNumber: 1,
        arabicText: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى',
        translation: 'Maha Suci Allah, yang telah memperjalankan hamba-Nya pada suatu malam dari Al Masjidil Haram ke Al Masjidil Aqsa',
        tafsir: 'Ayat ini mengabadikan peristiwa Isra Mi\'raj sebagai mukjizat terbesar Nabi Muhammad SAW. Perjalanan ini menunjukkan kemuliaan Nabi di sisi Allah dan menjadi penghiburan di tengah kesulitan dakwah.',
        revelationOrder: 50,
        revelationPlace: 'Makkah',
        revelationContext: 'Diturunkan berkaitan dengan peristiwa Isra Mi\'raj',
        historicalEvent: 'Isra Mi\'raj',
        keywords: ['isra miraj', 'mukjizat', 'perjalanan malam', 'masjidil aqsa']
      }
    ]
  },
  {
    id: '8',
    title: 'Hijrah ke Madinah',
    date: '622 M',
    period: 'Madinah',
    description: 'Perpindahan Nabi dan kaum Muslim dari Makkah ke Madinah',
    historicalContext: 'Setelah menghadapi tekanan dan ancaman dari kaum Quraisy, Nabi Muhammad SAW dan para sahabat hijrah ke Madinah. Peristiwa ini menandai dimulainya tahun Hijriah dan fase baru dalam sejarah Islam.',
    ayahs: [
      {
        id: 'anfal-72',
        surahNumber: 8,
        surahName: 'Al-Anfal',
        ayahNumber: 72,
        arabicText: 'إِنَّ الَّذِينَ آمَنُوا وَهَاجَرُوا وَجَاهَدُوا بِأَمْوَالِهِمْ وَأَنفُسِهِمْ فِي سَبِيلِ اللَّهِ',
        translation: 'Sesungguhnya orang-orang yang beriman dan berhijrah serta berjihad dengan harta dan jiwa mereka pada jalan Allah',
        tafsir: 'Ayat ini menjelaskan keutamaan orang-orang yang beriman, berhijrah, dan berjihad di jalan Allah. Hijrah bukan hanya perpindahan fisik, tetapi juga perpindahan spiritual dari kegelapan menuju cahaya Islam.',
        revelationOrder: 88,
        revelationPlace: 'Madinah',
        revelationContext: 'Diturunkan berkaitan dengan peristiwa Hijrah',
        historicalEvent: 'Hijrah ke Madinah',
        keywords: ['hijrah', 'madinah', 'jihad', 'pengorbanan']
      }
    ]
  },
  {
    id: '9',
    title: 'Pembangunan Masjid Nabawi',
    date: '622 M',
    period: 'Madinah',
    description: 'Pembangunan masjid pertama dan pusat pemerintahan Islam',
    historicalContext: 'Setelah tiba di Madinah, Nabi Muhammad SAW membangun masjid yang menjadi pusat ibadah, pendidikan, dan pemerintahan. Masjid Nabawi menjadi model bagi masjid-masjid selanjutnya.',
    ayahs: [
      {
        id: 'taubah-108',
        surahNumber: 9,
        surahName: 'At-Taubah',
        ayahNumber: 108,
        arabicText: 'لَّمَسْجِدٌ أُسِّسَ عَلَى التَّقْوَىٰ مِنْ أَوَّلِ يَوْمٍ أَحَقُّ أَن تَقُومَ فِيهِ',
        translation: 'Sesungguhnya masjid yang didirikan atas dasar takwa (Masjid Quba) sejak hari pertama adalah lebih patut kamu shalat di dalamnya',
        tafsir: 'Ayat ini memuji masjid yang dibangun atas dasar takwa. Masjid Quba dan Masjid Nabawi adalah contoh masjid yang dibangun dengan fondasi takwa dan menjadi pusat kegiatan umat Islam.',
        revelationOrder: 113,
        revelationPlace: 'Madinah',
        revelationContext: 'Diturunkan berkaitan dengan pembangunan masjid',
        historicalEvent: 'Pembangunan Masjid Nabawi',
        keywords: ['masjid nabawi', 'takwa', 'ibadah', 'pusat islam']
      }
    ]
  },
  {
    id: '10',
    title: 'Piagam Madinah',
    date: '622 M',
    period: 'Madinah',
    description: 'Perjanjian konstitusi pertama dalam sejarah Islam',
    historicalContext: 'Nabi Muhammad SAW membuat perjanjian dengan berbagai suku di Madinah, termasuk kaum Yahudi, untuk hidup berdampingan secara damai. Ini menjadi konstitusi pertama yang mengatur kehidupan bermasyarakat.',
    ayahs: [
      {
        id: 'hujurat-13',
        surahNumber: 49,
        surahName: 'Al-Hujurat',
        ayahNumber: 13,
        arabicText: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
        translation: 'Hai manusia, sesungguhnya Kami menciptakan kamu dari seorang laki-laki dan seorang perempuan dan menjadikan kamu berbangsa-bangsa dan bersuku-suku supaya kamu saling kenal-mengenal',
        tafsir: 'Ayat ini menjadi dasar toleransi dan keberagaman dalam Islam. Perbedaan suku, bangsa, dan agama adalah kehendak Allah agar manusia saling mengenal dan bekerja sama dalam kebaikan.',
        revelationOrder: 106,
        revelationPlace: 'Madinah',
        revelationContext: 'Diturunkan berkaitan dengan kehidupan bermasyarakat',
        historicalEvent: 'Piagam Madinah',
        keywords: ['piagam madinah', 'toleransi', 'keberagaman', 'konstitusi']
      }
    ]
  },
  {
    id: '11',
    title: 'Perang Badr',
    date: '624 M',
    period: 'Madinah',
    description: 'Kemenangan pertama kaum Muslim dalam peperangan',
    historicalContext: 'Perang Badr adalah peperangan pertama yang dimenangkan kaum Muslim. Meskipun jumlah mereka lebih sedikit, Allah memberikan kemenangan yang gemilang. Perang ini menjadi titik balik dalam sejarah Islam.',
    ayahs: [
      {
        id: 'anfal-17',
        surahNumber: 8,
        surahName: 'Al-Anfal',
        ayahNumber: 17,
        arabicText: 'فَلَمْ تَقْتُلُوهُمْ وَلَٰكِنَّ اللَّهَ قَتَلَهُمْ ۚ وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَٰكِنَّ اللَّهَ رَمَىٰ',
        translation: 'Maka bukan kamu yang membunuh mereka, tetapi Allah yang membunuh mereka, dan bukan kamu yang melempar ketika kamu melempar, tetapi Allah yang melempar',
        tafsir: 'Ayat ini menjelaskan bahwa kemenangan di Perang Badr adalah murni pertolongan Allah. Meskipun secara zahir kaum Muslim yang berperang, tetapi hakikatnya adalah Allah yang memberikan kemenangan. Ini mengajarkan pentingnya tawakal dan tidak sombong atas pencapaian.',
        revelationOrder: 88,
        revelationPlace: 'Madinah',
        revelationContext: 'Diturunkan setelah Perang Badr',
        historicalEvent: 'Perang Badr',
        keywords: ['perang badr', 'kemenangan', 'pertolongan allah', 'tawakal']
      }
    ]
  },
  {
    id: '12',
    title: 'Perang Uhud',
    date: '625 M',
    period: 'Madinah',
    description: 'Ujian berat bagi kaum Muslim dengan kekalahan sementara',
    historicalContext: 'Perang Uhud menjadi pelajaran berharga bagi kaum Muslim. Awalnya menang, tetapi karena sebagian pasukan meninggalkan posisi, mereka mengalami kekalahan. Nabi Muhammad SAW terluka dalam perang ini.',
    ayahs: [
      {
        id: 'ali-imran-140',
        surahNumber: 3,
        surahName: 'Ali Imran',
        ayahNumber: 140,
        arabicText: 'إِن يَمْسَسْكُمْ قَرْحٌ فَقَدْ مَسَّ الْقَوْمَ قَرْحٌ مِّثْلُهُ ۚ وَتِلْكَ الْأَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ',
        translation: 'Jika kamu (pada perang Uhud) mendapat luka, maka sesungguhnya kaum (kafir) itupun telah mendapat luka yang serupa. Dan masa (kejayaan dan kehancuran) itu Kami pergilirkan diantara manusia',
        tafsir: 'Ayat ini menghibur kaum Muslim setelah Perang Uhud. Allah menjelaskan bahwa kemenangan dan kekalahan adalah ujian yang dipergilirkan. Yang penting adalah mengambil pelajaran dan tetap berpegang pada keimanan.',
        revelationOrder: 89,
        revelationPlace: 'Madinah',
        revelationContext: 'Diturunkan setelah Perang Uhud',
        historicalEvent: 'Perang Uhud',
        keywords: ['perang uhud', 'ujian', 'pelajaran', 'kesabaran']
      }
    ]
  },
  {
    id: '13',
    title: 'Perang Khandaq (Ahzab)',
    date: '627 M',
    period: 'Madinah',
    description: 'Strategi pertahanan dengan menggali parit di sekitar Madinah',
    historicalContext: 'Koalisi suku-suku Arab menyerang Madinah dengan kekuatan besar. Atas saran Salman al-Farisi, kaum Muslim menggali parit untuk bertahan. Perang ini menunjukkan kecerdasan strategi militer Islam.',
    ayahs: [
      {
        id: 'ahzab-9',
        surahNumber: 33,
        surahName: 'Al-Ahzab',
        ayahNumber: 9,
        arabicText: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ إِذْ جَاءَتْكُمْ جُنُودٌ فَأَرْسَلْنَا عَلَيْهِمْ رِيحًا وَجُنُودًا لَّمْ تَرَوْهَا',
        translation: 'Hai orang-orang yang beriman, ingatlah akan nikmat Allah (yang diberikan) kepadamu ketika datang kepadamu tentara-tentara, lalu Kami kirimkan kepada mereka angin topan dan tentara yang tidak dapat kamu lihat',
        tafsir: 'Ayat ini mengingatkan kaum Muslim akan pertolongan Allah dalam Perang Khandaq. Allah mengirimkan angin kencang dan tentara malaikat yang tidak terlihat untuk membantu kaum Muslim mengalahkan koalisi musuh.',
        revelationOrder: 90,
        revelationPlace: 'Madinah',
        revelationContext: 'Diturunkan setelah Perang Khandaq',
        historicalEvent: 'Perang Khandaq',
        keywords: ['perang khandaq', 'ahzab', 'parit', 'pertolongan allah']
      }
    ]
  },
  {
    id: '14',
    title: 'Perjanjian Hudaibiyah',
    date: '628 M',
    period: 'Madinah',
    description: 'Perjanjian damai dengan kaum Quraisy Makkah',
    historicalContext: 'Nabi Muhammad SAW dan 1400 sahabat berangkat untuk umrah tetapi dihalangi di Hudaibiyah. Akhirnya dibuat perjanjian damai yang pada awalnya tampak merugikan Muslim, tetapi kemudian terbukti membawa kebaikan besar.',
    ayahs: [
      {
        id: 'fath-1',
        surahNumber: 48,
        surahName: 'Al-Fath',
        ayahNumber: 1,
        arabicText: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا',
        translation: 'Sesungguhnya Kami telah memberikan kepadamu kemenangan yang nyata',
        tafsir: 'Ayat ini turun setelah Perjanjian Hudaibiyah yang oleh Allah disebut sebagai "kemenangan yang nyata" meskipun tampaknya seperti kompromi. Perjanjian ini membuka jalan bagi penyebaran Islam secara damai.',
        revelationOrder: 111,
        revelationPlace: 'Madinah',
        revelationContext: 'Diturunkan setelah Perjanjian Hudaibiyah',
        historicalEvent: 'Perjanjian Hudaibiyah',
        keywords: ['hudaibiyah', 'perjanjian damai', 'kemenangan', 'diplomasi']
      }
    ]
  },
  {
    id: '15',
    title: 'Surat kepada Raja-raja',
    date: '628 M',
    period: 'Madinah',
    description: 'Nabi mengirim surat dakwah kepada penguasa dunia',
    historicalContext: 'Setelah Perjanjian Hudaibiyah, Nabi Muhammad SAW mengirim surat kepada kaisar Byzantium, raja Persia, penguasa Mesir, dan raja-raja lainnya untuk mengajak mereka masuk Islam.',
    ayahs: [
      {
        id: 'saba-28',
        surahNumber: 34,
        surahName: 'Saba\'',
        ayahNumber: 28,
        arabicText: 'وَمَا أَرْسَلْنَاكَ إِلَّا كَافَّةً لِّلنَّاسِ بَشِيرًا وَنَذِيرًا وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ',
        translation: 'Dan Kami tidak mengutus kamu, melainkan kepada umat manusia seluruhnya sebagai pembawa berita gembira dan sebagai pemberi peringatan, tetapi kebanyakan manusia tiada mengetahui',
        tafsir: 'Ayat ini menegaskan bahwa risalah Nabi Muhammad SAW bersifat universal untuk seluruh umat manusia. Pengiriman surat kepada raja-raja dunia adalah implementasi dari universalitas dakwah Islam.',
        revelationOrder: 58,
        revelationPlace: 'Makkah',
        revelationContext: 'Berkaitan dengan universalitas dakwah Islam',
        historicalEvent: 'Surat kepada raja-raja',
        keywords: ['dakwah universal', 'surat raja', 'internasional', 'global']
      }
    ]
  },
  {
    id: '16',
    title: 'Fathu Makkah',
    date: '630 M',
    period: 'Madinah',
    description: 'Penaklukan Makkah secara damai',
    historicalContext: 'Setelah 8 tahun hijrah, Nabi Muhammad SAW berhasil menaklukkan Makkah secara damai. Peristiwa ini menandai kemenangan Islam dan masuknya banyak suku Arab ke dalam Islam.',
    ayahs: [
      {
        id: 'nasr-1-3',
        surahNumber: 110,
        surahName: 'An-Nasr',
        ayahNumber: 1,
        arabicText: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ',
        translation: 'Apabila telah datang pertolongan Allah dan kemenangan',
        tafsir: 'Ayat ini turun berkaitan dengan Fathu Makkah. "An-Nasr" (pertolongan) dan "Al-Fath" (kemenangan) menunjukkan bahwa penaklukan Makkah adalah pertolongan langsung dari Allah. Surah ini juga mengisyaratkan bahwa tugas Nabi Muhammad SAW telah sempurna.',
        revelationOrder: 114,
        revelationPlace: 'Madinah',
        revelationContext: 'Diturunkan saat Fathu Makkah',
        historicalEvent: 'Fathu Makkah',
        keywords: ['fathu makkah', 'kemenangan', 'nasr', 'penaklukan']
      }
    ]
  },
  {
    id: '17',
    title: 'Haji Wada\'',
    date: '632 M',
    period: 'Madinah',
    description: 'Haji perpisahan Nabi Muhammad SAW',
    historicalContext: 'Haji terakhir yang dilakukan Nabi Muhammad SAW bersama lebih dari 100.000 sahabat. Dalam haji ini, Nabi menyampaikan khutbah perpisahan yang berisi ajaran-ajaran penting Islam.',
    ayahs: [
      {
        id: 'maidah-3',
        surahNumber: 5,
        surahName: 'Al-Maidah',
        ayahNumber: 3,
        arabicText: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا',
        translation: 'Pada hari ini telah Kusempurnakan untuk kamu agamamu, dan telah Ku-cukupkan kepadamu nikmat-Ku, dan telah Ku-ridhai Islam itu jadi agama bagimu',
        tafsir: 'Ayat ini turun pada hari Arafah dalam Haji Wada\'. Ayat ini menandakan kesempurnaan agama Islam dan berakhirnya turunnya wahyu. Umar bin Khattab menangis saat mendengar ayat ini karena menyadari bahwa wafatnya Nabi sudah dekat.',
        revelationOrder: 112,
        revelationPlace: 'Madinah',
        revelationContext: 'Diturunkan saat Haji Wada\' di Arafah',
        historicalEvent: 'Haji Wada\'',
        keywords: ['haji wada', 'kesempurnaan agama', 'khutbah perpisahan', 'arafah']
      }
    ]
  },
  {
    id: '18',
    title: 'Wafatnya Rasulullah SAW',
    date: '632 M',
    period: 'Madinah',
    description: 'Berpulangnya Nabi Muhammad SAW ke rahmatullah',
    historicalContext: 'Setelah sakit selama beberapa hari, Nabi Muhammad SAW wafat pada usia 63 tahun. Wafatnya Nabi meninggalkan duka mendalam bagi umat Islam, tetapi ajaran dan sunnah beliau tetap menjadi pedoman.',
    ayahs: [
      {
        id: 'ali-imran-144',
        surahNumber: 3,
        surahName: 'Ali Imran',
        ayahNumber: 144,
        arabicText: 'وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ ۚ أَفَإِن مَّاتَ أَوْ قُتِلَ انقَلَبْتُمْ عَلَىٰ أَعْقَابِكُمْ',
        translation: 'Muhammad itu tidak lain hanyalah seorang rasul, sungguh telah berlalu sebelumnya beberapa orang rasul. Apakah jika dia wafat atau dibunuh kamu berbalik ke belakang (murtad)?',
        tafsir: 'Ayat ini dibacakan Abu Bakar saat Nabi wafat untuk mengingatkan bahwa Muhammad adalah rasul yang akan wafat seperti rasul-rasul sebelumnya. Yang penting adalah melanjutkan perjuangan menegakkan Islam setelah kepergian beliau.',
        revelationOrder: 89,
        revelationPlace: 'Madinah',
        revelationContext: 'Ayat yang dibacakan saat wafatnya Nabi',
        historicalEvent: 'Wafatnya Rasulullah',
        keywords: ['wafat rasulullah', 'kesedihan', 'melanjutkan perjuangan', 'abu bakar']
      }
    ]
  }
];

// Tambahan peristiwa penting lainnya yang bisa ditambahkan:
export const additionalEvents: TimelineEvent[] = [
  {
    id: '19',
    title: 'Turunnya Ayat Hijab',
    date: '627 M',
    period: 'Madinah',
    description: 'Perintah Allah tentang hijab untuk istri-istri Nabi dan wanita mukminah',
    historicalContext: 'Ayat hijab turun setelah peristiwa pernikahan Nabi dengan Zainab binti Jahsy. Ayat ini mengatur etika pergaulan dan pakaian wanita muslimah.',
    ayahs: [
      {
        id: 'ahzab-53',
        surahNumber: 33,
        surahName: 'Al-Ahzab',
        ayahNumber: 53,
        arabicText: 'وَإِذَا سَأَلْتُمُوهُنَّ مَتَاعًا فَاسْأَلُوهُنَّ مِن وَرَاءِ حِجَابٍ',
        translation: 'Dan apabila kamu meminta sesuatu (keperluan) kepada mereka (istri-istri Nabi), maka mintalah dari belakang tabir',
        tafsir: 'Ayat ini mengatur etika pergaulan antara laki-laki dan perempuan, khususnya dengan istri-istri Nabi. Hijab di sini bukan hanya pakaian, tetapi juga pemisahan yang menjaga kehormatan dan kesucian.',
        revelationOrder: 90,
        revelationPlace: 'Madinah',
        revelationContext: 'Diturunkan setelah pernikahan dengan Zainab',
        historicalEvent: 'Turunnya ayat hijab',
        keywords: ['hijab', 'etika pergaulan', 'wanita muslimah', 'kesucian']
      }
    ]
  },
  {
    id: '20',
    title: 'Perang Tabuk',
    date: '630 M',
    period: 'Madinah',
    description: 'Ekspedisi terjauh yang dipimpin Nabi Muhammad SAW',
    historicalContext: 'Perang Tabuk adalah ekspedisi terjauh yang dipimpin Nabi untuk menghadapi ancaman Byzantium. Meskipun tidak terjadi pertempuran, ekspedisi ini menunjukkan kekuatan dan kesiapan kaum Muslim.',
    ayahs: [
      {
        id: 'taubah-40',
        surahNumber: 9,
        surahName: 'At-Taubah',
        ayahNumber: 40,
        arabicText: 'إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ',
        translation: 'Jikalau kamu tidak menolongnya (Muhammad) maka sesungguhnya Allah telah menolongnya (yaitu) ketika orang-orang kafir (musyrikin Mekah) mengeluarkannya (dari Mekah) sedang dia salah seorang dari dua orang ketika keduanya berada dalam gua',
        tafsir: 'Ayat ini mengingatkan tentang pertolongan Allah kepada Nabi Muhammad SAW, termasuk saat hijrah bersama Abu Bakar. Dalam konteks Tabuk, ayat ini menegaskan bahwa Allah akan selalu menolong Rasul-Nya.',
        revelationOrder: 113,
        revelationPlace: 'Madinah',
        revelationContext: 'Berkaitan dengan ekspedisi Tabuk',
        historicalEvent: 'Perang Tabuk',
        keywords: ['tabuk', 'ekspedisi', 'pertolongan allah', 'abu bakar']
      }
    ]
  }
];

// Gabungkan semua events
export const allTimelineEvents = [...sampleTimelineEvents, ...additionalEvents];