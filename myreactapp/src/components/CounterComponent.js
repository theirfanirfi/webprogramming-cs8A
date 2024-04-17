import {useState, useEffect} from 'react';
import NavigationBar from './NavigationBar'
import {useDispatch, useSelector} from 'react-redux';
import { increment, decrement, evenIncrement, incrementByValue } from '../store/counterSlice';
function CounterComponent(){
	const dispatch = useDispatch();

	const count = useSelector((state) => state.counterReducer.counter);

	console.log(count);

	let num = 2;

	// useEffect(()=>{
	// 	dispatch(fetchTodos(2));
	// }, [dispatch])
	// useEffect(()=>{
	// 	console.log("component is loaded");
	// 	if(evencounter < 1000){
	// 	setEvenCounter(evencounter+100);
	// 	}
	// },[counter, evencounter]);

	// const Increment = () => {
	// 	setCounter(counter+1);
	// 	setCounter(counter+1);
	// 	setCounter(counter+1);
	// 	setCounter(counter+1);
	// 	setCounter(counter+1);
	// 	setCounter(counter+1);
	// 	// setEvenCounter(counter+2);
	// 	setCounter(counter+1)
	// }

	return (
		<>
		<NavigationBar />
		<h1>This is CounterComponent</h1>
		<p>this is paragraph</p>
		<h2>My number is: {count}</h2>
		<button onClick={() => dispatch(incrementByValue({myvalue: 4}))}>Increment</button>
		</>
		)
}

export default CounterComponent;