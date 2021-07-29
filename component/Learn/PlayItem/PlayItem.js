import React from "react";
import {Toolbar} from "./Toolbar";
import {PlayKana} from "./PlayKana";
import {Timer2} from "./Timer2";
import {stopLesson} from "../../../component_legacy/lesson";
import {PracticeFactory} from "../../../domain/PracticeFactory";

export const PlayItem = ({oneLesson, oneGuess, onLessonChange, alphabet, lesson, guessWhat}) => {


    const letters = lesson
        .split(" ")
        .map(letter => letter = {txt: letter})

    const handleOnTimeout = () => {
        const statistiques = stopLesson(oneLesson, oneLesson.oneChoiceGroup, oneGuess).statistiques;
    };

    const handleChange = (event) => {
        this.props.onLessonChange(event.target.value)
    }

    const createPractice = (lesson, alphabet) => {
        return PracticeFactory.createPractice(lesson, alphabet);
    }

    return (<div id="playItem">
        <Timer2 onTimeout={handleOnTimeout}/>
        <Toolbar statistiques={"STATS TODO"}/>
        <PlayKana letters={letters} alphabet={alphabet}
                  onClick={handleChange} guessWhat={guessWhat} practice={createPractice(lesson,alphabet)}/>
    </div>);
}
