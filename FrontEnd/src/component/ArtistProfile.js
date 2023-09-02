import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import '../css/ArtistProfile.css';
import artistImage from '../artistProfile_img/morgan-petroski-LsMxdW1zWEQ-unsplash.jpg';
import { useNavigate } from 'react-router-dom';

function ArtistProfile() {
  const [artistarr, setArtistArr] = useState([]);
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
        setArtistArr([response.data]);
      })
      .catch();
  };

  const handleUpdate = () => {
    navigate('/artistupdate');
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
              <h2>{artist.artist.artistName}</h2>
              <p><strong>Gender:</strong> {artist.artist.artistGender}</p>
              <p><strong>Genre:</strong> {artist.artist.artistGenre}</p>
              <p><strong>Email:</strong> {artist.artist.artistEmail}</p>
              <p><strong>Available Dates:</strong> {artist.fromDate}</p>
              <p><strong>Fees:</strong> {artist.artistfees}</p>
            </div>
          ))}
        </div>
        <button className="update-button" onClick={handleUpdate}>
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default ArtistProfile;
