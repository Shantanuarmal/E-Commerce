import React from 'react'
import './Footer.css';
import footer_logo from '../../assets/Assets/logo_big.png';
import instagram_icon from '../../assets/Assets/instagram_icon.png';
import pintester_icon from '../../assets/Assets/pintester_icon.png';
import whatsapp_icon from '../../assets/Assets/whatsapp_icon.png';
const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-logo">
    <img src={footer_logo} alt="" /><p>Shopper</p>
</div>
<ul className="footer-links">
    <li><a href="#">Company</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Offices</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
</ul>
<div className="footer-social-icons">
    <div className="footer-icons-container">
        <img src={instagram_icon} alt="" />
    </div>
    <div className="footer-icons-container">
        <img src={pintester_icon} alt="" />
    </div>
    <div className="footer-icons-container">
        <img src={whatsapp_icon} alt="" />
    </div>
</div>
<div className="footer-copyright">
    <hr />
    <p> copyright © 2024 - All rights reserved</p>
</div>
    </div>
  )
}

export default Footer;