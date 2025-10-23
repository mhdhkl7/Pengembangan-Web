fetch("https://ghibliapi.vercel.app/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
  .then((response) => response.json())
  .then((data) => {
    console.log("Judul film:", data.title);
    console.log("Deskripsi:", data.description);
  })
  .catch((error) => {
    console.log("Terjadi kesalahan:", error);
  });