const readline = require('node:readline');

const rl = readline.createInterface(
   {
    input: process.stdin,
    output: process.stdout,
   } 
);

function suvanumber (min, max){
    return Math.floor(Math.random() * (max - min) + min);
} 

rl.question('Kas soovite istekohta ise valida ("ise") või loosida ("loos")? ', iste => {
    if (iste == "loos"){

        

    } else if (iste == "ise") {

        rl.question('Kas soovite istuda akna ääres ("aken") või mitte ("muu")? ', aken => {
            //kui
            rl.close();
        });

    } else {
        console.log('USER ERROR: peab sisestama "ise" või loos');
        rl.close();
        process.exit();
    }  
}); 