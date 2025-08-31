import React from 'react'

function Header() {
  return (
    <div className="header">
        <div className="contact-container">
            <div className="left-logo">
                <a href=""><img src="social_icons/facebook.png" alt="" /></a>
                <a href=""><img src="social_icons/linkedin.png" alt="" /></a>
                <a href=""><img src="social_icons/twitter.png" alt="" /></a>
                <a href=""><img src="social_icons/instagram.png" alt="" /></a>
            </div>
            <div className="right-email">
                <p>+1 987-654-3210 |  Contact@Firm.co</p>
            </div>
        </div>
    </div>
  )
}

export default Header
