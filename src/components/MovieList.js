import React from 'react'
import MovieCard from './MovieCard';


const MovieList = ({title , movies}) => {

  // const movies = useSelector((store) => store?.movie?.nowPlayingMovies);

  return (
    <div className=' px-4 py-4 sm:px-6 sm:py-6 lg:px-10' >
        <h1 className='py-2 text-2xl font-semibold text-white sm:py-4 sm:text-3xl'> {title} </h1>
    <div className = "flex overflow-x-scroll scroll-smooth no-scrollbar" >
        <div className='flex gap-4'>
        {movies?.map((movie) => (
          <MovieCard key = {movie?.id} poster = {movie?.poster_path} />
          ))}
        </div>
    </div>
    </div>
  );
};

export default MovieList;