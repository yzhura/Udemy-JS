import React from 'react';
import classes from './Button.module.scss';

const Button = props => {
    const cls = [
        classes.Button,
        classes[props.type]
    ];
    return (
        <button
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}>
            {props.children}
            {/* {props.children} -> Это текст который береться из FinishedQuiz.js в компоненте <Button>Этот текст!</Button> */}
        </button>
    )
}

export default Button;