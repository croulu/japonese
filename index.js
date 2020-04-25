// kana === hiragana or katagana
// romanji === latin alphabet

import {
  completeKana,
  nextRandom,
  splitAKana
} from './js/helpers.js'

import {} from './initImg.js'

import kana from './img/kana/*.*'
import hiragana from './img/hiragana/*.*'
import katakana from './img/katakana/*.*'

const arrayKana = []

let iNextRandom

let bKanaHiragana = false
let bKanaKatakana = false

function nextExercise () {
  const radios = document.getElementsByName('exercise')

  iNextRandom = nextRandom()

  radios[0].checked ? showKanaOrRomanji('kana') : showKanaOrRomanji('romanji')

  deleteSoluce()
}

function showSoluce () {
  const radios = document.getElementsByName('exercise')

  radios[0].checked ? showKanaOrRomanji('romanji') : showKanaOrRomanji('kana')
}

function deleteSoluce () {
  const radios = document.getElementsByName('exercise')
  const kanaImg = document.getElementById('kanaImg')
  const kanaRomanji = document.querySelector('#kanaRomanji')

  if (radios[0].checked) {
    kanaRomanji.value = ''
  } else {
    kanaImg.src = ''
  }
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
  specificImage = kana[`${imageFileName}`]
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
  specificImage = kana[`${imageFileName}`]
  imgKanaKatakana.setAttribute('src', specificImage.png)
}

function showKanaOrRomanji (guessWhat) {
  let kanaImg
  let kanaRomanji
  let onekana

  let kanaToDisplay = ''
  let specificImage = ''

  kanaImg = document.getElementById('kanaImg')
  kanaRomanji = document.querySelector('#kanaRomanji')

  if (!bKanaHiragana && !bKanaKatakana) {
    alert('choose one or two kana')
  } else {
    if (arrayKana.length !== 0) {
      onekana = arrayKana[iNextRandom]
      onekana = onekana.split('-')

      if ((onekana[0] === 'h' && bKanaHiragana) || (onekana[0] === 'k' && bKanaKatakana)) {
        if (guessWhat === 'kana') {

          kanaToDisplay = completeKana(onekana)

          if (onekana[0] === 'h') { 
            specificImage = hiragana[`${kanaToDisplay}`]
          } else if (onekana[0] === 'k') {
            specificImage = katakana[`${kanaToDisplay}`]
          }

          kanaImg.setAttribute('src', specificImage.png)

        } else {
          kanaRomanji.value = onekana[1]
        }
      } else {
        console.log('incohérence alphabet')
        iNextRandom = nextRandom()
        showKana()
      }
    } else {
      alert('choose the kana to study on the dedicated tab')
    }
  }
}

function changeExercise () {
  kanaImg.src = ''
  kanaRomanji.value = ''
}

export {
  arrayKana, 
  selectHiragana,
  selectKatakana,
  selectOneKana,
  nextExercise,
  showSoluce,
  changeExercise
}
