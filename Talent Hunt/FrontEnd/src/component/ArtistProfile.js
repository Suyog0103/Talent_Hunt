import React, { Component } from 'react';
// import backgroundImage from './bookingpage-img/pexels-tirachard-kumtanom-733852.jpg'; // Import your background image
import UserService from '../services/UserService';
import '../css/ArtistProfile.css';
import artistImage from '../artistProfile_img/morgan-petroski-LsMxdW1zWEQ-unsplash.jpg';

class ArtistProfile extends Component {
  constructor(props){
    super(props);
    this.state={
        bookingarr:[]
        // searcharr:[],
        // searchtext:""
    }

}
//initialize array 
componentDidMount(){
    const artistemail = localStorage.getItem("artisEmail");
    console.log("in artist profile "+artistemail)
    this.fetchdata(artistemail)
}

fetchdata(artistemail){
  
    UserService.getAdateByEmail(artistemail)
    .then((response)=>{
      console.log("in resp.data" +JSON.stringify(response.data))
        this.setState({bookingarr:[response.data]})
        
    }
    
    ).catch()
}

  render() {
    return (
      // <div
      //   className="container-fluid p-0"
      //   style={{
      //     backgroundImage: `url(${backgroundImage})`,
      //     backgroundSize: 'cover',
      //     minHeight: '100vh',
      //     display: 'flex',
      //     flexDirection: 'column',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //   }}
      // >
      //   <div className="container mt-4">
      //     <h2 style={{ color: '#fff', textAlign: 'center' }}>Booking Page</h2>
      //     <table className="table mt-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      //       <thead>
      //         <tr>
      //           {/* <th scope="col">Serial Number</th> */}
      //           {/* <th scope="col">artist Id</th> */}
      //           <th scope="col">Artist Name</th>
      //           <th scope="col">Artist Email</th>
      //           <th scope="col">Artist gender</th>
      //           <th scope="col">Artist phone number </th>
      //           <th scope="col">Address</th>
      //           <th scope="col">available Date</th>
      //           <th scope="col">Category</th>
      //           <th scope="col">Fees</th>
      //           <th scope="col">Confirm Booking</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {this.state.bookingarr.map((booking, index) => (
      //           <tr key={booking.id}>
      //             {/* <th scope="row">{index + 1}</th> */}
      //             {/* <th scope="row">{booking.id}</th> */}
      //             <td>{booking.artist.artistName}</td>
      //             <td>{booking.artist.artistEmail}</td>
      //             <td>{booking.artist.artistGender}</td>
      //             <td>{booking.artist.artistPhoneNumber}</td>
      //             <td>{booking.artist.artistAddress}</td>
      //             <td>{booking.fromDate}</td>
      //             <td>{booking.artist.artistGenre}</td>
      //             <td>{booking.artistfees}</td>
      //             <td>
      //               <button className="btn btn-success">update</button>
      //             </td>
      //           </tr>
      //         ))}
      //       </tbody>
      //     </table>
      //   </div>
      // </div>


      <div className="artist-profile-container">
      <div className="artist-profile-image">
        <img src={artistImage}  />
      </div>
      <div className="artist-profile-details">



       
        <div className="profile-attributes">
        {this.state.bookingarr.map((booking) => (
          <div key={booking.id}>
             <h2>{booking.artist.artistName}</h2>
          <p><strong>Gender:</strong> {booking.artist.artistGender}</p>
          <p><strong>Genre:</strong> {booking.artist.artistGenre}</p>
           <p><strong>Email:</strong> {booking.artist.artistEmail}</p>
           <p><strong>Available Dates:</strong> {booking.fromDate}</p>
           <p><strong>Fees:</strong> {booking.artistfees}</p>
          </div>
        ))}
        
         {/* <p><strong>Gender:</strong> {this.state.bookingarr[0]}</p> */}
          {/* <p><strong>Genre:</strong> {this.state.bookingarr.artist.artistGenre}</p>
          <p><strong>Email:</strong> {this.state.bookingarr.artist.artistEmail}</p>
          <p><strong>Available Dates:</strong> {this.state.bookingarr.fromDate}</p>
          <p><strong>Fees:</strong> {this.state.bookingarr.artistfees}</p> */}
            </div>
        <button className="update-button" onClick={this.handleUpdate}>
          Update Profile
        </button>
      </div>
    </div>



    );
  }
}

export default ArtistProfile;
