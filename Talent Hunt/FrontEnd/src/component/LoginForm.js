import React, { useState } from 'react';
import '../css/LoginForm.css';
import UserService from '../services/UserService';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const saveUser = (event) => {
    event.preventDefault();
    let users = { email: email, password: password };
    console.log('Users => ' + JSON.stringify(users));

    UserService.login(users).then((res) => {
      console.log(res.data.email)
      console.log(res.data);
      if (res.data === '') {
        console.log("Credentials wrong");
        alert("Please enter a valid email or password");
        navigate('/login');
      } else {
        localStorage.setItem("userEmail", res.data.email);
        const ee = localStorage.getItem("userEmail");
        console.log("in login page useremail is " + ee);
        alert("Logged in successfully");
        // history.push('/Categoryartist');
        navigate('/Categoryartist');
      }
    });
  };

  return (
    <div className="login-form">
      <h2>User Login</h2>
      <form onSubmit={saveUser}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={changeEmail}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={changePassword}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
