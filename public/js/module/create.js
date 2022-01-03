// Div de la calculatrice
let bigDiv = document.createElement('div')
bigDiv.className = 'Gdiv'
document.body.prepend(bigDiv)

let divEcran = document.createElement('div')
divEcran.className = 'partEcran'
bigDiv.append(divEcran)

let divTop = document.createElement('div')
divTop.className = 'top'
bigDiv.append(divTop)

let divMid = document.createElement('div')
divMid.className = 'mid'
bigDiv.append(divMid)

let divBot = document.createElement('div')
divBot.className = 'bot'
bigDiv.append(divBot)

let divBottom = document.createElement('div')
divBottom.className = 'bottom'
bigDiv.append(divBottom)

// écran de la calculatrice
let ecran = document.createElement('input')
ecran.type = 'text'
ecran.className = 'ecran'
divEcran.append(ecran)

// part top button
let sept = document.createElement('input')
sept.type = 'button'
sept.value = '7'
divTop.append(sept)

let huit = document.createElement('input')
huit.type = 'button'
huit.value = '8'
divTop.append(huit)

let neuf = document.createElement('input')
neuf.type = 'button'
neuf.value = '9'
divTop.append(neuf)

let plus = document.createElement('input')
plus.type = 'button'
plus.value = '+'
divTop.append(plus)

// part mid button
let quatre = document.createElement('input')
quatre.type = 'button'
quatre.value = '4'
divMid.append(quatre)

let cinq = document.createElement('input')
cinq.type = 'button'
cinq.value = '5'
divMid.append(cinq)

let six = document.createElement('input')
six.type = 'button'
six.value = '6'
divMid.append(six)

let moins = document.createElement('input')
moins.type = 'button'
moins.value = '-'
divMid.append(moins)

// part bot button
let un = document.createElement('input')
un.type = 'button'
un.value = '1'
divBot.append(un)

let deux = document.createElement('input')
deux.type = 'button'
deux.value = '2'
divBot.append(deux)

let trois = document.createElement('input')
trois.type = 'button'
trois.value = '3'
divBot.append(trois)

let fois = document.createElement('input')
fois.type = 'button'
fois.value = '*'
divBot.append(fois)

// part bottom button
let clear = document.createElement('input')
clear.type = 'button'
clear.value = 'C'
divBottom.append(clear)

let zero = document.createElement('input')
zero.type = 'button'
zero.value = '0'
divBottom.append(zero)

let egale = document.createElement('input')
egale.type = 'button'
egale.value = '='
divBottom.append(egale)

let divise = document.createElement('input')
divise.type = 'button'
divise.value = '/'
divBottom.append(divise)