import {lessonButton} from "./lessonButton";

export const lessonsGroup = (title, kanas, alphabet, lesson, guess) => {

    const div = document.createElement("div")
    div.appendChild(document.createTextNode(title))
    div.appendChild(document.createElement("br"))

    const divLessons = document.createElement("div")
    divLessons.setAttribute("class", "lessons")

    div.appendChild(divLessons)

    kanas.forEach(kana => divLessons.appendChild(lessonButton(kana, alphabet, lesson, guess)))

    return div
}
