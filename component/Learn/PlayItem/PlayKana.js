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

    const styleResultTrue = "resultPlayKana resultTrue";
    const styleResultFalse = "resultPlayKana resultFalse";

    return <div id="playKana">
        <div className={isChoiceValid ? styleResultTrue : styleResultFalse}>
            {isChoiceValid ? <span>yes !</span> : isChoiceValid === false ? <span>no</span> : ""}
        </div>
        <div className="playKana">
            <div className="playItemKana" id="playItemKana">
               {guess.syllable.display()}
            </div>
            {
                guess.syllables.map(syllable => <Choice key={syllable.key()}
                                                        syllable={syllable}
                                                        handleClick={handleChoiceClick}/>)
            }
        </div>
    </div>
}
