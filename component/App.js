import React from "react";
import {PlayMenu} from "./Learn/PlayMenu/PlayMenu";
import {PlayPractice} from "./Learn/PlayPractice/PlayPractice";

export const App = ({alphabets, oneLesson, oneGuess}) =>
    <>
        <PlayMenu alphabets={alphabets} oneLesson={oneLesson} oneGuess={oneGuess} />
        <PlayPractice />
    </>
