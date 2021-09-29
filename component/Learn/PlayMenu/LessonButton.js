import React from "react";
import {useHistory} from 'react-router-dom'

import {LessonCatalog} from "../../../domain/LessonCatalog";

export const LessonButton = ({alphabet, lesson, onLessonChange, alphabetName}) => {

    const history = useHistory();
    const catalog = new LessonCatalog();

    const handleClick = function () {
        onLessonChange(alphabet, lesson.syllables, lesson.order, alphabetName);

        history.push('/play');
    }

    return (<a onClick={handleClick}>
            <div className="kanaToPlay">
                {catalog.kanaToDisplayForLesson(lesson.syllables)}</div>
            <div className="labelForKanaToPlay">{lesson.title}</div>
        </a>
    );
};
