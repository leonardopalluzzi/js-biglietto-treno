/*Traccia:

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */



// prompts dati utente
// calcolo tariffa generica al km
// applico condizioni scontistica in base all'eta, limitando a due il numero dei decimali

// user inputs
const distance = prompt('inserire la distanza che si vuole percorrere in km [10, 20.22]');
console.log(distance);

const age = prompt('isnerire la propria eta [15, 45, 20]');
console.log(age);

// base price calc
const basePrice = distance * 0.21;

// initialize final price
let finalPrice;