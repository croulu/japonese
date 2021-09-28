import React from "react";
import {GuessAlphabet} from "./GuessAlphabet";


export const PlayMenu = ({alphabets, onLessonChange}) =>
    <>
        <div id="playMenu" className="page-block-content">

            {Object.entries(alphabets).map(([alphabetName, alphabet]) =>
                <GuessAlphabet
                    key={alphabetName}
                    alphabetName={alphabetName}
                    alphabet={alphabet}
                    alphabetLetter={alphabetName.charAt(0).toUpperCase()}
                    onLessonChange={onLessonChange} />
            )}
        </div>
    </>
