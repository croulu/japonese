import React from "react";
import {useHistory} from 'react-router-dom'

export const LessonButton = ({alphabet, kana, onLessonChange}) => {

    const history = useHistory()

    const handleClick = function () {
        onLessonChange(alphabet, kana.title)

        history.push('/play')
    }

    return (<a
            id={`btnGuess${alphabet}${kana.id}`}
            className="w3-button w3-white w3-hover-opacity bigButton"
            onClick={handleClick}
        >
            <span className={`kanaAlphabetIco ico${alphabet}${kana.img}`}/>
            <br/>
            {kana.title}
        </a>);
};
