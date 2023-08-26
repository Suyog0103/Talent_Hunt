import React, { useState } from 'react';
import '../css/Signup.css';
// import { useHistory } from 'react-router-dom';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const ArtistSignup = () => {
  // const history = useHistory();
  const [full_name, setFull_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile_number, setMobile_number] = useState('');
  const [gender, setGender] = useState('');
  const [genre, setGenre] = useState('');
  const [address, setAddress] = useState('');
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

  const changegenre_genreHandler = (event) => {
    setGenre(event.target.value);
  };

  const changeaddress_addressHandler = (event) => {
    setAddress(event.target.value);
  };

  const saveUser = (event) => {
    event.preventDefault();
    let artist = {
      artistName: full_name,
      artistEmail: email,
      artistPassword: password,
      artistPhoneNumber: mobile_number,
      artistGender: gender,
      artistGenre: genre,
      artistAddress: address,
    };

    console.log("in saveUser"+ JSON.stringify(artist))

    UserService.addArtist(artist)
      .then((res) => {
        alert('Hello You have Registered successfully');
        // history.push('/');
        navigate('/ArtistLogin');
      })
      .catch((error) => {
        alert('Something went wrong');
      });
  };

  const cancel = () => {
    // history.push('/Signup');
    navigate('/ArtistSignup');
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

          <div className="form-group">
            <label htmlFor="Genre">Genre:</label>
            <input
              type="Genre"
              id="Genre"
              value={genre}
              onChange={changegenre_genreHandler}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="address"
              id="address"
              value={address}
              onChange={changeaddress_addressHandler}
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

export default ArtistSignup;
