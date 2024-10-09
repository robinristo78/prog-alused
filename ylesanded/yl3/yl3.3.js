import rl from "../utils/input.js";
import { suvanumber } from "../utils/suvanumber.js";

rl.question('Sisestage täringute arv: ', taringud => {
    // kontrolli kas taringud on arv ning kas taringud on positiivne arv.
    if (!isNaN(taringud) && taringud >= 0) {
        for (let i = 0; i < taringud; i++) {
            // Väljasta suvaline number 1 kuni 6.
            console.log(suvanumber(1, 6));
        } 
    }
    else {
        console.log("ERROR: peab sisestama arvu (mis on positiivne)!");
    } 
    rl.close();
});