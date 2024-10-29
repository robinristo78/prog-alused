const readline = require('node:readline');

const rl = readline.createInterface(
   {
    input: process.stdin,
    output: process.stdout,
   } 
);

rl.question("Sisestage Leedu perenimi: ", nimi => {
    if (nimi.slice(-2) == "ne"){
        console.log("Abiellus");
    } else if (nimi.slice(-2) == "te") {
        console.log("Vallaline");
    } else if (nimi.slice(-1) == "e"){
        console.log("Määramata");
    } else {
        console.log("Sisestatud nimi ei ole õiges vormis: Leedu perenimi peab olema -ne, -te, -e lõpuga.");
    } 
    rl.close()
});