import React, { useEffect } from 'react'
import { API_KEY } from './constant';
import { addUpcomingMovies } from './movieSlice';
import { useDispatch } from 'react-redux';

const useUpcomingMovies = () => {

       const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
        const json = await data.json();
        console.log("upcoming movies is",json);
        dispatch(addUpcomingMovies(json?.results));
    };

      useEffect(()=> {
            getUpcomingMovies();
        },[]);
};
    

export default useUpcomingMovies;