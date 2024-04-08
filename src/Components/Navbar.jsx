import React from 'react'
import {HashLink} from 'react-router-hash-link'
function Navbar() {
  return (
    <>
      <nav id="nav">
        <h1 className='Logo'>Vishal</h1>
        <main className='nav-main'>
            <HashLink className='link' to={"/#nav"}>Home</HashLink>
            <HashLink className='link' to={"/#about"}>About</HashLink>
            <HashLink className='link' to={"/#brands"}>Brands</HashLink>
            <HashLink className='link' to={"/services"}>Services</HashLink>
            <HashLink className='link' to={"#contact"}>Contact Us</HashLink>
        </main>
      </nav>
    </>
  )
}

export default Navbar
