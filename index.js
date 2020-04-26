// kana === hiragana or katagana
// romanji === latin alphabet

import imgKana from './img/kana/*.*'
import imgHiragana from './img/hiragana/*.*'
import imgKatakana from './img/katakana/*.*'

import {} from './js/init.js'
import {} from './js/initHiragana.js'
import {} from './js/initKatakana.js'

import {
  completeKana,
  nextRandom,
  splitAKana,
  fnCall
} from './js/helpers.js'

import {
  oneLesson,
  getOneKana,
  arrayKana
} from './js/lessons.js'

import {
  clearChoice,
  writeChoice,
  writeChoiceTrueFalse,
  displayColorChoice,
  displayCorrectNumberOfChoice
} from './js/choice.js'

let bKanaHiragana = false
let bKanaKatakana = false

let iNextRandom

function showKanaOrRomanji (guessWhat) {
  let kanaImg
  let onekana = ''
  let kanaToDisplay = ''
  let specificImage = ''

  kanaImg = document.getElementById('kanaImg')

  iNextRandom = nextRandom()
  onekana = getOneKana(iNextRandom)

  kanaToDisplay = completeKana(onekana)

  displayCorrectNumberOfChoice(oneLesson.choice)

  clearChoice(oneLesson.choice)

  writeChoice(oneLesson.choice, arrayKana)

  writeChoiceTrueFalse(oneLesson.choice, onekana.letter)

  if (onekana.alphabet === 'h') {
    specificImage = imgHiragana[`${kanaToDisplay}`]
  } else if (onekana.alphabet === 'k') {
    specificImage = imgKatakana[`${kanaToDisplay}`]
  }

  kanaImg.setAttribute('src', specificImage.png)
}

function nextKana () {
  iNextRandom = nextRandom()
  showKanaOrRomanji('kana')
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
