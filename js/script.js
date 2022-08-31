console.log('JS ok');

//  L’utente sceglie pari o dispari
const pariOrDispari = prompt('Scegli PARI o DISPARI');

//  L’utente inserisce un numero da 1 a 5

const playerNumber = prompt('Gioca il tuo numero');
console.log(playerNumber);

// Generiamo un numero random

const cpuNumber = Math.floor(Math.random() * 5 + 1);
console.log(cpuNumber);

function sumNum(playerNumber, cpuNumber) {
    const sum = playerNumber + cpuNumber;
    console.log(sum);
    return sum;
}
const total = sumNum;

