import React from 'react'
import lang from '../Utils/languageConstants'
import { useSelector } from 'react-redux'

const SearchBar = () => {
  const langKey = useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className=' w-1/2 bg-black grid grid-cols-12 rounded-md'>
        <input type='text' className='p-4 col-span-8 m-4 rounded-md' placeholder={lang[langKey].searchBarPlaceholder}></input>
        <button className='py-2 px-4 bg-red-700 col-span-4 m-4 text-white rounded-md'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default SearchBar