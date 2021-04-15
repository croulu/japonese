import React from "react";
import {GuessAlphabet} from "./GuessAlphabet";

export const App = ({catalog, oneLesson, oneGuess}) =>
    <>
        <GuessAlphabet title={"Hiragana"} alphabet={catalog.getHiraganas()} alphabetLetter="H" oneLesson={oneLesson}
                       oneGuess={oneGuess}/>
        <GuessAlphabet title={"Katakana"} alphabet={catalog.getKatakanas()} alphabetLetter="K" oneLesson={oneLesson}
                       oneGuess={oneGuess}/>
    </>
