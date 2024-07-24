import React, { useState } from 'react'
import './Header.css'
import { AiFillPhone, AiFillMail, AiOutlineBars, AiOutlineClose} from 'react-icons/ai'



export default function Header() {
  const [value, SetValue] = useState(false);

  return (
    <div>
      <header className="header_section">
      <div className="header_top">
          <div className="contact_nav">
            <a href="">
              <AiFillPhone size={20} style={{color:"orange", backgroundColor:"transparent", marginInline: "0.5vw"}}/>
              <span>
                Call : +01 123455678990
              </span>
            </a>
            <a href="">
              <AiFillMail size={20} style={{color:"orange", backgroundColor:"transparent", marginInline: "0.5vw"}}/>
              <span>
                Email : demo@gmail.com
              </span>
            </a>
          </div>
      </div>
      <div className="header_bottom">
          <nav className="navbar">
            <a className="navbar-brand" href="index.html">
              <h1>INANCE</h1>
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
              <ul>
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html"> About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="iconsMenu" onClick={() => SetValue(!value)}>
              { !value ?
                <AiOutlineBars style={{width:"auto", height:"6vh", color:"black"}} className='bars'/> :
                <AiOutlineClose style={{width:"auto", height:"6vh", color:"black"}} className='close'/>}
            </div>
          </nav>
          {value ? 
          <div className="collapse navbar-collapse" id="navbarSupportedContent1" style={{display:"block"}} >
              <ul>
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html"> About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div> : 
            !value}

      </div>
    </header>
    </div>
  )
}