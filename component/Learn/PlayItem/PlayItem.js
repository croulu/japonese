import React from "react";

export const PlayItem = ({}) =>
    <div id="playItem">

        <div className="w3-red w3-text-black">
            <div className="countdownTimer">
                <div id="countdownTimer" className="time">01:00</div>
            </div>

            <div id="infoGroup" className="info w3-center w3-red">
                <div id="info"></div>
                <div className="reloadContinue">
                    <a id="reload" className="w3-button w3-red reloadContinueItem"><i
                        className="fa fa-redo w3-xxxlarge"></i></a>
                    <a id="forward" className="w3-button w3-red reloadContinueItem"><i
                        className="fa fa-forward w3-xxxlarge"></i></a>
                </div>
            </div>

        </div>

        <div id="playKana">
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

                <div id="choice4">
                    <div className="playKanaChoice"><span id="choice4Txt"></span></div>
                    <div className="playKanaChoice"><span id="choice4Img"></span></div>
                </div>

                <div id="choice5">
                    <div className="playKanaChoice"><span id="choice5Txt"></span></div>
                    <div className="playKanaChoice"><span id="choice5Img"></span></div>
                </div>
            </div>
        </div>

    </div>


