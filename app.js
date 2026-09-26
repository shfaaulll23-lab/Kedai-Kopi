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
 
