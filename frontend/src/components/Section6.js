import React from 'react'

function Section6() {
  return (
    <div className='Section6'>
      <h1 className='Section6__Title'>sunnyside</h1>

      <ul className='Section6__Menu'>
        <li className='Section6__Menu--Item'>About</li>
        <li className='Section6__Menu--Item'>Services</li>
        <li className='Section6__Menu--Item'>Projects</li>
      </ul>

      <div className='Section6__Links'>
        <img className='Section6__Links--Link' src='images/icon-facebook.svg' alt='Facebook Link' />
        <img className='Section6__Links--Link' src='images/icon-instagram.svg' alt='Instagram Link' />
        <img className='Section6__Links--Link' src='images/icon-twitter.svg' alt="twitter Link" />
        <img className='Section6__Links--Link' src='images/icon-pinterest.svg' alt="pinterest Link" />
      </div>
    </div>
  )
}

export default Section6