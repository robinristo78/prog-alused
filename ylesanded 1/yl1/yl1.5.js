const readline = require('node:readline');

const rl = readline.createInterface(
   {
    input: process.stdin,
    output: process.stdout,
   } 
);

rl.question("Sisestage ainepunktide arv: ", ap => { 
    rl.question("Sisestage nädalate arv: ", narv => { 
        let result = Math.round((ap*26) / narv);
        console.log(result);
        rl.close()
    });
});