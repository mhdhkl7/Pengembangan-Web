// 2. Menghitung Luas Permukaan Tabung

// Contoh input
let T = 20; // tinggi tabung
let r = 4; // jari-jari tabung
const pi = 3.14;

let surfaceArea = 2 * pi * r * (r + T);

console.log(
  `Luas permukaan tabung (T=${T}, r=${r}) adalah: ${surfaceArea.toFixed(2)}`
);