import React from "react";

export const Choice = ({letter, imageCss}) => {

    const divCss = "playKanaChoice" + " " + imageCss

    return <div id="choice1">
        <div className="playKanaChoice"><span id="choice1Txt">{letter.txt}</span></div>
        <div className={divCss}><span id="choice1Img">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></div>
    </div>
};
