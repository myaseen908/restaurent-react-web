import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets/frontend_assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
        
        
            <p>  Food is everything we are. It's an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. It's inseparable from those from the get-go.
- Anthony Bourdain
</p>
        
        <div className='foot-social-icons'>
          <img src={assets.facebook_icon} alt="" />
           <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        
        </div>


        <div className='footer-content-center'>
 <h2>COMPANY</h2>
 <ul>
    <li>Home</li>
    <li>Delivery</li>
    <li>About Us</li>
    <li> Privacy policy</li>
 </ul>
        </div>
        <div className='footer-content-right'>
<h2>GET IN TOUCH</h2>
<ul>
    <li>+91 9797960952</li>
    <li>restocafe@gmail.com</li>
</ul>
        </div>

      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2026 @ RestoCafe.com-All Right Reserved.</p>
    </div>
  )
}

export default Footer
