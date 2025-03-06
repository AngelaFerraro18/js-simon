
/*Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto*/

/*Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//prendo l'elemento ul e lo salvo in una variabile
const numListElement = document.getElementById('numbers-list');

// salvo in una variabile il valore del contenitore del conto alla rovescia
const countDownElement = document.getElementById('countdown');

// salvo in una variabile il valore del form
const answersFormElement = document.getElementById('answers-form');

//creo un ciclo per creare gli elementi li da inserire in ul
for (let i = 0; i < 5; i++) {
    const listElement = document.createElement('li');

    //creo una variabile dove salvo il valore del numero randomico che verrà generato compreso tra 1 e 50
    let randomNum = Math.floor(Math.random() * 50) + 1;

    //collego l'elemento li all'elemento ul
    listElement.append(randomNum);
    numListElement.appendChild(listElement);
}


// creo una variabile contatore che parte da 30
let count = 30;

// uso la timing-fn setInterval per attivare il countdown
const countThirtyToZero = setInterval(countDownFn, 1000);

































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