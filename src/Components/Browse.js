
import useNowPlayingMovies from '../Utils/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
  useNowPlayingMovies()
 
  return (
    <div>
      <Header/>
      {/* 
      -MainContainer
        -VideoBackground
        -Video Title
      
      -MovieList*N
        -cards*N

       */}
       <MainContainer/>
       <SecondaryContainer/>
      
    </div>
  )
}

export default Browse