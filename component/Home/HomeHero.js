import React from "react";
import {useHistory} from "react-router-dom";

export const HomeHero = ({onLevelLessonChange}) => {
    const history = useHistory();

    const handleEasyLevelClick = function () {
        onLevelLessonChange(true);

        history.push('/practice');
    }

    const handleHardLevelClick = function () {
        onLevelLessonChange(false);

        history.push('/practice');
    }

    const handleLessonClick = function () {
        history.push('/lesson');
    }

    return (
        <>
            <div className="page-block-content mt mb">
                <h1 className=" hero-main hero-main-title">Apprenez vos kanas !</h1>
                <p className=" hero-main hero-main-subtitle">Bon, d'accord ce n'est pas facile, nous allons vous aider
                    ;)</p>
                <div className="page-block-buttons mt mb">
                    <a onClick={handleEasyLevelClick} className="button">Start easy practice !</a>
                    <a onClick={handleHardLevelClick} className="button">Start hard practice !</a>
                    <a onClick={handleLessonClick} className="button button-primary">See lessons</a>
                </div>
            </div>
        </>
    )
};


