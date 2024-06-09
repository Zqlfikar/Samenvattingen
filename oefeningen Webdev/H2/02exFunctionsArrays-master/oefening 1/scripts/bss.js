'use strict';

const input = prompt('Blad. steen of schaar?:').toLowerCase();

const random = Math.random(0,1);
let resComputer;
if (random < 0.33) {
    console.log('blad');
    resComputer = 'blad';
} else if (random < 0.66) {
     console.log('steen');
     resComputer = 'steen';
} else {
    console.log('schaar');
    resComputer = 'schaar';
}
console.log(winnaar(input, resComputer));


function winnaar(input, resComputer) {
     if (input === resComputer) {
        return 'Gelijkspel';
    } else if (input === 'blad' && resComputer === 'steen' ||input === 'steen' && resComputer === 'blad') {
        return 'Blad wint!';
    } else if (input === 'schaar' && resComputer === 'steen' ||input === 'steen' && resComputer === 'schaar') {
        return 'Steen wint!';
    } else if (input === 'blad' && resComputer === 'schaar' ||input === 'schaar' && resComputer === 'blad') {
       return 'Schaar wint!';
    } 
}