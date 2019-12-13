import {combineReducers} from 'redux' //Для обьединения редюсоров
import counter1 from './reducers/counter1'
import counter2 from './reducers/counter2'

export default combineReducers({
    counter1, 
    counter2
});