import React from "react";
import {PlayMenu} from "./PlayMenu/PlayMenu";

export const App = ({alphabets, oneLesson, oneGuess}) =>
    <>
        <PlayMenu alphabets={alphabets} oneLesson={oneLesson} oneGuess={oneGuess} />
    </>
