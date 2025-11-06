import React from 'react'
import "../stylessheets/ExtensionCard.css"

export const ExtensionCard = ({ cardTitle, cardImage, cardDescription }) => {
  return (
    <>
      <div className="tarjetas">
        <img className='imglogo' src={cardImage} alt="" />
        <h1 className='title1' >{cardTitle}</h1>
        <p className='pCard'>{cardDescription}</p>
        <div className='botones'>
          <button className='remove'>Remove</button>
          <img className='boton-imagen' src="./public/Image.png" alt="" />
        </div>
      </div>
    </>
  )
}