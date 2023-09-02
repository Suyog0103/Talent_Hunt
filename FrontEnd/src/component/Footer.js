import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <b>
              <u>
                <a href="/About">About</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/ContactUs">ContactUs</a>
              </u>
            </b>
          </div>
          <p>&copy; 2023 Talent Hunt. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
