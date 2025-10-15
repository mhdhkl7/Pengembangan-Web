// Soal 2
function jajanEsKrim(uang, callback) {
  setTimeout(() => {
    const hargaEsKrim = 5000;
    if (uang >= hargaEsKrim) {
      console.log("kamu jajan es krim dengan harga Rp. 5000");
      const sisa = uang - hargaEsKrim;
      console.log("sisa uang kamu Rp. " + sisa);
      if (callback) callback(sisa);
    } else {
      console.log("Maaf uang kamu belum cukup untuk membeli es krim");
      console.log("Sisa uang kamu sebesar Rp. " + uang);
    }
  }, 5000);
}

function jajanBurger(uang) {
  setTimeout(() => {
    const hargaBurger = 8000;
    if (uang >= hargaBurger) {
      console.log("kamu jajan burger dengan harga Rp. 8000");
      const sisa = uang - hargaBurger;
      console.log("sisa uang kamu sebesar Rp. " + sisa);
    } else {
      console.log("Maaf uang kamu belum cukup untuk membeli burger");
      console.log("Sisa uang kamu sebesar Rp. " + uang);
    }
  }, 9000);
}

// Contoh penggunaan
jajanEsKrim(20000, jajanBurger);
jajanEsKrim(10000, jajanBurger);
