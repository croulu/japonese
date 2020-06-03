import { Lesson } from '../component/lesson.js'
import { Guess } from '../component/guess.js'

import {
  displayHome,
  displayPlay,
  displayDraw,
  displayDrawItem,
  displayLearn,
  displayLearnItemHiragana,
  displayLearnItemKatakana,
  displayLearnItemKana,
  displayRomanji
} from './menu.js'

import {
  getStatusLessonInStorage,
  setStatusLessonInStorage,
  getInStorage,
  isLearned
} from './helpers.js'

const oneLesson = new Lesson()
const oneGuess = new Guess()

const bigMenuHome = document.getElementById('bigMenuHome')
const bigMenuPlay = document.getElementById('bigMenuPlay')
const bigMenuDraw = document.getElementById('bigMenuDraw')
const bigMenuLearn = document.getElementById('bigMenuLearn')

const bigMenuHomeSmallScreen = document.getElementById('bigMenuHomeSmallScreen')
const bigMenuPlaySmallScreen = document.getElementById('bigMenuPlaySmallScreen')
const bigMenuDrawSmallScreen = document.getElementById('bigMenuDrawSmallScreen')
const bigMenuLearnSmallScreen = document.getElementById('bigMenuLearnSmallScreen')

const btnAlphabetHiragana = document.getElementById('btnAlphabetHiragana')
const btnAlphabetKatakana = document.getElementById('btnAlphabetKatakana')
const btnAlphabetKana = document.getElementById('btnAlphabetKanaComplet')

const btnAlphabetRomanji = document.getElementById('btnAlphabetRomanji')

const btnContinue = document.getElementById('btnContinue')

const btnAllHiraganaLearned = document.getElementById('btnAllHiraganaLearned')
const btnAllKatakanaLearned = document.getElementById('btnAllKatakanaLearned')

const btnGuessHaiueo = document.getElementById('btnGuessHaiueo')
const btnGuessHkakikukeko = document.getElementById('btnGuessHkakikukeko')
const btnGuessHsashisuseso = document.getElementById('btnGuessHsashisuseso')
const btnGuessHtachitsuteto = document.getElementById('btnGuessHtachitsuteto')
const btnGuessHnaninuneno = document.getElementById('btnGuessHnaninuneno')
const btnGuessHhahifuheho = document.getElementById('btnGuessHhahifuheho')
const btnGuessHmamimumemo = document.getElementById('btnGuessHmamimumemo')
const btnGuessHyayuyo = document.getElementById('btnGuessHyayuyo')
const btnGuessHrarirurero = document.getElementById('btnGuessHrarirurero')
const btnGuessHwawon = document.getElementById('btnGuessHwawon')

const btnGuessHgagigugego = document.getElementById('btnGuessHgagigugego')
const btnGuessHzajizuzezo = document.getElementById('btnGuessHzajizuzezo')
const btnGuessHdadzidzudedo = document.getElementById('btnGuessHdadzidzudedo')
const btnGuessHbabibubebo = document.getElementById('btnGuessHbabibubebo')
const btnGuessHpapipupepo = document.getElementById('btnGuessHpapipupepo')

const btnGuessKaiueo = document.getElementById('btnGuessKaiueo')
const btnGuessKkakikukeko = document.getElementById('btnGuessKkakikukeko')
const btnGuessKsashisuseso = document.getElementById('btnGuessKsashisuseso')
const btnGuessKtachitsuteto = document.getElementById('btnGuessKtachitsuteto')
const btnGuessKnaninuneno = document.getElementById('btnGuessKnaninuneno')
const btnGuessKhahifuheho = document.getElementById('btnGuessKhahifuheho')
const btnGuessKmamimumemo = document.getElementById('btnGuessKmamimumemo')
const btnGuessKyayuyo = document.getElementById('btnGuessKyayuyo')
const btnGuessKrarirurero = document.getElementById('btnGuessKrarirurero')
const btnGuessKwawon = document.getElementById('btnGuessKwawon')

const btnGuessKgagigugego = document.getElementById('btnGuessKgagigugego')
const btnGuessKzajizuzezo = document.getElementById('btnGuessKzajizuzezo')
const btnGuessKdadzidzudedo = document.getElementById('btnGuessKdadzidzudedo')
const btnGuessKbabibubebo = document.getElementById('btnGuessKbabibubebo')
const btnGuessKpapipupepo = document.getElementById('btnGuessKpapipupepo')

const btnDrawHaiueo = document.getElementById('btnDrawHaiueo')
const btnDrawKaiueo = document.getElementById('btnDrawKaiueo')

const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')
const choice4 = document.getElementById('choice4')
const choice5 = document.getElementById('choice5')

displayHome()

oneLesson.setAllLesson()

if (oneLesson.getNbTrueLessons() === 0) {
  setInitLessons()
}

function setInitLessons () {
  let arrayInitLesson = []
  let statusLessonInStorage

  arrayInitLesson.push('h-a-i-u-e-o')
  arrayInitLesson.push('k-a-i-u-e-o')

  for (let i = 0; i < arrayInitLesson.length; i++) {
    statusLessonInStorage = getStatusLessonInStorage(arrayInitLesson[i])

    if (statusLessonInStorage === null) {
      setStatusLessonInStorage(arrayInitLesson[i], 'inprogress')
    }
  }
}

bigMenuHome.addEventListener('click', () => displayHome())
bigMenuPlay.addEventListener('click', () => displayPlay())
bigMenuDraw.addEventListener('click', () => displayDraw())
bigMenuLearn.addEventListener('click', () => displayLearn())

bigMenuHomeSmallScreen.addEventListener('click', () => displayHome())
bigMenuPlaySmallScreen.addEventListener('click', () => displayPlay())
bigMenuDrawSmallScreen.addEventListener('click', () => displayDraw())
bigMenuLearnSmallScreen.addEventListener('click', () => displayLearn())

const lastLesson = getInStorage('oneLessonLastLessonName')
console.log(`dans init ${lastLesson}`)
if (lastLesson != null) {
  if (isLearned(lastLesson)) {
    btnContinue.addEventListener('click', () => oneLesson.launchLesson('learned', oneLesson.getAllLearnedLessonsInString('h'), oneGuess))
  } else {
    btnContinue.addEventListener('click', () => oneLesson.launchLesson('simple', lastLesson, oneGuess))
  }
}

btnAlphabetHiragana.addEventListener('click', () => displayLearnItemHiragana())
btnAlphabetKatakana.addEventListener('click', () => displayLearnItemKatakana())
btnAlphabetKana.addEventListener('click', () => displayLearnItemKana())

btnAlphabetRomanji.addEventListener('click', () => displayRomanji())

btnAllHiraganaLearned.addEventListener('click', () => oneLesson.launchLesson('learned', oneLesson.getAllLearnedLessonsInString('h'), oneGuess))
btnAllKatakanaLearned.addEventListener('click', () => oneLesson.launchLesson('learned', oneLesson.getAllLearnedLessonsInString('k'), oneGuess))

btnGuessHaiueo.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-a-i-u-e-o', oneGuess))
btnGuessHkakikukeko.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-ka-ki-ku-ke-ko', oneGuess))
btnGuessHsashisuseso.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-sa-shi-su-se-so', oneGuess))
btnGuessHtachitsuteto.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-ta-chi-tsu-te-to', oneGuess))
btnGuessHnaninuneno.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-na-ni-nu-ne-no', oneGuess))
btnGuessHhahifuheho.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-ha-hi-fu-he-ho', oneGuess))
btnGuessHmamimumemo.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-ma-mi-mu-me-mo', oneGuess))
btnGuessHyayuyo.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-ya-yu-yo', oneGuess))
btnGuessHrarirurero.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-ra-ri-ru-re-ro', oneGuess))
btnGuessHwawon.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-wa-wo-n', oneGuess))

btnGuessHgagigugego.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-ga-gi-gu-ge-go', oneGuess))
btnGuessHzajizuzezo.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-za-ji-zu-ze-zo', oneGuess))
btnGuessHdadzidzudedo.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-da-dzi-dzu-de-do', oneGuess))
btnGuessHbabibubebo.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-ba-bi-bu-be-bo', oneGuess))
btnGuessHpapipupepo.addEventListener('click', () => oneLesson.launchLesson('simple', 'h-pa-pi-pu-pe-po', oneGuess))

btnGuessKaiueo.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-a-i-u-e-o', oneGuess))
btnGuessKkakikukeko.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-ka-ki-ku-ke-ko', oneGuess))
btnGuessKsashisuseso.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-sa-shi-su-se-so', oneGuess))
btnGuessKtachitsuteto.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-ta-chi-tsu-te-to', oneGuess))
btnGuessKnaninuneno.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-na-ni-nu-ne-no', oneGuess))
btnGuessKhahifuheho.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-ha-hi-fu-he-ho', oneGuess))
btnGuessKmamimumemo.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-ma-mi-mu-me-mo', oneGuess))
btnGuessKyayuyo.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-ya-yu-yo', oneGuess))
btnGuessKrarirurero.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-ra-ri-ru-re-ro', oneGuess))
btnGuessKwawon.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-wa-wo-n', oneGuess))

btnGuessKgagigugego.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-ga-gi-gu-ge-go', oneGuess))
btnGuessKzajizuzezo.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-za-ji-zu-ze-zo', oneGuess))
btnGuessKdadzidzudedo.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-da-dzi-dzu-de-do', oneGuess))
btnGuessKbabibubebo.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-ba-bi-bu-be-bo', oneGuess))
btnGuessKpapipupepo.addEventListener('click', () => oneLesson.launchLesson('simple', 'k-pa-pi-pu-pe-po', oneGuess))

btnDrawHaiueo.addEventListener('click', () => displayDrawItem())
btnDrawKaiueo.addEventListener('click', () => displayDrawItem())

choice1.addEventListener('click', () => oneGuess.makeAChoice(0, oneLesson))
choice2.addEventListener('click', () => oneGuess.makeAChoice(1, oneLesson))
choice3.addEventListener('click', () => oneGuess.makeAChoice(2, oneLesson))
choice4.addEventListener('click', () => oneGuess.makeAChoice(3, oneLesson))
choice5.addEventListener('click', () => oneGuess.makeAChoice(4, oneLesson))

export {
  oneLesson,
  oneGuess
}
