// 1. Penggabungan String
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your first name: ", (firstName) => {
  readline.question("Enter your last name: ", (lastName) => {
    readline.question("Enter your born year: ", (bornYear) => {
      const currentYear = new Date().getFullYear();
      const age = currentYear - parseInt(bornYear);
      console.log(
        `\nHello, ${firstName} ${lastName}! You are ${age} years old.\n`
      );
      readline.close();
    });
  });
});