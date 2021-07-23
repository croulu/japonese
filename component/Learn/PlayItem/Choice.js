import React from "react";

export const Choice = ({letter, alphabet, guessWhat}) => {

    const imageNameCss = alphabet.toUpperCase() + letter.txt
    const divCssImg = "playKanaChoice" + " " + imageNameCss + " "
    const choiceName = "choice" + letter.txt

    const handleClick = function () {
        console.log("choice")
    }

    if (guessWhat === "kana") {
        return (
            <div id={choiceName}>
                <a onClick={handleClick}>
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
