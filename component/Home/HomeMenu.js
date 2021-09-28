import React from "react";

export const HomeMenu = ({}) =>
    <>
        <div className="page-block bb">
            <header className="header-main page-block-content">
                <div className="logo-main"></div>

                <nav className="menu-main hamburger-navigation">

                    <label htmlFor="hamburger"><i className="fas fa-bars"></i></label>
                    <input type="checkbox" id="hamburger"/>

                    <div className="hamburger-items">
                        <a className="menu-main-item" href="#">easy</a>
                        <a className="menu-main-item" href="#">medium</a>
                        <a className="menu-main-item" href="#">hard</a>
                        <a className="menu-main-item" href="#">very hard</a>
                        <a className="menu-main-item" href="#">Lessons</a>
                    </div>
                </nav>

            </header>
        </div>

    </>

