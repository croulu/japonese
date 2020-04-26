import {
  showKanaOrRomanji
} from '../index.js'

import {
  makeObjetKana
} from './helpers.js'

let arrayKana = []

function getOneKana (i) {
  return arrayKana[i]
}

function hToRA () {
  arrayKana = []

  arrayKana.push(makeObjetKana('h-a'))
  arrayKana.push(makeObjetKana('h-i'))
  arrayKana.push(makeObjetKana('h-u'))
  arrayKana.push(makeObjetKana('h-e'))
  arrayKana.push(makeObjetKana('h-o'))

  showKanaOrRomanji('kana')
}

function kToRA () {
  arrayKana = []

  arrayKana.push(makeObjetKana('k-a'))
  arrayKana.push(makeObjetKana('k-i'))
  arrayKana.push(makeObjetKana('k-u'))
  arrayKana.push(makeObjetKana('k-e'))
  arrayKana.push(makeObjetKana('k-o'))

  showKanaOrRomanji('kana')
}

function hToRK () {
  arrayKana = []

  arrayKana.push(makeObjetKana('h-ka'))
  arrayKana.push(makeObjetKana('h-ki'))
  arrayKana.push(makeObjetKana('h-ku'))
  arrayKana.push(makeObjetKana('h-ke'))
  arrayKana.push(makeObjetKana('h-ko'))

  showKanaOrRomanji('kana')
}

function kToRK () {
  arrayKana = []

  arrayKana.push(makeObjetKana('k-ka'))
  arrayKana.push(makeObjetKana('k-ka'))
  arrayKana.push(makeObjetKana('k-ka'))
  arrayKana.push(makeObjetKana('k-ka'))
  arrayKana.push(makeObjetKana('k-ka'))

  showKanaOrRomanji('kana')
}

function hToRS () {
  arrayKana = []

  arrayKana.push(makeObjetKana('h-sa'))
  arrayKana.push(makeObjetKana('h-shi'))
  arrayKana.push(makeObjetKana('h-su'))
  arrayKana.push(makeObjetKana('h-se'))
  arrayKana.push(makeObjetKana('h-so'))

  showKanaOrRomanji('kana')
}

function kToRS () {
  arrayKana = []

  arrayKana.push(makeObjetKana('k-sa'))
  arrayKana.push(makeObjetKana('k-shi'))
  arrayKana.push(makeObjetKana('k-si'))
  arrayKana.push(makeObjetKana('k-se'))
  arrayKana.push(makeObjetKana('k-so'))

  showKanaOrRomanji('kana')
}

export {
  getOneKana,
  arrayKana,
  hToRA,
  kToRA,
  hToRK,
  kToRK,
  hToRS,
  kToRS
}
