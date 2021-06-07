import React, {Component} from "react";
import {Timer} from "./Timer";
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
        const statistiques = event.target.value()
        this.setState(statistiques)
    }

    render() {
        return <div id="playItem">
            <Timer2 onTimeout={ this.handleOnTimeout } />
            <Toolbar statistiques={ this.state.statistiques } onChange={ this.handleChange } />
            <PlayKana nbChoice={5} />
        </div>;
    }
}
