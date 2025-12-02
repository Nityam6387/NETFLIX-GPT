import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

    const movies = useSelector((store) => store?.movie);

  return (
    <div className='bg-black pb-10'>
      <div className='relative px-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10'>    
      <MovieList title = {"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title = {"Popular"} movies={movies.popularMovies}/>
      <MovieList title = {"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title = {"Upcoming"} movies={movies.upcomingMovies}/>
      <MovieList title = {"Trending"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;