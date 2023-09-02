import React, { useEffect, useState } from 'react';
import backgroundImage from '../bookingpage-img/pexels-tirachard-kumtanom-733852.jpg';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const navigate = useNavigate();
  const [bookingarr, setBookingArr] = useState([]);

  useEffect(() => {
    const uemail = localStorage.getItem("userEmail");
    fetchdata(uemail);
  }, []);

  const fetchdata = (uemail) => {
    UserService.getBookingByEmail(uemail)
      .then((response) => {
        setBookingArr([...response.data]);
      })
      .catch();
  };

  const cancel = (oid) => {
    UserService.deleteByOrderId(oid)
      .then((response) => {
        window.location.reload()
      })
      .catch();
  }

  const confirmBooking = () => {
    navigate('/payment');
  }

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
      <div className="container mt-4">
        <h2 style={{ color: '#fff', textAlign: 'center' }}>Booking Page</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <table className="table mt-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <thead>
              <tr>
                <th scope="col">Serial Number</th>
                <th scope="col">Order Id</th>
                <th scope="col">Artist Name</th>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Fees</th>
                <th scope="col">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {bookingarr.map((booking, index) => (
                <tr key={booking.id}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">{booking.orderId}</th>
                  <td>{booking.artist.artistName}</td>
                  <td>{booking.bookedDate}</td>
                  <td>{booking.artist.artistGenre}</td>
                  <td>{booking.orderPrice}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: "10px", marginTop: "10px" }}
                      onClick={() => cancel(booking.orderId)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="btn btn-success"
            style={{ marginTop: "10px" }}
            onClick={() => confirmBooking()}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
