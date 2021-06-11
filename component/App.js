import React from "react";
import {Routing} from "./Routing";

export const App = ({alphabets, oneLesson, oneGuess}) =>
    <>
        <Routing alphabets={alphabets} oneLesson={oneLesson} oneGuess={oneGuess}/>
    </>
