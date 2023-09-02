import React, { useEffect, useState } from 'react';
import backgroundImage from '../bookingpage-img/pexels-tirachard-kumtanom-733852.jpg';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();
  const [Ordersarr, setOrdersArr] = useState([]);

  useEffect(() => {
    const uemail = localStorage.getItem("userEmail");
    fetchdata(uemail);
  }, []);

  const fetchdata = (uemail) => {
    UserService.getOrdersByUserEmail(uemail)
      .then((response) => {
        setOrdersArr([...response.data]);
      })
      .catch();
  };

  const totalFees = Ordersarr.reduce((total, order) => total + order.orderPrice, 0);

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
        <h2 style={{ color: '#fff', textAlign: 'center' }}>Orders Details</h2>
        <table className="table mt-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <thead>
            <tr>
              <th scope="col">Serial Number</th>
              <th scope="col">Order Id</th>
              <th scope="col">Artist Name</th>
              <th scope="col">Date</th>
              <th scope="col">Category</th>
              <th scope="col">Fees</th>
            </tr>
          </thead>
          <tbody>
            {Ordersarr.map((order, index) => (
              <tr key={order.id}>
                <th scope="row">{index + 1}</th>
                <th scope="row">{order.orderId}</th>
                <td>{order.artist.artistName}</td>
                <td>{order.bookedDate}</td>
                <td>{order.artist.artistGenre}</td>
                <td>{order.orderPrice}</td>
                <td>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="5" style={{ fontWeight: 'bold', textAlign: 'right' }}>
                Total:
              </td>
              <td style={{ fontWeight: 'bold' }}>{totalFees}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
