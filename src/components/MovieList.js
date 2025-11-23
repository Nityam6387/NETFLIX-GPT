import React from 'react'
import MovieCard from './MovieCard';


const MovieList = ({title , movies}) => {

  // const movies = useSelector((store) => store?.movie?.nowPlayingMovies);

  return (
    <div className='px-6' >
        <h1 className='text-white py-4 text-3xl'> {title} </h1>
    <div className = "flex overflow-x-scroll no-scrollbar scroll-smooth" >
        <div className='flex'>
        {movies?.map((movie) => (
          <MovieCard key = {movie?.id} poster = {movie?.poster_path} />
          ))}
        </div>
    </div>
    </div>
  );
};

export default MovieList;