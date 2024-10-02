// const readline = require('node:readline');

// const rl = readline.createInterface(
//    {
//     input: process.stdin,
//     output: process.stdout,
//    } 
// );

import rl from "../utils/input.js";

rl.question('Sisestage kirja suurus megabaitides: ', suurus =>{
    //console.log("töötab");
    //Kontrolli kas suurus on number
    if (typeof suurus === "number") {
        rl.question('Sisestage kirja teema pealkirja (vajutage enter, et jätta tühjaks): ', pealkiri =>{

        });
    } else {
        console.log("ERROR: Peab sisestama numbri!");
        rl.close();
    }

});