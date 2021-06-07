import React from "react";
import Redirect, { useHistory } from 'react-router-dom'

export const LessonButton = ({kana, alphabet, oneLesson, oneGuess}) => {
    const history = useHistory()
    const launchPlay = () => {
        console.log(alphabet.toLowerCase() + '-' + kana.title.split(" ").join("-"))
        oneLesson.launchLesson('simple', alphabet.toLowerCase() + '-' + kana.title.split(" ").join("-"), oneGuess);
        history.push('/play')
    };

    return <a
        id={`btnGuess${alphabet}${kana.id}`}
        className="w3-button w3-white w3-hover-opacity bigButton"
        onClick={launchPlay}
    >
        <span className={`kanaAlphabetIco ico${alphabet}${kana.img}`}/>
        <br/>
        {kana.title}
    </a>;
};
