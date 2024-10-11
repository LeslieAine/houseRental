import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="ms-header navbar-white">
        <nav className="ms-nav">
          <div className="ms-logo">
            <Link href="/" data-type="page-transition">
              <div className="logo-dark"><img src="images/logo-dark.svg" alt="logo image" /></div>
              <div className="logo-light current"><img src="images/logo-light.svg" alt="logo image" /></div>
            </Link>
          </div>
          <button className="hamburger" type="button" data-toggle="navigation">
          <span className="hamburger-box">
            <span className="hamburger-label">menu</span>
            <span className="hamburger-inner"></span>
          </span>
          </button>
          <div className="height-full-viewport">
            <ul className="ms-navbar">
              <li className="nav-item">
                <Link href="/" data-type="page-transition">
                  <span className="ms-btn">home</span>
                  <span className="nav-item__label">Back to home page</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/gallery" data-type="page-transition">
                  <span className="ms-btn">gallery</span>
                  <span className="nav-item__label">Interactively disintermediate</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" data-type="page-transition">
                  <span className="ms-btn">about</span>
                  <span className="nav-item__label">Learn more about the property</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" data-type="page-transition">
                  <span className="ms-btn">contact</span>
                  <span className="nav-item__label">Get in touch and find casa lulu</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  )
}

export default Header