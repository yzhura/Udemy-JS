import React, { Component } from 'react';
import classses from './QuizCreator.module.scss';
import Button from '../../components/UI/Button/Button';
import {createControl} from '../../form/FormFramework';
import Input from '../../components/UI/Input/Input';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

function createOptionControl(number) {
    return createControl({
        label: `Вариант ${number}`,
        errorMsg: 'Значение не может быть пустым',
        id: number
    }, {required: true})
}

function createFormControls() { //Для обнуления formControls после созданого нового опросника
    return {
        question: createControl({
            label: "Введите вопрос",
            errorMsg: 'Вопрос не может быть пустым'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}

export default class QuizCreator extends Component {

    state = {
        quiz: [], //  Для хранение N-го количесвтва вопросов
        formControls: createFormControls()
    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {

    }

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];

            return (
                //Auxiliary - аналог React.Fragment
                <Auxiliary key={controlName + index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMsg={control.errorMsg}
                        onChange={(event) => this.changeHandler(event.target.value, controlName)}
                    />
                    {index === 0 ? <hr/> : null}
                </Auxiliary>
            )
        })
    }

    render() {
        return (
            <div className={classses.QuizCreator}>
                <div>
                    <h1>Создание теста </h1>
                    <form onSubmit={this.submitHandler}>
                        
                        {this.renderControls()}

                        <select></select>
                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}>
                            Добавить вопрос
                        </Button>
                        <Button
                            type='success'
                            onClick={this.createQuizHandler}>
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}