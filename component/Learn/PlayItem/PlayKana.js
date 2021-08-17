import React, {useState} from "react";

import {Choice} from "./Choice";
import {Kana} from "../../../domain/Kana";

export const PlayKana = ({letters, alphabet, guessWhat, practice}) => {
    const [guess, setGuess] = useState(practice.next())
    const [isChoiceValid, setIsChoiceValid] = useState(undefined)
    const isKana = guessWhat === "kana"

    const handleChoiceClick = (chosenKana) => {
        setIsChoiceValid(guess.validateChoice(chosenKana))
        setTimeout(() => {
            setIsChoiceValid(undefined)
            setGuess(practice.next());
        }, 1000);
    }

    const divCssImg = () => {
        return "playItemKana" + " " + guess.kanaToGuess.determineKanaImageWithAlphabetAndSyllable()
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
                    isKana ? <div id="playItemRomanji">{guess.kanaToGuess.syllable}</div> :
                        <div id="playItemKana" className={divCssImg()}></div>

                }
            </div>
            {letters.map(letter => <Choice key={letter.txt}
                                           kana={new Kana(alphabet, letter.txt)}
                                           guessWhat={guessWhat}
                                           handleClick={handleChoiceClick} />)}
        </div>
    </div>
}
