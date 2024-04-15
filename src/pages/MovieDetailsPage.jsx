
import { useState, useEffect } from 'react'
import { fetchMovieDetails } from '../services/movies'
import { useParams, Outlet } from 'react-router-dom';
import OneMovieHolder from '../components/MovieDetail/OneMovieHolder';

function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    useEffect(() => {
    async function fetchMovie() {
      const movieDetailsResponse = await fetchMovieDetails(movieId);
			setMovieDetails(movieDetailsResponse);
    }

    fetchMovie();
  }, [movieId]);
  return (
      <div>
      <OneMovieHolder movieDetails={movieDetails} />
      <Outlet />
      
    </div>
  )
}

export default MovieDetailsPage
