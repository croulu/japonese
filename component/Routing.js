import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {PlayMenu} from "./Learn/PlayMenu/PlayMenu";
import {PlayItem} from "./Learn/PlayItem/PlayItem";
import {LessonCatalog} from "../domain/LessonCatalog";
import {LearnMenu} from "./Lessons/LearnMenu";
import {HomeHero} from "./Home/HomeHero";
import {HomeMenu} from "./Home/HomeMenu";

export const Routing = ({alphabets}) => {

    const [alphabet, setAlphabet] = useState("")
    const [lesson, setLesson] = useState("")
    const [easyLesson, setEasyLesson] = useState("")

    const handleLesson = (alphabet, lesson, order, alphabetName) => {
        if (easyLesson) {
            setLesson(lesson);
        } else {
            setAlphabet(alphabet);

            const previousLesson = new LessonCatalog();
            const syllablesPreviousLesson = previousLesson.randomizeListPreviousButNoMoreThanNb(alphabetName, order);

            setLesson(syllablesPreviousLesson);
        }
    };

    const handleEasyLesson = () => {
        setEasyLesson(true);
    };

    const handleHardLesson = () => {
        setEasyLesson(false);
    };

    return (
        <Router>
            <Route exact path='/'>
                <HomeMenu onEasyLessonChange={handleEasyLesson} onHardLessonChange={handleHardLesson}/>
                <HomeHero/>
                <PlayMenu
                    alphabets={alphabets}
                    onLessonChange={handleLesson}/>
            </Route>
            <Route exact path='/play'>
                <HomeMenu/>
                <PlayItem
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

