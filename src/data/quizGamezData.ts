// Data soal GAME QUIZ
// Edit file ini untuk mengubah konten Game Quiz

export interface QuizSoal {
  no: number;
  soal: string;
  options: string[];
}

export interface QuizContent {
  title: string;
  kelas: string;
  backPath: string;
  backLabel: string;
  soal: QuizSoal[];
}

const placeholder = (topik: string): QuizSoal[] => [
  { no: 1, soal: `Manakah yang merupakan contoh ${topik}?`, options: ["A. Pilihan A", "B. Pilihan B", "C. Pilihan C", "D. Pilihan D"] },
  { no: 2, soal: `Tentukan hasil operasi berikut terkait ${topik}!`, options: ["A. 12", "B. 24", "C. 36", "D. 48"] },
  { no: 3, soal: `Sederhanakan bentuk ${topik} berikut ini.`, options: ["A. 4", "B. 6", "C. 8", "D. 10"] },
];

export const quizGamezData: Record<string, QuizContent> = {

  // ===== BILANGAN BULAT =====
  "bilangan-bulat/penjumlahan": {
    title: "PENJUMLAHAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/quiz-gamez",
    backLabel: "Kembali ke Game Quiz",
    soal: placeholder("penjumlahan bilangan bulat"),
  },
  "bilangan-bulat/pengurangan": {
    title: "PENGURANGAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/quiz-gamez",
    backLabel: "Kembali ke Game Quiz",
    soal: placeholder("pengurangan bilangan bulat"),
  },
  "bilangan-bulat/perkalian": {
    title: "PERKALIAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/quiz-gamez",
    backLabel: "Kembali ke Game Quiz",
    soal: placeholder("perkalian bilangan bulat"),
  },
  "bilangan-bulat/pembagian": {
    title: "PEMBAGIAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/quiz-gamez",
    backLabel: "Kembali ke Game Quiz",
    soal: placeholder("pembagian bilangan bulat"),
  },

  // ===== ARITMETIKA SOSIAL =====
  "aritmetika-sosial/penjumlahan": {
    title: "HARGA BELI, HARGA JUAL, UNTUNG & RUGI",
    kelas: "Kelas 7",
    backPath: "/quiz-gamez",
    backLabel: "Kembali ke Game Quiz",
    soal: placeholder("harga beli, harga jual, untung dan rugi"),
  },

  // Tambahkan topik lain di sini sesuai kebutuhan
};
