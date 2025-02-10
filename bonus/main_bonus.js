/* Traccia:

pari/dispari: completare il live iniziato in classe con Leonardo e risolvere il bug lasciato. L'utente vince solo con pari e se sceglie dispari?  Tips: é necessario l'operatore logico AND usato nella condizione? forse sarebbe meglio separare le due condizioni e verificare prima se il risultato é pari e salvare da qualche parte questa informazione ma occhio all'ambito di visibilitá delle variabili.
quanto manca:  Stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.  Oltre a Math ci sono anche altre funzionalitá di javascript (built-in) che possaimo usare senza installazioni come ad esempio le funzioni dell'oggetto Date. */

// prompts utente
// generare valore pc
// somma valori
// calcolo vincitore


// odd/even input
let userChoice = Number(prompt('scegliere 1 per pari e 2 per dispari'));

let matchChoice;
let sum;
let rest;

// user input value check
if (userChoice != 1 && userChoice != 2) {
    do {
        userChoice = Number(prompt('per favore, scegliere 1 per pari e 2 per dispari'));
    } while (userChoice != 1 && userChoice != 2);
}

if (userChoice == 1) {
    matchChoice = "pari";
} else if (userChoice == 2) {
    matchChoice = "dispari";
}

console.log(userChoice);
console.log(matchChoice);

// user number input
let userNumber = Number(prompt("scegliere un numero tra 1 e 9 da giocare"));

//pc number generator
const pcNumber = Math.floor(Math.random() * 9) + 1;


// user input value check
if (userNumber < 1 || userNumber > 9) {
    do {
        userNumber = Number(prompt("per favore, scegliere un numero intero compreso tra 1 e 9"));
    } while (userNumber < 1 || userNumber > 9);
}

// sum and rest calc
sum = userNumber + pcNumber;
rest = sum % 2;

console.log(userNumber);
console.log(pcNumber);
console.log(sum);
console.log(rest);

// winner calc
if ((rest == 0 && matchChoice == "pari") || (rest == 1 && matchChoice == "dispari")) {
    alert(`il tuo avverario ha scelto ${pcNumber}, congratulazioni hai vinto!`);
    window.location.reload();
} else {
    alert(`il tuo avversario ha scelto ${pcNumber}, hai perso :(`);
    window.location.reload();
}