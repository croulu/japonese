import React, {useState} from "react";
import {Toolbar} from "./Toolbar";
import {PlayKana} from "./PlayKana";
import {CountdownTimer} from "./CountdownTimer";
import {Practice} from "../../../domain/Practice";

export const PlayItem = ({onLessonChange, easyLesson, lesson}) => {

    const handleOnTimeout = () => {
        const statistiques = "";
    };

    const handleChange = (event) => {
        onLessonChange(event.target.value);
    }

    const createPractice = (lesson) => new Practice(lesson)

    const levelChoosen = easyLesson ? "Level easy" : "Level hard";

    return (<div id="playItem"> {levelChoosen}
        <PlayKana onClick={handleChange} practice={createPractice(lesson)}/>
        <CountdownTimer onTimeout={handleOnTimeout}/>
        <Toolbar statistiques={"STATS TODO"}/>
    </div>);
}
