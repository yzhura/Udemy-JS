import React, { Component } from 'react';
import classes from './QuizList.module.scss';
import {NavLink} from 'react-router-dom';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/UI/Loader/Loader'
export default class QuizList extends Component {

    state = {
        quizes: [],
        loading: true
    }

    async componentDidMount() { //После того как зарендерился весь список мы делаем обращение к серверу
        try {
            const response = await axios.get('/quizes.json');
            const quizes = [];

            Object.keys(response.data).forEach((key, index) => {// прошлись по всему массиву ответа
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            });

            this.setState ({
                quizes,
                loading: false
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
                    {
                        this.state.loading
                        ? <Loader/>
                        :   <ul>
                                {this.renderQuizes()}
                            </ul>
                    }
                  
                </div>
            </div>
        );
    }
}

