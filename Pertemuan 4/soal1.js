// Contoh: mengubah Promise menjadi async/await

let downloadFile = new Promise((resolve, reject) => {
  console.log("Memulai proses download...");
  // simulasi waktu download 3 detik
  setTimeout(() => {
    let isSuccess = Math.random() > 0.3; // 70% berhasil, 30% gagal
    if (isSuccess) {
      resolve("File berhasil diunduh!");
    } else {
      reject("Gagal mengunduh file. Periksa koneksi Anda.");
    }
  }, 3000);
});

async function checkDownload() {
  try {
    const result = await downloadFile;
    console.log(result); // expected output: "File berhasil diunduh!"
  } catch (error) {
    console.log(error); // expected output: "Gagal mengunduh file. Periksa koneksi Anda."
  }
}

checkDownload();