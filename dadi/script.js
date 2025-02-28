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


// math.floor *6+1 perchè deve partire da 1 (non da 0)
// math.ceil invece parte gia da 1 quindi basta fare *6
// math.round invece *5+1 (sono i n.da 0 a 5 ==> +1 ==>sono i n.da 1 a 6)

let userNumber;
let isNumberValid;
let retries = 5;

while (isNumberValid !== true && retries > 0) {
    userNumber = parseInt(prompt('Per continuare, inserisci un numero da 1 a 6'));
    isNumberValid = userNumber>=1 && userNumber<=6 && !isNaN(userNumber);
    retries --;
}

let randomicNumbers = Math.floor(Math.random()*6+1);

console.log(randomicNumbers);

if (userNumber>0 && userNumber<7 && isNumberValid){
    if(userNumber > randomicNumbers && userNumber < 7){
        console.log('Hai vinto!');
    } else if (userNumber < randomicNumbers && userNumber > 0) {
        console.log('Hai perso!');
    } else if (userNumber == randomicNumbers){
        console.log('Pareggio!');
    }
} else {
    console.log('Il numero non è valido');
}

    