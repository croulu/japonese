var arrayKana = []

var iNextRandom

var bKanaHiragana = false
var bKanaKatakana = false

function nextExercise () {
  var radios = document.getElementsByName('exercise')

  iNextRandom = nextRandom()

  if (radios[0].checked) {
    showKana()
  } else {
    showRomanji()
  }

  deleteSoluce()
}

function showSoluce () {
  var radios = document.getElementsByName('exercise')

  // show the opposite
  if (radios[0].checked) {
    showRomanji()
  } else {
    showKana()
  }
}

function deleteSoluce () {
  var radios = document.getElementsByName('exercise')

  var kanaImg = document.getElementById('kanaImg')
  var kanaRomanji = document.querySelector('#kanaRomanji')

  if (radios[0].checked) {
    kanaRomanji.value = ''
  } else {
    kanaImg.src = ''
  }
}

function selectOneKana (oKana) {
  var aKana 
  var oneKana
  var sKana
  var iIndexKana

  aKana = splitAKana(oKana.id)
  sKana = aKana[0] + '-' + aKana[1]
  oneKana = document.getElementById(sKana)

  iIndexKana = arrayKana.indexOf(sKana)

  if (iIndexKana === -1) {
    oneKana.className = 'imgSelected'
    arrayKana.push(sKana)
  }
  else {
    oneKana.className = ''
    arrayKana.splice(iIndexKana, 1)
  }
}

function selectHiragana () {
  var kanaHiragana = document.getElementById('kanaHiragana')

  if (!bKanaHiragana) {
    kanaHiragana.src = 'img/kana/hiragana-a_selected.png'
    bKanaHiragana = true
  }
  else {
    kanaHiragana.src = 'img/kana/hiragana-a.png'
    bKanaHiragana = false
  }
}

function selectKatakana () {
  var kanaKatakana = document.getElementById('kanaKatakana')

  if (!bKanaKatakana) {
    kanaKatakana.src = 'img/kana/katakana-a_selected.png'
    bKanaKatakana = true
  }
  else {
    kanaKatakana.src = 'img/kana/katakana-a.png'
    bKanaKatakana = false
  }
}

// TODO à revoir
function showKana () {
  var kanaImg
  var onekana

  kanaImg = document.getElementById('kanaImg')
  if (bKanaHiragana === false && bKanaKatakana === false) {
    alert('choose one or two kana')
  } else {
    if (arrayKana.length !== 0) {
      onekana = arrayKana[iNextRandom]
      onekana = onekana.split('-')
    
      if ((onekana[0] === 'h' && bKanaHiragana) || (onekana[0] === 'k' && bKanaKatakana)) {
        kanaImg.src = completeKana(onekana)
      }
      else {
        console.log('incohérence alphabet')
        iNextRandom = nextRandom()
        showKana()
      }
    } else {
      alert('choose the kana to study on the dedicated tab')
    }
  }
}

function showRomanji () {
  var kanaRomanji = document.querySelector('#kanaRomanji')
  var onekana = arrayKana[iNextRandom]
  onekana = onekana.split('-')

  if (bKanaHiragana == false && bKanaKatakana == false) {
    alert ('choose one or two kana !')
  }
  else {
    if ((onekana[0] === 'h' && bKanaHiragana) || (onekana[0] === 'k' && bKanaKatakana)) {
      kanaRomanji.value = onekana[1]
    }
    else {
      console.log('incohérence alphabet')
      iNextRandom = nextRandom()
      showRomanji()
    }
  }
}

function changeExercise () {
  kanaImg.src = ''
  kanaRomanji.value = ''
}

function completeKana (kana) {
  var urlKana

  if (kana[0] === 'h') {
    urlKana = 'img/hiragana/' + kana[1] + '.png'
  }
  else if (kana[0] === 'k') {
    urlKana = 'img/katakana/' + kana[1] + '.png'
  }

  return urlKana
}

function nextRandom () {
  var iRandom = getRandomInt(arrayKana.length)
  return iRandom
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function splitAKana (sKana) {
  var aKana
  aKana = sKana.split('-')
  return aKana
}
