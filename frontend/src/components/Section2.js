import React from 'react'

function Section2() {
  return (
    <section className='Section2'>
       <picture className='Section2__Pic'>
        <source className="Section2__Img" media="(max-width: 450px)" srcset="images/mobile/image-stand-out.jpg" alt="Stand Out" />
        <img className="Section2__Img" src="images/desktop/image-stand-out.jpg" alt="Stand Out" />
      </picture>

      <div className='Section2__Text'>
        <h1 className='Section2__Text--Title'>Stand out to the right audience </h1>
        <p className='Section2__Text--Body'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
        <div className='Section2__Text--Button' id='s2__button'><span>LEARN MORE</span></div>
      </div>
    </section>
  )
}

export default Section2