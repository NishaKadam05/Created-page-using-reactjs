import React from 'react';
import ReactDOM from "react-dom";
import './header.css';

const Header=() =>{
  return(
      <div className='head'>
        <img src={require('./logo.png')}/>
        <h1>React Website</h1>
          <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Products</li>
              <li>Contact Us</li>  
        </ul>
      </div>
  )
}
ReactDOM.render(<Header/>,document.getElementById('root'));

export default Header;