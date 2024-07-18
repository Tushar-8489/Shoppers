import React from 'react'
import './DescriptionBox.css'

export const Description = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
        <p>
            Enter the descrition for our website how to work and what are doing
            </p>
            <p>
                Enter other description
            </p>
        </div>
    </div>
  )
}
