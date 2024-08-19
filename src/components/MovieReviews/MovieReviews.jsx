import { fetchMovieReviews } from "../../services/movies";
import { useEffect, useState } from "react";
import css from '../MovieDetail/MovieDetail.module.css';
import { useParams } from "react-router-dom";

function MovieReviews() {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const movieReviewResponse = await fetchMovieReviews(movieId);
      setMovieReview(movieReviewResponse);
    }

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <h2 className={css.title}>Reviews</h2>
      <ul>
        {movieReview !== null &&
          movieReview.map(( {id, author, content} ) => (
            <li key={id}>
                <h3 className={css.author}>{author}</h3>
                <p className={css.text}>{content}</p>
              
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MovieReviews;
