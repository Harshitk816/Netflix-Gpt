import { API_OPTIONS } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { addUpcomingMovies } from '../Redux/Slices/moviesSlice'

const useUpcomingMovies=()=>{
    const dispatch = useDispatch();
const geUpcomingMovies = async()=>{
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?page=1',
    API_OPTIONS
  );
  const json = await data.json();
  dispatch(addUpcomingMovies(json.results));
 
};

useEffect(()=>{
  geUpcomingMovies();
},[])

}
export default useUpcomingMovies;
