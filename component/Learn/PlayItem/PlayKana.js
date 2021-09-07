import React, {useState} from "react";

import {Choice} from "./Choice";

export const PlayKana = ({practice, guessWhat}) => {
    const [guess, setGuess] = useState(practice.next())
    const [isChoiceValid, setIsChoiceValid] = useState(undefined)

    console.log({guess})
    console.log({guessWhat})

    const isKanaToGuess = guessWhat === "kana"

    const handleChoiceClick = (chosenKana) => {
        console.log("ici dans handleChoiceClick")
        setIsChoiceValid(guess.validateChoice(chosenKana))
        setTimeout(() => {
            setIsChoiceValid(undefined)
            setGuess(practice.next());
        }, 1000);

    }

    const divCssImg = () => {
        console.log(guess.syllable)

        return "playItemKana" + " " + guess.syllable.display()
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
                margin:"10px"
            }}>
            {isChoiceValid ? <span>Bingo :D !</span> : isChoiceValid === false ? <span>Nope :(</span> :
                ""}
        </div>
        <div className="playKana">
            <div>
                {
                    isKanaToGuess ? <div id="playItemKana" className={divCssImg()}></div> :
                        <div id="playItemRomanji">{guess.syllable.display()}</div>


                }
            </div>
                {
                    guess.syllables.map(syllable => <Choice key={syllable.key()}
                                                            syllable={syllable}
                                                            guessWhat={guessWhat}
                                                            handleClick={handleChoiceClick} />)
                }
        </div>
    </div>
}
