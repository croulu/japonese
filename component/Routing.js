import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {PlayMenu} from "./Learn/PlayMenu/PlayMenu";
import {PlayItem} from "./Learn/PlayItem/PlayItem";
import {LessonCatalog} from "../domain/LessonCatalog";

export const Routing = ({alphabets, oneLesson, oneGuess}) => {

    const [alphabet, setAlphabet] = useState("")
    const [lesson, setLesson] = useState("")

    const handleLesson = (alphabet, lesson, order, alphabetName) => {
        setAlphabet(alphabet);

        // TODO: si checkbox "include previous lesson(s) cochée" alors ce qui suit
        // sinon = lesson.code (sur laquelle on a cliqué)
        const previousLesson = new LessonCatalog();
        const syllablesPreviousLesson = previousLesson.randomizeListPreviousButNoMoreThanNb(alphabetName, order);

        const codeWithThisLesson = previousLesson.codeWithSyllablesList(syllablesPreviousLesson);
        // const codeWithThisLesson = lesson.code

        setLesson(syllablesPreviousLesson);
        // setLesson(lesson);

        oneLesson.launchLesson('simple', alphabet.toLowerCase() + '-' + codeWithThisLesson, oneGuess);
    };

    return (
        <Router>
            <Route exact path='/'>
                <PlayMenu
                    alphabets={alphabets}
                    oneLesson={oneLesson}
                    oneGuess={oneGuess}
                    onLessonChange={handleLesson}/>
            </Route>
            <Route exact path='/play'>
                <PlayItem
                    oneLesson={oneLesson}
                    oneGuess={oneGuess}
                    onLessonChange={handleLesson}
                    alphabet={alphabet}
                    lesson={lesson}/>
            </Route>
        </Router>
    );
};

