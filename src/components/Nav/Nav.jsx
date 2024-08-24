import React, { useEffect, useRef } from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search-icon.svg'
import bellIcon from '../../assets/bell.svg'
import avatar from '../../assets/avatar.png'
import caret from '../../assets/caret.png'
import { logout } from '../../firebase.js'


const Nav = () => {

    const navRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= 80){
                navRef.current.classList.add('navDark')
            } else {
                navRef.current.classList.remove('navDark')
            }
        })
    },[])

    return (
        <div ref={navRef} className='nav'>
            <div className="nav-left">
                <img src={logo} alt='Netflix logo'/>
                <ul>
                    <li>Home</li>
                    <li>Series</li>
                    <li>Películas</li>
                    <li>Novedades populares</li>
                    <li>Mi lista</li>
                    <li>Explora por idiomas</li>
                </ul>
            </div >
            <div className="nav-right">
                <img src={searchIcon} className='icons'/>
                <p>Niños</p>
                <img src={bellIcon} className='icons'/>
                <div className="nav-profile">
                    <img src={avatar} className='profile'/>
                    <img src={caret}  className='drop'/>
                    <div className="dropdown">
                        <p onClick={() => {logout()}}>Cerrar sesión en Nétflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav