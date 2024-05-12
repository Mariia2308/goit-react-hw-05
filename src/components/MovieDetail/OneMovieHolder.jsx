import css from './MovieDetail.module.css';
import { Link } from 'react-router-dom';
//import MovieReviews from './MovieReviews';



function OneMovieHolder({ movieDetails }) {
  
  return (
    <div>
      {movieDetails && (
        <div key={movieDetails.id} className={css.card}>
          <h2 className={css.title}>{movieDetails.title}</h2>
          <img
            className={css.img}
            src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}` : ''}
            alt={movieDetails.original_title}
          />
          <p className={css.overview}>{movieDetails.overview}</p>
          <p className={css.genres}>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
          <div className={css.links}>
            <Link className={css.link} to="cast">
              Cast
            </Link>
            <Link className={css.link} to="reviews">
              Review
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}

export default OneMovieHolder;
