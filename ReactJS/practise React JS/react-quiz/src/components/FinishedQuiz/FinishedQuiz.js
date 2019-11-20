import React from 'react';
import clases from './FinishedQuiz.module.scss';

const FinishedQuiz = props => {
    return (
        <div className={clases.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1. </strong>
                    How r u?
                    <i className={'fa fa-times ' + clases.error}></i>
                </li>
                <li>
                    <strong>1. </strong>
                    How r u?
                    <i className={'fa fa-check ' + clases.success}></i>
                </li>
            </ul>
            <p>Правильно 1 из 5</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;