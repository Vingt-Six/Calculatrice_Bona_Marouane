import {sept,huit,neuf,plus,quatre,cinq,six,moins,un,deux,trois,fois,clear,zero,egale,divise, ecran } from "./module/create.js";

// variable utilisé
let number = [sept,huit,neuf,quatre,cinq,six,un,deux,trois,zero]
let resultat;
let ope;
let nbr1;
let oprateur = [plus,moins,fois,divise]

// target les chiffres
number.forEach(element => {
    element.addEventListener('click', function(){
        ecran.value += element.value
    })
});

// target les opérteur
oprateur.forEach(element => {
    element.addEventListener('click', function(){
        nbr1 = parseInt(ecran.value)
        ecran.value = ''
        ope = element.value
    })
});

// Résultat
egale.addEventListener('click', function(){
    let nbr2 = parseInt(ecran.value)
    switch (ope) {
        case '+':
            resultat = nbr1 + nbr2
            ecran.value = resultat
            break;
        case '-':
            resultat = nbr1 - nbr2
            ecran.value = resultat
            break;
        case '*':
            resultat = nbr1 * nbr2  
            ecran.value = resultat
            break;
        case '/':
            resultat = nbr1 / nbr2
            ecran.value = resultat
            break;
    }
})

// "C" button clear
clear.addEventListener('click', function(){
    ecran.value = ''
    nbr1 = ''
    nbr2 = ''
    ope = ''
})