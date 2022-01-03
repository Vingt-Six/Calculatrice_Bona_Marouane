// Div de la calculatrice
export let bigDiv = document.createElement('div')
bigDiv.className = 'Gdiv'
document.body.prepend(bigDiv)

export let divEcran = document.createElement('div')
divEcran.className = 'partEcran'
bigDiv.append(divEcran)

export let divTop = document.createElement('div')
divTop.className = 'top'
bigDiv.append(divTop)

export let divMid = document.createElement('div')
divMid.className = 'mid'
bigDiv.append(divMid)

export let divBot = document.createElement('div')
divBot.className = 'bot'
bigDiv.append(divBot)

export let divBottom = document.createElement('div')
divBottom.className = 'bottom'
bigDiv.append(divBottom)

// part ecran
export let ecran = document.createElement('input')
ecran.type = 'text'
ecran.className = 'ecran'
divEcran.append(ecran)

// part top button
export let sept = document.createElement('input')
sept.type = 'button'
sept.value = '7'
divTop.append(sept)

export let huit = document.createElement('input')
huit.type = 'button'
huit.value = '8'
divTop.append(huit)

export let neuf = document.createElement('input')
neuf.type = 'button'
neuf.value = '9'
divTop.append(neuf)

export let plus = document.createElement('input')
plus.type = 'button'
plus.value = '+'
plus.className = 'addi'
divTop.append(plus)

// part mid button
export let quatre = document.createElement('input')
quatre.type = 'button'
quatre.value = '4'
divMid.append(quatre)

export let cinq = document.createElement('input')
cinq.type = 'button'
cinq.value = '5'
divMid.append(cinq)

export let six = document.createElement('input')
six.type = 'button'
six.value = '6'
divMid.append(six)

export let moins = document.createElement('input')
moins.type = 'button'
moins.value = '-'
moins.className = 'sous'
divMid.append(moins)

// part bot button
export let un = document.createElement('input')
un.type = 'button'
un.value = '1'
divBot.append(un)

export let deux = document.createElement('input')
deux.type = 'button'
deux.value = '2'
divBot.append(deux)

export let trois = document.createElement('input')
trois.type = 'button'
trois.value = '3'
divBot.append(trois)

export let fois = document.createElement('input')
fois.type = 'button'
fois.value = '*'
fois.className = 'multi'
divBot.append(fois)

// part bottom button
export let clear = document.createElement('input')
clear.type = 'button'
clear.value = 'C'
clear.className = 'clear'
divBottom.append(clear)

export let zero = document.createElement('input')
zero.type = 'button'
zero.value = '0'
zero.className = 'zero'
divBottom.append(zero)

export let egale = document.createElement('input')
egale.type = 'button'
egale.value = '='
egale.className = 'result'
divBottom.append(egale)

export let divise = document.createElement('input')
divise.type = 'button'
divise.value = '/'
divise.className = 'divi'
divBottom.append(divise)