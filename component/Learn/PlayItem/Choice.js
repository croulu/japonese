import React from "react";

export const Choice = ({syllable, handleClick}) => {
    return (
        <div className="playKanaChoiceItem">
            <a onClick={() => handleClick(syllable)}>
                {syllable.display()}
            </a>
        </div>
    );

};
