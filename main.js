/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


// PRIMO PASSO - genero numeri random da stampare a schermo, e li stampo 

function getNumber() {

    //Funzione generica per numeri random
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //console.log(getRandomNumber(1, 10)); - Numero random generato.

    //Array PC;
    const arrayRandomNumbers = [];
    //console.log(arrayRandomNumbers); //- Array vuota.

    while (arrayRandomNumbers.length !== 5) {

        const numeriRandom = getRandomNumber(1, 10);
        //console.log(RandomNumber); - Genera 5 numeri random.

        if (!arrayRandomNumbers.includes(numeriRandom)) {
            arrayRandomNumbers.push(numeriRandom)
        }
    }
    return arrayRandomNumbers

}

const arrayGenerata = getNumber()
console.log(arrayGenerata);

//Visualizzare i numeri nella pagina.
document.getElementById('numeri').innerHTML = arrayGenerata;

//Sviluppare la funzione Asincrona per vedere i numeri per 30s.
setTimeout(function() {
    document.getElementById('numeri').style.display = 'none';
}, 3000)


// SECONDO PASSO - fa partire i prompt per chiedere i numeri all'utente --> confronta --> da il risultatato

setTimeout(getAll, 4000)

function getAll() {

    //Arrey dell'utente;
    const arrayUserNumbers = [];
    //console.log(arrayUserNumbers); - Array vuota;

    for (i = 1; i <= 5; i++) {
        const userNumber = parseInt(prompt(`Inserisci il ${i} numero`));
        //console.log(userNumber); //- Numeri digitati dall'utente;

        //Inserisco i numeri digitati dall'utente e li inserisco nell'array;
        arrayUserNumbers.push(userNumber);
        //console.log(arrayUserNumbers);


        console.log(arrayUserNumbers);

        const arrayConfronto = [];

        if (arrayUserNumbers === arrayGenerata) {
            arrayConfronto.push(userNumber)
            document.getElementById('risultato').innerHTML = (`Questi sono i numeri che hai trovato ${arrayConfronto.length}, ovvero: ${arrayConfronto}`);
        } else {
            document.getElementById('risultato').innerHTML = ('Non hai trovato nessun numero');
        }
    }
}