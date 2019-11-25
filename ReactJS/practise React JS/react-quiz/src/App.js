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
			<Switch>
				<Route path='/auth' component={Auth}></Route>
				<Route path='/quiz-creator' component={QuizCreator}></Route>
				<Route path='/quiz/:id' component={Quiz}></Route>
				<Route path='/' component={QuizList}></Route>
			</Switch>
		</Layout>
	);
}

export default App;
