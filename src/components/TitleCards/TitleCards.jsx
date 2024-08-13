import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/CardsData.js'


const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY1ZDA5NzRmOTBhNDVlNzA3Mzk0NTMxYTVmMGIwNyIsIm5iZiI6MTcyMzU3MTY0OS44NzEzNDYsInN1YiI6IjY2YmI5Y2NjNGE2YjQ2OGYxYzBhYmYwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XESSZLPvfGb386mdrZ4-8Jhyna7p757fJqIi_eTB6tE'
    }
  };
  

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='titleCards'>
      <h2>{title?title:"Populares en Netflix"}</h2>
      <div className="cardList" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="Carta" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards