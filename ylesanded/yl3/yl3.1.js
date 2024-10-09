import rl from "../utils/input.js";

rl.question('Sisestage mitu korda äratada: ', kordus => {
    // kontrolli kas kordus on arv.
    if (!isNaN(kordus)) {
        for (let i = 0; i < kordus; i++) {
            console.log("Tõuse ja sära!");
        } 
    }
    else {
        console.log("ERROR: peab sisestama arvu!");
    } 
    rl.close();
});