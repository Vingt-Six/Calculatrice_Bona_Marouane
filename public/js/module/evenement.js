import {sept,huit,neuf,plus,quatre,cinq,six,moins,un,deux,trois,fois,clear,zero,egale,divise, ecran } from "./create.js";

// variable utilisé
let number = [sept,huit,neuf,quatre,cinq,six,un,deux,trois,zero]
let resultat;
let ope;
let nbr1;

// target les chiffres
number.forEach(element => {
    element.addEventListener('click', function(){
        ecran.value += element.value
    })
});

// Addition
plus.addEventListener('click', function(){
    nbr1 = ecran.value
    ecran.value = ''
    ope = "+"
})

// Soustraction
moins.addEventListener('click', function(){
    nbr1 = ecran.value
    ecran.value = ''
    ope = "-"
})

// Multiplication
fois.addEventListener('click', function(){
    nbr1 = ecran.value
    ecran.value = ''
    ope = "*"
})

// Division
divise.addEventListener('click', function(){
    nbr1 = ecran.value
    ecran.value = ''
    ope = "/"
})

// Résultat
egale.addEventListener('click', function(){
    let nbr2 = parseInt(ecran.value)
    switch (ope) {
        case '+':
            resultat = parseInt(nbr1) + nbr2
            ecran.value = resultat
            break;
        case '-':
            resultat = parseInt(nbr1) - nbr2
            ecran.value = resultat
            break;
        case '*':
            resultat = parseInt(nbr1) * nbr2  
            ecran.value = resultat
            break;
        case '/':
            resultat = parseInt(nbr1) / nbr2
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