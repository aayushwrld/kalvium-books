import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <Link to={'/'} style={{textDecoration:"None", color:'black'}}>
        <div className='logo'>
            <img src=".\src\assets\Kalvium-Logo.png" alt="" id='kalvium-logo'/>
            <span id='logo-2'>Books</span>
        </div>
        </Link>
        <div className="search-area">
            <input type="text" placeholder='Search for Books' className='search-input' />
        </div>
        <div className='register-btn'>
            <Link to={'/register'} style={{textDecoration:"None"}}>
            <button id='register'>
                <img src=".\src\assets\register-btn.png" alt="" id='img-register'/>
                <span id='text-register'>Register</span>
            </button>
            </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar

