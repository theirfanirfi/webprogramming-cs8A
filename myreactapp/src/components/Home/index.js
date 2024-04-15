import {useState, useEffect} from 'react';
import UserFormComponent from './UserFormComponent'
import NavigationBar from'../NavigationBar';
import {Link} from 'react-router-dom';
import {MyTodo, YourTodo} from '../SingleTodo'

function Home(){
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState({});

	useEffect(()=>{
		fetch("https://jsonplaceholder.typicode.com/todos")
		.then(res => res.json())
		.then(res => {
			console.log(res);
			setTodos(res);
		})
	},[])

return (
	<>
<NavigationBar />
<MyTodo />
<h1>Todos</h1>

<UserFormComponent todo={todo} />

<ul>
{
todos.map((el, index) => {
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