import React, { Component } from 'react';
import Input from '../../UI/Input';
import './introForm.scss'

export default class IntroForm extends Component {

	state = {
		playersCounter: 0,
		playersList: []
	}
	
	createPlayer = (id) => {
		return {
			name: '',
			id: id+1
		};
	}

	async updatePlayerCounter(event) {
		let playersNumber = +event.target.value;
		let oldPlayersNumber = this.state.playersCounter;
		const newCounterArr = [...this.state.playersList];
		if(newCounterArr.length === 0) {
			for(let i = 0; i < playersNumber; i++) {
				newCounterArr.push(this.createPlayer(i));
			}
		} else if (newCounterArr.length > 0 && playersNumber > oldPlayersNumber) {
			for(let i = newCounterArr.length; i < playersNumber; i++) {
				newCounterArr.push(this.createPlayer(i));
			}
		} else if (newCounterArr.length > 0 && playersNumber < oldPlayersNumber) {
			let fields = document.querySelectorAll('.field');
			fields.forEach((el, index) => {
				if(index >= playersNumber) {
					el.classList.add('delete');
				}
			})
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve()
				}, 500)
			});
		}
		newCounterArr.splice(playersNumber);
		this.setState({
			playersCounter: playersNumber,
			playersList: newCounterArr
		})
	}


	submitHandler = (e) => {
		e.preventDefault();
	}


	//Функция для связи инпута и стейта
	onChangeInputHandler = (value, index) => {
		const newPlayersList = [...this.state.playersList];
		newPlayersList[index].name = value;
		this.setState({
			playersList: newPlayersList
		})
	}

	renderInput = () => {
		const playersArr = this.state.playersList;
		return playersArr.map((el, index) => {
			return (
				<Input
					key={index} 
					playersCounter={index+1}
					value={this.state.playersList[index].name}
					onChange={(event) => this.onChangeInputHandler(event.target.value, index)}
				/>
			)
		});
	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<fieldset className='mt-4'>
					<legend>Выберите количество игроков:</legend>
					<div className="form-group">
						<select 
							value={this.state.playersCounter}
							onChange = {(event) => this.updatePlayerCounter(event)}
							className="custom-select">
							<option value="0">Открыть</option>
							<option value="3">Три</option>
							<option value="4">Четыре</option>
							<option value="5">Пять</option>
							<option value="6">Шесть</option>
						</select>
					</div>
					{this.renderInput()}
				</fieldset>
				<button 
					onClick={this.addPlayers}
					type="submit" 
					className="btn btn-primary">Подвертить</button>
			</form>
		)
	}
}
