import React from "react";
import {useHistory} from 'react-router-dom'

export const LessonButton = ({alphabet, lesson, onLessonChange, alphabetName}) => {

    const history = useHistory()

    const handleClick = function () {
        onLessonChange(alphabet, lesson.syllables, lesson.order, alphabetName)

        history.push('/play')
    }


    const sentence = '\u30A2';
    const index = 0;


    return (<a
            id={`btnGuess${alphabet}${lesson.id}`}
            className="w3-button w3-white w3-hover-opacity bigButton"
            onClick={handleClick}
        >
            <span className={`kanaAlphabetIco ico${alphabet}${lesson.img}`}/>
            <br/>
        { sentence.charAt(index) }
        { lesson.title }
        </a>);
};
