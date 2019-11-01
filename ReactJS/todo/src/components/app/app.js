import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

import './app.css';

export default class App extends Component { 

	maxId = 100;

	state = {
		todoData: [
			this.createItem('Drink'),
			this.createItem('Eat'),
			this.createItem('Sleep')
		]
	};

	createItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

	constructor() {

		super();

		this.deleteItem = (id) => {
			this.setState(({todoData}) => {
				const idx = todoData.findIndex((el) => el.id === id);
				const newArray = [
					...todoData.slice(0, idx),
					...todoData.slice(idx + 1)
				]
				console.log(newArray);
				return {
					todoData: newArray
				}
			})
		}

		this.addNewItem = (text) => {
			const newItem = this.createItem(text);

			this.setState(({todoData}) => {
				const newArray = [...todoData, newItem];
				return {
					todoData: newArray
				}
			})
		}

		this.onToggleImportant = (id) => {
			console.log('onToggleImportant', id);
		}

		this.onToggleDone = (id) => {
			console.log('onToggleDone', id);
		}
	}

	render () {
		return (
			<div className="todo-app">
				<AppHeader toDo={1} done={3} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList 
					todos={this.state.todoData} 
					onDeleted = {(id) => this.deleteItem(id)}
					onToggleImportant = {this.onToggleImportant}
					onToggleDone = {this.onToggleDone}/>
				<AddItem addNewItem = {this.addNewItem}/>
			</div>
		);
	}
};

