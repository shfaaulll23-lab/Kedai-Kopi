/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */

// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");


// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
console.log("Skrip app.js berhasil terhubung!");
 

// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
const NAMA_KEDAI = "kopi titik temu";
let namaKasir = "Kak shafa";
let shiftKerja = "Pagi";
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
console.log("nama kedai  :", NAMA_KEDAI);
console.log("kasir :", namaKasir);
console.log("shift :", shiftKerja);
 

// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
namaKasir = "kak ira";
console.log("kasir setelah pergantian shift: ", namaKasir);
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.

// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
alert(" selamat datang di " + NAMA_KEDAI +  "!" );
let namaPelanggan = prompt("selamat mengisi nama kamu:");
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
if (namaPelanggan) {
  alert("Halo, " + namaPelanggan + "! Terima kasih telah berkunjung.");
  console.log("Nama Pelanggan:", namaPelanggan);
}
 else {
  namaPelanggan = "pelanggan setia";
  alert("Nama tidak diisi. Anda akan dicatat sebagai: " + namaPelanggan);
  console.log("pelanggan setia (default):", namaPelanggan);
}
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.

// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
let poinKopi = 45;
let poinMakanan = 40;
let poinMerchandise = 35;
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
let totalPoin = poinKopi + poinMakanan + poinMerchandise;
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
console.log("--- Rincian Perolehan Poin ---");
console.log("Poin Kopi        :", poinKopi);
console.log("Poin Makanan      :", poinMakanan);
console.log("Poin Merchandise  :", poinMerchandise);
console.log("Total Poin        :", totalPoin);
 
// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
let tierMember = "";
let benefit = "";
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
if (totalPoin >=100) {
    tierMember= "platinum";
    benefit= "diskon 20% + gratis 1 minuman signature";
}
else if (totalPoin >=70) {
    tierMember= "gold";
    benefit= "diskon 10% di setiap transaksi";
}
else if (totalPoin >=40) {
    tierMember= "silver";
    benefit= "diskon 5% untuk menu minuman";
}
else{
    tierMember= "bronze";
    benefit= "member reguler (mengumpulkan poin untuk naik tier)";
}
// 3. Cetak hasil tierMember dan benefit ke Console.
console.log("tierMember: ", tierMember);
console.log("benefit: ", benefit);
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().
alert(
  "=== RINGKASAN MEMBER ===\n" +
    "Nama       : " + namaPelanggan + "\n" +
    "Total Poin : " + totalPoin + "\n" +
    "Tier       : " + tierMember + "\n" +
    "Benefit    : " + benefit
)

// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.
function hitungTotalPoin(p1, p2, p3 ) {
    return p1 + p2 + p3;
}

// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.
function tentukanTierMember(poin) {
  if (poin >= 100) {
    return "Platinum - Diskon 20% + Gratis 1 Minuman Signature";
  } else if (poin >= 70) {
    return "Gold - Diskon 10% di setiap transaksi";
  } else if (poin >= 40) {
    return "Silver - Diskon 5% untuk menu minuman";
  } else {
    return "Bronze - Member Reguler (kumpulkan poin untuk naik tier)";
  }
}
 

// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.
let totalPoinB = hitungTotalPoin(35,25,20);
let tierB = tentukanTierMember(totalPoinB);

let totalPoinC = hitungTotalPoin(15,10,5);
let tierC = tentukanTierMember(totalPoinC);

console.log("--- Simulasi Pelanggan B ---");
console.log("Total Poin :", totalPoinB);
console.log("Tier       :", tierB);
console.log("--- Simulasi Pelanggan C ---");
console.log("Total Poin :", totalPoinC);
console.log("Tier       :", tierC);
