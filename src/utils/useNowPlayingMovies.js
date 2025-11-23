import React, { useEffect } from 'react';
import { API_KEY } from './constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from './movieSlice';

const useNowPlayingMovies = () => {
 
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
    const json = await data.json();
    // console.log("tmdb data is",json.results);
    dispatch(addNowPlayingMovies(json.results));
    };

   useEffect(() => {
       getNowPlayingMovies();
   } , [])
   

}

export default useNowPlayingMovies;