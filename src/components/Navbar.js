import React from 'react'
import Logo from '../assets/logo.png'

function navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img scr={Logo} />
        </div>
        <div className='rightSide'></div>
    </div>
  )
}

export default navbar;
