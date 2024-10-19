import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { BsChatRight, BsTwitterX } from "react-icons/bs";


import "./footer.css"
function Footer() {
    return (
        <footer>
            <div className='footertitle'>CYBERFORGE</div>
            
        <div className="container container-1">
        <div className="column">
        <p className='subtext'>+91 8700016426</p>
        <p className='subtext'>cyberforge1001@gmail.com</p>
        </div>
        <div className="column">
        <p className='subtext'>Delhi, India</p>
        </div>
        <div className="column">
        <div className='footerlinks'><a className='links' style={{paddingRight:"50px"}} href="https://www.instagram.com/cyberforge/"><FaInstagram /></a><a className='links' href="https://x.com/CyberForgeS"><BsTwitterX /></a></div>
        </div>
        </div>
        <h1></h1>

        <div className='newstitle'>Join Our Newsletter</div>
        <div className="subscribe-container ">
        <form id="subscribeForm" onsubmit="return showThankYouMessage();">
        <label for="email" className='subtext'>Your email :</label>
        <input type="email" id="footer-email" name="email" required />
        <button type="submit" className='subbtn subtext'>Subscribe</button>
        </form>
        {/* <p id="thankYouMessage" >Thank you for subscribing!</p> */}
        </div>

        </footer>
    )
}

export default Footer
