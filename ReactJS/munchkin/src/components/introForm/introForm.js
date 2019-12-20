import React, { Component } from 'react';
import Input from '../../UI/Input';
import {CSSTransitionGroup} from 'react-transition-group';
import './introForm.scss';
import axios from 'axios';
import Popup from '../popup';
import Select from '../select'


export default class IntroForm extends Component {

	state = {
		errorPopup: false,
		playersCounter: 0,
		playersList: [],
		errorMsg: '',
		validation: false
	}
	
	createPlayer = (id) => {
		return {
			name: '',
			id: id+1,
			validation: null,
			isValid: ''
		};
	}

	updatePlayerCounter = (event) => {
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
			// let fields = document.querySelectorAll('.field');
			// fields.forEach((el, index) => {
			// 	if(index >= playersNumber) {
			// 		el.classList.add('deleting');
			// 	}
			// })
			// await new Promise((resolve, reject) => {
			// 	setTimeout(() => {
			// 		resolve()
			// 	}, 500)
			// });

			newCounterArr.splice(playersNumber);
		}
		this.setState({
			playersCounter: playersNumber,
			playersList: newCounterArr
		})
	}

	//Функция для связи инпута и стейта
	onChangeHandler = (value, index) => {
		const newPlayersList = [...this.state.playersList];
		newPlayersList[index].name = value;
		value.length > 0 ? newPlayersList[index].validation = true: newPlayersList[index].validation = false;
		newPlayersList[index].validation ? newPlayersList[index].isValid = 'is-valid': newPlayersList[index].isValid = 'is-invalid'
		this.setState({
			playersList: newPlayersList,
		})
	}

	renderInput = () => {
		const playersArr = this.state.playersList;
		return playersArr.map((el, index) => {
			return (
				<Input
					key={index} 
					valid={this.state.playersList[index].isValid}
					playersCounter={index+1}
					value={this.state.playersList[index].name}
					onChange={(event) => this.onChangeHandler(event.target.value, index)}
				/>
			)
		});
	}

	validNames = () => {
		const playersList = [...this.state.playersList];
		const playersNames = [];
		playersList.map((el) => {
			playersNames.push(el.name)
		})
		playersNames.forEach((el, index) => {
			if(el.length > 0) {
				this.setState({
					errorPopup: false,
					validation: true
				})
			} else if (el.length === 0) {
				this.setState({
					errorPopup: true,
					validation: false,
					errorMsg: `Введите никнеймы игроков`
				})
			}
		})
		return playersNames;
	}

	submitHandler = async event => {
		event.preventDefault();
	
		let arr = this.validNames();

		await arr;

		if(this.state.validation) {
			await axios.post('https://munchkin-11975.firebaseio.com/players.json', arr)
				.then(response => {
					console.log(response)
				})
				.catch(error => {
					this.setState({
						errorMsg: 'Server Error',
						errorPopup: true
					})
				})
		}
	}

	componentDidMount() {
		axios.get('https://munchkin-11975.firebaseio.com/players.json')
			.then(response => {
				let data = response.data;
				console.log(data);
			})
	}

	closePopup = (event) => {
		this.setState({
			errorPopup: !this.state.errorPopup
		})
	}

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.submitHandler}>
					<fieldset className='mt-4'>
						<legend>Выберите количество игроков:</legend>
						<Select
							playersCounter={this.state.playersCounter}
							updatePlayerCounter={this.updatePlayerCounter}
							/>
						<CSSTransitionGroup
							transitionName={ {
								enter: 'enter',
								enterActive: 'enterActive',
								leave: 'leave',
								leaveActive: 'deleting',
								appear: 'appear',
								appearActive: 'appearActive'
							} }
							transitionEnterTimeout={500}
							transitionLeaveTimeout={300}
						>
							{this.renderInput()}
						</CSSTransitionGroup>
					</fieldset>
					{
						this.state.playersCounter == 0 
						? 
						null 
						:
						<button 
						type="submit" 
						className="btn btn-primary">Подвертить</button>}
					
				</form>
				{
					this.state.errorPopup 
					?
					<Popup
						errorMsg={this.state.errorMsg}
						closePopup={this.closePopup}
						/>
					:
					null
				}
			</React.Fragment>
		)
	}
}
