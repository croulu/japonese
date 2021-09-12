import React, {useState} from "react";

import {Choice} from "./Choice";

export const PlayKana = ({practice}) => {
    const [guess, setGuess] = useState(practice.next())
    const [isChoiceValid, setIsChoiceValid] = useState(undefined)

    const handleChoiceClick = (chosenKana) => {
        setIsChoiceValid(guess.validateChoice(chosenKana))
        setTimeout(() => {
            setIsChoiceValid(undefined)
            setGuess(practice.next());
        }, 1000);
    }

    return <div id="playKana">
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px",
                color: "white",
                minHeight: "60px",
                margin: "10px"
            }}>
            {isChoiceValid ? <span>Bingo :D !</span> : isChoiceValid === false ? <span>Nope :(</span> :
                ""}
        </div>
        <div className="playKana">
            <div>
                <div id="playItemRomanji">{guess.syllable.display()}</div>
            </div>
            {
                guess.syllables.map(syllable => <Choice key={syllable.key()}
                                                        syllable={syllable}
                                                        handleClick={handleChoiceClick}/>)
            }
        </div>
    </div>
}
