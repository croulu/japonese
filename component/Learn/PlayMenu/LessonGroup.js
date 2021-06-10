import React, {useState} from "react";
import {LessonButton} from "./LessonButton";

export const LessonsGroup = ({title, lessons, letter, oneLesson, oneGuess, onLessonChange}) => {
    const [lessonsInArray, setLessonsInArray] = useState([lessons]);

    return (<>
        {title}
        <br/>
        <div className="lessons">
            {
                lessonsInArray.map((lesson, index) =>
                    <LessonButton
                        key={index}
                        kana={lesson} alphabet={letter} oneLesson={oneLesson}
                        oneGuess={oneGuess}
                        onLessonChange={onLessonChange}/>)
            }
        </div>
    </>);
}
