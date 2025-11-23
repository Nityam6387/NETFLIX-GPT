import React, { useEffect } from 'react'
import { API_KEY } from './constant';
import { addPopularMovies } from './movieSlice';
import { useDispatch } from 'react-redux';

const usePopularMovies = () => {

       const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        const json = await data.json();
        console.log("popular movies is",json);
        dispatch(addPopularMovies(json?.results));
    };

      useEffect(()=> {
            getPopularMovies();
        },[]);
};
    

export default usePopularMovies;