import React from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import Quiz from './container/Quiz/Quiz';
import Auth from './container/Auth/Auth';
import QuizCreator from './container/QuizCreator/QuizCreator';
import QuizList from './container/QuizList/QuizList';


function App() {
	return (
		<Layout>
			{/* Switch нужен для показа именно того компонента который зарегистрирован в Роуте (аналогия с роботой атрибута exact). Если не оборачивать все в кмпонент Switch и не писать в Route атрибут exact тогда все будет показано друг под другом (Попрбуй закоментить switch)*/}
			<Switch> 
				{/* Route - зарегестрированые пути для показа компонентов, для того что бы не перезагружалась страница нужно подключать компонент NavLinks */}
				<Route path='/auth' component={Auth}></Route>
				<Route path='/quiz-creator' component={QuizCreator}></Route>
				{/* path='/quiz/:id' --> динамический роут, рендерится в QuizList.js */}
				<Route path='/quiz/:id' component={Quiz}></Route>
				<Route path='/' component={QuizList}></Route>
			</Switch>
		</Layout>
	);
}

export default App;
