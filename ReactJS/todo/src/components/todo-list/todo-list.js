import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

	const elements = todos.map((item) => {
		const { id, visibility, ...itemProps } = item;
		let classNames = 'list-group-item';

		if(!visibility) {
			classNames += ' d-none';
		}

		return (
			<li key={id} className={classNames}>
				<TodoListItem 
					{...itemProps } 
					onDeleted = {() => onDeleted(id)}
					onToggleDone = {() => onToggleDone(id)}
					onToggleImportant = {() => onToggleImportant(id)}/>
			</li>
		);
	});

	return (
		<ul className="list-group todo-list">
			{ elements }
		</ul>
	);
};

export default TodoList;
