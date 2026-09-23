// Aktivitas 1
// Mencetak sebuah nilai dengan cara console.log("")

console.log("=== Selamat Datang Di Kalkulator Nilai Rapor");
console.log("Script JavaScript Telah Terhubung");

// Aktivitas 2 
// Membuat sebuah variabel let & const

//const siaftnya tidak bisa diubah/tetap
const NAMA_KAMPUS ="UPI PWK"
const MATA_KULIAH = ["SCM","Promnet","Metopen"];

//let sifatnya bisa berubah seaktu waktu
let NAMA_DOSEN = "Tio Adrian"; 
let KELAS_PRAKTIKUM ="3B";

// Mencetak sebuah nilai operator "+" -> tujuanya untuk menggabungkan variabel dengan tipe data string
console.log("Kampus : " + NAMA_KAMPUS);
console.log("kelas Praktikum : " + KELAS_PRAKTIKUM);
console.log("Nama Dosen : " + NAMA_DOSEN);

// DEMO PERBEDAAN LET vs CONST

// 1. let nilainya bisa diubah 

NAMA_DOSEN = " Meysa";
console.log("Nama Dosen :" + NAMA_DOSEN);

// 2. const nilai nya tidak bisa di ubah/tetap
// NAMA_KAMPUS = "UPI BUMSIL"
// console.log("Nama Kampus :" + NAMA_KAMPUS );


//  Input interaktif
// alert () tujuannya untuk menampilkan pesan ke user berupa pop up
alert("selamat datang di aplikasi kalkulator nilai rapor kelas !");

// promt() menampilkan dialog input teks dan disimpan ke variabel NAMA_MAHASISWA
let NAMA_MAHASISWA = prompt("Halo! Masukam  nama kamu untuk memulai");

// logika Conditional statement/percabangan
if (NAMA_MAHASISWA){
    // Jika mahasiswa mengisi nama maka ada greetings
    alert("Halo," + NAMA_MAHASISWA + "! Yuk kita hitung nilai rapor kamu.");
    console.log("siswa yang aktif : "+ NAMA_MAHASISWA);
} else {
    // jika mahasiswa tidak mengisi nama maka di sebut anonim
    alert("kamu tidak memasukan nama. Kamu akan di panggil anonymus");
    NAMA_MAHASISWA ="Mahasiswa anonymus";
    console.log("Mahasiswa anonymus" + NAMA_MAHASISWA);

}

// Aktivitas 3 operator aritmatika - Hitung nilai rata rata
// simpan nilai tiga matakuliah

// Deklarasi Variabel operator aritmatika
let NILAI_SCM = 80; 
let NILAI_PROMNET = 100;
let NILAI_METOPEN = 90;

// HItung jumlah nilai ketiga matakuliah
let JUMLAH_NILAI = NILAI_SCM + NILAI_PROMNET + NILAI_METOPEN;

// Bagi jumlah dengan 3 matkul untuk mendapatkan rata rata
// Tanda "/" fungsi nya untuk membagi
let NILAI_RATARATA = JUMLAH_NILAI / 3;

//  cetak rinciannya ke console
console.log("=== Nilai " + NAMA_MAHASISWA);
console.log("Nilai SCM : " + NILAI_SCM);
console.log("Nilai Promnet :" + NILAI_PROMNET);
console.log("Nilai Metopen :" + NILAI_METOPEN);

// Tampilkan jumlah nilai ke console
console.log("jumlah nilai anda adalah " + JUMLAH_NILAI);

// Tampilkan rata rata nilai ke console
console.log("rata rata nilai anda adalah " + NILAI_RATARATA);

// aktivitas 4 : Percabangan /conditional statement

// buat variabel kosong untuk menyimpan predikat /grade dengan keterangan
let PREDIKAT ="";  // di isi "A" "B" "C" Atau "D"
let KETERANGAN =""; // Di isi sangat baik ,baik,cukup ,belajar lagi

// percabangan if,else if,else di evaluasi dari atas ke bawa 
// begitun kondisi blok 1 terpenuhi maka akan dijalankan
// jika tidak terpenuhi maka akan dilewati dan masuk ke kondisi ke 2

if (NILAI_RATARATA >= 90){
    //kondisi ini yang akan di cek pertama :apakah nilain lbih dari 90?
    PREDIKAT  = "A";
    KETERANGAN ="Sangat baik";
} else if (NILAI_RATARATA >= 80){ 
   //kondisi ini yang akan di cek kedua :apakah nilain lbih dari 80?
   PREDIKAT  = "B";
   KETERANGAN ="Baik";
} else if (NILAI_RATARATA >= 70){ 
   //kondisi ini yang akan di cek ketiga :apakah nilain lbih dari 70?
   PREDIKAT  = "C";
   KETERANGAN ="Belajar lagi deck!";
} else {
   // jika semua kondisi diatas tidak memenuhi
   PREDIKAT  = "D";
   KETERANGAN ="Pulang aja!";
}

// Tampilan Predikat + KETERANGAN 
console.log("predikat anda adalah :" + PREDIKAT + "keterangan :" + KETERANGAN);

// tamnpilkam juga ringkasan 
alert(
    "Hasil rapor : " + NAMA_MAHASISWA + ":\n" +
    "rata rata   : " + NILAI_RATARATA + ":\n" +
    "Predikat    : " + PREDIKAT + "Keterangan:" + KETERANGAN
);

// aktvitas ke 5 function /fungsi
// Function adalah cara kita membungkus sekumpulan kode menjadi satu blok
// yang nntinya bisa di panggil kapan saja dengan nama function yang sudah dibuat
// stuktur -> function NAMA_FUNGSI(Paramter1 ,parameter2, parameter3,);{.....}

function HITUNG_RATARATA(nilai1, nilai2, nilai3){
    let JUMLAH = nilai1 + nilai2 +nilai3;
    return JUMLAH / 3;
}
//  Menghitung predikat

function TENTUKAN_PREDIKAT(PREDIKAT){
    // Conditional statement "if" disini langsung kasih "return" jika kondisi terpenuhi
    if(PREDIKAT >= 90) return "A - Sangat baik";
    if(PREDIKAT >= 80) return "B - Baik";
    if(PREDIKAT >= 70) return "C - Belajar lagi deck!";
    return " D - Pulang aja";
}

// contoh pemnggunaan function
// mengitung nilai siswa a dengan function
let NILAI_MAHASISWA_A = HITUNG_RATARATA(80,75,85);

// Tentukan presikat siswa a dengan function predikat
let PREDIKAT_MAHASISWA_A = TENTUKAN_PREDIKAT(NILAI_MAHASISWA_A);

// Cetak function
console.log("=== DATA MAHASISWA A") ;
console.log("Rata rata adalah  " + NILAI_MAHASISWA_A);
console.log("predikat adalah  " + PREDIKAT_MAHASISWA_A);



// Aktivitas 6 terakhir for loop (looping for & array)

// array DAFTAR_MAHASISWA yang diisi dengan nama mahasiswa
let DAFTAR_MAHASISWA =[
    "Meysa",
    "Nava",
    "Nana",
    "Ciwa",
    "Syakira"
];

// tampilkan judul sebelum cetak array daftar mahasiswa
console.log("=== DAFTAR_MAHASISWA " +  KELAS_PRAKTIKUM + "===");

// for loop digunakan untuk mengulang sebuah kode berkali kali
// strukturnya -> (awal; kondidi; langkah)
// let i = 0 => mulai dari index ke 1karena array dimulai dari index 0
// i <DAFTAR_MAHASISWA.length ; mengulangi selama i masih kurang 5 maka jalankan jika sudah maka stop
// i+= =>Increment setelah setiap satu putaran , tambahkan i dengan 1 0-> 1-> 2->3->4

for(let i = 0; i < DAFTAR_MAHASISWA.length; i++){
    // daftar mahasiswa [i] -> ambil elemen pada posisi index ke 1 dari array
    // (i+ 1) -> digunakan agar nomor urut yang tampil bukan dari ke 1,bukan 0
    console.log (( i + 1 ) + "." + DAFTAR_MAHASISWA[i]);
}


// .lenght adalah properti yang mengembalikan total panjang dari si array yang di dalam  array
console.log("Total mahasiswa :" + DAFTAR_MAHASISWA.length);
console.log("Praktikum selesai war is over");