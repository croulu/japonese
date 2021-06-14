import React from "react";
import {Toolbar} from "./Toolbar";
import {PlayKana} from "./PlayKana";
import {Timer2} from "./Timer2";
import {stopLesson} from "../../../component_legacy/lesson";

export const PlayItem = ({oneLesson, oneGuess, onLessonChange, alphabet, lesson}) => {

    console.log("playItem")
    console.log({alphabet}, {lesson})

    const handleOnTimeout = () => {
        const statistiques = stopLesson(oneLesson, oneLesson.oneChoiceGroup, oneGuess).statistiques;
    };

    const handleChange = (event) => {
        this.props.onLessonChange(event.target.value)
    }

    return (<div id="playItem">
        <Timer2 onTimeout={handleOnTimeout}/>
        <Toolbar statistiques={"STATS TODO"}/>
        <PlayKana nbChoice={5} letters={[{txt: "a"}, {txt: "i"}, {txt: "u"}, {txt: "o"}, {txt: "e"}]}
                  onClick={handleChange}/>
    </div>);
}
