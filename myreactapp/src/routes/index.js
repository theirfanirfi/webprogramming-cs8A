import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../components/Home/';
import CounterComponent from '../components/CounterComponent';
import {SingleTodo} from '../components/SingleTodo'
function MyWebAppNavigation(){
	return (

		<BrowserRouter>

		<Routes>
		<Route path="" element={<Home />} />
		<Route path="/home" element={<Home />} />
		<Route path="/counter" element={<CounterComponent />} />
		<Route path="/todo/:id" element={<SingleTodo />} />
		</Routes>
		</BrowserRouter>

		)
}

export default MyWebAppNavigation;