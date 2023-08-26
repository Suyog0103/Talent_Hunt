import React, { useState } from 'react';
import '../css/LoginForm.css';
import UserService from '../services/UserService';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const ArtistLogin = () => {
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
    let artist = { artistEmail: email, artistPassword: password };
    console.log('artist => ' + JSON.stringify(artist));

    UserService.artistLogin(artist).then((res) => {
      console.log("in aartistlogin "+res.data)
      console.log(res.data);
      const bob= res.data
      if (res.data === "login failed") {
        console.log("Credentials wrong");
        alert("Please enter a valid email or password");
        navigate('/ArtistLogin');                                               //change navigation path
      } else {
        localStorage.setItem("artisEmail", bob);
        const aa = localStorage.getItem("artisEmail");
        console.log("in login page artistemail is " + aa);
        alert("Logged in successfully");
        // history.push('/Categoryartist');
        navigate('/artistProfile');                                          //change navigation path
      }
    });
  };

  return (
    <div className="login-form">
      <h2>Artist Login</h2>
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

export default ArtistLogin;
