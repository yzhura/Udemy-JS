import React from 'react';
import './input.scss'

const Input = (props) => {
	const inputType = props.type || 'text';
	const htmlFor = `${inputType}-${Math.random()}`; //Генерация рандомных id и for

	return (
		<div className={`field field${props.playersCounter} form-group`}>
			<label className={`label label${props.playersCounter} form-control-label mb-0`} htmlFor={htmlFor}>Никнейм {props.playersCounter}-го Манчкина:</label>
			<input 
				className={`${props.valid} input form-control`}
				type={inputType}
				id={htmlFor}
				value={props.value}
				onChange={props.onChange}
				/>
		</div>
	)
}

export default Input;
