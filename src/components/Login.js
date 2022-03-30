import React, {useState} from "react";
import axios from "axios";


const Login = () => {
    const [cred, setCred] = useState({
        username: '',
        password: '',
    })

    const handleChange = (evt) => {
        setCred({
            ...cred, 
            [evt.target.name]:evt.target.value
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('testing123')
        axios.post('http://localhost:9000/api/login', cred)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input onChange={handleChange} id='username'/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" onChange={handleChange} id='password' />
        </div>
      </form>
      <div>
        <button >Submit</button>
      </div>
    </div>
  );
};

export default Login;
