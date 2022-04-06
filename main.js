/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/



//PRIMO PASSO - Sviluppo 5 numeri casuali da inserire in una array.

//Funzione generica per numeri random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//console.log(getRandomNumber(1, 10)); - Numero random generato.


//Estraggo 5 numeri dalla mia funzione getRandomNumber
function getNumbersForArray() {

    //La mia array.
    const arrayRandomNumbers = [];
    //console.log(arrayRandomNumbers); - Array vuota.

    while (arrayRandomNumbers.length !== 5) {

        const RandomNumber = getRandomNumber(1, 10)
            //console.log(RandomNumber); - Genera 5 numeri random.

        if (!arrayRandomNumbers.includes(RandomNumber)) {
            arrayRandomNumbers.push(RandomNumber)
        }

    }
    return arrayRandomNumbers
}
console.log(getNumbersForArray()); //- Array piena.



//SECONDO PASSO - Visualizzare i numeri nella pagina.
document.getElementById('numeri').innerHTML = getNumbersForArray();



//TERZO PASSO - Sviluppare la funzione Asincrona per vedere i numeri per 30s.
setTimeout(function() {
    document.getElementById('numeri').style.display = 'none';
}, 3000)



//QUARTO PASSO - Chiedere all'utente di inserire i numeri visti in precedenza.
setTimeout(function getArrayUserNumbers() {

    //Arrey dell'utente
    const arrayUserNumbers = [];
    //console.log(arrayUserNumbers); - Array vuota.

    //Richiamo array generata.
    const randomNumber = getNumbersForArray();
    console.log(randomNumber);

    for (i = 1; i <= 5; i++) {
        const userNumber = parseInt(prompt(`Inserisci il ${i} numero`))
        console.log(userNumber); //- Numeri digitati dall'utente.


        //Inserisco i numeri digitati dall'utente e li inserisco nell'array.
        arrayUserNumbers.push(userNumber)
    }
    return arrayUserNumbers
}, 3500)

console.log(getArrayUserNumbers()); //- Array con i numeri digitati dall'utente.

//QUINTO PASSO - identificare quanti e quali dei numeri da indovinare sono stati individuati.
//Confrontare le due arrey