import React from "react";

export const Choice = ({syllable, handleClick}) => {
    return (
        <div>
            <a onClick={() => handleClick(syllable)}>
                {syllable.display()}
            </a>
        </div>
    );

};
