import React from 'react'
import './Bredcrum.css'
import arrow_icon from '../Assets/side_arrow.png'

export const Bredcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
    HOME <img src={arrow_icon} width='10' alt='' /> SHOP <img src={arrow_icon} width='10' alt='' /> {product.category} <img src={arrow_icon} width='10' alt='' /> {product.name}
    </div>
  )
}
