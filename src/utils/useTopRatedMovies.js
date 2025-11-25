import React, { useEffect } from 'react';
import { API_KEY } from './constant';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from './movieSlice';

const useTopRatedMovies = () => {
 
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
    const json = await data.json();
    console.log("top rated is", json);
    // console.log("tmdb data is",json.results);
    dispatch(addTopRatedMovies(json.results));
    };

   useEffect(() => {
       getTopRatedMovies();
   } , [])
   

}

export default useTopRatedMovies;