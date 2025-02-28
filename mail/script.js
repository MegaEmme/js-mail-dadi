console.log("Mike's Mail list")

/* 
    - creo una lista partecipanti
    - la stampo a schermo
    - chiedo all'utente di inserire la mail
    - **per** ogni nome nell'elenco
        - cerco nella lista se c'è la mail dell'utente 
        - **se** è presente
            - stampo "presente"
            - chiudo il ciclo
    - **se** non è presente
        - stampo "non presente" 
*/

const mailList = ['pippo@gmail.com','pluto@gmail.com','paperino@gmail.com','topolino@gmail.com','minnie@gmail.com','clarabella@gmail.com', 'pietro@gmail.com','qui@gmail.com','quo@gmail.com','qua@gmail.com','paperone@gmail.com','nonnapapera@gmail.com','etabeta@gmail.com','paperina@gmail.com'];

console.log(mailList); 

let userMail = prompt("Inserisci la tua mail");

for (i=0; i<mailList.length; i++){
    if (userMail === mailList[i]) {
        console.log('Ho trovato la tua mail');
        break;
    }     
}

if (userMail !== mailList[i]){
    console.log("Spiacente, la tua mail non è presenta nell'elenco");
}