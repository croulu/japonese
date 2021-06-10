import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {PlayMenu} from "./Learn/PlayMenu/PlayMenu";
import {PlayItem} from "./Learn/PlayItem/PlayItem";

export const Routing = (alphabets, oneLesson, oneGuess) => {

    const handleLesson = (alphabet, lesson) => {
        //const history = useHistory()

        console.log(alphabet.toLowerCase() + '-' + lesson.split(" ").join("-"))
        this.state.oneLesson.launchLesson('simple', alphabet.toLowerCase() + '-' + lesson.split(" ").join("-"), oneGuess);
        //history.push('/play')
    };

    return (
        <Router>
            <Route exact path='/'>
                <PlayMenu
                          alphabets={alphabets}
                          oneLesson={oneLesson}
                          oneGuess={oneGuess}
                          onLessonChange={handleLesson} />
            </Route>
            <Route exact path='/play'>
                <PlayItem
                          oneLesson={oneLesson}
                          oneGuess={oneGuess}
                          onLessonChange={handleLesson} />
            </Route>
        </Router>
    );
};

