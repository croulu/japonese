import React from "react";

export const Choice = ({letter, imageCss}) => {

    const completeImageCss = "playKanaChoice" + " " + imageCss

    return <div id="choice1">
        <div className="playKanaChoice"><span id="choice1Txt">{letter.txt}</span></div>
        <div className={completeImageCss}><span id="choice1Img">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></div>
    </div>
};
