import React, {Component} from "react";
import {Toolbar} from "./Toolbar";
import {PlayKana} from "./PlayKana";
import {Timer2} from "./Timer2";
import {stopLesson} from "../../../component_legacy/lesson";


export default class PlayItem extends Component {
    state = {
        statistiques: 'TODO'
    }

   // this.props.oneLesson.launchLesson('simple', 'h-ka-ki-ku-ke-ko', this.props.oneGuess);

    handleOnTimeout = () => {
        this.statistiques = stopLesson(this.props.oneLesson, this.props.oneLesson.oneChoiceGroup, this.props.oneGuess).statistiques;
    };

    handleChange = (event) => {
        console.log(event.target.value)
        this.props.onLessonChange(event.target.value)
    }

    render() {
        return <div id="playItem">
            <Timer2 onTimeout={ this.handleOnTimeout } />
            <Toolbar statistiques={ this.state.statistiques } />
            <PlayKana nbChoice={5} letters={[{txt:"a"},{txt:"i"},{txt:"u"},{txt:"o"},{txt:"e"}]}  onClick={ this.handleChange }/>
        </div>;
    }
}
