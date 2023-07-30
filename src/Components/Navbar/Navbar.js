import React from 'react'
import {Link} from 'react-router-dom'
 import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navcontent'>
     
      <ul>
       <Link to='/'><li>Home</li></Link>
       <Link to='/Menu'><li>Menu</li></Link>
       <Link to='/Banquetfacility'><li>Banquetfacility</li></Link> 
       <Link to='/Gallery'><li>Gallery</li></Link>
       <Link to='/Cattering'><li>CATTERING</li></Link>
       <Link to='/Contact Us'><li>Contact Us</li></Link>
       <li><button className='navbtn'> BOOK A BANQUET</button></li>
      </ul>
  
    </div>
  )
}

export default Navbar
