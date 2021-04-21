import React from "react";

export const LessonButton = ({kana, alphabet, oneLesson, oneGuess}) =>
    <a
        id={`btnGuess${alphabet}${kana.id}`}
        className="w3-button w3-white w3-hover-opacity bigButton"
        onClick={() => oneLesson.launchLesson('simple', alphabet.toLowerCase() + '-' + kana.title.split(" ").join("-"), oneGuess)}
    >
        <span className={`kanaAlphabetIco ico${alphabet}${kana.img}`}/>
        <br/>
        {kana.title}
    </a>;
