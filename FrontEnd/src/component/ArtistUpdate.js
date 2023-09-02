import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import '../css/ArtistProfile.css';
import artistImage from '../artistProfile_img/morgan-petroski-LsMxdW1zWEQ-unsplash.jpg';
import { useNavigate } from 'react-router-dom';

function ArtistUpdate() {
  const [artistarr, setArtistArr] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [artistGender, setArtistGender] = useState('');
  const [artistGenre, setArtistGenre] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [artistFees, setArtistFees] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const artistemail = localStorage.getItem("artisEmail");
    console.log("in artist profile " + artistemail);
    fetchdata(artistemail);
  }, []);

  const fetchdata = (artistemail) => {
    UserService.getAdateByEmail(artistemail)
      .then((response) => {
        console.log("in resp.data " + JSON.stringify(response.data));
        const artist = response.data;
        setArtistArr([artist]);
        setArtistName(artist.artist.artistName);
        setArtistGender(artist.artist.artistGender);
        setArtistGenre(artist.artist.artistGenre);
        setFromDate(artist.fromDate);
        setArtistFees(artist.artistfees);
      })
      .catch();
  };

  const handleUpdate = (email) => {
    UserService.updateArtistByEmail(artistName, artistGender, artistGenre, fromDate, artistFees, email).then((response) => {
    navigate('/artistProfile');
})
.catch();
  };

  return (
    <div className="artist-profile-container">
      <div className="artist-profile-image">
        <img src={artistImage} alt="Artist" />
      </div>
      <div className="artist-profile-details">
        <div className="profile-attributes">
          {artistarr.map((artist) => (
            <div key={artist.id}>
              <table>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td><input type="text" value={artistName} onChange={(e) => setArtistName(e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td><input type="text" value={artistGender} onChange={(e) => setArtistGender(e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td>Genre:</td>
                    <td><input type="text" value={artistGenre} onChange={(e) => setArtistGenre(e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{artist.artist.artistEmail}</td>
                  </tr>
                  <tr>
                    <td>Available Date:</td>
                    <td><input type="text" value={fromDate} onChange={(e) => setFromDate(e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td>Fees:</td>
                    <td><input type="text" value={artistFees} onChange={(e) => setArtistFees(e.target.value)} /></td>
                  </tr>
                </tbody>
              </table>


              <button className="update-button" onClick={()=>handleUpdate(artist.artist.artistEmail)}>
          Update Profile
        </button>
            </div>
          ))}
        </div>
        
        
      </div>
    </div>
  );
}

export default ArtistUpdate;
