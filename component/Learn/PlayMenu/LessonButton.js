import React from "react";
import {useHistory} from 'react-router-dom'
import {Kana} from "../../../domain/Kana";

export const LessonButton = ({alphabet, lesson, onLessonChange, alphabetName}) => {

    const history = useHistory()

    const handleClick = function () {
        onLessonChange(alphabet, lesson.syllables, lesson.order, alphabetName)

        history.push('/play')
    }

    let imgLesson = "";
    lesson.syllables.map(syllable => {
        const kanaToDisplay = new Kana(syllable.alphabet, syllable.consonant, syllable.vowel);
        imgLesson += kanaToDisplay.display();
    })


    return (<a
            id={`btnGuess${alphabet}${lesson.id}`}
            className="w3-button w3-white w3-hover-opacity bigButton"
            onClick={handleClick}
        >
        { imgLesson }
            <br/>
        { lesson.title }
        </a>);
};
