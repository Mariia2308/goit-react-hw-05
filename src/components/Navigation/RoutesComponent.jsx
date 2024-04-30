import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from '../Loader/Loader';

import '../../App.css';


const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviePage = lazy(() => import('../../pages/MoviePage'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const MovieReviews = lazy(() => import('../../components/MovieDetail/MovieReviews'));
const MovieCast = lazy(() => import('../../components/MovieDetail/MovieCast'));

const RoutesComponent = () => {
  return (
    <main >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviePage />} />
          <Route path='/movies/:movieId/*' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default RoutesComponent;






