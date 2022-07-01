import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <img  src="../manager-2.png" alt="" width="40" height="40" className="d-inline-block align-text-top bg-light" style={{borderRadius:"30px"}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " exact to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " exact to="/Contact">Contact</NavLink>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}
