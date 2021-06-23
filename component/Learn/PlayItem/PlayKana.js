import React from "react";

import {Choice} from "./Choice";

export const PlayKana = ({letters, alphabet}) => {

    return <div id="playKana">
        <div className="playKana">
            <div className="w3-hover-none">
                <div className="w3-red playKanaChoice w3-hover-none" id="playItemKana"><span id="kanaImg"></span></div>
                <div className="w3-red w3-text-black playKanaChoice w3-hover-none" id="playItemRomanji"></div>
            </div>
            {letters.map(letter => <Choice key={letter.txt} letter={letter} alphabet={alphabet}/>)}
        </div>
    </div>;
}
