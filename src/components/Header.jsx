import React, {useState, useEffect} from 'react'
import Logo from '../assets/images/logo.svg'
import LogoWhite from '../assets/images/logo_white.svg';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');


    useEffect(() => {
        const theme = isDarkMode ? 'dark' : 'light';
        document.body.className = theme;
        localStorage.setItem('theme', theme);
      }, [isDarkMode]);
    
      const handleToggle = () => {
        setIsDarkMode((prevMode) => !prevMode);
      };

  return (
    <header>
        <div className="container">

            <a href="/" id="logo">
                <img src={isDarkMode ? LogoWhite : Logo} alt="Logo"/>
            </a>

            <nav id="main-menu" className="navbar">
                <a className="nav-link" href="#">Features</a>
            </nav>

            <nav id="contact-menu" className="navbar">
                <a className="nav-link" href="/contact">Contact</a>
            </nav>

            <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                <span className="label">Dark Mode</span>
                <label for="dark-mode-switch" className="toggle-switch">
                    <input 
                        id="dark-mode-switch" 
                        type="checkbox" 
                        checked={isDarkMode} 
                        onChange={handleToggle}
                        />
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