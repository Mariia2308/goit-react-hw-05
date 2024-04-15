import { useState, useEffect } from "react";
import SearchBar from '../components/SearchBar/SearchBar';
import { fetchMovieSearch } from "../services/movies";
import MovieList from "../components/MovieDetail/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchMovies = async () => {
      const moviesData = await fetchMovieSearch(searchQuery);
      setMovies(moviesData);
    };
    fetchMovies();
  }, [searchQuery]);

  const onFormSubmit = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <SearchBar onSearch={onFormSubmit} />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
