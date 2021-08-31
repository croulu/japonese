import React, {useState} from "react";

import {Choice} from "./Choice";
import {Kana} from "../../../domain/Kana";
import {randomizeWhatToGuess} from "../../../domain/randomizeWhatToGuess";

export const PlayKana = ({letters, alphabet, exercise}) => {
    const [guess, setGuess] = useState(exercise.next())
    const [guessWhat, setGuessWhat] = useState(randomizeWhatToGuess())
    const [isChoiceValid, setIsChoiceValid] = useState(undefined)

    console.log({guess})

    const isKana = guessWhat === "kana"

    const handleChoiceClick = (chosenKana) => {
        console.log("ici dans handleChoiceClick")
        setIsChoiceValid(guess.validateChoice(chosenKana))
        setTimeout(() => {
            setIsChoiceValid(undefined)
            setGuess(exercise.next());
            setGuessWhat(randomizeWhatToGuess())
        }, 1000);

    }

    const divCssImg = () => {
        return "playItemKana" + " " + guess.kanaToGuess.determineKanaImage()
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
