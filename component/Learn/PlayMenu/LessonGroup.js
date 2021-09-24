import React from "react";
import {LessonButton} from "./LessonButton";

export const LessonsGroup = ({title, lessons, letter, oneLesson, oneGuess, onLessonChange, alphabetName}) =>
    <>
            {
                lessons.map((lesson, index) =>
                    <LessonButton
                        key={index}
                        lesson={lesson} alphabet={letter} oneLesson={oneLesson}
                        oneGuess={oneGuess}
                        onLessonChange={onLessonChange} alphabetName={alphabetName}/>)
            }
    </>
