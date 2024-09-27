//let aste = 2;
//let astendaja = 4;

const readline = require('node:readline');

const rl = readline.createInterface(
   {
    input: process.stdin,
    output: process.stdout,
   } 
);

rl.question("Sisestage aste: ", aste => { 
    rl.question("Sisestage astendaja: ", astendaja => { 
        let result = aste ** astendaja;
        console.log(result);
        rl.close()
    });
});
