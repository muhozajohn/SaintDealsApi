import React from 'react'
import Me from '../../assets/logo.png'
import './Nav.css'
import { Link } from 'react-router-dom'
import {FaTwitter, FaFacebookF} from 'react-icons/fa'
// import Header from './Header'


const Nav = () => {
  return (
    <>
    <nav>
        <div className="container navBar">
            <div className="navicon">
                <Link to="/"> <img src={Me} alt="" /></Link>
            </div>
            <ul>
                <Link to="/"> <li>Home</li>  </Link>
                <Link to="fashion"> <li>Fashion</li>  </Link>
                <Link to="/author"> <li>Author</li>  </Link>
                <Link to="/travel"> <li>Travel</li>  </Link>
            </ul>

            <div className="navSociols">
                <div className="sociolIcon">
                    <Link href='https://www.facebook.com/MJohn250'  target="_blank" className='navIcons'> <FaFacebookF /> </Link>
                    <Link href='https://twitter.com/John1_250' target="_blank" className='navIcons'> <FaTwitter /> </Link>
                </div>
                <div className="navLink">
                     <Link to="/login"><button className="btn">Login</button></Link>
                </div>
            </div>

        </div>
    </nav>
    
    {/* <Header /> */}
    </>
  )
}

export default Nav