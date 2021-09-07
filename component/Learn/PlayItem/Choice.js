import React from "react";

export const Choice = ({syllable, guessWhat, handleClick}) => {
    const divCssImg = "playKanaChoice" + " " + syllable.display() + " "

    if (guessWhat === "kana") {
        return (
            <div>
                <a onClick={() => handleClick(syllable)}>
                    <div className={divCssImg}></div>
                </a>
            </div>
        );
    } else {
        return (
            <div>
                <a onClick={() => handleClick(syllable)}>
                    <div>{syllable.display()}</div>
                </a>
            </div>
        );
    }

};
