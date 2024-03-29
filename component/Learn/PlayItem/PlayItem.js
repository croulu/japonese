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

    // Statistics TODO

    return (<div id="playItem"> {levelChoosen}
        <CountdownTimer onTimeout={handleOnTimeout}/>
        <Toolbar statistiques={""}/>
        <PlayKana onClick={handleChange} practice={createPractice(lesson)}/>
    </div>);
}
