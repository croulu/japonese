// kana === hiragana or katagana
// romanji === latin alphabet
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

function selectOneKana (oKana) {
  let aKana
  let oneKana
  let sKana
  let iIndexKana

  aKana = splitAKana(oKana.id)
  sKana = aKana[0] + '-' + aKana[1]
  // sKana = `${aKana[0]}-${aKana[1]}`
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
  let kanaHiragana = document.getElementById('kanaHiragana')

  if (!bKanaHiragana) {
    kanaHiragana.src = 'img/kana/hiragana-a_selected.png'
    bKanaHiragana = true
  } else {
    kanaHiragana.src = 'img/kana/hiragana-a.png'
    bKanaHiragana = false
  }
}

function selectKatakana () {
  let kanaKatakana = document.getElementById('kanaKatakana')

  if (!bKanaKatakana) {
    kanaKatakana.src = 'img/kana/katakana-a_selected.png'
    bKanaKatakana = true
  } else {
    kanaKatakana.src = 'img/kana/katakana-a.png'
    bKanaKatakana = false
  }
}

function showKanaOrRomanji (guessWhat) {
  let kanaImg
  let kanaRomanji
  let onekana

  kanaImg = document.getElementById('kanaImg')
  kanaRomanji = document.querySelector('#kanaRomanji')

  if (!bKanaHiragana && !bKanaKatakana) {
    alert('choose one or two kana')
  } else {
    if (arrayKana.length !== 0) {
      onekana = arrayKana[iNextRandom]
      onekana = onekana.split('-')

      if ((onekana[0] === 'h' && bKanaHiragana) || (onekana[0] === 'k' && bKanaKatakana)) {
        guessWhat === 'kana' ? kanaImg.src = completeKana(onekana) : kanaRomanji.value = onekana[1]
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

function completeKana (kana) {
  let urlKana

  if (kana[0] === 'h') {
    urlKana = 'img/hiragana/' + kana[1] + '.png'
  } else if (kana[0] === 'k') {
    urlKana = 'img/katakana/' + kana[1] + '.png'
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
