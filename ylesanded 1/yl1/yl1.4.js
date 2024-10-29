const readline = require('node:readline');

const rl = readline.createInterface(
   {
    input: process.stdin,
    output: process.stdout,
   } 
);

rl.question("Sisestage oma nimi: ", nimi => { 
    rl.question("Sisestage lubatud kiirus (km/h): ", lubatudkiirus => {
        rl.question("Sisestage tegelik kiirus (km/h): ", tegelikkiirus => {
            let kiiruseyletus = tegelikkiirus - lubatudkiirus;
            let trahv = Math.min(190, kiiruseyletus*3);
            console.log(nimi + ", kiiruse ületamise eest on teie trahv " + trahv + " eurot.");
            rl.close();
        });
    });
});

//rl.close();