import React from "react";

import {Choice} from "./Choice";

export const PlayKana = ({letters, alphabet, guessWhat, guessKana}) => {

    if (guessWhat === "kana") {

        return <div id="playKana">
            <div className="playKana">
                <div className="w3-hover-none">
                    <div className="w3-red w3-text-black playKanaChoice w3-hover-none" id="playItemRomanji">{guessKana}</div>
                </div>
                {letters.map(letter => <Choice key={letter.txt} letter={letter} alphabet={alphabet}
                                               guessWhat={guessWhat}/>)}
            </div>
        </div>;
    } else {
        return <div id="playKana">
            <div className="playKana">
                <div className="w3-hover-none">{guessKana}
                    <div className="w3-red playKanaChoice w3-hover-none" id="playItemKana"><span id="kanaImg"></span>
                    </div>
                </div>
                {letters.map(letter => <Choice key={letter.txt} letter={letter} alphabet={alphabet}
                                               guessWhat={guessWhat}/>)}
            </div>
        </div>;

    }
}
