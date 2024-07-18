import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/shopping.png'
import instagram_icon from '../Assets/instagram.png'
import twitter_icon from '../Assets/twitter.png'
import whatsapp_icon from '../Assets/whatsapp.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} width="75" alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_icon} width="25" alt=''/>
                </div>
                <div className='footer-icons-container'>
                <img src={twitter_icon} width="25" alt=''/>
                </div>
                <div className='footer-icons-container'>
                <img src={whatsapp_icon} width = "25" alt=''/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}
