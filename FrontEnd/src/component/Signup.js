import React, { useState } from 'react';
import '../css/Signup.css';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [full_name, setFull_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile_number, setMobile_number] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const changefull_nameHandler = (event) => {
    setFull_name(event.target.value);
  };

  const changeemailHandler = (event) => {
    setEmail(event.target.value);
  };

  const changepasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const changemobile_numberHandler = (event) => {
    setMobile_number(event.target.value);
  };

  const changegender_genderHandler = (event) => {
    setGender(event.target.value);
  };

  const saveUser = (event) => {
    
    event.preventDefault();
    
    if(!full_name || !email || !password || !mobile_number || !gender)
    {
      alert("please fill all required fields");
      return;
    }
   

    let users = {
      name: full_name,
      email: email,
      password: password,
      contactNo: mobile_number,
      gender: gender,
    };

  

    UserService.addUser(users)
      .then((res) => {
        alert('Hello You have Registered successfully');
        navigate('/login');
      })
      .catch((error) => {
        alert('Something went wrong');
      });
  };

  const cancel = () => {
    navigate('/Signup');
  };

 

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>User Signup</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="name"
              id="name"
              value={full_name}
              onChange={changefull_nameHandler}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={changeemailHandler}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={changepasswordHandler}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Mobile Number">Mobile Number</label>
            <input
              type="Mobile Number"
              id="Mobile Number"
              value={mobile_number}
              onChange={changemobile_numberHandler}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Gender">Gender:</label>
            <input
              type="Gender"
              id="Gender"
              value={gender}
              onChange={changegender_genderHandler}
              required
            />
          </div>

          <div className="form-buttons">
            <button
              className="btn btn-success" style={{ marginTop: "10px" }}
              onClick={saveUser}
            >
              Sign Up
            </button>
            <button
              className="btn btn-danger" style={{ marginLeft: "10px", marginTop: "10px" }}
              onClick={cancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
