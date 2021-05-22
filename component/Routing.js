import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import {PlayMenu} from "./Learn/PlayMenu/PlayMenu";
import {PlayItem} from "./Learn/PlayItem/PlayItem";

const Routing = ({ alphabets, oneLesson, oneGuess }) => {
    return (
        <Router>
            <Route exact path='/'>
                <PlayMenu alphabets={alphabets} oneLesson={oneLesson} oneGuess={oneGuess} />
                <PlayItem oneLesson={oneLesson} oneGuess={oneGuess} />
            </Route>
            <Route exact path='/play'>
                <PlayItem  oneLesson={oneLesson} oneGuess={oneGuess} />
            </Route>
        </Router>
    );
};

export default Routing;
