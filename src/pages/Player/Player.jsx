import React, { useEffect, useState } from 'react'
import './Player.css'
import back from '../../assets/back.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY1ZDA5NzRmOTBhNDVlNzA3Mzk0NTMxYTVmMGIwNyIsIm5iZiI6MTcyMzU3MTY0OS44NzEzNDYsInN1YiI6IjY2YmI5Y2NjNGE2YjQ2OGYxYzBhYmYwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XESSZLPvfGb386mdrZ4-8Jhyna7p757fJqIi_eTB6tE'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  
  return (
    <div className='player'>
        <img src={back} alt="" onClick={()=>{navigate(-2)}}/>
        <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder="0" allowFullScreen></iframe>
        <div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player