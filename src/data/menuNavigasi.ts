/**
 * Data navigasi GAME QUIZ - daftar topik dan route untuk /quiz-gamez
 * Route mengarah ke /quiz-gamez/:topic/:subtopic (QuizGamezContentPage)
 * Edit quizGamezData.ts untuk mengubah soal
 */

// =============================================
// QUIZ GAMEZ — daftar topik dan route untuk /quiz-gamez
// =============================================
export const quizGamezTopics: Record<string, { label: string; route: string }[]> = {
  "KELAS 7": [
    { label: "BILANGAN BULAT", route: "/quiz-gamez/bilangan-bulat/penjumlahan" },
    { label: "BILANGAN RASIONAL", route: "/quiz-gamez/bilangan-rasional/penjumlahan" },
    { label: "ALJABAR", route: "/quiz-gamez/aljabar/penjumlahan" },
    { label: "PERSAMAAN DAN PERTIDAKSAMAAN SATU VARIABEL", route: "/quiz-gamez/persamaan/penjumlahan" },
    { label: "PERBANDINGAN", route: "/quiz-gamez/perbandingan/penjumlahan" },
    { label: "ARITMETIKA SOSIAL", route: "/quiz-gamez/aritmetika-sosial/penjumlahan" },
    { label: "GARIS DAN SUDUT", route: "/quiz-gamez/garis-dan-sudut/penjumlahan" },
    { label: "SEGITIGA DAN SEGIEMPAT", route: "/quiz-gamez/segitiga-dan-segiempat/penjumlahan" },
    { label: "HIMPUNAN", route: "/quiz-gamez/himpunan/penjumlahan" },
  ],
  "KELAS 8": [
    { label: "POLA BILANGAN", route: "/quiz-gamez/pola-bilangan/penjumlahan" },
    { label: "KOORDINAT CARTECIUS", route: "/quiz-gamez/koordinat-cartesius/penjumlahan" },
    { label: "SISTEM PERSAMAAN LINEAR DUA VARIABEL (SPLDV)", route: "/quiz-gamez/spldv/penjumlahan" },
    { label: "RELASI DAN FUNGSI", route: "/quiz-gamez/relasi-dan-fungsi/penjumlahan" },
    { label: "TEOREMA PYTHAGORAS", route: "/quiz-gamez/teorema-pythagoras/penjumlahan" },
    { label: "LINGKARAN", route: "/quiz-gamez/lingkaran/penjumlahan" },
    { label: "PERSAMAAN GARIS LURUS", route: "/quiz-gamez/persamaan-garis-lurus/penjumlahan" },
    { label: "BANGUN RUANG SISI DATAR", route: "/quiz-gamez/bangun-ruang-sisi-datar" },
  ],
  "KELAS 9": [
    { label: "BILANGAN BERPANGKAT", route: "/quiz-gamez/bilangan-berpangkat/penjumlahan" },
    { label: "KESEBANGUNAN DAN KEKONGRUENAN", route: "/quiz-gamez/kesebangunan/penjumlahan" },
    { label: "TRANSFORMASI GEOMETRI", route: "/quiz-gamez/transformasi-geometri/penjumlahan" },
    { label: "BANGUN RUANG SISI LENGKUNG", route: "/quiz-gamez/bangun-ruang-sisi-lengkung/penjumlahan" },
    { label: "STATISTIKA", route: "/quiz-gamez/statistika/penjumlahan" },
    { label: "PELUANG", route: "/quiz-gamez/peluang/penjumlahan" },
  ],
};

// =============================================
// LATIHAN — daftar topik dan route untuk /latihan
// =============================================
export const latihanTopics: Record<string, { label: string; route: string }[]> = {
  "KELAS 7": [
    { label: "BILANGAN BULAT", route: "/quiz-gamez/bilangan-bulat/penjumlahan" },
    { label: "BILANGAN RASIONAL", route: "/quiz-gamez/bilangan-rasional/penjumlahan" },
    { label: "ALJABAR", route: "/quiz-gamez/aljabar/penjumlahan" },
    { label: "PERSAMAAN DAN PERTIDAKSAMAAN SATU VARIABEL", route: "/quiz-gamez/persamaan/penjumlahan" },
    { label: "PERBANDINGAN", route: "/quiz-gamez/perbandingan/penjumlahan" },
    { label: "ARITMETIKA SOSIAL", route: "/quiz-gamez/aritmetika-sosial/penjumlahan" },
    { label: "GARIS DAN SUDUT", route: "/quiz-gamez/garis-dan-sudut/penjumlahan" },
    { label: "SEGITIGA DAN SEGIEMPAT", route: "/quiz-gamez/segitiga-dan-segiempat/penjumlahan" },
    { label: "HIMPUNAN", route: "/quiz-gamez/himpunan/penjumlahan" },
  ],
  "KELAS 8": [
    { label: "POLA BILANGAN", route: "/quiz-gamez/pola-bilangan/penjumlahan" },
    { label: "KOORDINAT CARTECIUS", route: "/quiz-gamez/koordinat-cartesius/penjumlahan" },
    { label: "SISTEM PERSAMAAN LINEAR DUA VARIABEL (SPLDV)", route: "/quiz-gamez/spldv/penjumlahan" },
    { label: "RELASI DAN FUNGSI", route: "/quiz-gamez/relasi-dan-fungsi/penjumlahan" },
    { label: "TEOREMA PYTHAGORAS", route: "/quiz-gamez/teorema-pythagoras/penjumlahan" },
    { label: "LINGKARAN", route: "/quiz-gamez/lingkaran/penjumlahan" },
    { label: "PERSAMAAN GARIS LURUS", route: "/quiz-gamez/persamaan-garis-lurus/penjumlahan" },
    { label: "BANGUN RUANG SISI DATAR", route: "/quiz-gamez/bangun-ruang-sisi-datar" },
  ],
  "KELAS 9": [
    { label: "BILANGAN BERPANGKAT", route: "/quiz-gamez/bilangan-berpangkat/penjumlahan" },
    { label: "KESEBANGUNAN DAN KEKONGRUENAN", route: "/quiz-gamez/kesebangunan/penjumlahan" },
    { label: "TRANSFORMASI GEOMETRI", route: "/quiz-gamez/transformasi-geometri/penjumlahan" },
    { label: "BANGUN RUANG SISI LENGKUNG", route: "/quiz-gamez/bangun-ruang-sisi-lengkung/penjumlahan" },
    { label: "STATISTIKA", route: "/quiz-gamez/statistika/penjumlahan" },
    { label: "PELUANG", route: "/quiz-gamez/peluang/penjumlahan" },
  ],
};
