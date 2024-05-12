import { useState, useEffect, useRef } from 'react';
import { fetchMovieDetails } from '../services/movies';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import OneMovieHolder from '../components/MovieDetail/OneMovieHolder';



function MovieDetailsPage() {

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const backLinkURLRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        const movieDetailsResponse = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetailsResponse);
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [movieId]);



  return (
    <div>
      <Link to={backLinkURLRef.current}><button>Go back</button></Link>
      {loading && <Loader />}
      {error && <Error message={error} />} 
      {movieDetails && <OneMovieHolder movieDetails={movieDetails} />}
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
