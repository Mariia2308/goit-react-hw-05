import { Link, useLocation } from 'react-router-dom';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div>
      {movies.length > 0 && (
        <ul>
          {movies && movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={location} rel="noreferrer noopener">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
