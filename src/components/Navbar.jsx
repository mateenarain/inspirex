import React, { useRef, useState } from 'react';
import "../componentscss/Navbar.css";
import { Link } from 'react-router-dom';
import Ithover from '../components/Ithover';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navbarCollapseRef = useRef(null);
  const navbarTogglerRef = useRef(null); // Ref for the toggler button

  const handleClick = () => {
    if (navbarTogglerRef.current) {
      // Check if the navbar is expanded
      const isExpanded = navbarTogglerRef.current.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        // Simulate click to collapse the navbar
        navbarTogglerRef.current.click();
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img className='logo_navbar' src='/images/aibridgelogo.png' alt='logo' />
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            ref={navbarTogglerRef} // Assign ref to the toggler button
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         
          <div 
            className="collapse navbar-collapse" 
            id="navbarSupportedContent" 
            ref={navbarCollapseRef}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-4 py-3">
                <Link to="/" className="nav-link iamnav" aria-current="page" onClick={handleClick}>Home</Link>
              </li>
              <li className="nav-item px-4 py-3">
                <Link to="/about" className="nav-link iamnav" aria-current="page" onClick={handleClick}>About Us</Link>
              </li>

              <li 
                className="nav-item dropdown px-4 py-3"
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
              >
                <span className="nav-link iamnav">IT Services</span>
                {isHovered && (
                  <div className="overlay">
                    <Ithover />
                  </div>
                )}
              </li>
           
              <li className="nav-item px-1 py-3">
                <Link to='/contact'>
                  <button 
                    className={`navbar_buttonforcontact ${isHovered ? 'contact-hovered' : ''}`} 
                    onClick={handleClick}
                  >
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
