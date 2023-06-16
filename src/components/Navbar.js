import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  return (
    <div>
      <nav class='navbar navbar-expand-lg purple text-white'>
        <div class='container'>
          <Link to='/' class='navbar-brand fs-2 fw-bold text-white'>
            Shaurya
          </Link>
          <button
            class='navbar-toggler '
            style={{ backgroundColor: "white", color: "grey" }}
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNav'>
            <ul class='navbar-nav ms-auto pt-2 mb-1 '>
              <li class='nav-item me-4'>
                <Link
                  to='/'
                  class='nav-link text-white fs-5 fw-semibold active'
                  aria-current='page'
                >
                  Home
                </Link>
              </li>
              <li class='nav-item me-4 '>
                <Link
                  to='/portfolio'
                  class='nav-link text-white fs-5 fw-semibold'
                >
                  Portfolio
                </Link>
              </li>
              <li class='nav-item me-4'>
                <Link to='/about' class='nav-link text-white fs-5 fw-semibold'>
                  About
                </Link>
              </li>
              <li class='nav-item me-4'>
                <Link to='/skills' class='nav-link text-white fs-5 fw-semibold'>
                  Skills
                </Link>
              </li>
              <li class='nav-item me-4'>
                <Link
                  to='/certificate'
                  class='nav-link text-white fs-5 fw-semibold'
                >
                  Certificates
                </Link>
              </li>
              <li class='nav-item me-4'>
                <Link
                  to='/contact'
                  class='nav-link text-white fs-5 fw-semibold'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
