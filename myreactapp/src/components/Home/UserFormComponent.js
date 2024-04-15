import {useState, useEffect} from 'react';


function UserFormComponent(props){
return (
	<>
<h1>Single Todo:</h1>
<h3>Title {props.todo.id} </h3>
<h3>Title {props.todo.title} </h3>
<h3>Title {props.todo.complete} </h3>
<br/>
<br/>


</>
	)
}

export default UserFormComponent;