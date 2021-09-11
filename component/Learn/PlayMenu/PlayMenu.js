import React from "react";
import {GuessAlphabet} from "./GuessAlphabet";
import {IncludePreviousCheckBox} from "./IncludePreviousCheckBox";


export const PlayMenu = ({alphabets, oneLesson, oneGuess, onLessonChange}) =>
    <>
        <div id="playMenu">

            <IncludePreviousCheckBox />

            {Object.entries(alphabets).map(([alphabetName, alphabet]) =>
                <GuessAlphabet
                    key={alphabetName}
                    alphabetName={alphabetName}
                    alphabet={alphabet}
                    alphabetLetter={alphabetName.charAt(0).toUpperCase()}
                    oneLesson={oneLesson}
                    oneGuess={oneGuess}
                    onLessonChange={onLessonChange}/>
            )}
        </div>
    </>
