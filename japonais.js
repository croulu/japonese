var array_kana = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to']

var i_next_random

var b_kana_hiragana = false
var b_kana_katakana = false

function next_exercise () {
  var radios = document.getElementsByName('exercise')

  i_next_random = next_random()

  // show the exercise
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
  kana_img.src = complete_kana(i_next_random)
}

function show_romanji () {
  var kana_romanji = document.querySelector('#kana_romanji')

  kana_romanji.value = array_kana[i_next_random]
}

function change_exercise () {
  kana_img.src = ''
  kana_romanji.value = ''
}

function complete_kana (i_random) {
  var kana_random 

  if (b_kana_hiragana) kana_random = 'hiragana/' + array_kana[i_random] + '.png'

  if (b_kana_katakana) kana_random = 'katakana/' + array_kana[i_random] + '.png'

  return kana_random
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function next_random () {
  var i_random = getRandomInt(15)
  return i_random
}
