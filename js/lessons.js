import {
  arrayKana,
  showKanaOrRomanji,
  makeObjetKana
} from '../index.js'

import {
  nextRandom
} from './helpers.js'

let iNextRandom

function hToRA () {
  iNextRandom = nextRandom()

  arrayKana = []

  arrayKana.push(makeObjetKana('h-a'))
  arrayKana.push(makeObjetKana('h-i'))
  arrayKana.push(makeObjetKana('h-u'))
  arrayKana.push(makeObjetKana('h-e'))
  arrayKana.push(makeObjetKana('h-o'))

  showKanaOrRomanji('kana')
}

function kToRA () {
  iNextRandom = nextRandom()

  arrayKana = []

  arrayKana.push(makeObjetKana('k-a'))
  arrayKana.push(makeObjetKana('k-i'))
  arrayKana.push(makeObjetKana('k-u'))
  arrayKana.push(makeObjetKana('k-e'))
  arrayKana.push(makeObjetKana('k-o'))

  showKanaOrRomanji('kana')
}

function hToRK () {
  iNextRandom = nextRandom()

  arrayKana = []

  arrayKana.push(makeObjetKana('h-ka'))
  arrayKana.push(makeObjetKana('h-ki'))
  arrayKana.push(makeObjetKana('h-ku'))
  arrayKana.push(makeObjetKana('h-ke'))
  arrayKana.push(makeObjetKana('h-ko'))

  showKanaOrRomanji('kana')
}

function kToRK () {
  iNextRandom = nextRandom()

  arrayKana = []

  arrayKana.push(makeObjetKana('k-ka'))
  arrayKana.push(makeObjetKana('k-ki'))
  arrayKana.push(makeObjetKana('k-ku'))
  arrayKana.push(makeObjetKana('k-ke'))
  arrayKana.push(makeObjetKana('k-ko'))

  showKanaOrRomanji('kana')
}

function hToRS () {
  iNextRandom = nextRandom()

  arrayKana = []

  arrayKana.push(makeObjetKana('h-sa'))
  arrayKana.push(makeObjetKana('h-shi'))
  arrayKana.push(makeObjetKana('h-su'))
  arrayKana.push(makeObjetKana('h-se'))
  arrayKana.push(makeObjetKana('h-so'))

  showKanaOrRomanji('kana')
}

function kToRS () {
  iNextRandom = nextRandom()

  arrayKana = []

  arrayKana.push(makeObjetKana('k-sa'))
  arrayKana.push(makeObjetKana('k-shi'))
  arrayKana.push(makeObjetKana('k-su'))
  arrayKana.push(makeObjetKana('k-se'))
  arrayKana.push(makeObjetKana('k-so'))

  showKanaOrRomanji('kana')
}

export {
  hToRA,
  kToRA,
  hToRK,
  kToRK,
  hToRS,
  kToRS,
  iNextRandom
}
