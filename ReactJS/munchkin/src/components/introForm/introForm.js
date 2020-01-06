import React, { Component } from 'react';
import Input from '../../UI/Input';
import {CSSTransitionGroup} from 'react-transition-group';
import axios from 'axios';
import Popup from '../popup';
import Select from '../select';
import Backdrop from '../../UI/backdrop';
import Button from '../../UI/button';
import {withRouter} from 'react-router-dom';
import './introForm.scss'


function ValidPlayers(player) {
	this.name = player.name;
	this.level = player.level;
	this.straight = player.straight;
}

class IntroForm extends Component {

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
			isValid: '',
			level: 0,
			straight: 0
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
			// });  вариант анимации

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
		let isValid;
		const playersList = [...this.state.playersList];
		const playersArr = [];

		playersList.map((el) => {
			playersArr.push(
				new ValidPlayers(el)
			)
		})

		for(let i = 0; i < playersArr.length; i++) {
			if(playersArr[i].name.length === 0) {
				isValid = false;
				break;
			} else {
				isValid = true;
			}
		}

		isValid
			? 
				this.setState({
					errorPopup: false,
					validation: true,
					errorMsg: ``
				})
			: 
				this.setState({
					errorPopup: true,
					validation: false,
					errorMsg: `Введите никнеймы игроков`
				})
		
		return playersArr;
	}

	submitHandler = async (event) => {
		event.preventDefault();

		let arr = this.validNames();

		await arr;

		if(this.state.validation) {
			this.props.getPlayers(arr, this.state.validation);
			this.props.history.push('/game')
		}

		// Отправка на сервер!
		// if(this.state.validation) {
		// 	await axios.post('https://munchkin-11975.firebaseio.com/players.json', arr)
		// 		.then(response => {
		// 			console.log(response)
		// 		})
		// 		.catch(error => {
		// 			this.setState({
		// 				errorMsg: 'Server Error',
		// 				errorPopup: true
		// 			})
		// 		})
		// }
	}

	componentDidMount() {
		// axios.get('https://munchkin-11975.firebaseio.com/players.json')
		// 	.then(response => {
		// 		let data = response.data;
		// 		console.log(data);
		// 	})
	}

	closePopup = (event) => {
		this.setState({
			errorPopup: !this.state.errorPopup
		})
	}

	render() {
		return (
			<React.Fragment>
				<div className="container">
					<form onSubmit={this.submitHandler}>
						<fieldset className='mt-4'>
							<legend>Выберите количество игроков:</legend>
							<Select
								playersCounter={this.state.playersCounter}
								updatePlayerCounter={this.updatePlayerCounter}
								/>
							<CSSTransitionGroup
								transitionName="field"
								transitionAppear={true}
								transitionAppearTimeout={400}
								transitionEnterTimeout={400}
								transitionLeaveTimeout={400}
								>
								{this.renderInput()}
							</CSSTransitionGroup>
						</fieldset>
						{
							this.state.playersCounter === 0 
							? 
							null 
							:
							<Button label='Подвердить'/>
						}
						
					</form>
					{
						this.state.errorPopup 
						?
						<React.Fragment>
							<Popup
								errorMsg={this.state.errorMsg}
								closePopup={this.closePopup}
								/>
							<Backdrop/>
						</React.Fragment>
						:
						null
					}
				</div>
			</React.Fragment>
		)
	}
}

export default withRouter(IntroForm);