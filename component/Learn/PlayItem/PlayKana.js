import React, {useState} from "react";

import {Choice} from "./Choice";
import {Kana} from "../../../domain/Kana";
import {Romaji} from "../../../domain/Romaji";
import {randomizeWhatToGuess} from "../../../domain/randomizeWhatToGuess";

export const PlayKana = ({practice}) => {
    const [guess, setGuess] = useState(practice.next())
    const [guessWhat, setGuessWhat] = useState(randomizeWhatToGuess())
    const [isChoiceValid, setIsChoiceValid] = useState(undefined)

    console.log({guess})
    console.log({guessWhat})

    const isKana = guessWhat === "kana"

    const handleChoiceClick = (chosenKana) => {
        console.log("ici dans handleChoiceClick")
        setIsChoiceValid(guess.validateChoice(chosenKana))
        setTimeout(() => {
            setIsChoiceValid(undefined)
            setGuess(practice.next());
            setGuessWhat(randomizeWhatToGuess())
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
                    isKana ? <div id="playItemRomanji">{guess.syllable}</div> :
                        <div id="playItemKana" className={divCssImg()}></div>

                }
            </div>
            { guess.syllables.map(syllable => <Choice key={syllable.alphabet + syllable.consonant + syllable.vowel}
                                           kana={new Kana(syllable.alphabet, syllable.consonant, syllable.vowel)}
                                           guessWhat={guessWhat}
                                           handleClick={handleChoiceClick} />)}
        </div>
    </div>
}
