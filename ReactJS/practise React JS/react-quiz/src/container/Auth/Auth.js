import React, { Component } from 'react';
// import is from 'is-js'; библиотека is js для валидации
import classes from './Auth.module.scss';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default class Auth extends Component {
    //В компоненте QuizCreator альтернативный способ создания инпутов
    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMsg: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: { // Правила для валидаци
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMsg: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: false,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    onSubmitHandler = (event) => {
        event.preventDefault();
    }

    validateControl(value, validation) {
        if(!validation) {
            return true; //если мы не передали параметров для валидация тогда валидировать не нужно
        }
        let isValid = true;

        if(validation.required) {
            isValid = value.trim() !== '' && isValid; //trim() удаляет пробельные символы с начала и конца строки
        }

        if(validation.email) {
            // isValid = is.email(value) && isValid; // это валидация для библиотеки is js
            isValid = validateEmail(value) && isValid; // валидация из StackOverflow
        }

        if(validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;
    }

    onСhangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls}; //деструктуризируем state.formControls (const formControls это копия стейта)
        const control = { ...formControls[controlName] };  //деструктуризируем const formControls[controlName] это будет или мыло или пароль, взависимости в какой инпут вводит данные пользователь

        control.value = event.target.value; //присваеваем контолу value который вводит пользователь
        control.touched = true; 
        control.valid = this.validateControl(control.value, control.validation); //Валидация (control.validation это объект из стейта)

        formControls[controlName] = control; //присваеваем нужному инпуты свойства который мы присвоили выше

        let isFormValid = true;

        Object.keys(formControls).forEach((name) => {
            isFormValid = formControls[name].valid && isFormValid; // присваеваем значения либо true либо false из formControls[name] как пройдем проверка
        })

        this.setState({
            isFormValid,
            formControls
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => { //controlName - это email и password из state
            const control = this.state.formControls[controlName]; //присваеваем переменной |control" email и password из state (проходимся через map и возвращаем сгенерируемые инпуты)
            return (
                <Input
                    // В атрибутах присваеваем нужные значения
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid} // В компоненте Input нужно для проверки и доавления класса .invalid
                    touched={control.touched} // В компоненте Input нужно для проверки и доавления класса .invalid
                    label={control.label}
                    shouldValidate={!!control.validation} //Привести control.validation к boolean с помощью "!!".  В компоненте Input нужно для проверки и доавления класса .invalid
                    errorMsg={control.errorMsg} //Сообщение ошибки, выводит спам под инпутом
                    onChange={(event) => this.onСhangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form 
                        onSubmit={this.onSubmitHandler} 
                        className={classes.AuthForm}>

                            {/* Рендерит инпуты */}
                            {this.renderInputs()} 

                            <Button 
                                type='success' 
                                onClick={this.loginHandler}
                                disabled={!this.state.isFormValid}>
                                    Войти
                            </Button>
                            <Button 
                                type='success' 
                                onClick={this.registerHandler}>
                                    Зарегистрироваться
                            </Button>
                    </form>
                </div>
            </div>
        );
    }
}

