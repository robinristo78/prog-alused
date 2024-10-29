const readline = require('node:readline');

const rl = readline.createInterface(
   {
    input: process.stdin,
    output: process.stdout,
   } 
);

rl.question("Sisestage õhutemperatuur: ", temp => { 
    let result;
    if (temp > 4) {
        result = "Ei ole jäätumise ohtu.";
    } else{
        result = "On jäätumise oht."
    } 
    console.log(result);
    rl.close()
});