import React from 'react'
import { POSTER_CDN } from '../utils/constant';

const MovieCard = ({poster}) => {

    //  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);
    //  console.log("debugg MovieCard",movies);

    //  const posterImg = movies?.[0]?.poster_path;
    //  console.log("poster is" , posterImg);

   return (
    <div className='w-48 pr-4' >
         <img src={POSTER_CDN + poster}></img>
    </div>
  )
}

export default MovieCard;