import React from 'react';
import classes from './Input.module.scss';

function isInvalid({valid, touched, shouldValidate}) {//Деструктуризируем нужные пропсы.
    return !valid && touched && shouldValidate
}

const Input = props => {
    const inputType = props.type || 'text';
    const cls = [classes.Input];
    const htmlFor = `${inputType}-${Math.random()}`; //Генерация рандомных id и for

    if(isInvalid(props)) {
        cls.push(classes.invalid);
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}/>
            {isInvalid(props) ? <span>{props.errorMsg}</span> : null}
        </div>
    );
}

export default Input;
