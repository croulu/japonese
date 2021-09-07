import React, {useState} from "react";
import {Toolbar} from "./Toolbar";
import {PlayKana} from "./PlayKana";
import {Timer2} from "./Timer2";
import {stopLesson} from "../../../component_legacy/lesson";
import {PracticeFactory} from "../../../domain/PracticeFactory";
import {randomizeWhatToGuess} from "../../../domain/randomizeWhatToGuess";


export const PlayItem = ({oneLesson, oneGuess, onLessonChange, lesson}) => {

    const guessWhat = randomizeWhatToGuess()
console.log({guessWhat})

//    setGuessWhat(randomizeWhatToGuess())

    const handleOnTimeout = () => {
        const statistiques = stopLesson(oneLesson, oneLesson.oneChoiceGroup, oneGuess).statistiques;
    };

    const handleChange = (event) => {
        this.props.onLessonChange(event.target.value);
    }

    const createPractice = (lesson, guessWhat) => {
        return new PracticeFactory().createPractice(lesson, guessWhat);
    }

    return (<div id="playItem">
        <Timer2 onTimeout={handleOnTimeout}/>
        <Toolbar statistiques={"STATS TODO"}/>
        <PlayKana onClick={handleChange} practice={createPractice(lesson, guessWhat)} guessWhat={guessWhat}/>
    </div>);
}
