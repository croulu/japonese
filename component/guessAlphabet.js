import {lessonsGroup} from "./lessonsGroup";

export const guessAlphabet = (title, alphabet, alphabetLetter, oneLesson, oneGuess) => {

    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    h2.appendChild(document.createTextNode(title))
    div.appendChild(h2)

    Object.entries(alphabet).forEach(([groupName, lessons]) => {

        div.appendChild(lessonsGroup(groupName, lessons, alphabetLetter, oneLesson, oneGuess))
    })

    return div
}
