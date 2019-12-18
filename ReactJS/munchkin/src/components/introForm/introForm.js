import React, { Component } from 'react';
import InputName from '../inputName';

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

	updatePlayerCounter = (event) => {
		let playersNumber = +event.target.value;
		const newCounterArr = [];
		for(let i = 0; i < playersNumber; i++) {
			newCounterArr.push(this.createPlayer(i));
		}
		this.setState({
			playersCounter: playersNumber,
			playersList: newCounterArr
		})
	}
	
	onChangePlayersName = (event, id) => {

		const elem = this.state.playersList[id];
		const newPlayersList = [... this.state.playersList]
		// newPlayersList[id].name = event.target.value;
		console.log(elem)
        // this.setState({
        //     playersList: newPlayersList
        // })
    }

	submitHandler = (e) => {
        e.preventDefault();
	}
	
	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<fieldset className='mt-4'>
					<legend>Выберите количество игроков:</legend>
					<div className="form-group">
						<select 
							value={this.state.playersCounter}
							onChange = {this.updatePlayerCounter}
							className="custom-select">
							<option value="0">Открыть</option>
							<option value="3">Три</option>
							<option value="4">Четыре</option>
							<option value="5">Пять</option>
							<option value="6">Шесть</option>
						</select>
					</div>
					<InputName 
						playersCounter={this.state.playersCounter} 
						playersList = {this.state.playersList}
						onChangePlayersName={this.onChangePlayersName}/>
				</fieldset>
				<button 
					onClick={this.addPlayers}
					type="submit" 
					className="btn btn-primary">Подвертить</button>
			</form>
		)
	}
}
