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