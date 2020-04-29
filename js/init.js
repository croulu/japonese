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
btnKToRA.addEventListener('click', () => oneLesson.kToRA())
btnHToRK.addEventListener('click', () => oneLesson.hToRK())
btnKToRK.addEventListener('click', () => oneLesson.kToRK())
btnHToRS.addEventListener('click', () => oneLesson.hToRS())
btnKToRS.addEventListener('click', () => oneLesson.kToRS())
btnHToRT.addEventListener('click', () => oneLesson.hToRT())
btnKToRT.addEventListener('click', () => oneLesson.kToRT())
btnHToRN.addEventListener('click', () => oneLesson.hToRN())
btnKToRN.addEventListener('click', () => oneLesson.kToRN())
btnHToRH.addEventListener('click', () => oneLesson.hToRH())
btnKToRH.addEventListener('click', () => oneLesson.kToRH())
btnHToRM.addEventListener('click', () => oneLesson.hToRM())
btnKToRM.addEventListener('click', () => oneLesson.kToRM())
btnHToRY.addEventListener('click', () => oneLesson.hToRY())
btnKToRY.addEventListener('click', () => oneLesson.kToRY())
btnHToRR.addEventListener('click', () => oneLesson.hToRR())
btnKToRR.addEventListener('click', () => oneLesson.kToRR())
btnHToRW.addEventListener('click', () => oneLesson.hToRW())
btnKToRW.addEventListener('click', () => oneLesson.kToRW())

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