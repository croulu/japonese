import '@fortawesome/fontawesome-free/js/all.js'

import {LessonCatalog} from "./domain/LessonCatalog";
import {Lesson} from "./component_legacy/lesson";
import {Guess} from "./component_legacy/guess";

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



export {
    oneLesson,
    oneGuess
}
