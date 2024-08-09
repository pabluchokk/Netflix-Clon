import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <ul>
        <li>Audio descriptivo</li>
        <li>Centro de ayuda</li>
        <li>Tarjetas de regalo</li>
        <li>Prensa</li>
        <li>Relaciones con inversionistas</li>
        <li>Empleo</li>
        <li>Términos de uso</li>
        <li>Privacidad</li>
        <li>Avisos legales</li>
        <li>Preferencias de cookies</li>
        <li>Información corporativa</li>
        <li>Contáctanos</li>
      </ul>
      <p className='copyright'>© 1997-2024 Netflix, Inc. </p>
    </div>
  )
}

export default Footer