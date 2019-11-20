import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

export default class Quiz extends Component {

    state = {
        finisedQuiz: true,
        questionCheck: null,
        activeQuiz: 0,
        quiz: [
            {
                question: 'Вопрос 1',
                rightAnswerId: 1,
                key: 1,
                answers: [
                    {text: 'Ответ', id: 1},
                    {text: 'Ответ', id: 2},
                    {text: 'Ответ', id: 3},
                    {text: 'Ответ', id: 4},
                ]
            },
            {
                question: 'Вопрос 2',
                rightAnswerId: 2,
                key: 2,
                answers: [
                    {text: 'Ответ', id: 1},
                    {text: 'Ответ', id: 2},
                    {text: 'Ответ', id: 3},
                    {text: 'Ответ', id: 4},
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        if(this.state.questionCheck) {
            const key = Object.keys(this.state.questionCheck)[0];
            if (this.state.questionCheck[key] === 'success') {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuiz];

        if(question.rightAnswerId === answerId) {
            this.setState({
                questionCheck: {[answerId]: 'success'}
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
            this.setState({
                questionCheck: {[answerId]: 'error'}
            })
        }
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrap}>
                    <h1>Quiz</h1>
                    {
                        this.state.finisedQuiz
                        ?
                        <FinishedQuiz></FinishedQuiz>
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