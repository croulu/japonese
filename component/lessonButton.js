export const lessonButton = (kana, alphabet, lesson, guess) => {
    const btn = document.createElement("a")
    btn.setAttribute("id", `btnGuess${alphabet}${kana.id}`)
    btn.setAttribute("class", "w3-button w3-white w3-hover-opacity bigButton")

    const btnContent = document.createElement("span")
    btnContent.setAttribute("class", `kanaAlphabetIco ico${alphabet}${kana.img}`)

    btn.appendChild(btnContent)
    btn.appendChild(document.createElement("br"))
    btn.appendChild(document.createTextNode(kana.title))

    btn.addEventListener('click', () => lesson.launchLesson('simple', alphabet.toLowerCase() + '-' + kana.title.split(" ").join("-"), guess))

    return btn
};
