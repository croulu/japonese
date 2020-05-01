import { Lesson } from '../component/lesson.js'
import { Guess } from '../component/guess.js'

const oneLesson = new Lesson()
const oneGuess = new Guess()

oneLesson.setAllLesson()

const btnToRHaiueo = document.getElementById('btnToRHaiueo')
const btnToRKaiueo = document.getElementById('btnToRKaiueo')
const btnToRHkakikukeko = document.getElementById('btnToRHkakikukeko')
const btnToRKkakikukeko = document.getElementById('btnToRKkakikukeko')
const btnToRHsashisuseso = document.getElementById('btnToRHsashisuseso')
const btnToRKsashisuseso = document.getElementById('btnToRKsashisuseso')
const btnToRHtachitsuteto = document.getElementById('btnToRHtachitsuteto')
const btnToRKtachitsuteto = document.getElementById('btnToRKtachitsuteto')
const btnToRHnaninuneno = document.getElementById('btnToRHnaninuneno')
const btnToRKnaninuneno = document.getElementById('btnToRKnaninuneno')
const btnToRHhahifuheho = document.getElementById('btnToRHhahifuheho')
const btnToRKhahifuheho = document.getElementById('btnToRKhahifuheho')
const btnToRHmamimumemo = document.getElementById('btnToRHmamimumemo')
const btnToRKmamimumemo = document.getElementById('btnToRKmamimumemo')
const btnToRHyayuyo = document.getElementById('btnToRHyayuyo')
const btnToRKyayuyo = document.getElementById('btnToRKyayuyo')
const btnToRHrarirurero = document.getElementById('btnToRHrarirurero')
const btnToRKrarirurero = document.getElementById('btnToRKrarirurero')
const btnToRHwawon = document.getElementById('btnToRHwawon')
const btnToRKwawon = document.getElementById('btnToRKwawon')

const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')
const choice4 = document.getElementById('choice4')
const choice5 = document.getElementById('choice5')

btnToRHaiueo.addEventListener('click', () => {
  oneLesson.title = 'hiragana : a i u e o (deviner le romanji)'
  oneLesson.code = 'h-a-i-u-e-o'
  oneLesson.displayButtonLesson()
  oneLesson.lessonHaiueo(oneGuess)
})
btnToRKaiueo.addEventListener('click', () => {
  oneLesson.title = 'katakana : a i u e o (deviner le romanji)'
  oneLesson.code = 'k-a-i-u-e-o'
  oneLesson.displayButtonLesson()
  oneLesson.lessonKaiueo(oneGuess)
})
btnToRHkakikukeko.addEventListener('click', () => {
  oneLesson.title = 'hiragana : ka ki ku ke ko (deviner le romanji)'
  oneLesson.code = 'h-ka-ki-ku-ke-ko'
  oneLesson.displayButtonLesson()
  oneLesson.lessonHkakikukeko(oneGuess)
})
btnToRKkakikukeko.addEventListener('click', () => {
  oneLesson.title = 'katakana : ka ki ku ke ko (deviner le romanji)'
  oneLesson.code = 'k-ka-ki-ku-ke-ko'
  oneLesson.displayButtonLesson()
  oneLesson.lessonKkakikukeko(oneGuess)
})
btnToRHsashisuseso.addEventListener('click', () => {
  oneLesson.title = 'hiragana : sa shi su se so (deviner le romanji)'
  oneLesson.code = 'h-sa-shi-su-se-so'
  oneLesson.displayButtonLesson()
  oneLesson.lessonHsashisuseso(oneGuess)
})
btnToRKsashisuseso.addEventListener('click', () => {
  oneLesson.title = 'katakana : sa shi su se so (deviner le romanji)'
  oneLesson.code = 'k-sa-shi-su-se-so'
  oneLesson.displayButtonLesson()
  oneLesson.lessonKsashisuseso(oneGuess)
})
btnToRHtachitsuteto.addEventListener('click', () => {
  oneLesson.title = 'hiragana : ta chi tsu te to (deviner le romanji)'
  oneLesson.code = 'h-ta-chi-tsu-te-to'
  oneLesson.displayButtonLesson()
  oneLesson.lessonHtachitsuteto(oneGuess)
})
btnToRKtachitsuteto.addEventListener('click', () => {
  oneLesson.title = 'katakana : ta chi tsu te to (deviner le romanji)'
  oneLesson.code = 'k-ta-chi-tsu-te-to'
  oneLesson.displayButtonLesson()
  oneLesson.lessonKtachitsuteto(oneGuess)
})
btnToRHnaninuneno.addEventListener('click', () => {
  oneLesson.title = 'hiragana : na ni nu ne no (deviner le romanji)'
  oneLesson.code = 'h-na-ni-nu-ne-no'
  oneLesson.displayButtonLesson()
  oneLesson.lessonHnaninuneno(oneGuess)
})
btnToRKnaninuneno.addEventListener('click', () => {
  oneLesson.title = 'katakana : na ni nu ne no (deviner le romanji)'
  oneLesson.code = 'k-na-ni-nu-ne-no'
  oneLesson.displayButtonLesson()
  oneLesson.lessonKnaninuneno(oneGuess)
})
btnToRHhahifuheho.addEventListener('click', () => {
  oneLesson.title = 'hiragana : ha hi fu he ho (deviner le romanji)'
  oneLesson.code = 'h-ha-hi-fu-he-ho'
  oneLesson.displayButtonLesson()
  oneLesson.lessonHhahifuheho(oneGuess)
})
btnToRKhahifuheho.addEventListener('click', () => {
  oneLesson.title = 'katakana : ha hi fu he ho (deviner le romanji)'
  oneLesson.code = 'k-ha-hi-fu-he-ho'
  oneLesson.displayButtonLesson()
  oneLesson.lessonKhahifuheho(oneGuess)
})
btnToRHmamimumemo.addEventListener('click', () => {
  oneLesson.title = 'hiragana : ma mi mu me mo (deviner le romanji)'
  oneLesson.code = 'h-ma-mi-mu-me-mo'
  oneLesson.displayButtonLesson()
  oneLesson.lessonHmamimumemo(oneGuess)
})
btnToRKmamimumemo.addEventListener('click', () => {
  oneLesson.title = 'katakana : ma mi mu me mo (deviner le romanji)'
  oneLesson.code = 'k-ma-mi-mu-me-mo'
  oneLesson.displayButtonLesson()
  oneLesson.lessonKmamimumemo(oneGuess)
})
btnToRHyayuyo.addEventListener('click', () => {
  oneLesson.title = 'hiragana : ya yu yo (deviner le romanji)'
  oneLesson.code = 'h-ya-yu-yo'
  oneLesson.displayButtonLesson()
  oneLesson.lessonHyayuyo(oneGuess)
})
btnToRKyayuyo.addEventListener('click', () => {
  oneLesson.title = 'katakana : ya yu yo (deviner le romanji)'
  oneLesson.code = 'k-ya-yu-yo'
  oneLesson.displayButtonLesson()
  oneLesson.lessonKyayuyo(oneGuess)
})
btnToRHrarirurero.addEventListener('click', () => {
  oneLesson.title = 'hiragana : ra ri ru re ro (deviner le romanji)'
  oneLesson.code = 'h-ra-ri-ru-re-ro'
  oneLesson.displayButtonLesson()
  oneLesson.lessonHrarirurero(oneGuess)
})
btnToRKrarirurero.addEventListener('click', () => {
  oneLesson.title = 'katakana : ra ri ru re ro (deviner le romanji)'
  oneLesson.code = 'k-ra-ri-ru-re-ro'
  oneLesson.displayButtonLesson()
  oneLesson.lessonKrarirurero(oneGuess)
})
btnToRHwawon.addEventListener('click', () => {
  oneLesson.title = 'hiragana : wa wo n (deviner le romanji)'
  oneLesson.code = 'h-wa-wo-n'
  oneLesson.displayButtonLesson()
  oneLesson.lessonHwawon(oneGuess)
})
btnToRKwawon.addEventListener('click', () => {
  oneLesson.title = 'katakana : wa wo n (deviner le romanji)'
  oneLesson.code = 'k-wo-n'
  oneLesson.displayButtonLesson()
  oneLesson.lessonKwawon(oneGuess)
})

choice1.addEventListener('click', () => {
  oneGuess.choiceSelectedIndex = 0
  oneGuess.makeAChoice(oneLesson)
})

choice2.addEventListener('click', () => {
  oneGuess.choiceSelectedIndex = 1
  oneGuess.makeAChoice(oneLesson)
})

choice3.addEventListener('click', () => {
  oneGuess.choiceSelectedIndex = 2
  oneGuess.makeAChoice(oneLesson)
})

choice4.addEventListener('click', () => {
  oneGuess.choiceSelectedIndex = 3
  oneGuess.makeAChoice(oneLesson)
})

choice5.addEventListener('click', () => {
  oneGuess.choiceSelectedIndex = 4
  oneGuess.makeAChoice(oneLesson)
})

export {
  oneLesson,
  oneGuess,
  btnToRHaiueo,
  btnToRKaiueo,
  btnToRHkakikukeko,
  btnToRKkakikukeko,
  btnToRHsashisuseso,
  btnToRKsashisuseso,
  btnToRHtachitsuteto,
  btnToRKtachitsuteto,
  btnToRHnaninuneno,
  btnToRKnaninuneno,
  btnToRHhahifuheho,
  btnToRKhahifuheho,
  btnToRHmamimumemo,
  btnToRKmamimumemo,
  btnToRHyayuyo,
  btnToRKyayuyo,
  btnToRHrarirurero,
  btnToRKrarirurero,
  btnToRHwawon,
  btnToRKwawon
}
