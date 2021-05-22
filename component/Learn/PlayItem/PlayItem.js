import React from "react";
import {Timer} from "./Timer";
import {Toolbar} from "./Toolbar";
import {PlayKana} from "./PlayKana";
import {Timer2} from "./Timer2";
import {stopLesson} from "../../../component_legacy/lesson";



export const PlayItem = ({oneLesson, oneGuess}) =>
    <div id="playItem">
        <Timer />
        <Timer2 onTimeout={() => stopLesson(oneLesson, oneLesson.oneChoiceGroup, oneGuess)}/>
        <Toolbar />
        <PlayKana />
    </div>


