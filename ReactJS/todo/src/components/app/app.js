import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

import './app.css';

export default class App extends Component { 

	maxId = 100;
	filterId = 0;

	state = {
		todoData: [
			this.createItem('Drink'),
			this.createItem('Eat'),
			this.createItem('Sleep')
		],
		filterData: [
			this.createFilter('All', true),
			this.createFilter('Active', false),
			this.createFilter('Done', false)
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

	createFilter(label, active) {
		return {
			label,
			active,
			id: this.filterId++
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

		this.toggleFilter = (arr, id, propName) => {
			const idx = arr.findIndex((el) => el.id === id);
			const oldItem = arr[idx];
			const newItem = {...oldItem, [propName]: !oldItem[propName]};
			return [idx, newItem]
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
				newArr.filter((el) => {
					return el.visibility = el.searchlabel.includes(searchingWord); //Фильтром проверил совпадает ли слово
				});
				return {
					todoData: newArr
				}
			})
		}

		this.onToogleFilter = (id) => {
			this.setState(({filterData, todoData}) => {
				let newFilterData = filterData;
				let newTodoData = todoData;

				newFilterData.forEach((el) => el.active = false);
				
				const newItems = this.toggleFilter(newFilterData, id, 'active');

				const [idx, newItem] = newItems;

				if(newItem.label === 'Done') {
					newTodoData.forEach((el) => {
						el.visibility = true;
						if(el.done === false) {
							return el.visibility = false;
						}
					});
				} else if (newItem.label === 'Active') {
					newTodoData.forEach((el) => {
						el.visibility = true;
						if(el.done === true) {
							return el.visibility = false;
						}
					});
				} else if (newItem.label === 'All') {
					newTodoData.forEach((el) => {
						el.visibility = true;
					});
				}

				newFilterData = [
					...filterData.slice(0, idx),
					newItem,
					...filterData.slice(idx + 1)
				]

				return {
					todo: newTodoData,
					filterData: newFilterData
				}
			})
		}
	}

	render () {
		const {todoData, filterData} = this.state;
		const doneCount = todoData.filter((el) => el.done).length;
		const moreCount = todoData.length - doneCount;

		return (
			<div className="todo-app">
				<AppHeader toDo={moreCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel 
						itemSearch = {this.itemSearch} />
					<ItemStatusFilter
						onToogleFilter = {this.onToogleFilter}
						filter={filterData}/>
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

