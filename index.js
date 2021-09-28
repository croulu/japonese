import '@fortawesome/fontawesome-free/js/all.js'

import {LessonCatalog} from "./domain/LessonCatalog";

import React from "react"
import ReactDOM from "react-dom";
import {App} from "./component/App";
import {initClickOnCountdown} from "./js/timerCountDown";

const lessonCatalog = new LessonCatalog()



ReactDOM.render(
    <App alphabets={lessonCatalog.list()} />,
    document.getElementById("app")
)



//initClickOnCountdown();


