import {useState, useEffect} from 'react';
import NavigationBar from './NavigationBar'
function CounterComponent(){
	const [counter, setCounter] = useState(0);
	const [evencounter, setEvenCounter] = useState(0);

	let num = 2;

	useEffect(()=>{
		console.log("component is loaded");
		if(evencounter < 1000){
		setEvenCounter(evencounter+100);
		}
	},[counter, evencounter]);

	const Increment = () => {
		setCounter(counter+1);
		setCounter(counter+1);
		setCounter(counter+1);
		setCounter(counter+1);
		setCounter(counter+1);
		setCounter(counter+1);
		// setEvenCounter(counter+2);
		setCounter(counter+1)
	}

	return (
		<>
		<NavigationBar />
		<h1>This is CounterComponent</h1>
		<p>this is paragraph</p>
		<h2>My number is: {counter} {evencounter} </h2>

		<button onClick={() => Increment()}>Increment</button>
		</>
		)
}

export default CounterComponent;