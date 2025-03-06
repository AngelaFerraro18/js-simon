/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. */

/*Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto*/

/*Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//prendo l'elemento ul e lo salvo in una variabile
const numListElement = document.getElementById('numbers-list');
console.log(numListElement);

//creo un ciclo per creare gli elementi li da inserire in ul
for (let i = 0; i < 5; i++){
    const listElement = document.createElement('li');
    
    //creo una variabile dove salvo il valore del numero randomico che verrà generato compreso tra 1 e 50
    let randomNum = Math.floor(Math.random() * 50) + 1;
    
    //collego l'elemento li all'elemento ul
    listElement.append(randomNum);
    numListElement.appendChild(listElement);
} 

