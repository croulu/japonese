import React from "react";

export const Draw = () =>
    <div className="w3-content w3-text-grey" id="draw">

    <h2 className="w3-text-black">Draw</h2>
    <div id="drawMenu">
        <a className="w3-button w3-white w3-center w3-hover-opacity bigButton" id="btnDrawH">draw hiragana</a>
        <a className="w3-button w3-white w3-center w3-hover-opacity bigButton" id="btnDrawK">draw Katakana</a>
    </div>

    <div id="drawItem" className="draw">
        <div>
            <!-- the canvas for drawing -->
            <canvas id="canvas_draw" width="200" height="200" className="w3-white"
                    style="border:1px solid black"></canvas>

            <!-- the button for clearing canvas_draw -->
            <button id="button_clear" className="w3-button w3-section w3-white w3-center w3-hover-opacity"> Clear
            </button>
        </div>
        <div className="playKanaChoice"><span id="drawKanaItem"></span></div>
        <div className="w3-red w3-text-black playKanaChoice w3-hover-none"><span id="drawRomanjiItem"></span></div>
    </div>
    <!-- End Draw Section -->
</div>
