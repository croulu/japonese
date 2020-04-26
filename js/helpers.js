import {
  oneLesson
} from './init.js'

function Kana (alphabet, letter) {
  this.alphabet = alphabet
  this.letter = letter
}

function makeObjetKana (sKana) {
  let aKana = []
  aKana = sKana.split('-')
  const oneKana = new Kana(aKana[0], aKana[1])

  return oneKana
}

function completeKana (kana) {
  let urlKana = ''

  urlKana = kana.letter

  return urlKana
}

function nextRandom () {
  let iRandom = getRandomInt(oneLesson.kanaToStudy.length)
  return iRandom
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function splitAKana (sKana) {
  let aKana
  aKana = sKana.split('-')
  return aKana
}

function fnCall (fn, ...args) {
  let func = (typeof fn === 'string') ? window[fn] : fn
  if (typeof func === 'function') func(...args)
  else throw new Error(`${fn} is Not a function!`)
}

export {
  completeKana,
  nextRandom,
  splitAKana,
  makeObjetKana
}
