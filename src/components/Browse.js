import { useEffect } from "react";
import Header from "./Header";
import { API_KEY } from "../utils/constant"
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/usePopularMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";
const Browse = () => {

//     const dispatch = useDispatch();

//     const getNowPlayingMovies = async () => {
//     const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
//     const json = await data.json();
//     console.log("tmdb data is",json);
//     dispatch(addNowPlayingMovies(json.result));
//     };

//    useEffect(() => {
//        getNowPlayingMovies();
//    } , [])
  
  useNowPlayingMovies(); //we use custom hooks for above commented logic which is use for fetch the movie list from tmdb url and dispatch it in movieSlice.
  usePopularMovies(); 
  useUpcomingMovies();

    return (
        <div> 
            <Header/>
            <MainContainer/>
            <div>
               <SecondaryContainer/>
            </div>
        </div>
    );
};

export default Browse;