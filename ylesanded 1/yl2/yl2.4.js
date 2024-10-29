const readline = require('node:readline');

const rl = readline.createInterface(
   {
    input: process.stdin,
    output: process.stdout,
   } 
);

function suvanumber() {
    return Math.floor(Math.random() * (3 - 1) + 1);
} 

rl.question('Kas soovite istekohta ise valida ("ise") või loosida ("loos")? ', iste => {
    let tulemusaken;

    if (iste == "loos"){
        let akenprob = suvanumber();
        //console.log(akenprob);

        if (akenprob >= 2) {
            tulemusaken = "Vahekäigukoht";
        } else {
            tulemusaken = "Aknakoht";
        } 
        console.log('valisite ' + iste + '. ' + tulemusaken);
        rl.close();
    } else if (iste == "ise") {
        rl.question('Kas soovite istuda akna ääres ("aken") või mitte ("muu")? ', aken => {
            switch(aken){
                case "aken":
                    tulemusaken = "Aknakoht";
                    break;
                case "muu":
                    tulemusaken = "Vahekäigukoht";
                    break;
                default:
                    console.log('USER ERROR: peab sisestama "aken" või "muu".');
                    tulemusaken = false;
                    break;
            } 
            if (tulemusaken) {
                console.log('valisite ' + iste + '. ' + tulemusaken);
            }
            rl.close();
        });
        
    } else {
        console.log('USER ERROR: peab sisestama "ise" või loos');
        rl.close();
    }
}); 