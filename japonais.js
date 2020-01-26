var array_kana = ['h-a', 'h-i', 'h-u', 'h-e', 'h-o', 'h-ka', 'h-ki', 'h-ku', 'h-ke', 'h-ko', 'h-sa', 'h-shi', 'h-su', 'h-se', 'h-so', 'k-a', 'k-i', 'k-u', 'k-e', 'k-o']

var i_next_random

var b_kana_hiragana = false
var b_kana_katakana = false

function next_exercise () {
  var radios = document.getElementsByName('exercise')

  i_next_random = next_random()

  if (radios[0].checked) {
    show_kana()
  } else {
    show_romanji()
  }

  delete_soluce()
}

function show_soluce () {
  var radios = document.getElementsByName('exercise')

  // show the opposite
  if (radios[0].checked) {
    show_romanji()
  } else {
    show_kana()
  }
}

function delete_soluce () {
  var radios = document.getElementsByName('exercise')

  var kana_img = document.getElementById('kana_img')
  var kana_romanji = document.querySelector('#kana_romanji')

  if (radios[0].checked) {
    kana_romanji.value = ''
  } else {
    kana_img.src = ''
  }
}

function select_hiragana () {
  var kana_hiragana = document.getElementById('kana_hiragana')
  if (kana_hiragana.value == '0') {
    kana_hiragana.src = 'img/hiragana-a_selected.png'
    kana_hiragana.value = 1
    b_kana_hiragana = true
  }
  else {
    kana_hiragana.src = 'img/hiragana-a.png'
    kana_hiragana.value = 0
    b_kana_hiragana = false
  }
}

function select_katakana () {
  var kana_katakana = document.getElementById('kana_katakana')
  
  // TODO bug le premier est vide (clic 2 fois sur l'image)

  if (kana_katakana.value == '0') {
    kana_katakana.src = 'img/katakana-a_selected.png'
    kana_katakana.value = 1
    b_kana_katakana = true
  }
  else {
    kana_katakana.src = 'img/katakana-a.png'
    kana_katakana.value = 0
    b_kana_katakana = false
  }
}

function show_kana () {
  var kana_img = document.getElementById('kana_img')
  var onekana = array_kana[i_next_random]
  console.log('show_kana, i : ' + i_next_random)
  onekana = onekana.split('-')

// TODO 2 fois le même code dans show_kana et show_romanji

  if (b_kana_hiragana == false && b_kana_katakana == false) {
    alert('choose one or two kana !')
  }
  else {
    if ((onekana[0] === 'h' && b_kana_hiragana) || (onekana[0] === 'k' && b_kana_katakana))
	  kana_img.src = complete_kana(onekana)    
	else {
	  console.log('incohérence alphabet')
      i_next_random = next_random()
	  show_kana()
	}
  }
}

function show_romanji () {
  var kana_romanji = document.querySelector('#kana_romanji')

  var onekana = array_kana[i_next_random]

  console.log('show_romanji, i : ' + i_next_random)

  onekana = onekana.split('-')

  if (b_kana_hiragana == false && b_kana_katakana == false) {
    alert('choose one or two kana !')
  }
  else {
    if ((onekana[0] === 'h' && b_kana_hiragana) || (onekana[0] === 'k' && b_kana_katakana))
      kana_romanji.value = onekana[1]
	else {
	  console.log('incohérence alphabet')
      i_next_random = next_random()
	  show_romanji()
	}
  }

}

function change_exercise () {
  kana_img.src = ''
  kana_romanji.value = ''
}

function complete_kana (kana) {
  var url_kana

  if (kana[0] === 'h')
    url_kana = 'hiragana/' + kana[1] + '.png'
  else if (kana[0] === 'k')
    url_kana = 'katakana/' + kana[1] + '.png'

  return url_kana
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function next_random () {
  var i_random = getRandomInt(array_kana.length)
  return i_random
}
