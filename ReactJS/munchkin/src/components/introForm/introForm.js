import React, { Component } from 'react';
import InputName from '../inputName';

export default class IntroForm extends Component {

	state = {
		playersCounter: 0,
		playersArr: []
	}

	updatePlayerCounter = (event) => {
		let playersNumber = +event.target.value;
		const newCounterArr = [];
		for(let i = 0; i < playersNumber; i++) {
			const element = {
				name: '',
				id: i+1
			};
			newCounterArr.push(element);
		}
		this.setState({
			playersCounter: playersNumber,
			playersArr: newCounterArr
		})
	}

	render() {
		return (
			<form>
				<fieldset className='mt-4'>
					<legend>Выберите количество игроков:</legend>
					<div className="form-group">
						<select value={this.state.playersCounter} onChange = {this.updatePlayerCounter} className="custom-select">
							<option value="0" >Открыть</option>
							<option value="3">Три</option>
							<option value="4">Четыре</option>
							<option value="5">Пять</option>
							<option value="6">Шесть</option>
						</select>
					</div>
					<InputName players={this.state.playersCounter} playersArr = {this.state.playersArr}/>
				</fieldset>
				<button type="submit" className="btn btn-primary">Подвертить</button>
			</form>
		)
	}
}
