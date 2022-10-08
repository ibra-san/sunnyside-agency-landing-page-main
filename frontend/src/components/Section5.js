import React from 'react'

function Section5() {
  return (
    <div className='Section5'>
        <picture className='Section5__Gallery'>
          <source className="Section5__Gallery--Img" media="(max-width: 450px)" srcset="images/mobile/image-gallery-milkbottles.jpg" alt="Gallery milkbottles " />
          <img className="Section5__Gallery--Img" src="images/desktop/image-gallery-milkbottles.jpg" alt="graphic design" />
        </picture>

        <picture className='Section5__Gallery'>
          <source className="Section5__Gallery--Img" media="(max-width: 450px)" srcset="images/mobile/image-gallery-orange.jpg" alt="Gallery Oranges " />
          <img className="Section5__Gallery--Img" src="images/desktop/image-gallery-orange.jpg" alt="graphic design" />
        </picture>

        <picture className='Section5__Gallery'>
          <source className="Section5__Gallery--Img" media="(max-width: 450px)" srcset="images/mobile/image-gallery-cone.jpg" alt="Gallery cone " />
          <img className="Section5__Gallery--Img" src="images/desktop/image-gallery-cone.jpg" alt="graphic design" />
        </picture>

        <picture className='Section5__Gallery'>
          <source className="Section5__Gallery--Img" media="(max-width: 450px)" srcset="images/mobile/image-gallery-sugar-cubes.jpg" alt="Gallery sugar cubes " />
          <img className="Section5__Gallery--Img" src="images/desktop/image-gallery-sugarcubes.jpg" alt="graphic design" />
        </picture>

    </div>
  )
}

export default Section5