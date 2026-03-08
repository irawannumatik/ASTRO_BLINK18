// Data soal khusus LATIHAN MANDIRI — terpisah dari materi dan game quiz
// Edit file ini untuk mengubah konten Latihan Mandiri tanpa mempengaruhi Materi atau Game Quiz

export interface LatihanSoal {
  no: number;
  soal: string;
  options?: string[]; // opsional: untuk soal essay tidak perlu options
}

export interface LatihanMandiriContent {
  title: string;
  kelas: string;
  backPath: string;
  backLabel: string;
  soal: LatihanSoal[];
}

export const latihanMandiriData: Record<string, LatihanMandiriContent> = {

  // ===== ARITMETIKA SOSIAL =====
  "aritmetika-sosial/penjumlahan": {
    title: "LATIHAN MANDIRI — HARGA BELI, HARGA JUAL, UNTUNG & RUGI",
    kelas: "Kelas 7",
    backPath: "/tugas-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Seorang penjual tas membeli sebuah tas ransel seharga Rp150.000,00. Ia kemudian berhasil menjual tas tersebut kepada pelanggannya dengan harga Rp180.000,00. Hitunglah berapa rupiah keuntungan yang didapatkan oleh penjual tersebut! Nyatakan pula keuntungan itu dalam bentuk persentase.",
      },
      {
        no: 2,
        soal: "Pemilik toko elektronik menjual sebuah smartwatch bekas dengan harga Rp900.000,00. Dari penjualan tersebut, ia mengklaim telah mengantongi keuntungan sebesar 20%. Berapakah modal awal yang dikeluarkan pemilik toko saat menebus smartwatch itu?",
      },
      {
        no: 3,
        soal: "Ibu Darni memborong 30 kg telur ayam langsung dari peternak dengan total harga Rp750.000,00. Telur-telur tersebut kemudian ia ecerkan di warungnya dengan harga Rp28.000,00 per kilogram. Analisislah, apakah Ibu Darni mengalami keuntungan atau kerugian? Nyatakan status untung atau ruginya dalam nominal rupiah dan persen.",
      },
      {
        no: 4,
        soal: "Pak Anton memborong 20 helai kaus polos seharga Rp600.000,00. Kaus-kaus tersebut kemudian ia jual kembali secara eceran. Sebanyak 10 helai kaus berhasil terjual dengan harga Rp45.000,00 per helai, 8 helai laku terjual saat promo seharga Rp35.000,00 per helai, dan sisanya ia pakai sendiri untuk olahraga. Tentukan apakah Pak Anton mendapatkan keuntungan atau menelan kerugian, lalu nyatakan dalam rupiah dan persen!",
      },
      {
        no: 5,
        soal: "Sebuah kedai membeli 50 cup puding premium dengan total modal Rp750.000,00. Sebanyak 20 cup diborong oleh panitia acara rapat dengan margin keuntungan 10% (dari harga modal per cup), sedangkan sisanya dipajang di etalase dan laku terjual eceran seharga Rp18.000,00 per cup. Hitunglah keseluruhan keuntungan yang diraup kedai tersebut dalam wujud rupiah dan persentasenya!",
      },
      {
        no: 6,
        soal: "Kak Rina membeli sebuah meja lipat seharga Rp350.000,00 saat ia baru masuk kuliah. Setelah lulus dan harus pindah kota, ia terpaksa menjual meja lipat preloved tersebut dan laku seharga Rp245.000,00. Berapa rupiah nilai penyusutan (kerugian) yang dialami Kak Rina? Nyatakan pula kerugian tersebut ke dalam bentuk persen!",
      },
      {
        no: 7,
        soal: "Pak Rendi terpaksa menjual ponsel pintarnya karena sedang membutuhkan dana cepat. Ia menjual ponsel tersebut dengan harga Rp1.600.000,00. Dari hasil penjualan itu, Pak Rendi harus menelan kerugian sebesar 20% dari modal awalnya. Berapakah harga beli ponsel tersebut saat pertama kali Pak Rendi membelinya?",
      },
      {
        no: 8,
        soal: "Deni membeli sebuah sepeda gunung bekas di pasar loak seharga Rp450.000,00. Karena kondisinya kurang prima, Deni membawa sepeda tersebut ke bengkel dan menghabiskan biaya Rp150.000,00 untuk mengganti rantai dan ban yang aus. Setelah sepeda kembali bagus, Deni menjualnya ke teman sekolahnya dan berhasil meraup keuntungan sebesar 25%. Berapa rupiahkah harga jual sepeda tersebut?",
      },
      {
        no: 9,
        soal: "Bu Tari memborong 100 kg buah mangga dari petani dengan total harga Rp1.500.000,00. Setelah disortir, ternyata ada 10 kg mangga yang busuk dan tidak bisa dijual sama sekali. Jika Bu Tari ingin tetap mendapatkan keuntungan total sebesar 20% dari modal awalnya, berapakah harga jual per kilogram yang harus ia tetapkan untuk sisa mangga yang kondisinya masih bagus?",
      },
      {
        no: 10,
        soal: "Pak Johan ingin membeli sebuah sepeda motor listrik. Harga tunai motor tersebut adalah Rp20.000.000,00. Namun, dealer menawarkan opsi kredit dengan syarat: Uang Muka (DP) sebesar Rp5.000.000,00 dan cicilan per bulan sebesar Rp700.000,00 selama 3 tahun. Berapa persentase total biaya tambahan yang harus ditanggung Pak Johan jika ia memilih opsi kredit dibandingkan dengan jika ia membelinya secara tunai?",
      },
    ],
  },

  // ===== PERBANDINGAN UMUM, SATUAN PEMBANDING DAN RASIO =====
  "perbandingan/umum": {
    title: "LATIHAN MANDIRI — PERBANDINGAN UMUM, SATUAN PEMBANDING DAN RASIO",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      { no: 1, soal: "Tinggi Gedung A adalah 120 meter dan tinggi Gedung B adalah 150 meter. Tentukan rasio tinggi Gedung B terhadap Gedung A dalam bentuk paling sederhana!" },
      { no: 2, soal: "Dalam sebuah keranjang buah terdapat 24 buah apel merah dan 16 buah apel hijau. Berapakah perbandingan antara jumlah apel merah terhadap total keseluruhan apel di dalam keranjang tersebut (sajikan dalam bentuk yang paling sederhana)?" },
      { no: 3, soal: "Umur Ayah saat ini adalah 45 tahun, sedangkan umur Budi adalah 15 tahun. Tentukan perbandingan umur Ayah dan Budi pada 5 tahun yang lalu!" },
      { no: 4, soal: "Jarak rumah Ali ke sekolah adalah 2,5 km, sedangkan jarak rumah Cici ke sekolah hanya 500 meter. Berapakah perbandingan jarak rumah Ali dan rumah Cici ke sekolah dalam bentuk paling sederhana?" },
      { no: 5, soal: "Waktu yang dihabiskan Dika untuk belajar di malam hari adalah 2 jam, sedangkan waktu untuk bermain game adalah 45 menit. Tentukan rasio waktu belajar Dika terhadap waktu bermainnya!" },
      { no: 6, soal: "Sebuah botol minum besar berisi 1,5 liter air. Air tersebut dituangkan ke dalam sebuah gelas yang memiliki kapasitas 300 ml. Berapa rasio volume air di botol besar terhadap gelas tersebut?" },
      { no: 7, soal: "Sebuah peternakan ayam petelur memiliki lahan seluas 2,5 hektar yang menampung 75.000 ekor ayam. Tentukan rasio kepadatan ayam terhadap luas lahan peternakan tersebut dalam satuan ekor/m². (Catatan: 1 hektar = 10.000 m²)" },
      { no: 8, soal: "Perbandingan panjang, lebar, dan tinggi sebuah balok adalah 4 : 3 : 2. Jika volume balok itu adalah 192 cm³, tentukan luas permukaan balok tersebut." },
      { no: 9, soal: "Perbandingan panjang, lebar, dan tinggi sebuah wadah penyimpanan air berbentuk balok adalah 6 : 4 : 3. Jika luas seluruh permukaan wadah tersebut adalah 4.320 cm², berapakah liter volume air maksimal yang dapat ditampung dalam wadah tersebut? (Catatan: 1 liter = 1.000 cm³)" },
      { no: 10, soal: "Hasil panen buah mangga, jeruk, dan apel di sebuah perkebunan memiliki perbandingan 4 : 5 : 7. Jika diketahui selisih berat panen buah apel dan buah mangga adalah 450 kg, tentukanlah total keseluruhan berat hasil panen ketiga buah tersebut!" },
      { no: 11, soal: "Uang tabungan Siska berbanding uang tabungan Tari adalah 2 : 3. Sementara itu perbandingan uang tabungan Tari dan Uci adalah 4 : 5. Jika jumlah seluruh uang tabungan mereka bertiga jika digabungkan adalah Rp700.000,00, berapakah besar uang tabungan mereka masing-masing?" },
      { no: 12, soal: "Dalam sebuah kemitraan bisnis, perbandingan modal investasi antara Pak Rendi dan Pak Surya adalah 3 : 4. Sementara itu, perbandingan modal Pak Surya dan Pak Tono adalah 6 : 5. Jika total modal yang terkumpul dari ketiganya adalah Rp186.000.000,00, berapakah besar modal yang disetorkan oleh Pak Tono?" },
      { no: 13, soal: "Perbandingan uang saku mingguan Bima dan Candra adalah 3 : 4. Sementara itu, perbandingan uang saku Candra dan Dika adalah 2 : 5. Jika diketahui selisih uang saku antara Dika dan Bima adalah Rp35.000,00, tentukanlah jumlah uang saku yang dimiliki oleh Bima, Candra, dan Dika masing-masing!" },
      { no: 14, soal: "Sebuah taman berbentuk persegi panjang memiliki perbandingan panjang dan lebar 5 : 3. Jika luas taman tersebut adalah 1.350 m², berapakah total biaya yang dibutuhkan untuk memasang lampu hias di sekeliling taman, jika setiap 2 meter dipasang satu lampu dengan harga Rp150.000,00 per lampu?" },
      { no: 15, soal: "Perbandingan uang Ali dan Budi adalah 2 : 3, sedangkan perbandingan uang Budi dan Citra adalah 4 : 5. Jika uang Ali Rp. 30.000,00, maka uang Citra adalah" },
    ],
  },

  // ===== PERBANDINGAN SENILAI DAN BERBALIK NILAI =====
  "perbandingan/senilai": {
    title: "LATIHAN MANDIRI — PERBANDINGAN SENILAI DAN BERBALIK NILAI",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      { 
        no: 1, 
        soal: "Di antara pernyataan-pernyataan berikut, tentukan mana yang merupakan perbandingan senilai, perbandingan berbalik nilai, atau bukan keduanya!\na. Kecepatan rata-rata sebuah mobil dengan waktu tempuh untuk mencapai kota tujuan.\nb. Jumlah porsi resep kue dengan takaran gram tepung terigu yang dibutuhkan.\nc. Usia seseorang dengan ukuran sepatu yang dipakainya.\nd. Jarak tempuh sebuah taksi dengan total argo yang harus dibayar penumpang.\ne. Jumlah halaman sebuah buku novel dengan waktu yang dibutuhkan untuk membacanya sampai tamat.\nf. Banyaknya pompa air yang dihidupkan dengan waktu yang dibutuhkan untuk mengosongkan kolam renang.\ng. Jumlah saudara kandung yang dimiliki seorang siswa dengan nilai ujian matematikanya.\nh. Debit air yang keluar dari keran dengan volume air yang tertampung di dalam ember pada waktu tertentu." 
      },
      { no: 2, soal: "Sebuah mobil membutuhkan 4 liter bensin untuk menempuh jarak sejauh 60 km. Jika mobil tersebut diisi dengan 10 liter bensin, tentukan jarak maksimal yang dapat ditempuh oleh mobil tersebut!" },
      { no: 3, soal: "Seorang peternak memiliki persediaan makanan ternak yang cukup untuk memberi makan 30 ekor sapi selama 15 hari. Jika peternak tersebut baru saja membeli 15 ekor sapi lagi, berapa hari persediaan makanan tersebut akan habis?" },
      { no: 4, soal: "Sebuah mesin cetak foto digital membutuhkan waktu 5 menit untuk mencetak 60 lembar foto beresolusi tinggi. Berapa menit waktu yang diperlukan mesin tersebut jika harus mencetak pesanan sebanyak 84 lembar foto?" },
      { no: 5, soal: "Adi dapat menyelesaikan suatu pekerjaan selama 4 jam. Budi dapat menyelesaikan pekerjaan yang sama dalam waktu 6 jam. Jika pekerjaan tersebut dikerjakan adi dan budi bersama-sama, maka pekerjaan tersebut akan selesai dalam waktu …" },
      { no: 6, soal: "Suatu perkajaan jika dikerjakan oleh Anto dan Dini dapat diselesaikan dalam waktu 6 jam. Jika pekerjaan itu dikerjakan oleh Dini sendirian akan selesai 5 jam lebih lambat dibandingkan Anto. Pekerjaan itu dapat diselesaikan Anto sendirian dalam waktu … jam" },
      { no: 7, soal: "Persiapan sebuah panggung festival budaya diperkirakan selesai dalam waktu 24 hari jika dikerjakan oleh 6 orang teknisi. Setelah dikerjakan selama 4 hari, pekerjaan terpaksa dihentikan selama 8 hari karena badai. Agar persiapan panggung selesai tepat waktu sesuai rencana awal, berapa banyak tambahan teknisi yang diperlukan?" },
      { no: 8, soal: "Sebuah pesanan seragam sekolah dapat diselesaikan oleh 4 orang penjahit dalam waktu 20 hari. Setelah mereka bekerja selama 4 hari, pasokan listrik terputus sehingga pekerjaan terhenti total selama 12 hari. Berapa banyak tambahan penjahit yang dibutuhkan agar pesanan seragam tersebut dapat diselesaikan tepat waktu?" },
      { no: 9, soal: "Sebuah tempat penampungan hewan (shelter) memiliki persediaan makanan (dry food) yang cukup untuk 20 ekor kucing peliharaan selama 25 hari. Berapa hari persediaan makanan tersebut akan habis jika shelter tersebut menerima tambahan penghuni sebanyak 5 ekor kucing lagi?" },
      { no: 10, soal: "Sebuah pesanan katering pernikahan raksasa jika dikerjakan oleh 3 orang Chef utama akan selesai dalam waktu 10 hari, sedangkan jika dikerjakan oleh 8 orang asisten dapur akan selesai dalam waktu 9 hari. Jika pesanan tersebut dikerjakan secara bersama-sama oleh 5 Chef utama dan 6 asisten dapur, dalam waktu berapa hari pesanan katering tersebut dapat diselesaikan?" },
    ],
  },

  // ===== PERBANDINGAN CAMPURAN =====
  "perbandingan/campuran": {
    title: "LATIHAN MANDIRI — PERBANDINGAN CAMPURAN",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      { no: 1, soal: "Tujuh ekor kambing menghasilkan rumput seluas 7 kali ukuran lapangan sepak bola dalam waktu 7 hari. Waktu yang diperlukan oleh 3 ekor kambing untuk menghabiskan rumput seluas 3 kali ukuran lapangan sepak bola adalah … hari" },
      { no: 2, soal: "Jika 4 orang tukang kayu dapat membuat 12 kursi dalam waktu 3 hari, berapa hari yang dibutuhkan oleh 6 orang tukang kayu untuk membuat 24 kursi?" },
      { no: 3, soal: "Sebuah perusahaan konstruksi mengerahkan 12 pekerja untuk menyelesaikan 2 unit rumah dalam waktu 30 hari. Jika perusahaan tersebut ingin menyelesaikan 3 unit rumah serupa dalam waktu 24 hari, berapa banyak pekerja yang harus mereka kerahkan?" },
      { no: 4, soal: "Seorang peternak memiliki 40 ekor sapi yang dapat menghabiskan 60 karung pakan dalam waktu 15 hari. Jika peternak tersebut menjual 10 ekor sapinya (tersisa 30 ekor) dan ia hanya memiliki 45 karung pakan, berapa lama (dalam hari) persediaan pakan tersebut akan habis?" },
      { no: 5, soal: "Tiga mesin cetak tipe A dapat mencetak 3.000 buku dalam 5 jam. Empat mesin cetak tipe B dapat mencetak 4.800 buku dalam 6 jam. Jika perusahaan menggunakan 2 mesin tipe A dan 3 mesin tipe B secara bersamaan, berapa jam waktu yang dibutuhkan untuk mencetak 8.000 buku?" },
      { no: 6, soal: "Sebuah pabrik kain jika memproduksi pesanannya menggunakan 2 mesin tenun modern (kapasitas besar) akan selesai dalam waktu 12 hari, sedangkan jika dikerjakan menggunakan 4 mesin tenun tradisional (kapasitas kecil) selesai dalam waktu 18 hari. Jika pabrik tersebut mengoperasikan 3 mesin tenun modern dan 3 mesin tenun tradisional secara bersamaan, dalam waktu berapa hari pesanan kain tersebut dapat diselesaikan?" },
    ],
  },

  // ===== SKALA =====
  "perbandingan/skala": {
    title: "LATIHAN MANDIRI — SKALA",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      { 
        no: 1, 
        soal: "Arti dari skala peta 1 : 500.000 adalah...\nA. 1 cm pada peta mewakili 500.000 cm jarak sebenarnya.\nB. 1 cm pada peta mewakili 500.000 km jarak sebenarnya.\nC. 1 km pada peta mewakili 500.000 cm jarak sebenarnya.\nD. 500.000 cm pada peta mewakili 1 cm jarak sebenarnya.",
        options: ["A", "B", "C", "D"]
      },
      { 
        no: 2, 
        soal: "Peta wilayah X memiliki skala 1 : 50.000. Peta wilayah Y memiliki skala 1 : 250.000. Pernyataan yang benar mengenai kedua peta tersebut adalah...\nA. Peta X menunjukkan wilayah yang lebih luas dengan detail yang lebih sedikit daripada peta Y.\nB. Satu sentimeter pada peta X mewakili jarak yang lebih jauh di lapangan dibandingkan peta Y.\nC. Kedua peta memiliki tingkat kedetailan yang sama.\nD. Peta X lebih detail daripada peta Y untuk ukuran kertas yang sama.",
        options: ["A", "B", "C", "D"]
      },
      { 
        no: 3, 
        soal: "Jarak dua kota pada peta adalah 20 cm. Jika skala peta 1 : 600.000, jarak dua kota sebenarnya adalah... \nA. 1.200 km \nB. 120 km \nC. 30 km \nD. 12 km",
        options: ["A", "B", "C", "D"]
      },
      { 
        no: 4, 
        soal: "Jarak antara kota A dan kota B sebenarnya adalah 120 km. Jika jarak kedua kota tersebut pada peta adalah 6 cm, berapakah skala peta tersebut?\nA. 1 : 2.000.000\nB. 1 : 200.000\nC. 1 : 20.000.000\nD. 1 : 720.000",
        options: ["A", "B", "C", "D"]
      },
      { 
        no: 5, 
        soal: "Sebuah kebun pada denah berukuran 12 cm x 15 cm. Jika ukuran kebun yang sebenarnya 50 m x 40 m, maka skala yang digunakan adalah....\nA. 3 : 100\nB. 3 : 800\nC. 3 : 1.250\nD. 3 : 1.000",
        options: ["A", "B", "C", "D"]
      },
      { 
        no: 6, 
        soal: "Jarak sebenarnya antara dua gedung adalah 4,5 km. Jika gedung tersebut digambar pada denah dengan skala 1 : 15.000, maka jarak pada denah adalah...\nA. 3 cm\nB. 30 cm\nC. 300 cm\nD. 0,3 cm",
        options: ["A", "B", "C", "D"]
      },
      { 
        no: 7, 
        soal: "Perhatikan denah sebuah rumah berikut ! Jika skala denah rumah adalah 1 : 200, maka luas bangunan rumah sebenarnya adalah ...\nA. 46 m2\nB. 92 m2\nC. 184 m2\nD. 368 m2",
        options: ["A", "B", "C", "D"]
      },
      { 
        no: 8, 
        soal: "Denah sebuah gedung berskala 1 : 300. Jika luas denah 125 cm2, maka luas gedung sebenarnya adalah ...\nA. 375 m2\nB. 1.125 m2\nC. 3.750 m2\nD. 11.250 m2",
        options: ["A", "B", "C", "D"]
      },
      { 
        no: 9, 
        soal: "Jarak dua kota pada peta berskala 1 : 1.200.000 adalah 5 cm. Andi berangkat dari kota A ke kota B mengendarai motor dengan kecepatan rata-rata 40 km/jam. Jika ia berangkat pukul 07.15 dan beristirahat selama 30 menit di perjalanan, pada pukul berapa ia akan tiba di kota B?\nA. 09.45\nB. 08.45\nC. 09.15\nD. 10.15",
        options: ["A", "B", "C", "D"]
      },
      { 
        no: 10, 
        soal: "Sebuah perusahaan properti membuat maket (model miniatur 3D) apartemen dengan skala 1 : 100. Jika kolam renang pada maket tersebut bervolume 2 liter air saat penuh, berapakah kapasitas air kolam renang tersebut di dunia nyata?\nA. 2.000 liter\nB. 20.000 liter\nC. 200 liter\nD. 2.000.000 liter",
        options: ["A", "B", "C", "D"]
      },
    ],
  },

  // ===== BILANGAN BULAT - PENJUMLAHAN =====
  "bilangan-bulat/penjumlahan": {
    title: "LATIHAN MANDIRI — PENJUMLAHAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      { no: 1, soal: "45 + (-23) = ..." },
      { no: 2, soal: "(-67) + 89 = ..." },
      { no: 3, soal: "(-34) + (-56) = ..." },
      { no: 4, soal: "128 + (-75) = ..." },
      { no: 5, soal: "(-99) + 44 + (-55) = ..." },
    ],
  },

  // ===== BILANGAN BULAT - PENGURANGAN =====
  "bilangan-bulat/pengurangan": {
    title: "LATIHAN MANDIRI — PENGURANGAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      { no: 1, soal: "45 - (-23) = ..." },
      { no: 2, soal: "(-67) - 89 = ..." },
      { no: 3, soal: "(-34) - (-56) = ..." },
      { no: 4, soal: "128 - 75 = ..." },
      { no: 5, soal: "(-99) - 44 - (-55) = ..." },
    ],
  },

  // ===== BILANGAN BULAT - PERKALIAN =====
  "bilangan-bulat/perkalian": {
    title: "LATIHAN MANDIRI — PERKALIAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      { no: 1, soal: "12 × (-4) = ..." },
      { no: 2, soal: "(-8) × 7 = ..." },
      { no: 3, soal: "(-6) × (-9) = ..." },
      { no: 4, soal: "15 × 8 = ..." },
      { no: 5, soal: "(-5) × 6 × (-2) = ..." },
    ],
  },

  // ===== BILANGAN BULAT - PEMBAGIAN =====
  "bilangan-bulat/pembagian": {
    title: "LATIHAN MANDIRI — PEMBAGIAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      { no: 1, soal: "48 ÷ (-6) = ..." },
      { no: 2, soal: "(-56) ÷ 7 = ..." },
      { no: 3, soal: "(-72) ÷ (-8) = ..." },
      { no: 4, soal: "144 ÷ 12 = ..." },
      { no: 5, soal: "(-120) ÷ (-10) ÷ (-2) = ..." },
    ],
  },

  // ===== BILANGAN BULAT - OPERASI HITUNG CAMPURAN =====
  "bilangan-bulat/campuran": {
    title: "LATIHAN MANDIRI — OPERASI HITUNG CAMPURAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      { no: 1, soal: "12 + (-3) × 4 = ..." },
      { no: 2, soal: "(-24) ÷ 6 + 10 = ..." },
      { no: 3, soal: "5 × (-3) + (-20) ÷ 4 = ..." },
      { no: 4, soal: "(-8 + 12) × (-3) = ..." },
      { no: 5, soal: "36 ÷ (-6) - (-5) × 2 = ..." },
    ],
  },

  // ===== BILANGAN BULAT - KPK DAN FPB =====
  "bilangan-bulat/kpk-fpb": {
    title: "LATIHAN MANDIRI — KPK DAN FPB",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      { no: 1, soal: "Tentukan FPB dari 24 dan 36!" },
      { no: 2, soal: "Tentukan FPB dari 48, 72, dan 96!" },
      { no: 3, soal: "TentukanKPK dari 12 dan 18!" },
      { no: 4, soal: "TentukanKPK dari 15, 20, dan 30!" },
      { no: 5, soal: "Ali berenang setiap 4 hari sekali, sedangkan Budi berenang setiap 6 hari sekali. Jika mereka berenang bersama pada hari Senin, kapan mereka akan berenang bersama lagi?" },
    ],
  },

};
