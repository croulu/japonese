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

    return (<a onClick={handleClick}>
            <div className="kanaToPlay">
                {catalog.kanaToDisplayForLesson(lesson.syllables)}</div>
            <div className="labelForKanaToPlay">{lesson.title}</div>
        </a>
    );
};
