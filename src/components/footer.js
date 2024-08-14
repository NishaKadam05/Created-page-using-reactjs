import React from 'react';
import ReactDOM from "react-dom";
import './footer.css';

const Footer=() =>{
  return(
      <div className='footer'>
        <div className='foot'>
          <div className='home'>
            <h3>Home</h3>
            <p>Features</p>
            <p>Table</p>
            <p>Form</p>
          </div>
          <div className='about'>
            <h3>About Us</h3>
            <p>Company Profile</p>
            <p>Our Mission</p>
            <p>Our Vision</p>
          </div>
          <div className='service'>
            <h3>Services</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Raect JS</p>
          </div>
          <div className='product'>
            <h3>Products</h3>
            <p>Front-end</p>
            <p>Back-end</p>
            <p>Full Stack</p>
          </div>
          <div className='contact'>
            <h3>Contact Us</h3>
            <p>Email: abc@gmail.com</p>
            <p>Phone: 8424752471</p>
            <p>Address: Pollachi Highway, Malumichampatti,Coimbatore</p>
          </div>
        </div>
        <p className='copy'>&copy; Copyright 2024</p>
      </div>
  )
}
ReactDOM.render(<Footer/>,document.getElementById('root'));

export default Footer;
