import {
  colorClearButton,
  colorTrueButton,
  colorFalseButton,
  colorActivatedMenu,
  colorTextMenuOn,
  colorTextMenuOff
} from '../index.js'

import {
  randomize, nextRandom
} from './helpers.js'

function writeChoice (nbChoice, kanaToStudy) {
  let myExpression = ''
  for (let i = 0; i < nbChoice; i++) {
    myExpression = `choice${i + 1}.innerText = '${kanaToStudy[i].letter}'`
    eval(myExpression)
  }
}

function writeChoiceMoreThanNbChoicePossible (nbChoice, kanaToStudy, iTrueKana) {
  let myExpression = ''
  let arrayToWrite = []
  let indexNextRandom
  let indexUsed = []

  // the true kana
  arrayToWrite.push(kanaToStudy[iTrueKana])
  indexUsed.push(iTrueKana)

  for (let j = 0; j < nbChoice - 1; j++) {
    indexNextRandom = nextRandom(kanaToStudy.length)

    // random int not selected twice
    while (indexUsed.includes(indexNextRandom)) {
      indexNextRandom = nextRandom(kanaToStudy.length)
    }

    // true kana not selected twice
    while (indexNextRandom === iTrueKana) {
      indexNextRandom = nextRandom(kanaToStudy.length)
    }

    indexUsed.push(indexNextRandom)
    arrayToWrite.push(kanaToStudy[indexNextRandom])
  }
  arrayToWrite = randomize(arrayToWrite)

  for (let i = 0; i < nbChoice; i++) {
    myExpression = `choice${i + 1}.innerText = '${arrayToWrite[i].letter}'`
    eval(myExpression)
  }

  return arrayToWrite
}

function disableChoice (nbChoice) {
  let myExpression = ''
  for (let i = 0; i < nbChoice; i++) {
    myExpression = `choice${i + 1}.style.backgroundColor = '${colorClearButton}'`
    eval(myExpression)
    myExpression = `choice${i + 1}.style.pointerEvents = 'none'`
    eval(myExpression)
  }
}

function enableChoice (nbChoice) {
  let myExpression = ''
  for (let i = 0; i < nbChoice; i++) {
    myExpression = `choice${i + 1}.style.backgroundColor = '${colorClearButton}'`
    eval(myExpression)
    myExpression = `choice${i + 1}.style.pointerEvents = 'auto'`
    eval(myExpression)
  }
}

// remove the choice button
function deleteChoice (nbChoice) {
  let myExpression = ''
  for (let i = 0; i < nbChoice; i++) {
    myExpression = `choice${i + 1}.style.display = 'none'`
    eval(myExpression)
  }
}

// remove the color of the choice buttons
function clearChoice (nbChoice) {
  let myExpression = ''
  for (let i = 0; i < nbChoice; i++) {
    myExpression = `choice${i + 1}.style.backgroundColor = '${colorClearButton}'`
    eval(myExpression)
  }
}

// remove the text in the choice
function eraseChoice (nbChoice) {
  let myExpression = ''
  for (let i = 0; i < nbChoice; i++) {
    myExpression = `choice${i + 1}.innerText = ''`
    eval(myExpression)
  }
}

function displayCorrectNumberOfChoice (nbChoice) {
  let myExpression = ''
  for (let i = 5; i > 0; i--) {
    if (i > nbChoice) {
      myExpression = `choice${i}.style.display = 'none'`
    } else {
      myExpression = `choice${i}.style.display = 'block'`
    }
    eval(myExpression)
  }
}

export {
  writeChoice,
  writeChoiceMoreThanNbChoicePossible,
  disableChoice,
  enableChoice,
  deleteChoice,
  clearChoice,
  eraseChoice,
  displayCorrectNumberOfChoice
}