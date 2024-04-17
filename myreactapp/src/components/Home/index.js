import {useState, useEffect} from 'react';
import UserFormComponent from './UserFormComponent'
import NavigationBar from'../NavigationBar';
import {Link} from 'react-router-dom';
import {MyTodo, YourTodo} from '../SingleTodo'
import {useSelector, useDispatch} from 'react-redux';
import { fetchTodos, load } from '../../store/todoSlice';

function Home(){
	const dispatch = useDispatch();
	const todostate = useSelector(state => state.todoSlice);
	console.log(todostate);

	useEffect(()=>{
		dispatch(fetchTodos());
	},[])

return (
	<>
<NavigationBar />
<MyTodo />
<h1>Todos</h1>

{/* <UserFormComponent todo={todo} /> */}

<ul>

{todostate.status == 'completed' &&
todostate.todos.map((el, index) => {
	return (

	<li><a href={`/todo/${el.id}`}>{el.title}</a></li>

	
	)
})	
}

</ul>

</>
	)
}

export default Home;