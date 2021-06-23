import React from "react";

export const Choice = ({letter, alphabet}) => {

    const imageNameCss = alphabet.toUpperCase() + letter.txt
    const divCss = "playKanaChoice" + " " + imageNameCss + " "

    return <div id="choice1">
        <div className="playKanaChoice"><span id="choice1Txt">{letter.txt}</span></div>
        <div className={divCss}><span id="choice1Img"></span></div>
    </div>
};
