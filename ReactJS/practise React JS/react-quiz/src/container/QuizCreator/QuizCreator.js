import React, { Component } from 'react';
import classses from './QuizCreator.module.scss';
import Button from '../../components/UI/Button/Button';
import {createControl, validate, validateForm} from '../../form/FormFramework';
import Input from '../../components/UI/Input/Input';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Select from '../../components/UI/Select/Select';
import axios from '../../axios/axios-quiz';

function createOptionControl(number) { //Создание инпутов
    return createControl({
        value: '',
        label: `Вариант ${number}`,
        errorMsg: 'Значение не может быть пустым',
        id: number,
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
        rightAnswerId: 1,
        isFormValid: false,
        formControls: createFormControls()
    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    addQuestionHandler = (e) => {
        e.preventDefault();

        const quiz = this.state.quiz.concat();
        const index = quiz.length + 1;

        const {question, option1, option2, option3, option4} = this.state.formControls;

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id}
            ]
        }
        quiz.push(questionItem);
        this.setState({
            quiz,
            rightAnswerId: 1,
            isFormValid: false,
            formControls: createFormControls()
        })
    }

    createQuizHandler = async(e) => {
        e.preventDefault();
        
        try {
            // Отправляем через библиотеку Axios заполненые инпуты в Firebase, вторым аргументом в методе post должен быть отправляемый массив, в нашел случае это наш стейт. после отправку стейт обнуляется
            await axios.post('/quizes.json', this.state.quiz);
            this.setState({
                quiz: [],
                rightAnswerId: 1,
                isFormValid: false,
                formControls: createFormControls()
            })
        } catch(e) {
            console.log(e)
        }
    }

    changeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls}; //деструктуризируем state.formControls (const formControls это копия стейта)
        const control = { ...formControls[controlName] };  //деструктуризируем const formControls[controlName], взависимости в какой инпут вводит данные пользователь

        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
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

    selectChangeHandler = event => {
        this.setState({
            rightAnswerId: +event.target.value
        })
    }

    render() {
        const select = <Select
            label = 'Выберите правильный ответ'
            value = {this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
            options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4}
            ]}
            />
        return (
            <div className={classses.QuizCreator}>
                <div>
                    <h1>Создание теста </h1>
                    <form onSubmit={this.submitHandler}>
                        
                        {this.renderControls()}

                        {select}
                        <Button
                            type='primary'
                            disabled={!this.state.isFormValid}
                            onClick={this.addQuestionHandler}>
                            Добавить вопрос
                        </Button>
                        <Button
                            type='success'
                            disabled={this.state.quiz.length === 0}
                            onClick={this.createQuizHandler}>
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}