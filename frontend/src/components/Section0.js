import React from 'react';
import {useState} from 'react';
function Section0() {
  const [menu, setMenu] = useState(false);
  function toggleMenu () { 
    setMenu(menu => !menu);
  }

  let toggleClass = menu ? ' Section0__Nav__Active':'';

  return (
    <div className='Section0'>
        
        <nav className={`Section0__Nav${toggleClass}`}>
            <p className='Section0__Nav__Text'>sunnyside</p>
            <ul className={`Section0__Nav__Menu ${toggleClass}__Menu`}>
                <li className='Section0__Nav__Menu__Items'>About</li>
                <li className='Section0__Nav__Menu__Items'>Services</li>
                <li className='Section0__Nav__Menu__Items'>Projects</li>
                <li className='Section0__Nav__Menu__Items contact'>CONTACT</li>
            </ul>
            <img onClick={toggleMenu} className='Section0__Nav__MenuMini' src="images/icon-hamburger.svg" alt='menu button' />
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