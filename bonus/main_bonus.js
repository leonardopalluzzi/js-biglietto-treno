/* Traccia:

pari/dispari: completare il live iniziato in classe con Leonardo e risolvere il bug lasciato. L'utente vince solo con pari e se sceglie dispari?  Tips: é necessario l'operatore logico AND usato nella condizione? forse sarebbe meglio separare le due condizioni e verificare prima se il risultato é pari e salvare da qualche parte questa informazione ma occhio all'ambito di visibilitá delle variabili.
quanto manca:  Stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.  Oltre a Math ci sono anche altre funzionalitá di javascript (built-in) che possaimo usare senza installazioni come ad esempio le funzioni dell'oggetto Date. */

// prompts utente
// generare valore pc
// somma valori
// calcolo vincitore


// odd/even input
const userChoice = prompt('scegliere 1 per pari e 2 per dispari');
let matchChoice;
let sum;

if (userChoice == 1){
    matchChoice = "pari";
} else if (userChoice == 2) {
    matchChoice = "dispari";
} else {
    alert("per favore scegliere un valore intero compreso tra 1 e 2");
    location.reload();
}

console.log(matchChoice);

// user number input
const userNumber = Number(prompt("scegliere un tra 1 e 9 da giocare"));

//pc number generator
const pcNumber = 


// user input value check and sum calc
if (userNumber >= 1 && userNumber <= 9) {
    sum = userNumber + 
}