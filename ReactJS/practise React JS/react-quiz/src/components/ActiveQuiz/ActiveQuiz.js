import React from 'react';
import classes from './ActiveQuiz.module.scss';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>1.</strong>&nbsp;
                {props.questions}
            </span>
            <small>{props.quizNumber} из {props.quizLength}</small>
        </p>

        <AnswersList 
            onAnswerClickHandler = {props.onAnswerClickHandler}
            answers={props.answers}
            questionCheck={props.questionCheck}/>
    </div>
)

export default ActiveQuiz;