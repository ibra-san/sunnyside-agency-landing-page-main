import React from 'react'

function Section0() {
  return (
    <div className='Section0'>
        
        <nav className='Section0__Nav'>
            <p className='Section0__Nav__Text'>sunnyside</p>
            <ul className='Section0__Nav__Menu'>
                <li className='Nav__Menu__Items'>About</li>
                <li className='Nav__Menu__Items'>Services</li>
                <li className='Nav__Menu__Items'>Projects</li>
                <li className='Nav__Menu__Items contact'>CONTACT</li>
            </ul>
            <img className='Section0__Nav__MenuMini' src="images/icon-hamburger.svg" />
        </nav>

        <div className='Section0__Intro'>
          <h1 className='Section0__Intro--Text'>WE ARE CREATIVES</h1>
          <img className='Section0__Intro--Arrow' alt='arrow down' src='images/icon-arrow-down.svg' />
        </div>
        <picture className='Section0__Header'>
            <source className='Section0__Header--Img' media='(max-width: 650px)' srcset="images/mobile/image-header.jpg" />
            <img className='Section0__Header--Img' src="images/desktop/image-header.jpg" alt="header" />
        </picture>
    </div>
  )
}

export default Section0