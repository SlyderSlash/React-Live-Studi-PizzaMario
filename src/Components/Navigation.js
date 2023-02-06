import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.svg';

const Navigation = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg '>
        <div className='container-fluid'>
          <img src={logo} className='App-logo' alt='logo' />
          <NavLink className='navbar-brand' to='/'>
            React
          </NavLink>
          <button
            className='navbar-toggler bg-secondary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item me-0 me-lg-2'>
                <NavLink
                  className={(nav) =>
                    nav.isActive ? 'nav-link active' : 'nav-link'
                  }
                  aria-current='page'
                  to='/'
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item me-0 me-lg-2'>
                <NavLink
                  className="nav-link {(nav) => (nav.isActive ? 'nav-active' : '')}"
                  aria-current='page'
                  to='/listing-articles'
                >
                  Listing Pizza
                </NavLink>
              </li>
              <li className='nav-item me-0 me-lg-2'>
                <NavLink
                  className="nav-link {(nav) => (nav.isActive ? 'nav-active' : '')}"
                  to='/counter'
                >
                  Counter
                </NavLink>
              </li>
              <li className='nav-item me-0 me-lg-2'>
                <NavLink
                  className="nav-link {(nav) => (nav.isActive ? 'nav-active' : '')}"
                  to='/api-advice'
                >
                  Api advice
                </NavLink>
              </li>
              <li className='nav-item me-0 me-lg-2'>
                <NavLink
                  className="nav-link {(nav) => (nav.isActive ? 'nav-active' : '')}"
                  to='/api-gouv'
                >
                  Api gouv.fr
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
