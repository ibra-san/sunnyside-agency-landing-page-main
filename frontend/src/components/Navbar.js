import React from 'react'
import LeftSide from "./Navbarcomponents/LeftSide"
import RightSide from "./Navbarcomponents/RightSide"


function Navbar() {
  return (
    <div className='Navbar' id='Navbar'>
        <LeftSide /> {/* This is left side of the navBar (TItle of the site) */}
        <RightSide /> {/* This is right side of the navBar (Menus) */}
    </div>
  )
}

export default Navbar