// let age: number = 25;

// let siswa: {
//     nama: string;
//     umur: number;
//     ispelajar: boolean;
//     alamat?: string
// };

// siswa = {
//     nama: "daffa",
//     umur: 16,
//     ispelajar: false,
//     alamat: 'jakarta',
// };

// siswa = {
//     nama: "akbar",
//     umur: 20,
//     ispelajar: true,
// };

// // intreface untuk mendefinisikan tipe data object

// interface produck {
//     id: number
//     name: string
//     price: number
//     note?: string
//     ispremium: boolean
// }

// const produck1: produck = {
//     id: 1,
//     name: "tv",
//     price: 40000,
//     ispremium: false,
// }
// const produck2: produck = {
//     id: 2,
//     name: 'Tv',
//     price: 50000,
//     ispremium: false,
//     note: 'bagus'
// }

// // Nested Object
// interface produckDetail {
//     manufacture: string,
//     year: number
// }

// const angka: number = 1;

// let productsatu: produckDetail = {
//     manufacture: "dayhatsu",
//     year: 2024,
// }

// interface produckItem {
//     id: number
//     produckName: string
//     price: number
//     detail: produckDetail
// }

// const produck3: produckItem = {
//     id: 1,
//     produckName: "mobil",
//     price: 100000,
//     detail: {
//         year: 2024,
//         manufacture: "toyota"
//     }
// }

// console.log('pabrik', produck3.detail.manufacture)
// console.log('pabrik', produck3.detail)

// // array

// const a = [1, 2, 3, 4, 5]

// // square bracket

// let b: number[]
// b = [1, 2, 3, 4, 5,]

// let c: string[]
// c = ['fairuz', 'daffa', 'hanif']

// let d: (string | number | boolean)[] = ['satu', 1, false]

// let e: { nama: string; umur: number }[] = [
//     { nama: "akbar", umur: 17 },
//     { nama: "akbar", umur: 17 },
// ]
// // soal 1
// // interface anak{
// //     nama:string, umur:number,
// //     isSekolah
// // }
// // fungction contoh
// // funtion rumusLuasPP(panjang: number, lebar)
// // Fungsi untuk menghitung luas dan keliling persegi panjang

// function balok(panjang: number, lebar: number) {
//     const area = panjang * lebar;
//     const perimeter = 2 * (panjang + lebar);

//     return {
//         area: area,
//         perimeter: perimeter
//     };
// }
// // Contoh penggunaan fungsi

// const result = balok(10, 20);
// console.log(`Luas: ${result.area}, Keliling: ${result.perimeter}`);

// //   volume balok

// // Fungsi untuk menghitung volume balok
// function volumeBalok(panjang: number, lebar: number, Tinggi: number) {
//     return panjang * lebar * Tinggi;
// }

// // Contoh penggunaan fungsi
// const panjang = 5;  // Panjang balok
// const lebar = 3;   // Lebar balok
// const Tinggi = 4;  // Tinggi balok

// const volume = volumeBalok(panjang, lebar, Tinggi);
// console.log(`Volume balok: ${volume}`);

// function pembagian({ a, b, c = 1 }: { a: number; b: number, c?: number; }) {
//     const hasil = (a / b) * c;
//     return hasil;
// }
// const kali1 = pembagian({ a: 5, b: 10, c: 2 });
// const kali2 = pembagian({ b: 5, a: 10 });

// console.log('kali1', kali1);
// console.log('kali2', kali2);

// // contoh function

// interface ResponseAPI {
//     msg: string;
//     status: string;
// }
// interface satuInterface {
//     a: number,
//     b: number,
// }
// function satu({ a, b }: satuInterface): ResponseAPI {
//     return {
//         msg: 'berhasil',
//         status: 'ok',
//     }
// }
// satu({ a: 1, b: 2 });

// //    soal 

function cekBilanganDalamArray(array: number[], bilangan: number): boolean {
    // Menggunakan metode includes untuk memeriksa keberadaan bilangan dalam array
    return array.includes(bilangan);
}

// Contoh penggunaan
const array: number[] = [1, 2, 3, 4, 5, 6];
const bilangan: number = 2;

const hasil: boolean = cekBilanganDalamArray(array, bilangan);
console.log(hasil);  // Output: true


// class User {
//     id: number
//     firstName: string
//     lastName: string
//     constructor(id: number, firstName: string, lastName: string) {
//         this.id = id;
//         this.firstName = firstName,
//             this.lastName = lastName;
//     }

// login() : boolean {
//     if(this.id === 1){
//         return true;
//     } else{
//         return false;
//     }

// }

// }

//soal 

// const ihsan = new User (2, "ihsan", "san");
// const dafa = new User (1, "daffa", "hanif");

// console.log(dafa.login())
// console.log(ihsan.login())

// console.log("ihsan", ihsan);
// console.log("dafa", dafa);

// buatlah method login jika username dan password yg di kirim kan 
// ada isi dalam array user maka berikan pesan 
// jika berhasil berikan pesan status berhasil , msg anda berhasil login 
// msg username dan password berbeda

// User.ts

// Mendefinisikan tipe User
// Daftar pengguna contoh



//  sub class
//  sub class = merupakan turunan dari class baik itu propeti maupun method


// class Smartphone {
//   color: string;
//   brand: string;
//   model: string;
//   isKDN: boolean;

//   constructor(color: string, brand: string, model: string) {
//     this.color = color;
//     this.brand = brand;
//     this.model = model;
//     this.isKDN = true;
//   }
//   charging(): void {
//     console.log(`SmartPhone ${this.model} lagi di cash`)
//   }
// }
// const nokia = new Smartphone("merah", "note12", "nokia");
// console.log('nokia', nokia)
// nokia.charging()

// // sub class akan menurunkan sifat dan perlilaku dari class

// class Android extends Smartphone {
//   // splitScreen(){
//   //   console.log("split sreen berhasil")
//   // }

//   layar:number
//   constructor(color:string, brand:string, model:string, layar:number){
//    super(color, brand, model);
//     this.layar = layar;
//   }
// splitScreen(){
//   console.log("split sreen berhasil");
// } 

// Showbrand(){
//   console.log(`Brand ${this.brand} berhasil ditampilkan`)
// }

// charging(): void {
//   super.charging()
//   console.log(`smartphone ${this.model} lagi di pinjem`);
// }
// }
// const samsung= new Android("blue", "samsung", "s24", 6);
// samsung.charging()
// console.log('samsung', samsung)
// samsung.Showbrand()

// class Ios extends Smartphone{
//   airDrop(){
//     console.log('air drop berhasil')
//   }
// }

// polymorphism


// soal
