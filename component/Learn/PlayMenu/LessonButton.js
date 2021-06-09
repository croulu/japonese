import React, {Component} from "react";
import {useHistory} from 'react-router-dom'

export default class LessonButton extends Component {

    handleClick(e) {
        console.log(e.target.value)
        this.props.onLessonChange(e.target.value)
    }

    render() {

        return (<a
            id={`btnGuess${this.props.alphabet}${this.props.kana.id}`}
            className="w3-button w3-white w3-hover-opacity bigButton"
            onClick={this.handleClick}
        >
            <span className={`kanaAlphabetIco ico${this.props.alphabet}${this.props.kana.img}`}/>
            <br/>
            {this.props.kana.title}
        </a>);
    }
};
