import React from 'react'
import "./footer.css"
function Footer() {
    return (
        <footer>
            <div className='footertitle'>CYBERFORGE</div>
            
        <div className="container container-1">
        <div className="column">
        <p className='subtext'>123-456-7890</p>
        <p className='subtext'>info@mysite.com</p>
        </div>
        <div className="column">
        <p className='subtext'>Delhi, India</p>
        </div>
        <div className="column">
        <p></p>
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
