import React from "react";

export const Choice = ({letter}) => {

        return <div id="choice1">
                    <div className="playKanaChoice"><span id="choice1Txt">{letter.txt}</span></div>
                    <div className="playKanaChoice"><span id="choice1Img"></span></div>
              </div>
 };
