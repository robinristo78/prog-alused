// const readline = require('node:readline');

// const rl = readline.createInterface(
//    {
//     input: process.stdin,
//     output: process.stdout,
//    } 
// );

import rl from "../utils/input.js";

rl.question('Sisestage kirja suurus megabaitides: ', suurus =>{
    //Kontrolli kas suurus on number
    if (!isNaN(suurus)) {
        //Muuda suurus ujukomaarvuks
        suurus = parseFloat(suurus);
        rl.question('Sisestage kirja teema pealkirja (vajutage enter, et jätta tühjaks): ', pealkiri => {
            rl.question('Kas kirjaga on kaasas fail? (y/n): ', manus => { 
                manus = manus.toLowerCase();
                if (manus !== 'y' && manus !== 'n') {
                    console.log("ERROR: Peab sisestama 'y' või 'n'!");
                    rl.close();
                    process.exit();
                }

                // kirjal ei ole teema pealkirja
                // või
                // kiri sisaldab manusena faili 
                // ja kirja suurus ületab 1 MB.
                
                let filter1 = (pealkiri == "") ? true : false;
                let filter2 = (manus === "y") ? true : false;
                let filter3 = (suurus > 1) ? true : false;

                // console.log(filter1, filter2, filter3);
                
                if (filter1 ||  (filter2 && filter3)){
                    console.log("Kiri on spämm!");
                } 
                else {
                    console.log("Kiri ei ole spämm.");
                } 

                rl.close();
            }); 
        });
    } else {
        console.log("ERROR: Peab sisestama numbri!");
        rl.close();
    }

});