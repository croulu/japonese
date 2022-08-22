import React from "react";
import {GuessAlphabet} from "./GuessAlphabet";


export const PlayMenu = ({alphabets, levelLessonToPlay, onLessonChange}) => {

    const levelChoosen = levelLessonToPlay;

    return(
        <>
            <div id="playMenu" className="page-block-content">{levelChoosen}

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
    )
};
