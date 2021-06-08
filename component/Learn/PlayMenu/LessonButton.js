import React, {Component} from "react";
import {useHistory} from 'react-router-dom'

export default class LessonButton extends Component {

    state = {
        kana,
        alphabet,
        oneLesson,
        oneGuess
    }

    handleClick(e) {
        this.props.onLessonChange(e.target.value)
    }

    render() {

        return (<a
            id={`btnGuess${alphabet}${kana.id}`}
            className="w3-button w3-white w3-hover-opacity bigButton"
            onClick={this.handleClick}
        >
            <span className={`kanaAlphabetIco ico${alphabet}${kana.img}`}/>
            <br/>
            {kana.title}
        </a>);
    }
};
