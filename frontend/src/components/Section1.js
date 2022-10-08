import React from 'react'

function Section1() {
  return (
    <section className='Section1'>
      <div className='Section1__Text'>
        <h1 className='Section1__Text--Title'>Transform your brand</h1>
        <p className='Section1__Text--Body'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
        <div className='Section1__Text--Button'> <span>LEARN MORE</span>  </div>
      </div>

      <picture className='Section1__Pic'>
        <source className="Section1__Img" media="(max-width: 450px)" srcset="images/mobile/image-transform.jpg" alt="Egg reflection" />
        <img className="Section1__Img" src="images/desktop/image-transform.jpg" alt="Egg reflection" />
      </picture>
      
    </section>
  )
}

export default Section1