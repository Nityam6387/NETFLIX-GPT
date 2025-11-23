import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);
  // console.log("now playing movies is",movies)
  if(!movies) return;
  const mainMovie = movies[0];
//   console.log(`main movie is ${mainMovie}`);
// console.log("main movie is" , mainMovie);

  const {original_title , overview , id} = mainMovie;

  return (
    <div>
        <VideoTitle title = {original_title}  overview = {overview}/>
        <VideoBackground id = {id}/>
    </div>
  )
}

export default MainContainer;