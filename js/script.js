 // PAROLA PALINDROMA
const bottoneParolaPalindroma=document.querySelector(".bottone-parola-palindroma");
bottoneParolaPalindroma.addEventListener("click", function(){ 
    const parolaUtente = document.getElementById("parola-utente");
    const outputParolaPalindroma=document.querySelector(".output-parola-palindroma");
    // Ripulisco l'output 
    outputParolaPalindroma.innerHTML="";
    //  OUTPUT
    if (verificaParolePalindrome(parolaUtente.value.toUpperCase(parolaUtente)) === true) {
        outputParolaPalindroma.innerHTML += parolaUtente.value.toUpperCase(parolaUtente) +" È UNA PAROLA PALINDROMA";
        console.log("PAROLA PALINDROMA");
    } else {
        outputParolaPalindroma.innerHTML += parolaUtente.value.toUpperCase(parolaUtente) +" NON È UNA PAROLA PALINDROMA";
        console.log("PAROLA NON PALINDROMA");
    }
    // Ripulisco l'input
    parolaUtente.value="";
})


// PARI E DISPARI   
// const numeroUtente = prompt("Dimmi il numero da 1 a 5 che vuoi sommare a uno random");
// const sceltaUtente = prompt("Dimmi se secondo te la scelta sarà pari o dispari");
const bottonePariDispari=document.querySelector(".bottone-pari-dispari");
bottonePariDispari.addEventListener("click",function(){
    const numeroUtente = document.getElementById("numero-utente");
    const sceltaUtente = document.getElementById("scelta-utente");
    const outputPariDispari=document.querySelector(".output-pari-dispari");
    
    console.log(sceltaUtente.value);
    //  OUTPUT
    if(sommaPariDispari(parseInt(numeroUtente.value), sceltaUtente.value) === true){
        outputPariDispari.innerHTML = "HAI VINTO";
    }else{
        outputPariDispari.innerHTML = "HAI PERSO";
    }
})


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
    // Sommo i numeri
    somma = parseInt(numeroRandom) + parseInt(numero);
    console.log("il tuo numero è "+numero+typeof(numero))
    console.log("la somma è "+somma+typeof(somma));
    console.log("la scelta è "+scelta+typeof(scelta));
    // Verifico se sia pari o dispari e la scelta dell'utente
    if(somma%2 === 0){
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
        if(scelta === "dispari"){
            vinto = true;
        }else{
            vinto = false;
        }
    }
    console.log(vinto);
    return vinto;
}
