import { useState, useEffect } from "react";
import SearchBar from '../components/SearchBar/SearchBar';
import { fetchMovieSearch } from "../services/movies";
import MovieList from "../components/MovieDetail/MovieList";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import Empty from "../components/Empty/Empty";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorName, setErrorName] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchMovies = async () => {
      try {
        setIsEmpty(false);
        setIsLoading(true);
        setIsError(false);
        
        const results = await fetchMovieSearch(searchQuery);
        console.log('Movies Data:', results); // Log the response data for inspection

        if (Array.isArray(results)) {
          if (results.length === 0) {
            setIsEmpty(true);
            setMovies([]); // Ensure movies state is cleared when empty
          } else {
            setMovies(results); // Set the array of movies
          }
        } else {
          // Handle unexpected response structure
          setIsError(true);
          setErrorName("Unexpected response structure.");
        }
      } catch (error) {
        // Catch and handle errors during fetching
        setIsError(true);
        setErrorName(error.message || 'An error occurred while fetching movies.');
      } finally {
        // Set loading to false once fetching is complete
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const onFormSubmit = (query) => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchBar onSearch={onFormSubmit} />
      {isError && <Error errorName={errorName} />}
      {isLoading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
      {isEmpty && <Empty />}
    </>
  );
};

export default MoviesPage;
