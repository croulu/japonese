import React from "react";
import {LessonButton} from "./LessonButton";

export const LessonsGroup = ({title, lessons, letter, oneLesson, oneGuess, onLessonChange}) =>
    <>
        {title}
        <br/>
        <div className="lessons">
            {
                lessons.map(lesson =>
                    <LessonButton
                        key={lesson.title}
                        kana={lesson} alphabet={letter} oneLesson={oneLesson}
                        oneGuess={oneGuess}
                        onLessonChange={onLessonChange}/>)
            }
        </div>
    </>
