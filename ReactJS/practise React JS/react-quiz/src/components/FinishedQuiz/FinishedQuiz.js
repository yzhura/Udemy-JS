import React from 'react';
import clases from './FinishedQuiz.module.scss';

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if(props.results[key] === 'success') {
            total++;
        }
        return total;
    }, 0) // Берем ключи у объекта result и через reduce суммируем по "ключу" правильные ответы
    return (
        <div className={clases.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.key] === 'error' ? 'fa-times' : 'fa-check',
                        clases[props.results[quizItem.key]]
                    ]
                    /* cls - это массив классов что бы правльно отрисовать иконку возле ответов. 
                        Му тут берем массив quiz и через map проходимся по объектам quizItem и ставим нужные классы
                    */
                    return (
                        <li 
                            key={index}>
                            <strong>{index + 1} </strong>.&nbsp;
                                {quizItem.question}
                            {/* Просто массив cls джиним и получаем красивые классы */}
                            <i className={cls.join(' ')}></i>
                        </li>
                    )
                })}
            </ul>
            <p>Правильно {successCount} из {props.quiz.length}</p>
            <div>
                <button onClick={props.retryHandler}>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;