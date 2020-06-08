/**

  - 1. Membuat variable

**/

const variable1: string = "Halo umur saya ";
const variable2: number = 14;
const variable3: object = { halo: ", Hai!!" }

console.log(variable1 + variable2 + variable3.halo);

/** 

   - 2. Membuat Function

**/

function tambah(x: number, y: number): number {
 return x + y;
};

const resultTambah = tambah(20, 50); // result => 70

console.log(resultTambah);
