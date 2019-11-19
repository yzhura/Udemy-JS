import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends Component {

    state = {
        quiz: []
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrap}>
                    <h1>Quiz</h1>
                    <ActiveQuiz>
                    </ActiveQuiz>
                </div>
            </div>
        )
    }
}