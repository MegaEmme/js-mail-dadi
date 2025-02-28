console.log("Mike's Dice")

/*
- calcolo randomicamnete un numero tra 1 e 6
- lo stampo
- chiedo all'utente di inserire un numero da 1 a 6 
- controllo se il numero è compreso tra 1 e 6 
- **se** il numero è compreso tra 1 e 6
    - **se** il numero inserito è maggiore di quello randomico
        - stampo 'Hai vinto'
    - **se** il numero inserito è minore di quello randomico
        - stampo 'Hai perso'
    - **se** il numero inserito è uguale a quello randomico
        - stampo 'Pareggio'

- **altrimenti** 
    - mando messaggio di errore
*/

const randomicNumbers = Math.floor(Math.random()*6+1); // +1 perchè deve partire da 1 (non da 0)

console.log(randomicNumbers);

let userNumber = prompt('Per continuare, inserisci un numero da 1 a 6');

if (userNumber>0 && userNumber<7){
    if(userNumber > randomicNumbers && userNumber < 7){
        console.log('Hai vinto!');
    } else if (userNumber < randomicNumbers && userNumber > 0) {
        console.log('Hai perso!');
    } else if (userNumber == randomicNumbers){
        console.log('Pareggio!');
    }
}

