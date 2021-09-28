import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {PlayMenu} from "./Learn/PlayMenu/PlayMenu";
import {PlayItem} from "./Learn/PlayItem/PlayItem";
import {LessonCatalog} from "../domain/LessonCatalog";
import {LearnMenu} from "./Lessons/LearnMenu";
import {HomeHero} from "./Home/HomeHero";
import {HomeMenu} from "./Home/HomeMenu";

export const Routing = ({alphabets, oneLesson, oneGuess}) => {

    const [alphabet, setAlphabet] = useState("")
    const [lesson, setLesson] = useState("")

    const handleLesson = (alphabet, lesson, order, alphabetName) => {
        setAlphabet(alphabet);

        const previousLesson = new LessonCatalog();
        const syllablesPreviousLesson = previousLesson.randomizeListPreviousButNoMoreThanNb(alphabetName, order);

        setLesson(syllablesPreviousLesson);
        // setLesson(lesson);

       // oneLesson.launchLesson('simple', alphabet.toLowerCase() + '-' + codeWithThisLesson, oneGuess);
    };

    return (
        <Router>
            <Route exact path='/'>
                <HomeMenu />
                <HomeHero />
                <PlayMenu
                    alphabets={alphabets}
                    oneLesson={oneLesson}
                    oneGuess={oneGuess}
                    onLessonChange={handleLesson}/>
            </Route>
            <Route exact path='/play'>
                <HomeMenu />
                <PlayItem
                    oneLesson={oneLesson}
                    oneGuess={oneGuess}
                    onLessonChange={handleLesson}
                    alphabet={alphabet}
                    lesson={lesson}/>
            </Route>
            <Route exact path='/lesson'>
                <LearnMenu></LearnMenu>
            </Route>
        </Router>
    );
};

