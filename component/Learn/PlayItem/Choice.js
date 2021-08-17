import React from "react";

export const Choice = ({kana, guessWhat, handleClick}) => {
    const divCssImg = "playKanaChoice" + " " + kana.determineKanaImageWithAlphabetAndSyllable() + " "

    if (guessWhat === "kana") {
        return (
            <div>
                <a onClick={() => handleClick(kana)}>
                    <div className={divCssImg}></div>
                </a>
            </div>
        );
    } else {
        return (
            <div>
                <a onClick={() => handleClick(kana)}>
                    <div>{kana.syllable}</div>
                </a>
            </div>
        );
    }

};
