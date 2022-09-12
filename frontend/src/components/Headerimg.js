import React from 'react'

function Headerimg() {
  return (
    <div className='Headerimg'>
        <div className='Headerimg__Text'>
          <h1 className='Headerimg__Text--Header'>WE ARE CREATIVES</h1>
          <img className='Headerimg__Text--Arrow' src='images/icon-arrow-down.svg' alt='Down Arrow' />
        </div>
        <source className="Headerimg" media="(max-width: 450px)" srcset="images/mobile/image-header.jpg" alt="An orange" />
        <img className="Headerimg" src="images/desktop/image-header.jpg" alt="An orange" />
    </div>
  )
}

export default Headerimg