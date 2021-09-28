import React from "react";
import {LessonButton} from "./LessonButton";

export const LessonsGroup = ({lessons, letter, onLessonChange, alphabetName}) =>
    <>
            {
                lessons.map((lesson, index) =>
                    <LessonButton
                        key={index}
                        lesson={lesson} alphabet={letter}
                        onLessonChange={onLessonChange} alphabetName={alphabetName}/>)
            }
    </>
