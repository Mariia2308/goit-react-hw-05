import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../services/movies';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import css from '../components/MovieDetail/MovieDetail.module.css';
import OneMovieHolder from '../components/MovieDetail/OneMovieHolder';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Change error state to null

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        const movieDetailsResponse = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetailsResponse);
      } catch (error) {
        setError(error.message); // Set specific error message
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [movieId]);

  const backLinkHref = location.state ? location.state.from : '/';

  return (
    <div>
      <NavLink className={css.link} to={backLinkHref}>
      <button>Go Back</button>
      </NavLink>
      {loading && <Loader />}
      {error && <Error message={error} />} 
      {movieDetails && <OneMovieHolder movieDetails={movieDetails} />}
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
