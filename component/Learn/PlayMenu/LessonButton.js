import React from "react";

import {LessonCatalog} from "../../../domain/LessonCatalog";

import {useHistory} from 'react-router-dom'

export const LessonButton = ({alphabet, lesson, onLessonChange, alphabetName}) => {

    const history = useHistory();
    const catalog = new LessonCatalog();

    const handleClick = function () {
        onLessonChange(alphabet, lesson.syllables, lesson.order, alphabetName)

        history.push('/play')
    }

    return (<a
            id={`btnGuess${alphabet}${lesson.id}`}
            className="w3-button w3-white w3-hover-opacity bigButton"
            onClick={handleClick}
        >
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: "bold",
                color: "black",
                minHeight: "40px",
                margin: "0px"
            }}>{ catalog.kanaToDisplayForLesson(lesson.syllables) }</div>
        { lesson.title }
        </a>);
};
