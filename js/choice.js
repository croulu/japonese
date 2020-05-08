import imgHiragana from '../img/hiragana/*.*'
import imgKatakana from '../img/katakana/*.*'

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

function writeChoiceWhat (guessWhat, alphabet, indexChoice, kanaLetter) {
  let specificImage = ''
  let myExpression = ''

  if (guessWhat === 0) {
    myExpression = `choice${indexChoice}Txt.innerText = '${kanaLetter}'`
    eval(myExpression)

    myExpression = `choice${indexChoice}Img.src = ''`
    eval(myExpression)
  } else {

    if (alphabet === 'h') {
      specificImage = imgHiragana[kanaLetter]
    } else if (alphabet === 'k') {
      specificImage = imgKatakana[kanaLetter]
    }

    myExpression = `choice${indexChoice}Txt.innerText = ''`
    eval(myExpression)

    myExpression = `choice${indexChoice}Img.src = '${specificImage.png}'`
    eval(myExpression)
  }
}

function writeChoice (guessWhat, nbChoice, kanaToStudy) {
  for (let i = 0; i < nbChoice; i++) {
    writeChoiceWhat(guessWhat, kanaToStudy[i].alphabet, i + 1, kanaToStudy[i].letter)
  }
}

function writeChoiceMoreThanNbChoicePossible (guessWhat, nbChoice, kanaToStudy, iTrueKana) {
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
    writeChoiceWhat(guessWhat, arrayToWrite[i].alphabet, i + 1, arrayToWrite[i].letter)
  }

  return arrayToWrite
}

function randomizeChoice (guessWhat, kanaToStudy) {
  let arrayChoice = []

  for (let i = 0; i < kanaToStudy.length; i++) {
    arrayChoice.push(kanaToStudy[i])
  }
  // in case of rimanji to guess, do not display the kana in the alphabet order
  // it would be too easy to guess :)
  if (guessWhat === 1) {
    arrayChoice = randomize(arrayChoice)
  }

  return arrayChoice
}

function displayButtonChoice (nbChoice) {
  deleteChoice(nbChoice)
  clearChoice(nbChoice)
  enableChoice(nbChoice)
  displayCorrectNumberOfChoice(nbChoice)
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
    myExpression = `choice${i + 1}Txt.innerText = ''`
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

function displayColorChoice (index, colorToApply) {
  let myExpression = ''
  myExpression = `choice${index}.style.backgroundColor = '${colorToApply}'`
  eval(myExpression)
}

export {
  writeChoiceWhat,
  writeChoice,
  writeChoiceMoreThanNbChoicePossible,
  randomizeChoice,
  disableChoice,
  enableChoice,
  deleteChoice,
  clearChoice,
  eraseChoice,
  displayCorrectNumberOfChoice,
  displayButtonChoice,
  displayColorChoice
}