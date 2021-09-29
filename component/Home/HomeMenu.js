import React from "react";
import {useHistory} from "react-router-dom";

export const HomeMenu = ({onLevelLessonChange}) => {

    const history = useHistory();

    const handleHomeClick = function () {
        history.push('/');
    }

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
            <div className="page-block">
                <header className="header-main">
                    <a onClick={handleHomeClick}><div className="logo-main"></div></a>

                    <nav className="menu-main hamburger-navigation">

                        <label htmlFor="hamburger"><i className="fas fa-bars"></i></label>
                        <input type="checkbox" id="hamburger"/>

                        <div className="hamburger-items">
                            <a className="menu-main-item" onClick={handleEasyLevelClick}>Practice easy !</a>
                            <a className="menu-main-item" onClick={handleHardLevelClick}>Practice hard !</a>
                            <a className="menu-main-item" onClick={handleLessonClick}>Lessons</a>
                        </div>
                    </nav>

                </header>
            </div>
        </>
    )
}

