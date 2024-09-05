import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
function Navbar() {
    return (
        
        <body>
        
        <nav className="navbar  navbar-expand-lg navbar-dark  ">
              <div> <img className="company-logo" src={logo} alt="logo" />
              <a className="navbar-brand company-name "  href="\">CYBERFORGE</a></div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01  " aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <ul class="navbar-nav ms-auto nav-items">
                  <li >
                          <a className="nav-link navstyle" styles="color:white;" href="\">Home</a>
                  </li>
                      
                      
                  </ul>
              </div>
          </nav>
        
    </body>

    
    )
}

export default Navbar
