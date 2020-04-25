import {
  selectHiragana,
  selectKatakana,
  nextExercise,
  showSoluce,
  changeExercise
} from './../index.js'

const imgKanaHiragana = document.getElementById('imgKanaHiragana')
const imgKanaKatakana = document.getElementById('imgKanaKatakana')

const brToRomanji = document.getElementById('brToRomanji')
const brToKana = document.getElementById('brToKana')
const btnNext = document.getElementById('btnNext')
const btnSoluce = document.getElementById('btnSoluce')

imgKanaHiragana.addEventListener('click', () => selectHiragana())
imgKanaKatakana.addEventListener('click', () => selectKatakana())

brToRomanji.addEventListener('click', () => changeExercise())
brToKana.addEventListener('click', () => changeExercise())
btnNext.addEventListener('click', () => nextExercise())
btnSoluce.addEventListener('click', () => showSoluce())
