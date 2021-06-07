import React from "react";

import {Choice} from "./Choice";

export const PlayKana = ({nbChoice, letters}) => {

    if (nbChoice === 5) {
        return <div id="playKana">
            <div className="playKana">
                letters
                .map(letter => {<Choice number={1} letter={letter} />})
                <div id="choice1">
                    <div className="playKanaChoice"><span id="choice1Txt"></span></div>
                    <div className="playKanaChoice"><span id="choice1Img"></span></div>
                </div>

                <div className="w3-hover-none">
                    <div className="w3-red playKanaChoice w3-hover-none" id="playItemKana"><span id="kanaImg"></span>
                    </div>
                    <div className="w3-red w3-text-black playKanaChoice w3-hover-none" id="playItemRomanji"></div>
                </div>

                <div id="choice2">
                    <div className="playKanaChoice"><span id="choice2Txt"></span></div>
                    <div className="playKanaChoice"><span id="choice2Img"></span></div>
                </div>

                <div id="choice3">
                    <div className="playKanaChoice"><span id="choice3Txt"></span></div>
                    <div className="playKanaChoice"><span id="choice3Img"></span></div>
                </div>

                <div id="choice4">
                    <div className="playKanaChoice"><span id="choice4Txt"></span></div>
                    <div className="playKanaChoice"><span id="choice4Img"></span></div>
                </div>

                <div id="choice5">
                    <div className="playKanaChoice"><span id="choice5Txt"></span></div>
                    <div className="playKanaChoice"><span id="choice5Img"></span></div>
                </div>
            </div>
        </div>;
    } else {
        return <div id="playKana">
            <div className="playKana">
                <div id="choice1">
                    <div className="playKanaChoice"><span id="choice1Txt"></span></div>
                    <div className="playKanaChoice"><span id="choice1Img"></span></div>
                </div>

                <div className="w3-hover-none">
                    <div className="w3-red playKanaChoice w3-hover-none" id="playItemKana"><span id="kanaImg"></span>
                    </div>
                    <div className="w3-red w3-text-black playKanaChoice w3-hover-none" id="playItemRomanji"></div>
                </div>

                <div id="choice2">
                    <div className="playKanaChoice"><span id="choice2Txt"></span></div>
                    <div className="playKanaChoice"><span id="choice2Img"></span></div>
                </div>

                <div id="choice3">
                    <div className="playKanaChoice"><span id="choice3Txt"></span></div>
                    <div className="playKanaChoice"><span id="choice3Img"></span></div>
                </div>
            </div>
        </div>;
    }
}
