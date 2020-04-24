import {
  arrayKana
} from '../index.js'

function completeKana (kana) {
  let urlKana
  
  if (kana[0] === 'h') {
    urlKana = '/img/hiragana/' + kana[1] + '.png'
  } else if (kana[0] === 'k') {
    urlKana = '/img/katakana/' + kana[1] + '.png'
  }

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
