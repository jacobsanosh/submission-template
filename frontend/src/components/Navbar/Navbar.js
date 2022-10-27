import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav class="Navbar__navbar">
      <div class="Navbar__container">
        <h1 class="Navbar__logo">Finanta</h1>
        <ul class="Navbar__ul">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
		    <li><a href="/login">Login</a></li> 
        </ul>
      </div>
    </nav>
  


  )
}

export default Navbar