"use strict";

let eindeSpel = false;
let totaleSchade = 0;




function slaDeDraak() {
    const hit = Math.floor(Math.random() * 2);
    const schade = Math.floor(Math.random() * 5) + 1; 
    if (hit === 1) {
        return schade;
    }
        else {
            return 0;
        }
}    

while (!eindeSpel) {
const schade = slaDeDraak();

if(schade === 0){ 
    eindeSpel = true;
console.log("De draak heeeft je verkracht");
} else
{
    totaleSchade += schade;
    if (totaleSchade >= 4) {
        console.log("Je hebt de draak verslagen!");
        eindeSpel = true; // End game if total damage is 4 or more
    }
}
}

console.log("Totale schade aan de draak:", totaleSchade);


