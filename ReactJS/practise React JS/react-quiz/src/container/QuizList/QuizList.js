import React, { Component } from 'react';
import classes from './QuizList.module.scss';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

export default class QuizList extends Component {

    state = {
        quizes: []
    }

    async componentDidMount() { //После того как зарендерился весь список мы делаем обращение к серверу
        try {
            const response = await axios.get('https://react-quiz-419e0.firebaseio.com/quizes.json');
            const quizes = [];

            Object.keys(response.data).forEach((key, index) => {// прошлись по всему массиву ответа
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            });

            this.setState ({
                quizes
            })
        } catch(e) {
            console.log(e);
        }
    }

    renderQuizes() {
        return this.state.quizes.map((quiz) => {
            return(
                <li key={quiz.id}>
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }


    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        );
    }
}

