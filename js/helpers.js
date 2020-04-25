import {
  arrayKana
} from '../index.js'

function completeKana (kana) {
  let urlKana = ''

  urlKana = kana[1]

  return urlKana
}

function nextRandom () {
  let iRandom = getRandomInt(arrayKana.length)
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

export {
  completeKana, 
  nextRandom,
  splitAKana
}
