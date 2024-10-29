import rl from "../utils/input.js";

rl.question('Sisestage ringide arv: ', ringid => {
    // kontrolli kas ringid on arv ning kas ringid on positiivne arv.
    if (!isNaN(ringid) && ringid >= 0) {
        let porgandid = 0;
        for (let i = 0; i <= ringid; i++) {
            // Kui on paarisarv, siis lisa paarisarvu numbri porgandid muutujasse.
            if (i % 2 == 0) {
                porgandid += i;
            }
        } 
    
        console.log("Porgandite koguarv on " + porgandid);
    }
    else {
        console.log("ERROR: peab sisestama arvu (mis on positiivne)!");
    } 
    rl.close();
});