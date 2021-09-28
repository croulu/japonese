import React from "react";
import {LessonsGroup} from "./LessonGroup";

export const GuessAlphabet = ({alphabetName, alphabet, alphabetLetter, onLessonChange}) =>
    <>
        <h2>{alphabetName}</h2>
        <div className="playMenu">
            {Object.entries(alphabet).map(([groupName, lessons]) =>
                <LessonsGroup
                    key={groupName}
                    lessons={lessons} letter={alphabetLetter}
                    onLessonChange={onLessonChange}
                    alphabetName={alphabetName}/>
            )
            }
        </div>
    </>
