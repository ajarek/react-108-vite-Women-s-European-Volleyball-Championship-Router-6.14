import React from 'react'
import './Card.css'
const Card = ({handleEdit, country, city, poll, arena, capacity, src }) => {
  return (
    <div
      className='card'
      onClick={handleEdit}
    >
      
        <div className='info-wrapper'>
          <img
            src={country}
            alt='contry'
          />
          <span>{city}</span>
          <span>Grupa:{poll}</span>
        </div>
        <div className='arena'>{arena}</div>
        <div>pojemność: {capacity}</div>
        <div className='img'>
          <img
            src={src}
            alt='city'
          />
        </div>
     
    </div>
  )
}

export default Card
