import React from 'react'
import LeftSide from "./Navbarcomponents/LeftSide"
import RightSide from "./Navbarcomponents/RightSide"


function Navbar() {
  return (
    <div className='Navbar' id='Navbar'>
        <LeftSide />
        <RightSide />

    </div>
  )
}

export default Navbar