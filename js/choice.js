import {
  nextKana
} from './../index.js'
import { oneLesson } from './init.js'

const colorClear = '#B8B8B8'
const colorTrue = '#16ca52'
const colorFalse = '#ca2716'

function displayCorrectNumberOfChoice (number) {
  let myExpression = ''
  for (let i = 5; i > 0; i--) {
    if (i > number) {
      myExpression = `choice${i}.style.display = 'none'`
    } else {
      myExpression = `choice${i}.style.display = 'block'`
    }
    eval(myExpression)    
  }
}

function clearChoice (number) {
  let myExpression = ''
  for (let i = 0; i < number; i++) {
    myExpression = `choice${i+1}.style.backgroundColor = colorClear`
    eval(myExpression)
  }
}

function writeChoice (number, arrayKana) {
  let myExpression = ''

  for (let i = 0; i < number; i++) {
    myExpression = `choice${i+1}.innerText = '${arrayKana[i].letter}'`
    eval(myExpression)
  }
}

function writeChoiceTrueFalse (number, result) {
  let myExpression = ''
  let oneChoice = ''

  for (let i = 0; i < number; i++) {
    oneChoice = eval(`choice${i+1}.innerText`)
    if (result === oneChoice) {
      myExpression = `choice${i+1}.setAttribute('data-key', 'true')`
    } else {
      myExpression = `choice${i+1}.setAttribute('data-key', 'false')`
    }
    eval(myExpression)
  }
}

function displayColorChoice (i, result) {
  let colorChoice = ''

  if (result === 'true') {
    colorChoice = 'colorTrue'
  } else {
    colorChoice = 'colorFalse'
  }
  const myExpression = `choice${i}.style.backgroundColor = ${colorChoice}`

  eval(myExpression)
}

function makeAChoice (choiceSelected, result) {

  if (result === 'true') {
    oneLesson.success += 1
    displayColorChoice(choiceSelected, result)
    setTimeout(nextKana, 400)
  } else {
    displayColorChoice(choiceSelected, result)
    setTimeout(nextKana, 400)
  }

}

export {
  clearChoice,
  writeChoice,
  writeChoiceTrueFalse,
  displayColorChoice,
  displayCorrectNumberOfChoice,
  makeAChoice
}
