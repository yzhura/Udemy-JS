import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

    const todoData = [
        {label: 'Drink', important: false},
        {label: 'Eat', important: true},
        {label: 'Sleep', important: true},
        {label: 'Dimonaaaaaaaaaaaa', important: true},
        {label: 'Ne Dimonkay', important: true},
    ]

    return (
        <div>
            <AppHeader></AppHeader>
            <SearchPanel></SearchPanel>
            <TodoList todos={todoData}></TodoList>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));