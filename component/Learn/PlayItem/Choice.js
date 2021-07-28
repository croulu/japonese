import React from "react";

export const Choice = ({kana, guessWhat, handleClick}) => {
    const divCssImg = "playKanaChoice" + " " + kana.determineKanaImageWithAlphabetAndSyllable() + " "
    const choiceName = "choice" + kana.syllable

    if (guessWhat === "kana") {
        return (
            <div id={choiceName}>
                <a value={kana} onClick={() => handleClick(kana)}>
                    <div className={divCssImg}><span id="choice1Img"></span></div>
                </a>
            </div>
        );
    } else {
        return (
            <div id={choiceName}>
                <a onClick={handleClick}>
                    <div className="playKanaChoice"><span id="choice1Txt">{letter.txt}</span></div>
                </a>
            </div>
        );
    }

};
