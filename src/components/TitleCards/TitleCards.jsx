import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/CardsData.js'


const TitleCards = ({title, category}) => {

  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='titleCards'>
      <h2>{title?title:"Populares en Netflix"}</h2>
      <div className="cardList" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="Carta" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards