import React, {Component} from 'react'
import './App.scss'
import {connect} from 'react-redux'
import Counter from './Counter'
import {add, sub, asyncAdd} from './redux/actions/actions';

class App extends Component {

  render() {
	return (
	  <div className={'App'}>
		<h1>Счетчик <strong>{this.props.counter}</strong></h1>

		<hr/>

		<div className="Actions">
		  <button onClick={this.props.onAdd}>Добавить 1</button>
		  <button onClick={this.props.onSub}>Вычесть 1</button>
		</div>
		<Counter></Counter>

		<div className="Actions">
		  <button onClick={() => this.props.onAssyncAdd(100)}>Добавить 100 Асинхронно</button>
		</div>
	  </div>
	)
  }
}

//Теперь у компонента App есть пропсы которые мы преобразуем с rootReducer.js. И функции экшены которые находятся в функции mapDispatchToProps
function mapStateToProps(state) {
	return {
		counter: state.counter1.counter
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onAdd: () => dispatch(add()), //Actions
		onSub: () => dispatch(sub()),
		onAssyncAdd: (number) => dispatch(asyncAdd(number))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App) //connect - функция соединяет компонент реакта с стором редакса, сначала вызываем, она возвращает новую функцию и уже туда кидаем App. Порядок аргументов важен
