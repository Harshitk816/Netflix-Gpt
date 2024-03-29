import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from './constants';
import { addTrailerVideo } from './moviesSlice';


const useMovieTrailer = (movieId) => {
    const dispatch =useDispatch();
    const getMoviesVideos=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'movie_id/videos?language=en-US',API_OPTIONS);
        const json = await data.json();
        const filterTrailers = json.results.filter((video)=>video.type=="Trailer")
        const trailer = filterTrailers.length? filterTrailers[0]: json.results[0];
         // if no trailer video, then play any from the list

        dispatch(addTrailerVideo(trailer));
    };

    useEffect(()=>{
        getMoviesVideos();
    },[]);
    
}

export default useMovieTrailer