const redux = require('redux');


const initialState = {
	counter: 0
}

//Reducer
const reducer = (state = initialState, action) => {

	if(action.type === 'ADD') {
		return {
			counter: state.counter + 1
		}
	}

	if(action.type === 'SUB') {
		return {
			counter: state.counter - 1
		}
	}

	if(action.type === 'ADD_NUMBER') {
		return {
			counter: state.counter + action.value
		}
	}

	return state;
}

//Store <--- Хранятся все данные, весь стейт в одном объекте
const store  = redux.createStore(reducer);

store.subscribe(() => {
	console.log('Subscribe', store.getState());
})


//Actions <--- для изменения Store
const addCounter = {
	type: 'ADD', //обязательное поле type
}

store.dispatch(addCounter);

store.dispatch({type: 'SUB'});

store.dispatch({type: 'ADD_NUMBER', value: 10});