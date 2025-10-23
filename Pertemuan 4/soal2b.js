async function getFilm() {
  try {
    const response = await fetch(
      "https://ghibliapi.vercel.app/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
    );
    const data = await response.json();
    console.log("Judul film:", data.title);
    console.log("Deskripsi:", data.description);
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
}

getFilm();