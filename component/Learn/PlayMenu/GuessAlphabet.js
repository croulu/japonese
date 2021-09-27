import React from "react";
import {LessonsGroup} from "./LessonGroup";

export const GuessAlphabet = ({alphabetName, alphabet, alphabetLetter, oneLesson, oneGuess, onLessonChange}) =>
    <>
        <h2>{alphabetName}</h2>
        <div className="playMenu">
            {Object.entries(alphabet).map(([groupName, lessons]) =>
                <LessonsGroup
                    key={groupName}
                    title={groupName} lessons={lessons} letter={alphabetLetter} oneLesson={oneLesson}
                    oneGuess={oneGuess}
                    onLessonChange={onLessonChange}
                    alphabetName={alphabetName}/>
            )
            }
        </div>
    </>
