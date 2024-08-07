// // Daftar pengguna contoh
// const users = [
//     { username: "arka", password: "arka123" },
//     { username: "adit", password: "adit123" },
//     { username: "ucok", password: "ucokbaba" },
//   ];
  
//   // Fungsi login sederhana
//   function login(username: string, password: string): string {
//     if (username === "arka" && password === "arka123") {
//       return "Status: berhasil, msg: Anda berhasil login!";
//     } else if (username === "adit" && password === "adit123") {
//       return "Status: berhasil, msg: Anda berhasil login!"; 
  
//     } else {
//       return "Status: gagal, msg: Username dan password berbeda!";
//     }
//   }
  
//   // Contoh penggunaan
//   console.log(login("sopo", "sopo123")); // Output: Status: berhasil, msg: Anda berhasil login!
//   console.log(login("adit", "adit123")); // Output: Status: berhasil, msg: Anda berhasil login!
//    console.log(login("ucok", "ucokbaba")); // Output: Status: gagal, msg: Username dan password berbeda!

// 07/08/24
// soal

// function minimal(a: number, b: number): number {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(minimal(8, 7)); 
// console.log(minimal(3, 4)); 
// console.log(minimal(5, 3)); 

// soal 2

// function power(a: number, b: number): number {
//     return Math.pow(a, b);
// }

// console.log(power(2, 3)); 
// console.log(power(3, 2));
// console.log(power(4, 1)); 
// console.log(power(5, 0));
// console.log(power(10, 2)); 

// soal 3

function penjumlahanBilangan(arr: number[], jenis: string): number | string {
    if (jenis !== "ganjil" && jenis !== "genap") {
        return "error";
    }

    let sum = arr.reduce((acc, num) => {
        if (jenis === "ganjil" && num % 2 !== 0) {
            return acc + num;
        } else if (jenis === "genap" && num % 2 === 0) {
            return acc + num;
        }
        return acc;
    }, 0);

    return sum;
}
console.log(penjumlahanBilangan([1, 2, 3], "ganjil")); 
console.log(penjumlahanBilangan([1, 2,3], "89")); 
console.log(penjumlahanBilangan([1, 24, 3, 4, 5], "8379")); 
console.log(penjumlahanBilangan([1, 23, 3, 4, 5, 6, 7], "gena")); 
console.log(penjumlahanBilangan([1, 26, 53, 64, 75, 6, 7], "bandung")); 
 console.log(Math.pow(9, 0.5)); 

// soal 4

// class Animal {
//     name: string;
//     age: number;
//     isMammal: boolean;

//     constructor(name: string, age: number, isMammal: boolean) {
//         this.name = name;
//         this.age = age;
//         this.isMammal = isMammal;
//     }
// }

// // Contoh penggunaan
// const kucing = new Animal("Kucing", 3, true);
// console.log(kucing);

// const ikan = new Animal("Ikan", 1, false);
// console.log(ikan);

// soal 5 

// Kelas dasar Animal
class Animal {
    name: string;
    age: number;
    isMammal: boolean;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
      this.isMammal = false; // Nilai default, bisa diubah oleh subclass
    }
  }
  
  // Kelas Rabbit yang merupakan turunan dari Animal
  class Rabbit extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
      this.isMammal = true;
    }
  
    eat(): string {
      return `${this.name} yang berumur ${this.age} sedang makan!`;
    }
  }
  
  // Contoh penggunaan:
  const rabbit = new Rabbit('Bunny', 2);
  console.log(rabbit.eat()); // Output: "Bunny yang berumur 2 sedang makan!"
  console.log(rabbit.isMammal); // Output: true
  