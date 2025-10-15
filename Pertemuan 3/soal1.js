// Soal 1
// Synchronous
console.log("tahap 1");
console.log("tahap 2");
console.log("tahap 3");
console.log("tahap 4");

// Asynchronous
console.log("tahap 1");
setTimeout(() => {
  console.log("tahap 4");
}, 1000);
setTimeout(() => {
  console.log("tahap 2");
}, 2000);
setTimeout(() => {
  console.log("tahap 3");
}, 3000);