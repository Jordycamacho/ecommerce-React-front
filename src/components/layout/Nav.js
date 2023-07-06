import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Button } from './Button'
import { LogoutButton } from './Logout'
import { Profile } from './Profile'
import { useAuth0 } from '@auth0/auth0-react'

export const Nav = () => {
  const [click, setClick] = useState(false);
  const { isAuthenticated } = useAuth0();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to="/" className="navbar-logo animated jackInTheBox">Caiser West</Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>


        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <NavLink to="/Home" className="nav-links" onClick={closeMobileMenu}>Inicio</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to="/Products" className="nav-links" onClick={closeMobileMenu}>Productos <i className='fas fa-caret-down' /></NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to="/Blog" className="nav-links" onClick={closeMobileMenu}>Blog</NavLink>
          </li>

        </ul>
        {isAuthenticated ? <> <Profile /><LogoutButton /> </> : <Button />}
      </nav>
    </>
  )
}
