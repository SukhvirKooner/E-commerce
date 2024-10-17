import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png"
import { CiLogin, CiLogout } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
const Navbar = () =>{
    return(
      <body>
        
      <nav className="navbar  navbar-expand-lg navbar-dark  ">
            <div> <img className="company-logo" src={logo} alt="logo" />
            <a className="navbar-brand company-name "  href="\">CYBERFORGE</a></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01  " aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ms-auto nav-items">
                <li >
                        <a className="nav-link navstyle" styles="color:white;" href="\">Home</a>
                    </li>
                    <li >
                        <a className="nav-link navstyle" href="\custom">Custom PC</a>
                    </li>
                    <li >
                        <a className="nav-link navstyle" href="\shop">Shop</a>
                    </li>
                    <li >
                        <a className="nav-link navstyle cart" href="\cart"><PiShoppingCartThin /></a>
                    </li>
                    <li >
                        {localStorage.getItem('auth-token')?<a onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} className="nav-link navstyle login" href="\signup"><CiLogout/></a>:<a  className="nav-link navstyle login" href="\signup"><CiLogin/></a>}
                    </li>
                    
                </ul>
            </div>
        </nav>
      
  </body> 
    )
}
export default Navbar;




