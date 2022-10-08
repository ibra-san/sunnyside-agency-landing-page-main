import React from 'react'

function Section3() {
  return (
    <section className='Section3'>
      <div className='Section3__Graphic'>

        <div className='Section3__Graphic--Text'>
          <h1 className='Section3__Graphic--Text--Title'>Graphic design </h1>
          <p className='Section3__Graphic--Text--Body'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>

        <picture className='Section3__Graphic--Img'>
          <source className="Section3__Graphic--Img" media="(max-width: 450px)" srcset="images/mobile/image-graphic-design.jpg" alt="graphic design" />
          <img className="Section3__Graphic--Img" src="images/desktop/image-graphic-design.jpg" alt="graphic design" />
        </picture>

       

      </div>

      <div className='Section3__Photo'>

        <div className='Section3__Photo--Text'>
          <h1 className='Section3__Photo--Text--Title'>Photography</h1>
          <p className='Section3__Photo--Text--Body'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>

        <picture className='Section3__Photo--Img'>
          <source className="Section3__Photo--Img" media="(max-width: 450px)" srcset="images/mobile/image-photography.jpg" alt="Photography" />
          <img className="Section3__Photo--Img" src="images/desktop/image-photography.jpg" alt="Photography" />
        </picture>

        
        
      </div>
    </section>
  )
}

export default Section3