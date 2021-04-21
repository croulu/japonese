import React from "react";
import {PlayMenu} from "./Learn/PlayMenu/PlayMenu";
import {PlayItem} from "./Learn/PlayItem/PlayItem";

export const App = ({alphabets, oneLesson, oneGuess}) =>
    <>
        <PlayMenu alphabets={alphabets} oneLesson={oneLesson} oneGuess={oneGuess} />
        <PlayItem />
    </>
