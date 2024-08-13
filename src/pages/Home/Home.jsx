import React from 'react'
import './Home.css'
import Nav from '../../components/Nav/Nav.jsx'
import hero from '../../assets/hero-banner.jpg'
import title from '../../assets/hero-title.png'
import play from '../../assets/play.png'
import info from '../../assets/info.png'
import TitleCards from '../../components/TitleCards/TitleCards.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <div className="hero">
        <img src={hero} alt="Hero banner" className='banner'/>
        <div className="hero-caption">
          <img src={title} alt="Hero title"  className='caption'/>
          <p>Geralt de Rivia, el legendario brujo cazador de monstruos, gravita inexorablemente hacia su destino en un mundo de tormentos y humanas traiciones.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play} alt="" />Play</button>
            <button className='btn dark-btn '><img src={info} alt="" />Mas información</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Los más buscados"} category={"top_rated"}/>
        <TitleCards title={"Solo en Netflix"} category={"popular"}/> 
        <TitleCards title={"Próximamente"} category={"upcoming"}/>
        <TitleCards title={"Tesoros para ti"} category={"now_playing"}/>
      </div>
      <Footer />
    </div> 
  )
} 

export default Home