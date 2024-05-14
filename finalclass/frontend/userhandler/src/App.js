import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const [users, setUsers] = useState([]);
  const [form, setFrom] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  })

  const createUser = async () => {
    fetch('http://localhost:4000/api/v1/users/', {
      method: 'POST',
      body: JSON.stringify({
        name: form.name,
        username: form.username,
        email: form.email,
        password: form.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(res => {
      if(res.user[0]){
        // let nUsers = users;
        // nUsers.push(res.user[1]);
        // setUsers(nUsers);
        // alert('User created successfully');
      }else {

        alert(res.user[1]);
      }
      console.log(res);
    })
  }
  const fetchUsers = () => {
    fetch('http://localhost:4000/api/v1/users')
    .then(res => res.json())
    .then(res => {
      console.log(res.users);
      setUsers(res.users)
    })
  }

  useEffect(()=>{
    fetchUsers();
  },[])
  return (
    <div className="App">
      <header className="App-header">

        <div>
          <input type="text" value={form.name} onChange={(text) => setFrom({
            ...form,
            name: text.target.value
          })} />
          
          <input type="text" value={form.username} onChange={(text) => setFrom({
            ...form,
            username: text.target.value
          })} />

<input type="email" value={form.email} onChange={(text) => setFrom({
            ...form,
            email: text.target.value
          })} />

<input type="password" value={form.password} onChange={(text) => setFrom({
            ...form,
            password: text.target.value
          })} />
        </div>

        <button onClick={createUser}>Create User</button>

        {users.map(user => {
          return (
            <h4>{user.username}</h4>
          )
        })}
      </header>
    </div>
  );
}

export default App;
