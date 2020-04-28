// kana === hiragana or katagana
// romanji === latin alphabet

import imgKana from './img/kana/*.*'
import imgHiragana from './img/hiragana/*.*'
import imgKatakana from './img/katakana/*.*'

import {
  oneLesson
} from './js/init.js'

import {} from './js/initHiragana.js'
import {} from './js/initKatakana.js'

import {
  nextRandom
} from './js/helpers.js'

import {
  displayCorrectNumberOfChoice,
  clearChoice,
  writeChoice,
  writeChoiceTrueFalse
} from './component/kana.js'

function showKanaOrRomanji (guessWhat) {
  let kanaImg
  let onekana = ''
  let specificImage = ''

  oneLesson.play++

  kanaImg = document.getElementById('kanaImg')

  onekana = oneLesson.currentKanaObject

  displayCorrectNumberOfChoice(oneLesson.nbChoice)

  clearChoice(oneLesson.nbChoice)

  writeChoice(oneLesson.nbChoice, oneLesson.kanaToStudy)

  writeChoiceTrueFalse(oneLesson.nbChoice, onekana.letter)

  if (onekana.alphabet === 'h') {
    specificImage = imgHiragana[`${onekana.letter}`]
  } else if (onekana.alphabet === 'k') {
    specificImage = imgKatakana[`${onekana.letter}`]
  }

  kanaImg.setAttribute('src', specificImage.png)
}

function nextKana () {
  const info = document.getElementById('info')

  if (oneLesson.play < oneLesson.playAllowed) {
    oneLesson.previousKanaIndex = oneLesson.currentKanaIndex
    oneLesson.getOneKana(nextRandom())
    while (oneLesson.previousKanaIndex === oneLesson.currentKanaIndex) {
      oneLesson.getOneKana(nextRandom())
    }

    showKanaOrRomanji('kana')
  } else {
    oneLesson.makePourcentage()
    info.innerText = `success : ${oneLesson.pourcentageReussite}% - ${oneLesson.success}/${oneLesson.playAllowed}`
    oneLesson.stop()
  }
}

export {
  showKanaOrRomanji,
  nextKana
}
