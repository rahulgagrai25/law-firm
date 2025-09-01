import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className="header">
        <div className="contact-container">
            <div className="left-logo">
                <a href=""><Image src="/social_icons/facebook.png" alt="" width={20} height={20} /></a>
                <a href=""><Image src="/social_icons/linkedin.png" alt="" width={20} height={20} /></a>
                <a href=""><Image src="/social_icons/twitter.png" alt="" width={20} height={20} /></a>
                <a href=""><Image src="/social_icons/instagram.png" alt="" width={20} height={20} /></a>
            </div>
            <div className="right-email">
                <p>+1 987-654-3210 |  Contact@Firm.co</p>
            </div>
        </div>
    </div>
  )
}

export default Header