
//prendo l'elemento ul e lo salvo in una variabile
const numListElement = document.getElementById('numbers-list');

// salvo in una variabile il valore del contenitore del conto alla rovescia
const countDownElement = document.getElementById('countdown');

// salvo in una variabile il valore del form
const answersFormElement = document.getElementById('answers-form');

// salvo in delle variabili i valori dei numeri immessi dall'utente nei campi di input
const firstInputElement = document.getElementById('first-input');
const secondInputElement = document.getElementById('second-input');
const thirdInputElement = document.getElementById('third-input');
const fourthInputElement = document.getElementById('fourth-input');
const fiftInputElement = document.getElementById('fift-input');

// salvo in una variabile il valore del messaggio che comparirà dopo aver inviato i dati
const messageForUserElement = document.getElementById('message');

// creo un array vuoto per raccogliere i numeri random che saranno generati negli elementi li
let arrayRandomNumbers = [];

//creo un ciclo per creare gli elementi li da inserire in ul
for (let i = 0; i < 5; i++) {
    const listElement = document.createElement('li');

    //creo una variabile dove salvo il valore del numero randomico che verrà generato compreso tra 1 e 50
    let randomNum = Math.floor(Math.random() * 50) + 1;
    
    // metto nell'array vuoto creato prima i numeri random
    arrayRandomNumbers.push(randomNum);

    //collego l'elemento li all'elemento ul
    listElement.append(randomNum);
    numListElement.appendChild(listElement);
} 


// creo una variabile contatore che parte da 30
let count = 30;

// uso la timing-fn setInterval per attivare il countdown
const countThirtyToZero = setInterval(countDownFn, 1000);


// creo l'evento per il form 
answersFormElement.addEventListener('submit', function(e){

    e.preventDefault();

    // raccolgo i dati immessi dall'utente in un array e li converto in numero
    const numbers = [parseInt(firstInputElement.value), parseInt(secondInputElement.value), parseInt(thirdInputElement.value), parseInt(fourthInputElement.value), parseInt(fiftInputElement.value)];

    //controllo che i numeri immessi dall'utente siano presenti con l'uso di filter
    let guessedNumbers = numbers.filter(number => arrayRandomNumbers.includes(number));

    // il numero di numeri indovinati sarà uguale alla lunghezza dell'array generato con il metodo filter
    let correctNumberCount = guessedNumbers.length;
   
    // vado a inserire il messaggio per l'utente, con le informazioni su quanti numeri ha indovinato o se non ne ha indovinato nessuno
    if (correctNumberCount === 1){
        messageForUserElement.innerHTML = `Hai indovinato un numero su 5! (Numero indovinato: ${guessedNumbers.join("-")})`;
    } else if (correctNumberCount > 1){
        messageForUserElement.innerHTML = `Hai indovinato ${correctNumberCount} su 5! (Numeri indovinati: ${guessedNumbers.join("-")})`;
    } else {
        messageForUserElement.innerHTML = 'Non hai indovinato nessun numero!';
    }
})






/* funzioni */

function countDownFn() {
    count--

    countDownElement.innerText = count;

    if (count === 0) {
        clearInterval(countThirtyToZero);
        answersFormElement.classList.remove('d-none');
        numListElement.classList.add('d-none');
    }
}