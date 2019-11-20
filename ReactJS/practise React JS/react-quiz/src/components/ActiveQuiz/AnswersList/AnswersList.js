import React from 'react';
import classes from './AnswersList.module.scss';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => {
    return (
        <ul className={classes.AnswersList}>
            {props.answers.map((answer, index) => {
                return (
                    <AnswerItem 
                        onAnswerClickHandler = {props.onAnswerClickHandler}
                        answer={answer} 
                        key={index}
                        questionCheck={props.questionCheck ? props.questionCheck[answer.id] : null}
                  />
                )
            })}
        </ul>
    )
}

export default AnswersList;