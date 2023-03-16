// PAROLA PALINDROMA   
const parolaUtente=prompt("Dimmi la parola che vuoi verificare che sia palindroma");

//  OUTPUT
if(verificaParolePalindrome(parolaUtente) === true){
    console.log("PAROLA PALINDROMA");
}else{
    console.log("PAROLA NON PALINDROMA");
}



/***********************************/
// FUNZIONE PAROLE PALINDROME
/**
 * Description
 * @param {string} parola   prende in input la parola dell'utente
 * @returns {boolean}       restituisce se la parola è palindroma oppure no
 */
function verificaParolePalindrome(parola){
    const lunghezzaParola=parola.length;
    //  Confronto la prima metà e la seconda metà
    //  e Verifico l'uguaglianza delle parole
    //  VARIABILI
    let parolaPalindroma = false;
    i=0;
    //  CONTROLLO
    while(parola[i] === parola[lunghezzaParola - i - 1] && i<parseInt(lunghezzaParola/2)){
        parolaPalindroma = true;
        i++;
    }
    return parolaPalindroma;
}