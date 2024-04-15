import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import useFetch from './customhooks/useFetch';
import useSt from './customhooks/useSt';
function MyTodo(){
	return (
<h1>My Todo</h1>
		)
}

function SingleTodo(props) {
	const [dataa, setDataa] = useSt("myvalue");
	const params = useParams();
	let id = params.id;
	const data = useFetch("https://jsonplaceholder.typicode.com/todos/"+id);

	const [todo, setTodo] = useState({});
	useEffect(() => {
		console.log(data);
	}, [id])

	useEffect(()=>{
		console.log('second use effect');
		console.log("mycustom state",dataa)

		setDataa("new value of my custom state");
		console.log("mycustom state",dataa)


	})
	return (
		<>
		<h1>Single Todo: {data.id} {data.title} {dataa}</h1>
		<h4>Is completed: {data.completed ? 'Completed' : 'Incomplete'}</h4>

		<li><a href={`/todo/${data.id}`}>{data.title}</a></li>

		
</>
		)
}

export {MyTodo, SingleTodo};





