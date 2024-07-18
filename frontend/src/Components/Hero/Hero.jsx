import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/point.png'
import arrow_icon from '../Assets/right-arrow.png'
import hero_image from '../Assets/fashion.avif'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} width='150'></img>
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrow_icon} width="40"  alt=''/>
            </div>
            </div>
            <div className='hero-right'>
                <img src={hero_image} width ="550" alt=''/>
            </div>
        
    </div>
  )
}
