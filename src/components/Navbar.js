import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

export default function Navbar() {

  return (
    <div>
      <nav className='navbar navbar-expand-lg purple text-white'>
        <div className='container'>
          <a href="/" className='navbar-brand fs-2 fw-bold text-white'>
            Shaurya
          </a>
          <button
            className='navbar-toggler '
            style={{ backgroundColor: "white", color: "grey" }}
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto pt-2 mb-1 '>
              <li className='nav-item me-4'>
                <NavLink
                  to='/'
                  className='nav-link text-decoration-none fs-5 text-white fw-semibold'
                  aria-current='page'
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item me-4 '>
                <NavLink
                  to='/portfolio'
                  className='nav-link text-decoration-none fs-5 text-white fw-semibold'
                >
                  Portfolio
                </NavLink>
              </li>
              <li className='nav-item me-4'>
                <NavLink
                  to='/about'
                  className='nav-link text-decoration-none fs-5 text-white fw-semibold'
                >
                  About
                </NavLink>
              </li>
              <li className='nav-item me-4'>
                <NavLink
                  to='/skills'
                  className='nav-link text-decoration-none fs-5 text-white fw-semibold'
                >
                  Skills
                </NavLink>
              </li>
              <li className='nav-item me-4'>
                <NavLink
                  to='/certificate'
                  className='nav-link text-decoration-none fs-5 text-white fw-semibold'
                >
                  Certificates
                </NavLink>
              </li>
              <li className='nav-item me-4'>
                <NavLink
                  to='/contact'
                  className='nav-link text-decoration-none fs-5 text-white fw-semibold'
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
