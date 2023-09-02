// import 'bootstrap/dst/css/bootstrap.min.css';
import React from 'react';
import './css/App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import LoginForm from './component/LoginForm';
import Categoryartist from './component/Categoryartist';
import Singerlist from './component/Singerlist';
import BookingPage from './component/BookingPage';
import About from './component/About';
import ContactUs from './component/ContactUs';
import ArtistLogin from './component/ArtistLogin';
import ArtistSignup from './component/ArtistSignup';
import ArtistProfile from './component/ArtistProfile';
import {  Route, Routes } from 'react-router-dom';
import Signup from './component/Signup';
import ArtistUpdate from './component/ArtistUpdate';
import Payment from './component/Payment';
import Orders from './component/Orders';
import Magitianlist from './component/Magitianlist';
import Instrumentalist from './component/Instrumentalist';
// import '../node_modules/bootstrap/dst/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Chat from './Chat';

function App() {
  return (
    
    
    <div className="App">
      <Navbar />
      {/* <LoginForm></LoginForm> */}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        {/* <Route path="/cata" element={<ArtistCategories></ArtistCategories>} /> */}
        <Route path="/login" element={<LoginForm></LoginForm>} />
        <Route path="/ArtistLogin" element={<ArtistLogin></ArtistLogin>} />
        <Route path="/ArtistSignup" element={<ArtistSignup></ArtistSignup>} />
        <Route path="/Categoryartist" element={<Categoryartist></Categoryartist>} />
        <Route path="/Signup" element={<Signup></Signup>} />
        <Route path="/Singerlist" element={<Singerlist></Singerlist>} />
        <Route path="/BookingPage" element={<BookingPage></BookingPage>} />
        <Route path="/About" element={<About></About>} />
        <Route path="/ContactUs" element={<ContactUs></ContactUs>} />
        <Route path="/artistProfile" element={<ArtistProfile></ArtistProfile>} />
        <Route path="/artistupdate" element={<ArtistUpdate></ArtistUpdate>} />
        <Route path="/payment" element={<Payment></Payment>} />
        <Route path="/orders" element={<Orders></Orders>} />
        <Route path="/magitianlist" element={<Magitianlist></Magitianlist>} />
        <Route path="/instrumentalist" element={<Instrumentalist></Instrumentalist>} />

      </Routes>
    </div>
  
  );
}

export default App;
