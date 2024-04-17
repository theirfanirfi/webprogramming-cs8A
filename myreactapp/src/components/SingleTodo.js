import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {selectTodoById, fetchTodo} from '../store/todoSlice';
function MyTodo(){
	return (
<h1>My Todo</h1>
		)
}

function SingleTodo(props) {
	const dispatch = useDispatch();
	const params = useParams();
	const data = useSelector(state => state.todoSlice.singleTodo);
	let id = params.id;
props.
	// console.log(id)
	// const data = useSelector(state => selectTodoById(state.todoSlice.todos));
	// console.log(data);




	useEffect(()=>{
		// console.log('second use effect');
		// console.log("mycustom state",dataa)

		// setDataa("new value of my custom state");
		// console.log("mycustom state",dataa)
		dispatch(fetchTodo(id));


	})
	return (
		<>
		<h1>Single todo</h1>
		<h1>Single Todo: {data.id} {data.title}</h1>
		<h4>Is completed: {data.completed ? 'Completed' : 'Incomplete'}</h4>

		<li><a href={`/todo/${data.id}`}>{data.title}</a></li>

		
</>
		)
}

export {MyTodo, SingleTodo};





