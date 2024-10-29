// küsib kasutajalt, mitu pöialpoissi tahab õunu (võib eeldada, et sisestatakse täisarv lõigust [0; 7]);

// leiab ja väljastab eraldi ridadele, mitu õuna saab iga pöialpoiss (programm genereerib iga kord juhuslikult arvu 1 või 2);

// leiab ja väljastab eraldi reale, mitu õuna jääb Lumivalgekesele.


import rl from "../utils/input.js";
import suvanumber from "../utils/suvanumber.js";

let ounad = 14;

rl.question('Mitu poialpoissi tahavad õuna (0-7): ', tahtjat => {
    // kontrolli kas tahtjat on täisarv ning kas tahtjat on positiivne arv. + kas see on 0 ja 7 vahel
    if (Number.isInteger(Number(tahtjat)) && tahtjat >= 0 && tahtjat <= 7) {
        for (let i = 0; i <= tahtjat; i++) {
            if (i > 0) {
                let mituouna = suvanumber(1, 2);
                ounad -= mituouna;
                console.log("Poialpoiss nr" + i + " tahtis " + mituouna + " õuna.");
            } 
        }
        console.log("Lumivalgekesele jäi " + ounad + " õuna.");
    }
    else {
        console.log("ERROR: peab sisestama täisarvu (mis on positiivne ja 0-7 vahel)!");
    } 
    rl.close();
}); 