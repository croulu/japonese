import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {PlayMenu} from "./Learn/PlayMenu/PlayMenu";
import {PlayItem} from "./Learn/PlayItem/PlayItem";

export const Routing = ({alphabets, oneLesson, oneGuess}) => {

    const [alphabet, setAlphabet] = useState("")
    const [lesson, setLesson] = useState("")

    const handleLesson = (alphabet, lesson) => {
        setAlphabet(alphabet)
        setLesson(lesson)
        console.log(alphabet.toLowerCase() + '-' + lesson.split(" ").join("-"))
        oneLesson.launchLesson('simple', alphabet.toLowerCase() + '-' + lesson.split(" ").join("-"), oneGuess);
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
                    onLessonChange={handleLesson}
                    alphabet={alphabet}
                    lesson={lesson} />
            </Route>
        </Router>
    );
};

