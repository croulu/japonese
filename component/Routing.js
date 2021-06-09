import React, {Component} from 'react';
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom'
import {PlayMenu} from "./Learn/PlayMenu/PlayMenu";
import PlayItem from "./Learn/PlayItem/PlayItem";

export default class Routing extends Component {
    state = {
        alphabets: this.props.alphabets,
        oneLesson: this.props.oneLesson,
        oneGuess: this.props.oneGuess,
        letters: ''
    }

    handleLesson(event) {
       // this.setState( {
       //     letters: event.target.value
       // } )
    }

    launchPlay = () => {
        const history = useHistory()

        console.log(alphabet.toLowerCase() + '-' + kana.title.split(" ").join("-"))
        this.state.oneLesson.launchLesson('simple', alphabet.toLowerCase() + '-' + kana.title.split(" ").join("-"), oneGuess);
        history.push('/play')
    }

    render() {

        const letters = this.state.letters

        return (

            <Router>
                <Route exact path='/'>
                    <PlayMenu alphabets={this.state.alphabets} oneLesson={this.state.oneLesson} oneGuess={this.state.oneGuess}
                              onLessonChange={this.handleLesson}/>
                </Route>
                <Route exact path='/play'>
                    <PlayItem oneLesson={this.state.oneLesson} oneGuess={this.state.oneGuess} onLessonChange={this.handleLesson}/>
                </Route>
            </Router>
        );
    }
};

