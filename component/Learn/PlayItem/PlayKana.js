import React from "react";

import {Choice} from "./Choice";

export const PlayKana = ({nbChoice, letters, alphabet}) => {

    if (nbChoice === 5) {
        return <div id="playKana">
            <div className="playKana">
                {letters.map(letter => {
                    const imageCss = alphabet.toUpperCase() + letter.txt
                    return <Choice key={letter.txt} letter={letter} imageCss={imageCss}/>
                })}
                <div className="w3-hover-none">
                    <div className="w3-red playKanaChoice w3-hover-none" id="playItemKana"><span id="kanaImg"></span>
                    </div>
                    <div className="w3-red w3-text-black playKanaChoice w3-hover-none" id="playItemRomanji"></div>
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
