// kana === hiragana or katagana
// romanji === latin alphabet

import { Lesson } from './component/lesson.js'
import { Guess } from './component/guess.js'
import { Menu } from './component/menu.js'

import {
  getInStorage,
  setInitLessons
} from './js/helpers.js'

const oneLesson = new Lesson()
const oneGuess = new Guess()
const oneMenu = new Menu()

// last lesson
const lastLessonName = getInStorage('oneLessonLastLessonName')
const lastLessonType = getInStorage('oneLessonLastLessonType')

// menus app
const bigMenuHome = document.getElementById('bigMenuHome')
const bigMenuPlay = document.getElementById('bigMenuPlay')
const bigMenuDraw = document.getElementById('bigMenuDraw')
const bigMenuLearn = document.getElementById('bigMenuLearn')

const bigMenuHomeSmallScreen = document.getElementById('bigMenuHomeSmallScreen')
const bigMenuPlaySmallScreen = document.getElementById('bigMenuPlaySmallScreen')
const bigMenuDrawSmallScreen = document.getElementById('bigMenuDrawSmallScreen')
const bigMenuLearnSmallScreen = document.getElementById('bigMenuLearnSmallScreen')

// buttons
let funcName
const btnContinue = document.getElementById('btnContinue')

const btnAllHiraganaLearned = document.getElementById('btnAllHiraganaLearned')
const btnAllKatakanaLearned = document.getElementById('btnAllKatakanaLearned')

const btnAlphabetHiragana = document.getElementById('btnAlphabetHiragana')
const btnAlphabetKatakana = document.getElementById('btnAlphabetKatakana')
const btnAlphabetKana = document.getElementById('btnAlphabetKanaComplet')
const btnAlphabetRomanji = document.getElementById('btnAlphabetRomanji')

const btnDrawH = document.getElementById('btnDrawH')
const btnDrawK = document.getElementById('btnDrawK')

// play
const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')
const choice4 = document.getElementById('choice4')
const choice5 = document.getElementById('choice5')

// lessons
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

oneMenu.displayHome()

oneLesson.setAllLesson()

if (oneLesson.getNbDoneLessons() === 0) {
  setInitLessons()
  oneLesson.setActivateLessons()
} else {
  oneLesson.displayButtonLesson()
}

bigMenuHome.addEventListener('click', () => oneMenu.displayHome())
bigMenuPlay.addEventListener('click', () => oneMenu.displayPlay())
bigMenuDraw.addEventListener('click', () => oneMenu.displayDraw())
bigMenuLearn.addEventListener('click', () => oneMenu.displayLearn())

bigMenuHomeSmallScreen.addEventListener('click', () => oneMenu.displayHome())
bigMenuPlaySmallScreen.addEventListener('click', () => oneMenu.displayPlay())
bigMenuDrawSmallScreen.addEventListener('click', () => oneMenu.displayDraw())
bigMenuLearnSmallScreen.addEventListener('click', () => oneMenu.displayLearn())

funcName = continueButton(lastLessonName, lastLessonType)

/*

btnAllHiraganaLearned.addEventListener('click', () => oneLesson.launchLesson('learned', oneLesson.getAllLearnedLessonsInString('h'), oneGuess))
btnAllKatakanaLearned.addEventListener('click', () => oneLesson.launchLesson('learned', oneLesson.getAllLearnedLessonsInString('k'), oneGuess))

btnDrawH.addEventListener('click', () => oneMenu.displayDrawItemHiragana())
btnDrawK.addEventListener('click', () => oneMenu.displayDrawItemKatakana())

btnAlphabetHiragana.addEventListener('click', () => oneMenu.displayLearnItemHiragana())
btnAlphabetKatakana.addEventListener('click', () => oneMenu.displayLearnItemKatakana())
btnAlphabetKana.addEventListener('click', () => oneMenu.displayLearnItemKana())

btnAlphabetRomanji.addEventListener('click', () => oneMenu.displayRomanji())

choice1.addEventListener('click', () => oneGuess.makeAChoice(0, oneLesson, oneMenu))
choice2.addEventListener('click', () => oneGuess.makeAChoice(1, oneLesson, oneMenu))
choice3.addEventListener('click', () => oneGuess.makeAChoice(2, oneLesson, oneMenu))
choice4.addEventListener('click', () => oneGuess.makeAChoice(3, oneLesson, oneMenu))
choice5.addEventListener('click', () => oneGuess.makeAChoice(4, oneLesson, oneMenu))

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

*/

function continueButton (lastLessonName, lastLessonType) {
  let funcName

  // TODO traite uniquement les lesson hiragana et katakana
  const kana = lastLessonName.charAt(0)

  if (lastLessonName != null) {
    if (lastLessonType === 'learned') {
      btnContinue.addEventListener('click', funcName = function () { oneLesson.launchLesson('learned', oneLesson.getAllLearnedLessonsInString(kana), oneGuess) })
    } else {
      btnContinue.addEventListener('click', funcName = function () { oneLesson.launchLesson('simple', lastLessonName, oneGuess) })
    }
  }
  return funcName
}


export {
  oneLesson,
  oneGuess,
  funcName,
  continueButton
}
