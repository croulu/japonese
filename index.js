import '@fortawesome/fontawesome-free/js/all.js'

import {LessonCatalog} from "./domain/LessonCatalog";
import {Lesson} from "./component_legacy/lesson";
import {Guess} from "./component_legacy/guess";
import {Menu} from "./component_legacy/menu";
import {
    getInStorage,
    setInitLessons,
} from "./js/helpers";

import React from "react"
import ReactDOM from "react-dom";
import {App} from "./component/App";
import {initClickOnCountdown} from "./js/timerCountDown";

const lessonCatalog = new LessonCatalog()

const oneLesson = new Lesson()
const oneGuess = new Guess()


ReactDOM.render(
    <App alphabets={lessonCatalog.list()} oneLesson={oneLesson} oneGuess={oneGuess}/>,
    document.getElementById("app")
)

//initClickOnCountdown();



const oneMenu = new Menu()

// last lesson
const lastLessonName = getInStorage('oneLessonLastLessonName')
const lastLessonType = getInStorage('oneLessonLastLessonType')

// menus app
const bigMenuHome = document.getElementById('bigMenuHome')
const bigMenuLearn = document.getElementById('bigMenuLearn')

const bigMenuHomeSmallScreen = document.getElementById('bigMenuHomeSmallScreen')
const bigMenuLearnSmallScreen = document.getElementById('bigMenuLearnSmallScreen')

// buttons
let funcName = ''

const btnAlphabetHiragana = document.getElementById('btnAlphabetHiragana')
const btnAlphabetKatakana = document.getElementById('btnAlphabetKatakana')
const btnAlphabetKana = document.getElementById('btnAlphabetKanaComplet')
const btnAlphabetRomanji = document.getElementById('btnAlphabetRomanji')

const btnDrawH = document.getElementById('btnDrawH')
const btnDrawK = document.getElementById('btnDrawK')


oneMenu.displayHome()

oneLesson.setAllLesson()

if (oneLesson.getNbDoneLessons() === 0) {
    setInitLessons()
}

bigMenuHome.addEventListener('click', () => oneMenu.displayHome())
bigMenuLearn.addEventListener('click', () => oneMenu.displayLearn())

bigMenuHomeSmallScreen.addEventListener('click', () => oneMenu.displayHome())
bigMenuLearnSmallScreen.addEventListener('click', () => oneMenu.displayLearn())

//btnDrawH.addEventListener('click', () => oneMenu.displayDrawItemHiragana())
//btnDrawK.addEventListener('click', () => oneMenu.displayDrawItemKatakana())

btnAlphabetHiragana.addEventListener('click', () => oneMenu.displayLearnItemHiragana())
btnAlphabetKatakana.addEventListener('click', () => oneMenu.displayLearnItemKatakana())
btnAlphabetKana.addEventListener('click', () => oneMenu.displayLearnItemKana())

btnAlphabetRomanji.addEventListener('click', () => oneMenu.displayRomanji())


export {
    oneLesson,
    oneGuess
}
