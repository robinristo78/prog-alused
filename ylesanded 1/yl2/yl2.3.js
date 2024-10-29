const readline = require('node:readline');

const rl = readline.createInterface(
   {
    input: process.stdin,
    output: process.stdout,
   } 
);

rl.question("Sisestage enda vanus: ", vanus => {
    rl.question("Sisestage enda sugu (M/N): ", sugu => {
        rl.question("Sisestage soovitud treeningu tüüp (1, 2 või 3): ", treening => {
            let maxpulsisagedus;
            let resultmin;
            let resultmax;
            let minprot;
            let maxprot;

            sugu = sugu.toUpperCase();

            if (isNaN(vanus)){
                console.log("USER ERROR: sisestasite 'vanus: " + vanus + "'. Vanus peab olema number!");
                rl.close();
                process.exit();
            }

            if (sugu == "M") {
                maxpulsisagedus = 220 - vanus;
            } else if (sugu == "N") {
                maxpulsisagedus = 206 - (vanus*0.88);
            } else {
                console.log("USER ERROR: sisestasite  'sugu: " + sugu + "'. Sugu peab olema M või N!");
                rl.close();
                process.exit();
            }

            if (treening == 1) {
                //0.5 ja 0.7
                minprot = 0.5;
                maxprot = 0.7;
            } else if (treening == 2) {
                //0.7 ja 0.8
                minprot = 0.7;
                maxprot = 0.8;
            } else if (treening == 3) {
                //0.8 ja 0.87
                minprot = 0.8;
                maxprot = 0.87;
            } else {
                console.log("USER ERROR: sisestasite 'treening: " + treening + "'. Treening peab olema 1, 2 või 3!");
                rl.close();
                process.exit();
            }

            resultmin = Math.round(maxpulsisagedus*minprot);
            resultmax = Math.round(maxpulsisagedus*maxprot);

            console.log('Pulsisagedus peab olema vahemikus ' + resultmin + ' kuni ' + resultmax + '.');
            rl.close();
        });
    }); 
});