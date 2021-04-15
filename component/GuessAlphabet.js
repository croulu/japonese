import React from "react";
import {LessonsGroup} from "./LessonGroup";

export const GuessAlphabet = ({title, alphabet, alphabetLetter, oneLesson, oneGuess}) =>
    <>
        <h2>{title}</h2>
        {
            Object.entries(alphabet).map(([groupName, lessons]) =>
                <LessonsGroup title={groupName} lessons={lessons} letter={alphabetLetter} oneLesson={oneLesson}
                              oneGuess={oneGuess}/>
            )
        }
    </>
