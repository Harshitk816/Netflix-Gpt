import { API_OPTIONS } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { addPopularMovies } from '../Redux/Slices/moviesSlice'

const usePopularMovies=()=>{
    const dispatch = useDispatch();
const getPopularMovies = async()=>{
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/popular?page=1',
    API_OPTIONS
  );
  const json = await data.json();
  dispatch(addPopularMovies(json.results));
  console.log(json)
};

useEffect(()=>{
  getPopularMovies();
},[])

}
export default usePopularMovies;
