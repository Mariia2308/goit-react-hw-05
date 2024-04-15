import MovieList from '../components/MovieDetail/MovieList';
import{fetchTrendingMovies} from '../services/movies'
import {useState, useEffect } from 'react'
function Home() {
  const [movie, setMovie] = useState([])
    useEffect(() => {
    async function fetchMovie() {
      const movieResponse = await fetchTrendingMovies();
			setMovie(movieResponse);
    }

    fetchMovie();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movie} />
      
    </div>
  )
}

export default Home
