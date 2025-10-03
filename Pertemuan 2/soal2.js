// Soal 2: Manipulasi object person
let person = { name: "John Doe", age: 19, gender: "Perempuan" };

// a. Keluarkan hasil name dari variabel object tersebut
console.log(person.name);

// b. Tambahkan 2 property baru
person.favoriteLanguage = "Javascript";
person.experience = 7;

// c. Ubah value key 'age' menjadi 17
person.age = 17;

// d. Hapus property experience
delete person.experience;

// e. Keluarkan semua isi dari type data object person
console.log(person);