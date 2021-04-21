import React from "react";
import {Timer} from "./Timer";
import {Toolbar} from "./Toolbar";
import {PlayKana} from "./PlayKana";

export const PlayItem = () =>
    <div id="playItem">
        <Timer />
        <Toolbar />
        <PlayKana />
    </div>


