import React from "react";
import {useHistory} from "react-router-dom";

export const HomeHero = ({onLevelLessonChange}) => {
    const history = useHistory();

    const handleEasyLevelClick = function () {
        onLevelLessonChange('easy');

        history.push('/practice');
    }

    const handleHardLevelClick = function () {
        onLevelLessonChange('hard');

        history.push('/practice');
    }

    const handleExpertLevelClick = function () {
        onLevelLessonChange('expert');

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
                <div className="page-block-button">
                    <a onClick={handleEasyLevelClick} className="button">Entrainement facile</a>
                </div>
                <div className="page-block-button">
                    <a onClick={handleHardLevelClick} className="button">Entrainement difficile</a>
                </div>
                <div className="page-block-button">
                    <a onClick={handleExpertLevelClick} className="button">Entrainement expert</a>
                </div>
                <div className="page-block-button">
                    <a onClick={handleLessonClick} className="button button-primary">Voir la leçon</a>
                </div>
            </div>
        </>
    )
};


