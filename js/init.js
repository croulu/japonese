import {
  hToRA,
  kToRA,
  hToRK,
  kToRK,
  hToRS,
  kToRS,
  hToRT,
  kToRT,
  hToRN,
  kToRN,
  hToRH,
  kToRH,
  hToRM,
  kToRM,
  hToRY,
  kToRY,
  hToRR,
  kToRR,
  hToRW,
  kToRW
} from './lessons.js'

import {
  makeAChoice
} from './choice.js'

const btnHToRA = document.getElementById('hToRA')
const btnKToRA = document.getElementById('kToRA')
const btnHToRK = document.getElementById('hToRK')
const btnKToRK = document.getElementById('kToRK')
const btnHToRS = document.getElementById('hToRS')
const btnKToRS = document.getElementById('kToRS')
const btnHToRT = document.getElementById('hToRT')
const btnKToRT = document.getElementById('kToRT')
const btnHToRN = document.getElementById('hToRN')
const btnKToRN = document.getElementById('kToRN')
const btnHToRH = document.getElementById('hToRH')
const btnKToRH = document.getElementById('kToRH')
const btnHToRM = document.getElementById('hToRM')
const btnKToRM = document.getElementById('kToRM')
const btnHToRY = document.getElementById('hToRY')
const btnKToRY = document.getElementById('kToRY')
const btnHToRR = document.getElementById('hToRR')
const btnKToRR = document.getElementById('kToRR')
const btnHToRW = document.getElementById('hToRW')
const btnKToRW = document.getElementById('kToRW')

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
btnHToRT.addEventListener('click', () => hToRT())
btnKToRT.addEventListener('click', () => kToRT())
btnHToRN.addEventListener('click', () => hToRN())
btnKToRN.addEventListener('click', () => kToRN())
btnHToRH.addEventListener('click', () => hToRH())
btnKToRH.addEventListener('click', () => kToRH())
btnHToRM.addEventListener('click', () => hToRM())
btnKToRM.addEventListener('click', () => kToRM())
btnHToRY.addEventListener('click', () => hToRY())
btnKToRY.addEventListener('click', () => kToRY())
btnHToRR.addEventListener('click', () => hToRR())
btnKToRR.addEventListener('click', () => kToRR())
btnHToRW.addEventListener('click', () => hToRW())
btnKToRW.addEventListener('click', () => kToRW())

choice1.addEventListener('click', () => makeAChoice(1, choice1.getAttribute('data-key')))
choice2.addEventListener('click', () => makeAChoice(2, choice2.getAttribute('data-key')))
choice3.addEventListener('click', () => makeAChoice(3, choice3.getAttribute('data-key')))
choice4.addEventListener('click', () => makeAChoice(4, choice4.getAttribute('data-key')))
choice5.addEventListener('click', () => makeAChoice(5, choice5.getAttribute('data-key')))
