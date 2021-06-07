import React from "react";

export const Toolbar = ({statistiques}) =>
    <>
        <div id="infoGroup" className="info w3-center w3-red">
            <div id="info">{statistiques}</div>
            <div className="reloadContinue">
                <a id="reload" className="w3-button w3-red reloadContinueItem"><i
                    className="fa fa-redo w3-xxxlarge"></i></a>
                <a id="forward" className="w3-button w3-red reloadContinueItem"><i
                    className="fa fa-forward w3-xxxlarge"></i></a>
            </div>
        </div>
    </>
