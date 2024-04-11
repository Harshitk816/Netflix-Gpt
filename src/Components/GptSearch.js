import React from 'react'
import SearchBar from './SearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND } from '../Utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
      <img src={BACKGROUND} alt="background"/>
      </div>
      <SearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch