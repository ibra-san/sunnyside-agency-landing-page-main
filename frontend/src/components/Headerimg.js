import React from 'react'

function Headerimg() {
  return (
    <picture >
        <source className="Headerimg" media="(max-width: 450px)" srcset="images/mobile/image-header.jpg" alt="An orange" />
        <img className="Headerimg" src="images/desktop/image-header.jpg" alt="An orange" />
    </picture>
  )
}

export default Headerimg