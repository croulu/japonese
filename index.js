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
  let radios = document.getElementsByName('exercise')

  iNextRandom = nextRandom()

  radios[0].checked ? showKanaOrRomanji('kana') : showKanaOrRomanji('romanji')

  deleteSoluce()
}

function showSoluce () {
  let radios = document.getElementsByName('exercise')

console.log ('showSoluce ' + radios[0].checked)

  radios[0].checked ? showKanaOrRomanji('romanji') : showKanaOrRomanji('kana')
}

function deleteSoluce () {
  let radios = document.getElementsByName('exercise')
  let kanaImg = document.getElementById('kanaImg')
  let kanaRomanji = document.querySelector('#kanaRomanji')

  if (radios[0].checked) {
    kanaRomanji.value = ''
  } else {
    kanaImg.src = ''
  }
}

function selectOneKana (idSelected) {
  let aKana
  let oneKana
  let sKana
  let iIndexKana

  aKana = splitAKana(idSelected)
  sKana = aKana[0] + '-' + aKana[1]

  oneKana = document.getElementById(sKana)

  iIndexKana = arrayKana.indexOf(sKana)

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
  let specificHiraganaImage = ''

  if (!bKanaHiragana) {
    imageFileName = '/img/kana/hiragana-a_selected.png'
    bKanaHiragana = true
  } else {
    imageFileName = '/img/kana/hiragana-a.png'
    bKanaHiragana = false
  }
  specificHiraganaImage = hiragana[`${imageFileName}.png`]
  imgKanaHiragana.setAttribute('src', specificHiraganaImage)
}

function selectKatakana () {
  let imageFileName = ''
  let specificKatakanaImage = ''

  if (!bKanaKatakana) {
    imageFileName = '/img/kana/katakana-a_selected.png'
    bKanaKatakana = true
  } else {
    imageFileName = '/img/kana/katakana-a.png'
    bKanaKatakana = false
  }
  specificKatakanaImage = katakana[`${imageFileName}.png`]
  imgKanaKatakana.setAttribute('src', specificKatakanaImage)
}

function showKanaOrRomanji (guessWhat) {
  let kanaImg
  let kanaRomanji
  let onekana

  let imageFileName = ''
  let specificKatakanaImage = ''

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

          var cc = completeKana(onekana)
          console.log(cc)

          specificKatakanaImage = katakana[`${imageFileName}.png`]
          kanaImg.setAttribute('src', specificKatakanaImage)
        
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
