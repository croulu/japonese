import React, {useState} from "react";
import {Toolbar} from "./Toolbar";
import {PlayKana} from "./PlayKana";
import {Timer2} from "./Timer2";
import {Practice} from "../../../domain/Practice";


export const PlayItem = ({onLessonChange, lesson}) => {

    const handleOnTimeout = () => {
        const statistiques = "";
    };

    const handleChange = (event) => {
        this.props.onLessonChange(event.target.value);
    }

    const createPractice = (lesson) => {
        return new Practice(lesson)
    }

    return (<div id="playItem">
        <PlayKana onClick={handleChange} practice={createPractice(lesson)}/>
        <Timer2 onTimeout={handleOnTimeout}/>
        <Toolbar statistiques={"STATS TODO"}/>
    </div>);
}
