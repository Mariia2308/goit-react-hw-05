import { useState, useEffect } from "react";
import { fetchMovieCast } from "../../services/movies";
import css from './MovieDetail.module.css';
import { useParams } from "react-router-dom";

function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const movieCastResponse = await fetchMovieCast(movieId);
      setMovieCast(movieCastResponse);
    }

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      
      {movieCast && (
        <ul className={css["cast-list"]}>
          {movieCast.map(({ name, id, profile_path, character }) => (
            <li key={id}>
              <div className={css.card}>
                <img className={css.img} src={profile_path ? `https://image.tmdb.org/t/p/w200//${profile_path}` : ''} alt={name} />
                <h4 className={css.name}>{name}</h4>
                <p className={css.character}>
                  <span className={css["character-title"]}>Character: </span>
                  {character}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MovieCast;
