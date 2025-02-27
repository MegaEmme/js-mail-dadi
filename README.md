# Esercizio : Mail e Dadi

## Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
### Nota:

Non è necessario provvedere alla validazione delle email

#### *Pseudo-codice*
---
- creo una lista partecipanti
- la stampo a schermo
- chiedo all'utente di inserire la mail
    - **per** ogni nome nell'elenco
        - cerco nella lista se c'è la mail dell'utente 
        - **se** è presente
            - stampo "presente"
            - chiudo il ciclo
- **se** la mail utente non è presente
    - stampo "non presente" 

## Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
### Bonus
Invece di generare il numero random per l'utente, chiedilo con un prompt!

#### *Pseudo-codice*
---


## Consigli
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"