import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from './constant';
import { addTrailerVideo } from './movieSlice';

const useGetMovieVideos = (id) => {
   const dispatch = useDispatch();


    //Fetch video trailer  from tmdb api with dynamic movie id which is first movie of now playing movies and store trailer key in redux
    
        const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US` , API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer" );
        // console.log(filterData);
        const trailer = filterData[0];
        dispatch(addTrailerVideo(trailer.key))
    }


    useEffect(()=>{
        getMovieVideos()
    },[]);
};



export default useGetMovieVideos;