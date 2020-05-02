import {
  colorClearButton,
  colorTrueButton,
  colorFalseButton,
  colorActivatedMenu,
  colorTextMenuOn,
  colorTextMenuOff
} from '../index.js'

function writeChoice (nbChoice, kanaToStudy) {
  let myExpression = ''
  for (let i = 0; i < nbChoice; i++) {
    myExpression = `choice${i + 1}.innerText = '${kanaToStudy[i].letter}'`
    eval(myExpression)
  }
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
  disableChoice,
  enableChoice,
  deleteChoice,
  clearChoice,
  eraseChoice,
  displayCorrectNumberOfChoice
}