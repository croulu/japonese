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
  completeKana,
  nextRandom,
  splitAKana
} from './js/helpers.js'

import {
  clearChoice,
  writeChoice,
  writeChoiceTrueFalse,
  displayCorrectNumberOfChoice
} from './component/choice.js'

let bKanaHiragana = false
let bKanaKatakana = false

let iNextRandom

function showKanaOrRomanji (guessWhat) {
  let kanaImg
  let onekana = ''
  let kanaToDisplay = ''
  let specificImage = ''

  oneLesson.play++

  kanaImg = document.getElementById('kanaImg')

  onekana = oneLesson.currentKanaObject

  kanaToDisplay = completeKana(onekana)

  displayCorrectNumberOfChoice(oneLesson.nbChoice)

  clearChoice(oneLesson.nbChoice)

  writeChoice(oneLesson.nbChoice, oneLesson.kanaToStudy)

  writeChoiceTrueFalse(oneLesson.nbChoice, onekana.letter)

  if (onekana.alphabet === 'h') {
    specificImage = imgHiragana[`${kanaToDisplay}`]
  } else if (onekana.alphabet === 'k') {
    specificImage = imgKatakana[`${kanaToDisplay}`]
  }

  kanaImg.setAttribute('src', specificImage.png)
}

function nextKana () {
  let info = document.getElementById('info')

  if (oneLesson.play < oneLesson.playAllowed) {
    oneLesson.previousKanaIndex = oneLesson.currentKanaIndex
    iNextRandom = nextRandom()
    oneLesson.getOneKana(iNextRandom)
    while (oneLesson.previousKanaIndex === oneLesson.currentKanaIndex) {
      iNextRandom = nextRandom()
      oneLesson.getOneKana(iNextRandom)
    }

    showKanaOrRomanji('kana')
  } else {
    oneLesson.makePourcentage()
    info.innerText = `success : ${oneLesson.pourcentageReussite}% - ${oneLesson.success}/${oneLesson.playAllowed}`
    oneLesson.stop()
    document.getElementById('choice1').disabled = true
  }
}

function showSoluce () {
  const radios = document.getElementsByName('exercise')

  radios[0].checked ? showKanaOrRomanji('romanji') : showKanaOrRomanji('kana')
}

function deleteSoluce () {
  const radios = document.getElementsByName('exercise')
  const kanaImg = document.getElementById('kanaImg')
  const kanaRomanji = document.querySelector('#kanaRomanji')

  kanaRomanji.value = ''
  kanaImg.src = ''
}

function selectOneKana (idSelected) {
  const aKana = splitAKana(idSelected)
  const sKana = aKana[0] + '-' + aKana[1]
  const oneKana = document.getElementById(sKana)
  const iIndexKana = arrayKana.indexOf(sKana)

  if (iIndexKana === -1) {
    oneKana.className = 'imgSelected'
    arrayKana.push(sKana)
  } else {
    oneKana.className = ''
    arrayKana.splice(iIndexKana, 1)
  }
}

function selectHiragana () {
  let imageFileName = ''
  let specificImage = ''

  if (!bKanaHiragana) {
    imageFileName = 'hiragana-a_selected'
    bKanaHiragana = true
  } else {
    imageFileName = 'hiragana-a'
    bKanaHiragana = false
  }
  specificImage = imgKana[`${imageFileName}`]
  imgKanaHiragana.setAttribute('src', specificImage.png)
}

function selectKatakana () {
  let imageFileName = ''
  let specificImage = ''

  if (!bKanaKatakana) {
    imageFileName = 'katakana-a_selected'
    bKanaKatakana = true
  } else {
    imageFileName = 'katakana-a'
    bKanaKatakana = false
  }
  specificImage = imgKana[`${imageFileName}`]
  imgKanaKatakana.setAttribute('src', specificImage.png)
}

function changeExercise () {
  kanaImg.src = ''
  kanaRomanji.value = ''
}

export {
  selectHiragana,
  selectKatakana,
  selectOneKana,
  showSoluce,
  changeExercise,
  showKanaOrRomanji,
  nextKana
}
