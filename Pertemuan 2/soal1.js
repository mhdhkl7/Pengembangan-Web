// Soal 1: Class untuk menghitung luas permukaan kubus
class Kubus {
  constructor(sisi) {
    this.sisi = sisi;
  }

  luasKubus() {
    // Rumus luas permukaan kubus = 6 * sisi * sisi
    return 6 * this.sisi * this.sisi;
  }
}

// Contoh penggunaan
const kubus = new Kubus(25);
console.log("Luas kubus:", kubus.luasKubus()); // hasil: 3750