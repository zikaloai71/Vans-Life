import React from 'react'
import { NavLink } from 'react-router-dom'
import './shared.css'
import logo from '../../assets/logo.png'
export default function Navbar() {
  return (
    <nav>
        <ul className='navWrapper'>
            <li>
                <NavLink to="/" exact>   
                <img className='navLogo' src={logo} alt="" /></NavLink>
            </li>
            <div className='navAside'>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/vans">Vans</NavLink>
            </li>
            </div>
        </ul>
    </nav>
  )
}
