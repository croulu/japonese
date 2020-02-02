var array_kana = []

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

function select_one_kana (o_kana) {
  var a_kana 
  var one_kana
  var s_kana
  var i_index_kana

  a_kana = split_a_kana(o_kana.id)
  s_kana = a_kana[0] + '-' + a_kana[1]
  one_kana = document.getElementById(s_kana)

  i_index_kana = array_kana.indexOf(s_kana)

  if (i_index_kana === -1) {
    one_kana.className = 'img_selected'
    array_kana.push(s_kana)
  }
  else {
    one_kana.className = ''
    array_kana.splice(i_index_kana, 1)
  }
}

function select_hiragana () {
  var kana_hiragana = document.getElementById('kana_hiragana')

  if (!b_kana_hiragana) {
    kana_hiragana.src = 'img/kana/hiragana-a_selected.png'
    b_kana_hiragana = true
  }
  else {
    kana_hiragana.src = 'img/kana/hiragana-a.png'
    b_kana_hiragana = false
  }
}

function select_katakana () {
  var kana_katakana = document.getElementById('kana_katakana')

  if (!b_kana_katakana) {
    kana_katakana.src = 'img/kana/katakana-a_selected.png'
    b_kana_katakana = true
  }
  else {
    kana_katakana.src = 'img/kana/katakana-a.png'
    b_kana_katakana = false
  }
}

// TODO à revoir
function show_kana () {
  var kana_img
  var onekana

  kana_img = document.getElementById('kana_img')
  if (b_kana_hiragana == false && b_kana_katakana == false) {
    alert('choose one or two kana')
  } else {

    if (array_kana.length != 0) {
      onekana = array_kana[i_next_random]
      onekana = onekana.split('-')
    
      if ((onekana[0] === 'h' && b_kana_hiragana) || (onekana[0] === 'k' && b_kana_katakana)) {
        kana_img.src = complete_kana(onekana)
      }
      else {
        console.log('incohérence alphabet')
        i_next_random = next_random()
        show_kana()
      }
    } else {
      alert('choose the kana to study on the dedicated tab')
    }
  }
}

function show_romanji () {
  var kana_romanji = document.querySelector('#kana_romanji')
  var onekana = array_kana[i_next_random]
  onekana = onekana.split('-')

  if (b_kana_hiragana == false && b_kana_katakana == false) {
    alert ('choose one or two kana !')
  }
  else {
    if ((onekana[0] === 'h' && b_kana_hiragana) || (onekana[0] === 'k' && b_kana_katakana)) {
      kana_romanji.value = onekana[1]
    }
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

  if (kana[0] === 'h') {
    url_kana = 'img/hiragana/' + kana[1] + '.png'
  }
  else if (kana[0] === 'k') {
    url_kana = 'img/katakana/' + kana[1] + '.png'
  }

  return url_kana
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function next_random () {
  var i_random = getRandomInt(array_kana.length)
  return i_random
}

function split_a_kana(s_kana) {
  var a_kana
  a_kana = s_kana.split('-')
  return a_kana
}
