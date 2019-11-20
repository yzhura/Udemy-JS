import React from 'react';
import classes from './AnswerItem.module.scss';

const AnswerItem = props => {
    const cls = [classes.AnswerItem]
    if(props.questionCheck) {
        cls.push(classes[props.questionCheck])
    }
    return (
        <li 
            onClick = {() => props.onAnswerClickHandler(props.answer.id)}
            className={cls.join(' ')}>
                {`${props.answer.text} ${props.answer.id}`}
        </li>
    )
}

export default AnswerItem;