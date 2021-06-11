import React from "react";
import {LessonsGroup} from "./LessonGroup";

export const GuessAlphabet = ({title, alphabet, alphabetLetter, oneLesson, oneGuess, onLessonChange}) =>
    <>
        <h2>{title}</h2>
        {Object.entries(alphabet).map(([groupName, lessons]) =>
            <LessonsGroup
                key={groupName}
                title={groupName} lessons={lessons} letter={alphabetLetter} oneLesson={oneLesson}
                oneGuess={oneGuess}
                onLessonChange={onLessonChange}/>
        )
        }
    </>
