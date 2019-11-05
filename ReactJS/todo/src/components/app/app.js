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
			id: this.maxId++,
			visibility: true,
			searchlabel: label.toLowerCase()
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

		this.toggleProperty = (arr, id, propName) => {
			const idx = arr.findIndex((el) => el.id === id);
			const oldItem = arr[idx];
			const newItem = {...oldItem, [propName]: !oldItem[propName]}; // Вопрос про синтаксис языка
			return [
				...arr.slice(0, idx),
				newItem,
				...arr.slice(idx + 1)
			]
		}

		this.onToggleImportant = (id) => {
			this.setState(({todoData}) => {
				return {
					todoData: this.toggleProperty(todoData, id, 'important')
				}
			})
		}

		this.onToggleDone = (id) => {
			this.setState(({todoData}) => {
				return {
					todoData: this.toggleProperty(todoData, id, 'done')
				}
			})
		}

		this.itemSearch = (event) => {
			const target = event.target.value.toLowerCase();
			this.setState(({todoData}) => {
				const searchingWord = target;
				const newArr = todoData;
				newArr.forEach((el) => {
					console.log(el.searchlabel, searchingWord);
					for(let i = 0; i < searchingWord.length; i++) {
						if(el.searchlabel.charAt(i) == searchingWord.charAt(i)) {
							el.visibility = false;
						}
					}
				})
				return {
					todoData: newArr
				}
			})
		}

		this.itemFilter = () => {
			this.setState(({searchLal, todoData}) => {
				
			})
		}
	}

	render () {
		const {todoData} = this.state;
		const doneCount = todoData.filter((el) => el.done).length;
		const moreCount = todoData.length - doneCount;
		console.log(this.state);

		return (
			<div className="todo-app">
				<AppHeader toDo={moreCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel 
						itemSearch = {this.itemSearch} 
						itemFilter = {this.itemFilter}/>
					<ItemStatusFilter />
				</div>
				<TodoList 
					todos={todoData} 
					onDeleted = {(id) => this.deleteItem(id)}
					onToggleImportant = {this.onToggleImportant}
					onToggleDone = {this.onToggleDone}/>
				<AddItem addNewItem = {this.addNewItem}/>
			</div>
		);
	}
};

