import React, {useState} from "react";
import {Toolbar} from "./Toolbar";
import {PlayKana} from "./PlayKana";
import {Timer2} from "./Timer2";
import {stopLesson} from "../../../component_legacy/lesson";
import {Practice} from "../../../domain/Practice";


export const PlayItem = ({oneLesson, oneGuess, onLessonChange, lesson}) => {

    const handleOnTimeout = () => {
        const statistiques = stopLesson(oneLesson, oneLesson.oneChoiceGroup, oneGuess).statistiques;
    };

    const handleChange = (event) => {
        this.props.onLessonChange(event.target.value);
    }

    const createPractice = (lesson) => {
        return new Practice(lesson)
    }

    return (<div id="playItem">
        <Timer2 onTimeout={handleOnTimeout}/>
        <Toolbar statistiques={"STATS TODO"}/>
        <PlayKana onClick={handleChange} practice={createPractice(lesson)}/>
    </div>);
}
