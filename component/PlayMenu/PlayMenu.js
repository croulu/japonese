import React from "react";
import {GuessAlphabet} from "./GuessAlphabet";

export const PlayMenu = ({alphabets, oneLesson, oneGuess}) =>
    <div id="playMenu">

        <h2>Continue</h2>
        <a className="w3-button w3-white w3-center w3-hover-opacity veryBigButton" id="btnContinue"></a>

        <h2>All learned</h2>
        <a className="w3-button w3-white w3-center w3-hover-opacity bigButton" id="btnAllHiraganaLearned">hiragana</a>
        <a className="w3-button w3-white w3-center w3-hover-opacity bigButton" id="btnAllKatakanaLearned">katakana</a>


        { Object.entries(alphabets).map(([alphabetName, alphabet]) =>
            <GuessAlphabet
                title={alphabetName}
                alphabet={alphabet}
                alphabetLetter={alphabetName.charAt(0).toUpperCase()}
                oneLesson={oneLesson}
                oneGuess={oneGuess}/>
        )}
    </div>
