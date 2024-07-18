import React from 'react'
import exclusive_image from '../Assets/women_0.jpg'
import './Offer.css'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_image} width="450" alt='' />
        </div>
    </div>
  )
}