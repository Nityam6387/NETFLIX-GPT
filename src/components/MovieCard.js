import React from 'react'
import { POSTER_CDN } from '../utils/constant.js';

const MovieCard = ({poster}) => {

    //  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);
    //  console.log("debugg MovieCard",movies);

    //  const posterImg = movies?.[0]?.poster_path;
    //  console.log("poster is" , posterImg);

   return (
    <div className='w-28 flex-shrink-0 sm:w-32 md:w-40 lg:w-48'>
         <img className='h-full w-full rounded-md object-cover shadow-lg' src={POSTER_CDN + poster} alt="movie poster"></img>
    </div>
  )
}

export default MovieCard;