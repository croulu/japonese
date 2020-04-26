import {
  hToRA,
  kToRA,
  hToRK,
  kToRK,
  hToRS,
  kToRS
} from './lessons.js'

import {
  makeAChoice
} from './../index.js'

const btnHToRA = document.getElementById('hToRA')
const btnKToRA = document.getElementById('kToRA')
const btnHToRK = document.getElementById('hToRK')
const btnKToRK = document.getElementById('kToRK')
const btnHToRS = document.getElementById('hToRS')
const btnKToRS = document.getElementById('kToRS')

const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')
const choice4 = document.getElementById('choice4')
const choice5 = document.getElementById('choice5')

btnHToRA.addEventListener('click', () => hToRA())
btnKToRA.addEventListener('click', () => kToRA())
btnHToRK.addEventListener('click', () => hToRK())
btnKToRK.addEventListener('click', () => kToRK())
btnHToRS.addEventListener('click', () => hToRS())
btnKToRS.addEventListener('click', () => kToRS())

choice1.addEventListener('click', () => makeAChoice(1, choice1.getAttribute('data-key')))
choice2.addEventListener('click', () => makeAChoice(2, choice2.getAttribute('data-key')))
choice3.addEventListener('click', () => makeAChoice(3, choice3.getAttribute('data-key')))
choice4.addEventListener('click', () => makeAChoice(4, choice4.getAttribute('data-key')))
choice5.addEventListener('click', () => makeAChoice(5, choice5.getAttribute('data-key')))
