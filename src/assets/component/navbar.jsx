import React, { useState } from 'react';
import './index.css';

function Navbar() {
    // State for dark mode toggle
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="container">
                <div className="flexbox">
                    <div className="logo">
                        <img src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/logo/logo_1.png" alt="logo" />
                    </div>
                    <ul className="navbar_text">
                        <li>Demos<i className="fa-solid fa-angle-down"></i></li>
                        <li>Pages<i className="fa-solid fa-angle-down"></i></li>
                        <li>Courses<i className="fa-solid fa-angle-down"></i></li>
                        <li>Dashboard<i className="fa-solid fa-angle-down"></i></li>
                        <li>eCommerce<i className="fa-solid fa-angle-down"></i></li>
                    </ul>
                    <div className="navbar_rightpart">
                        <div><i className="fa-solid fa-cart-shopping"></i></div>
                        <div className="contact"><i className="fa-solid fa-user-large"></i></div>
                        {/* Dark Mode Toggle Button */}
                        <div className="contact" onClick={toggleDarkMode}>
                            <i className={`fa-regular ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
                        </div>
                        <button className="btn">Get Started</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
