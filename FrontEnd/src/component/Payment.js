import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [selectedSubPaymentMethod, setSelectedSubPaymentMethod] = useState('');
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const getTotalFees = () => {
    return Artistarr.reduce((total, artist) => total + artist.orderPrice, 0);
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
    setSelectedSubPaymentMethod('');
  };
  const handleSubPaymentMethodChange = (event) => {
    setSelectedSubPaymentMethod(event.target.value);
  };

  const handlePayment = (event) => {
    event.preventDefault();
    if (!selectedPaymentMethod) {
      return;
    }
  
    if (selectedPaymentMethod === 'online' && !selectedSubPaymentMethod) {
      return;
    }
  
    if (selectedPaymentMethod === 'card' && !selectedSubPaymentMethod) {
      return;
    }
  
    setPaymentSuccessful(true);
  
    if (selectedPaymentMethod === 'cash') {
      setPaymentSuccessful(true);
    }

    let email;
    Artistarr.map((artist) => (
        console.log('in payment artistEmail  => ' + JSON.stringify(artist)),
        email= artist.artist.artistEmail,
        console.log('in payment artistEmail  => ' +email),
        UserService.confirmBooking(email)
      ))
    alert("Payment Sucessfull")
    navigate('/Orders')
  };



  const [Artistarr, setArtistArr] = useState([]);

  useEffect(() => {
    const uemail = localStorage.getItem("userEmail");
    fetchdata(uemail);
  }, []);

  const fetchdata = (uemail) => {
    UserService.getBookingByEmail(uemail)
      .then((response) => {
        setArtistArr([...response.data]);
      })
      .catch();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Payment Details</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Artist Name</th>
              <th>Fees</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {Artistarr.map((artist) => (
              <tr key={artist.orderId}>
                <td>{artist.orderId}</td>
                <td>{artist.artist.artistName}</td>
                <td>{artist.orderPrice}</td>
                <td>{artist.artist.artistGenre}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="total-label">
                Total Fees:
              </td>
              <td className="total-fees">{getTotalFees()}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="text-center mt-4">
        <h3>Select Payment Method:</h3>
        <select
          className="form-select"
          value={selectedPaymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <option value="">Select Payment Method</option>
          <option value="online">Online Payment</option>
          <option value="card">Card Payment</option>
          <option value="cash">Cash Payment</option>
        </select>
      </div>
      {selectedPaymentMethod === 'online' && (
        <div className="text-center mt-3">
          <h3>Select Sub-Payment Method:</h3>
          <select
            className="form-select"
            value={selectedSubPaymentMethod}
            onChange={handleSubPaymentMethodChange}
          >
            <option value="">Select Sub-Payment Method</option>
            <option value="phonepe">PhonePe</option>
            <option value="gpay">Google Pay</option>
          </select>
        </div>
      )}
      {selectedPaymentMethod === 'card' && (
        <div className="text-center mt-3">
          <h3>Enter Card Details:</h3>
          <input type="text" className="form-control mb-2" placeholder="Card Number" />
          <input type="text" className="form-control mb-2" placeholder="Expiry Date" />
          <input type="text" className="form-control mb-2" placeholder="CVV" />
        </div>
      )}
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
      {paymentSuccessful && (
  <div
    className="alert alert-success position-fixed top-0 end-0"
    style={{ zIndex: 9999, animation: 'fade-out 7s forwards' }}
  >
    Payment Successful
  </div>
)}
      <style>
        {`
          @keyframes fade-out {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Payment;