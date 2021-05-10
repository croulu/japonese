import React from "react";
import {PlayMenu} from "./Learn/PlayMenu/PlayMenu";
import {PlayItem} from "./Learn/PlayItem/PlayItem";
import {LearnMenu} from "./Lessons/LearnMenu";

export const App = ({alphabets, oneLesson, oneGuess}) =>
    <>
        <PlayMenu alphabets={alphabets} oneLesson={oneLesson} oneGuess={oneGuess} />
        <PlayItem oneLesson={oneLesson} oneGuess={oneGuess} />
    </>
