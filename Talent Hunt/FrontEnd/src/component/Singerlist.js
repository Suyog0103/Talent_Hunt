import React, { Component } from 'react';
import backgroundImage from '../singer-img/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg'; // Import your background image
import img0 from '../singerlist-img/corey-young-1cNpSv61ZDo-unsplash.jpg';
import img1 from '../singerlist-img/corey-young-yGiDntaHfFs-unsplash.jpg';
import img2 from '../singerlist-img/joel-muniz-u4m70M8sqxQ-unsplash.jpg';
import img3 from '../singerlist-img/kevin-britos-PHYgBreyeYc-unsplash.jpg';
import img4 from '../singerlist-img/leandro-navarro-p2o0mTKAEnM-unsplash.jpg';
import img5 from '../singerlist-img/luke-thornton-JNl7o-Mj2cc-unsplash.jpg';
import img6 from '../singerlist-img/tim-toomey-IW9mC6wEXbk-unsplash.jpg';
import UserService from '../services/UserService';

class SingersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singerarr: [],
    };
    this.image = [img0, img1, img2, img3, img4, img5, img6];
  }

  componentDidMount() {
    this.fetchdata();
  }

  fetchdata() {
    let u = "singer";
    UserService.getAllsingers(u)
      .then((response) => {
        this.setState({ ...this.state, singerarr: [...response.data] });
      })
      .catch();
  }

  booked = (index, booked_date, artistfees, artist_email) => {
    const uemail = localStorage.getItem("userEmail");
    console.log("in singerlist printing userEmail" + uemail);
    UserService.addOrder(booked_date, artistfees, artist_email, uemail)
      .then((response) => {
        const updatedSingerArr = [...this.state.singerarr];
        updatedSingerArr[index].booked = true;
        this.setState({ singerarr: updatedSingerArr });
      })
      .catch();
  };

  render() {
    return (
      <div
        className="container-fluid p-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className="container mt-4"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <h2 style={{ color: '#333', textAlign: 'center' }}>Singers List</h2>
          <ul className="list-group mt-3">
            {this.state.singerarr.map((singer, index) => (
              <li
                key={singer.id}
                className="list-group-item d-flex"
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                  marginBottom: '20px', // Add space between singers
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <div className="me-3">
                  <img
                    src={this.image[index % 7]}
                    alt={singer.name}
                    className="img-fluid"
                    style={{
                      maxWidth: '100px',
                      borderRadius: '5px',
                    }}
                  />
                </div>
                <div>
                  <h4>{singer.artist.artistName}</h4>
                  <p>Date: {singer.fromDate}</p>
                  <p>Fees: {singer.artistfees}</p>
                  {singer.booked ? (
                    <button
                      className="btn btn-success"
                      style={{
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '3px',
                        padding: '8px 15px',
                        fontSize: '14px',
                        cursor: 'not-allowed',
                      }}
                      disabled
                    >
                      Booked
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '3px',
                        padding: '8px 15px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                      }}
                      onClick={() =>
                        this.booked(
                          index,
                          singer.fromDate,
                          singer.artistfees,
                          singer.artist.artistEmail
                        )
                      }
                    >
                      Book Now
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SingersList;
