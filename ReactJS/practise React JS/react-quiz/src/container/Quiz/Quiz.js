import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/UI/Loader/Loader';

export default class Quiz extends Component {

    state = {
        results: {}, //{[id]: success ? error Для проверки ответов в конце}
        finisedQuiz: false,
        questionCheck: null,
        activeQuiz: 0,
        quiz: [],
        loading: true
    }

    async componentDidMount() {
        try {
            const response = await axios.get(`/quizes/${this.props.match.params.id}.json`);
            const quiz = response.data;
            this.setState ({
                quiz,
                loading: false
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
            if(!results[question.id]) { //Проверяем есть ли какие-то значения в результатах, если нет добавляем нужные
                results[question.id] = 'success'
            }
            this.setState({
                questionCheck: {[answerId]: 'success'},
                results
            })
            const timer = window.setTimeout(() => {
                if(question.id === this.state.quiz.length) {
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
            results[question.id] = 'error' //Получаем в объект result нужный id вопроса и присваеваем значение error
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
                        this.state.loading
                        ? <Loader/>
                        :   this.state.finisedQuiz
                            ?
                            <FinishedQuiz 
                                onRetry={this.retryHandler}
                                results={this.state.results}
                                quiz={this.state.quiz}/>
                            :
                            <ActiveQuiz 
                                onAnswerClickHandler={this.onAnswerClickHandler}
                                answers={this.state.quiz[this.state.activeQuiz].answers}
                                questions={this.state.quiz[this.state.activeQuiz].question}
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