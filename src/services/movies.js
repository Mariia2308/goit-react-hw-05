import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTA0NTRlNWIwN2U5YzU0MGM3ZjNjOGU4MzBlYzBmNCIsInN1YiI6IjY2MTUwNTQ3ZTEwZjQ2MDFhNDNhY2E3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hBEuD-D5arqbbSB4tHwFSHAEGsFfVCDz9NeWb3i5xpQ'
  }
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?`, options);
  console.log('1', response);
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?`, options);
   console.log('2', response);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits?`, options);
   console.log('3', response);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews?`, options);
   console.log('4', response);
  return response.data.results;
};

export const fetchMovieSearch = async (query) => {
  const response = await axios.get(`/search/movie?query=${query}`, options);
  return response.data.results;
};


