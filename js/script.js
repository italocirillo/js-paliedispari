// PAROLA PALINDROMA   
const parolaUtente = prompt("Dimmi la parola che vuoi verificare che sia palindroma");

//  OUTPUT
if (verificaParolePalindrome(parolaUtente) === true) {
    console.log("PAROLA PALINDROMA");
} else {
    console.log("PAROLA NON PALINDROMA");
}

// PARI E DISPARI   
const numeroUtente = prompt("Dimmi il numero da 1 a 5 che vuoi sommare a uno random");
const sceltaUtente = prompt("Dimmi se secondo te la scelta sarà pari o dispari");

//  OUTPUT
if (sommaPariDispari(numeroUtente, sceltaUtente) === true) {
    console.log("HAI VINTO");
} else {
    console.log("NON HAI VINTO");
}



/***********************************/
// FUNZIONE PAROLE PALINDROME
/**
 * Description
 * @param {string} parola  prende in input la parola dell'utente
 * @returns {boolean}      restituisce se la parola è palindroma oppure no
 */
function verificaParolePalindrome(parola) {
    const lunghezzaParola = parola.length;
    //  Confronto la prima metà e la seconda metà
    //  e Verifico l'uguaglianza delle parole
    //  VARIABILI
    let parolaPalindroma = false;
    i = 0;
    //  CONTROLLO
    while (parola[i] === parola[lunghezzaParola - i - 1] && i < parseInt(lunghezzaParola / 2)) {
        parolaPalindroma = true;
        i++;
    }
    return parolaPalindroma;
}


/************************/
// FUNZIONE PARI E DISPARI
/**
 * Description
 * @param {number} numero   prende un numero in input
 * @param {string} scelta   prende in input la scelta
 * @returns {boolean}       restituisce se il numero sommato a uno random sia pari o dispari
 */
function sommaPariDispari(numero, scelta) {
    // Genero numero random
    const numeroRandom = Math.floor(Math.random() * 5 + 1);
    console.log("numero generato dal pc "+numeroRandom);
    // Variabili
    let pari = true;
    let vinto = true;
    console.log(numeroRandom);
    // Sommo i numeri
    somma = numeroRandom + numero;
    // Verifico se sia pari o dispari e la scelta dell'utente
    if(somma %2 === 0){
        pari = true;
    }else{
        pari = false;
    }

    if(pari === true){
        if(scelta === "pari"){
            vinto = true;
        } else{
            vinto = false;
        }
    }else {
        if(scelta === true){
            vinto = false;
        }else{
            vinto = true;
        }
    }
    return vinto;
}
