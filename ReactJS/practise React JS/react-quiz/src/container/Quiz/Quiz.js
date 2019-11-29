import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from 'axios';

export default class Quiz extends Component {

    state = {
        results: {}, //{[id]: success ? error Для проверки ответов в конце}
        finisedQuiz: false,
        questionCheck: null,
        activeQuiz: 0,
        quiz: [
            {
                question: '',
                rightAnswerId: 1,
                key: 1,
                answers: [
                    {text: '', id: 1},
                    {text: '', id: 2},
                    {text: '', id: 3},
                    {text: '', id: 4},
                ]
            },
            {
                question: '',
                rightAnswerId: 2,
                key: 2,
                answers: [
                    {text: '', id: 1},
                    {text: '', id: 2},
                    {text: '', id: 3},
                    {text: '', id: 4},
                ]
            }
        ]
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://react-quiz-419e0.firebaseio.com/quizes.json');
            const quizes = [];
            // console.log(response.data);
            Object.keys(response.data).forEach((key, index) => {// прошлись по всему массиву ответа. Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).
                // console.log(response.data[key]['0'].question);
                quizes.push({
                    id: index,
                    question: response.data[key]['0'].question,
                    rightAnswerId: response.data[key]['0'].rightAnswerId,
                    answers: response.data[key]['0'].answers
                })
            });
            this.setState ({
                quiz: quizes
            })
        } catch(e) {
            console.log(e);
        }
    }

    onAnswerClickHandler = answerId => {
        if(this.state.questionCheck) {
            const key = Object.keys(this.state.questionCheck)[0];
            if (this.state.questionCheck[key] === 'success') {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuiz];
        const results = this.state.results;

        if(question.rightAnswerId === answerId) {
            if(!results[question.key]) { //Проверяем есть ли какие-то значения в результатах, если нет добавляем нужные
                results[question.key] = 'success'
            }
            this.setState({
                questionCheck: {[answerId]: 'success'},
                results
            })
            const timer = window.setTimeout(() => {
                if(question.key === this.state.quiz.length) {
                    this.setState({
                        finisedQuiz: true
                    })
                } else {
                    this.setState({
                        activeQuiz: this.state.activeQuiz + 1,
                        questionCheck: null
                    })
                }
                window.clearTimeout(timer);
            }, 1000)

        } else {
            results[question.key] = 'error' //Получаем в объект result нужный id вопроса и присваеваем значение error
            this.setState({
                questionCheck: {[answerId]: 'error'},
                results //Синтаксис ES6: "results: results";
            })
        }
    }

    retryHandler = () => {
        this.setState({
            results: {},
            finisedQuiz: false,
            questionCheck: null,
            activeQuiz: 0
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrap}>
                    <h1>Quiz</h1>
                    {
                        this.state.finisedQuiz
                        ?
                        <FinishedQuiz 
                            onRetry={this.retryHandler}
                            results={this.state.results}
                            quiz={this.state.quiz}/>
                        :
                        <ActiveQuiz 
                            onAnswerClickHandler={this.onAnswerClickHandler}
                            questions={this.state.quiz[this.state.activeQuiz].question}
                            answers={this.state.quiz[this.state.activeQuiz].answers}
                            quizLength={this.state.quiz.length}
                            quizNumber={this.state.activeQuiz + 1}
                            questionCheck = {this.state.questionCheck}>
                        </ActiveQuiz>
                    }
                </div>
            </div>
        )
    }
}