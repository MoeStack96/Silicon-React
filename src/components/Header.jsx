import React from 'react'
import Logo from '../assets/images/logo.svg'

const Header = () => {
  return (
    <header>
        <div className="container">

            <a href="index.html" id="logo"><img src={Logo} alt="Logo"/></a>

            <nav id="main-menu" className="navbar">
                <a className="nav-link" href="#">Features</a>
            </nav>

            <nav id="contact-menu" className="navbar">
                <a className="nav-link" href="#">Contact</a>
            </nav>

            <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                <span className="label">Dark Mode</span>
                <label for="dark-mode-switch" className="toggle-switch">
                    <input id="dark-mode-switch" type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>

            <a href="#" id="auth-singin" className="btn-primary">
                <i className="fa-light fa-user"></i>
                <span>Sign in / up</span>             
            </a>

            <button className="btn-mobile">
                <i className="fa-light fa-bars"></i>
            </button>


        </div>
    </header>
  )
}

export default Header