import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
  <div className='footer' id='footer'>
    <div className="footer-content">
      <div className="footer-contect-left">
        <img src={assets.logo} alt="" />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam corrupti ipsum eum aliquid sit quod a nisi obcaecati laudantium maiores rem exercitationem, excepturi distinctio nihil minima est quos in!</p>
        <div className="footer-social-icons">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
      <div className="footer-contect-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
      </div>
      <div className="footer-contect-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>91+7010748485</li>
              <li>ContactMe@gmail.com</li>
            </ul>
      </div>
    </div>
    <hr/>
    <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
  </div>
  )
}

export default Footer