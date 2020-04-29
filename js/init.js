import { Lesson } from '../component/lesson.js'
import { Guess } from '../component/guess.js'

const oneLesson = new Lesson()
const oneGuess = new Guess()

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

btnHToRA.addEventListener('click', () => oneLesson.hToRA(oneGuess))
btnKToRA.addEventListener('click', () => oneLesson.kToRA(oneGuess))
btnHToRK.addEventListener('click', () => oneLesson.hToRK(oneGuess))
btnKToRK.addEventListener('click', () => oneLesson.kToRK(oneGuess))
btnHToRS.addEventListener('click', () => oneLesson.hToRS(oneGuess))
btnKToRS.addEventListener('click', () => oneLesson.kToRS(oneGuess))
btnHToRT.addEventListener('click', () => oneLesson.hToRT(oneGuess))
btnKToRT.addEventListener('click', () => oneLesson.kToRT(oneGuess))
btnHToRN.addEventListener('click', () => oneLesson.hToRN(oneGuess))
btnKToRN.addEventListener('click', () => oneLesson.kToRN(oneGuess))
btnHToRH.addEventListener('click', () => oneLesson.hToRH(oneGuess))
btnKToRH.addEventListener('click', () => oneLesson.kToRH(oneGuess))
btnHToRM.addEventListener('click', () => oneLesson.hToRM(oneGuess))
btnKToRM.addEventListener('click', () => oneLesson.kToRM(oneGuess))
btnHToRY.addEventListener('click', () => oneLesson.hToRY(oneGuess))
btnKToRY.addEventListener('click', () => oneLesson.kToRY(oneGuess))
btnHToRR.addEventListener('click', () => oneLesson.hToRR(oneGuess))
btnKToRR.addEventListener('click', () => oneLesson.kToRR(oneGuess))
btnHToRW.addEventListener('click', () => oneLesson.hToRW(oneGuess))
btnKToRW.addEventListener('click', () => oneLesson.kToRW(oneGuess))

choice1.addEventListener('click', () => {
  oneGuess.choiceSelectedIndex = 0
  oneGuess.makeAChoice(oneLesson)
})

choice2.addEventListener('click', () => {
  oneGuess.choiceSelectedIndex = 1
  oneGuess.makeAChoice(oneLesson)
})

choice3.addEventListener('click', () => {
  oneGuess.choiceSelectedIndex = 2
  oneGuess.makeAChoice(oneLesson)
})

choice4.addEventListener('click', () => {
  oneGuess.choiceSelectedIndex = 3
  oneGuess.makeAChoice(oneLesson)
})

choice5.addEventListener('click', () => {
  oneGuess.choiceSelectedIndex = 4
  oneGuess.makeAChoice(oneLesson)
})

export {
  oneLesson,
  oneGuess
}