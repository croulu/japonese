import { Lesson } from '../component/lesson.js'
import { Guess } from '../component/guess.js'

import {
  displayAlphabetHiragana,
  displayAlphabetKatakana,
  displayScreenHomePage,
  displayRomanji
} from './menu.js'

import {
  setStatusLessonInStorage
} from './helpers.js'

const oneLesson = new Lesson()
const oneGuess = new Guess()

const btnAlphabetHiragana = document.getElementById('btnAlphabetHiragana')
const btnAlphabetKatakana = document.getElementById('btnAlphabetKatakana')
const btnBackMenu = document.getElementById('btnBackMenu')
const btnRomanji = document.getElementById('btnRomanji')

const btnAllHiraganaLearned = document.getElementById('btnAllHiraganaLearned')
const btnAllKatakanaLearned = document.getElementById('btnAllKatakanaLearned')

const btnGuessHaiueo = document.getElementById('btnGuessHaiueo')
const btnGuessKaiueo = document.getElementById('btnGuessKaiueo')
const btnGuessHkakikukeko = document.getElementById('btnGuessHkakikukeko')
const btnGuessKkakikukeko = document.getElementById('btnGuessKkakikukeko')
const btnGuessHsashisuseso = document.getElementById('btnGuessHsashisuseso')
const btnGuessKsashisuseso = document.getElementById('btnGuessKsashisuseso')
const btnGuessHtachitsuteto = document.getElementById('btnGuessHtachitsuteto')
const btnGuessKtachitsuteto = document.getElementById('btnGuessKtachitsuteto')
const btnGuessHnaninuneno = document.getElementById('btnGuessHnaninuneno')
const btnGuessKnaninuneno = document.getElementById('btnGuessKnaninuneno')
const btnGuessHhahifuheho = document.getElementById('btnGuessHhahifuheho')
const btnGuessKhahifuheho = document.getElementById('btnGuessKhahifuheho')
const btnGuessHmamimumemo = document.getElementById('btnGuessHmamimumemo')
const btnGuessKmamimumemo = document.getElementById('btnGuessKmamimumemo')
const btnGuessHyayuyo = document.getElementById('btnGuessHyayuyo')
const btnGuessKyayuyo = document.getElementById('btnGuessKyayuyo')
const btnGuessHrarirurero = document.getElementById('btnGuessHrarirurero')
const btnGuessKrarirurero = document.getElementById('btnGuessKrarirurero')
const btnGuessHwawon = document.getElementById('btnGuessHwawon')
const btnGuessKwawon = document.getElementById('btnGuessKwawon')

const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')
const choice4 = document.getElementById('choice4')
const choice5 = document.getElementById('choice5')

oneLesson.setAllLesson()

if (oneLesson.getNbTrueLessons() === 0) {
  setInitLessons()
}

function setInitLessons () {
  let arrayInitLesson = []
  arrayInitLesson.push('h-a-i-u-e-o')
  arrayInitLesson.push('k-a-i-u-e-o')

  for (let i = 0; i < arrayInitLesson.length; i++) {
    setStatusLessonInStorage(arrayInitLesson[i], 'inprogress')
  }
}

btnAlphabetHiragana.addEventListener('click', () => displayAlphabetHiragana())
btnAlphabetKatakana.addEventListener('click', () => displayAlphabetKatakana())

btnBackMenu.addEventListener('click', () => displayScreenHomePage())
btnRomanji.addEventListener('click', () => displayRomanji())

btnAllHiraganaLearned.addEventListener('click', () => oneLesson.launchLesson(oneLesson.getAllLearnedLessonsInString('h'), oneGuess))
btnAllKatakanaLearned.addEventListener('click', () => oneLesson.launchLesson(oneLesson.getAllLearnedLessonsInString('k'), oneGuess))

btnGuessHaiueo.addEventListener('click', () => oneLesson.launchLesson('h-a-i-u-e-o', oneGuess))
btnGuessKaiueo.addEventListener('click', () => oneLesson.launchLesson('k-a-i-u-e-o', oneGuess))
btnGuessHkakikukeko.addEventListener('click', () => oneLesson.launchLesson('h-ka-ki-ku-ke-ko', oneGuess))
btnGuessKkakikukeko.addEventListener('click', () => oneLesson.launchLesson('k-ka-ki-ku-ke-ko', oneGuess))
btnGuessHsashisuseso.addEventListener('click', () => oneLesson.launchLesson('h-sa-shi-su-se-so', oneGuess))
btnGuessKsashisuseso.addEventListener('click', () => oneLesson.launchLesson('k-sa-shi-su-se-so', oneGuess))
btnGuessHtachitsuteto.addEventListener('click', () => oneLesson.launchLesson('h-ta-chi-tsu-te-to', oneGuess))
btnGuessKtachitsuteto.addEventListener('click', () => oneLesson.launchLesson('k-ta-chi-tsu-te-to', oneGuess))
btnGuessHnaninuneno.addEventListener('click', () => oneLesson.launchLesson('h-na-ni-nu-ne-no', oneGuess))
btnGuessKnaninuneno.addEventListener('click', () => oneLesson.launchLesson('k-na-ni-nu-ne-no', oneGuess))
btnGuessHhahifuheho.addEventListener('click', () => oneLesson.launchLesson('h-ha-hi-fu-he-ho', oneGuess))
btnGuessKhahifuheho.addEventListener('click', () => oneLesson.launchLesson('k-ha-hi-fu-he-ho', oneGuess))
btnGuessHmamimumemo.addEventListener('click', () => oneLesson.launchLesson('h-ma-mi-mu-me-mo', oneGuess))
btnGuessKmamimumemo.addEventListener('click', () => oneLesson.launchLesson('k-ma-mi-mu-me-mo', oneGuess))
btnGuessHyayuyo.addEventListener('click', () => oneLesson.launchLesson('h-ya-yu-yo', oneGuess))
btnGuessKyayuyo.addEventListener('click', () => oneLesson.launchLesson('k-ya-yu-yo', oneGuess))
btnGuessHrarirurero.addEventListener('click', () => oneLesson.launchLesson('h-ra-ri-ru-re-ro', oneGuess))
btnGuessKrarirurero.addEventListener('click', () => oneLesson.launchLesson('k-ra-ri-ru-re-ro', oneGuess))
btnGuessHwawon.addEventListener('click', () => oneLesson.launchLesson('h-wa-wo-n', oneGuess))
btnGuessKwawon.addEventListener('click', () => oneLesson.launchLesson('k-wa-wo-n', oneGuess))

choice1.addEventListener('click', () => oneGuess.makeAChoice(0, oneLesson))
choice2.addEventListener('click', () => oneGuess.makeAChoice(1, oneLesson))
choice3.addEventListener('click', () => oneGuess.makeAChoice(2, oneLesson))
choice4.addEventListener('click', () => oneGuess.makeAChoice(3, oneLesson))
choice5.addEventListener('click', () => oneGuess.makeAChoice(4, oneLesson))

export {
  oneLesson,
  oneGuess
}
