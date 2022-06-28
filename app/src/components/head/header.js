import React, { Component } from 'react';
import './header.css';

export class Header extends Component {
  render() {
    return (
      <>
        <header className='header'>
          <div className="conatiner d_flex">
            <div className="logo">
              <img src="" alt="" />
            </div>
            <div className="navlink">
              <ul className="link f_flex uppercase">
                <li><a href="#home">home</a></li>
                <li><a href="#feature">features</a></li>
                <li><a href="#portfilio">portfolio</a></li>
                <li><a href="#resume">resume</a></li>
                <li><a href="#clients">clients</a></li>
                <li><a href="#blog">blog</a></li>
                <li><a href="#contact">contact</a></li>
                <li><button className='home-btn'>BUY NOW</button></li>
              </ul>
              <button className='toggle'>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </header>
      </>
    )
  }
}

export default Header