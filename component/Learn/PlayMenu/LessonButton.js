import React from "react";

export const LessonButton = ({alphabet, kana}) => {

    const handleClick = () => {
        this.props.onLessonChange(alphabet, kana.title)
    }

    return (<a
            id={`btnGuess${alphabet}${kana.id}`}
            className="w3-button w3-white w3-hover-opacity bigButton"
            onClick={handleClick}
        >
            <span className={`kanaAlphabetIco ico${alphabet}${kana.img}`}/>
            <br/>
            {kana.title}
        </a>);
};
