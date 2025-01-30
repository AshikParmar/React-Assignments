import React from 'react'
import './Header.css'
import { NavLink } from 'react-router'

const Header = () => {
  return (
        <nav className="navbar">
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/todo" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Todo
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/quote" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Quote
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/temperature" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Temperature
              </NavLink>
            </li>
            
          </ul>
        </nav>
  )
}

export default Header
