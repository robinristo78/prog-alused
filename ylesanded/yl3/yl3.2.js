import rl from "../utils/input.js";

// 2. metsaringi läbimisel saab jänesepoeg 2 porgandit
// 4. metsaringi läbimisel 4 porgandit juurde
// 6. metsaringi läbimisel 6 porgandit juurde

// Koostada programm, mis

// küsib kasutajalt ringide arvu (mittenegatiivne täisarv);

// arvutab sobiva tsükli abil saadavate porgandite koguarvu;

// väljastab saadavate porgandite koguarvu ekraanile.

// Näiteks, kui kasutaja sisestas 6, siis summa on 12, sest 2 + 4 + 6 = 12. Kui kasutaja sisestas 7, siis on summa samuti 12, sest 2 + 4 + 6 = 12.




rl.question('Sisestage ringide arv: ', ringid => {
    // kontrolli kas ringid on arv ning kas ringid on positiivne arv.
    if (!isNaN(ringid) && ringid >= 0) {
        let porgandid = 0;
        for (let i = 0; i <= ringid; i++) {
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