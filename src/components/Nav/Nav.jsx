import React from 'react'
import Logo from '../../assets/logo.svg'
import './style.css'

export const Nav = () => {
  return (
    <nav className='nav-container'>
        <div className='div-nav-logo'>
            <img src={Logo} alt="Logo" />
        </div>
        <div className='div-nav-center'>
            <ul>
                <li>Series</li>
                <li>Peliculas</li>
            </ul>
        </div>
        <div className='div-nav-login'>
            <ul>
                <li>Filtro</li>
                <li>Login</li>
            </ul>
        </div>
    </nav>
  )
}
