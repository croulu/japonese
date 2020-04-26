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
  splitAKana
} from './js/helpers.js'

import {
  getOneKana,
  arrayKana
} from './js/lessons.js'

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
  onekana = getOneKana (iNextRandom)

  kanaToDisplay = completeKana(onekana)

  choice1.style.backgroundColor = '#164fca'
  choice2.style.backgroundColor = '#164fca'
  choice3.style.backgroundColor = '#164fca'
  choice4.style.backgroundColor = '#164fca'
  choice5.style.backgroundColor = '#164fca'

  choice1.innerText = arrayKana[0].letter
  choice2.innerText = arrayKana[1].letter
  choice3.innerText = arrayKana[2].letter
  choice4.innerText = arrayKana[3].letter
  choice5.innerText = arrayKana[4].letter

  if (onekana.letter === choice1.innerText) {
    choice1.setAttribute('data-key', 'true')
  } else {
    choice1.setAttribute('data-key', 'false')
  }
  if (onekana.letter === choice2.innerText) {
    choice2.setAttribute('data-key', 'true')
  } else {
    choice2.setAttribute('data-key', 'false')
  }
  if (onekana.letter === choice3.innerText) {
    choice3.setAttribute('data-key', 'true')
  } else {
    choice3.setAttribute('data-key', 'false')
  }
  if (onekana.letter === choice4.innerText) {
    choice4.setAttribute('data-key', 'true')
  } else {
    choice4.setAttribute('data-key', 'false')
  }
  if (onekana.letter === choice5.innerText) {
    choice5.setAttribute('data-key', 'true')
  } else {
    choice5.setAttribute('data-key', 'false')
  }

  if (onekana.alphabet === 'h') {
    specificImage = imgHiragana[`${kanaToDisplay}`]
  } else if (onekana.alphabet === 'k') {
    specificImage = imgKatakana[`${kanaToDisplay}`]
  }

  kanaImg.setAttribute('src', specificImage.png)
}

function makeAChoice (choiceSelected, result) {

  if (result === 'true') {
    if (choiceSelected === 1) {
      choice1.style.backgroundColor = '#16ca52'
    } else if (choiceSelected === 2) {
      choice2.style.backgroundColor = '#16ca52'
    } else if (choiceSelected === 3) {
      choice3.style.backgroundColor = '#16ca52'
    } else if (choiceSelected === 4) {
      choice4.style.backgroundColor = '#16ca52'
    } else if (choiceSelected === 5) {
      choice5.style.backgroundColor = '#16ca52'
    }
    setTimeout(kanaSuivant, 400)
  } else {
    if (choiceSelected === 1) {
      choice1.style.backgroundColor = '#ca2716'
    } else if (choiceSelected === 2) {
      choice2.style.backgroundColor = '#ca2716'
    } else if (choiceSelected === 3) {
      choice3.style.backgroundColor = '#ca2716'
    } else if (choiceSelected === 4) {
      choice4.style.backgroundColor = '#ca2716'
    } else if (choiceSelected === 5) {
      choice5.style.backgroundColor = '#ca2716'
    }
  }
}

function kanaSuivant () {
  iNextRandom = nextRandom()
  showKanaOrRomanji('kana')
}

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
  nextExercise,
  showSoluce,
  changeExercise,
  makeAChoice,
  showKanaOrRomanji
}
