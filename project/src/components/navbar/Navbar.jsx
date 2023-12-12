import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <h1><span style={{color:"red"}}>M</span><span style={{color:"green"}}>E</span><span style={{color:"blue"}}>S</span>O</h1>
        <input type="text" placeholder='Search Products'/>
        <p>Product</p>
        <p>Mens</p>
        <p>Child</p>
        <p>Contacts</p>
        <p>Users</p>
    </div>
  )
}

export default Navbar