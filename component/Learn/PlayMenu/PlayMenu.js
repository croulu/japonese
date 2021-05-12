import React from "react";
import {GuessAlphabet} from "./GuessAlphabet";
import {Continue} from "./Continue";
import {Alllearned} from "./Alllearned";

export const PlayMenu = ({alphabets, oneLesson, oneGuess}) =>
    <div id="playMenu">

        <Continue/>

        <Alllearned/>

        {Object.entries(alphabets).map(([alphabetName, alphabet]) =>
            <GuessAlphabet
                key={alphabetName}
                title={alphabetName}
                alphabet={alphabet}
                alphabetLetter={alphabetName.charAt(0).toUpperCase()}
                oneLesson={oneLesson}
                oneGuess={oneGuess}/>
        )}
    </div>
