import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import NotFound from './pages/NotFound';
import MovieDetailsPage from './pages/MovieDetailsPage';

import MovieCast from './components/MovieDetail/MovieCast';
import MovieReviews from './components/MovieDetail/MovieReviews';

function App() {
  return (
    <>
      <div>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviePage />} />
          <Route path='/movies/:movieId/*' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
