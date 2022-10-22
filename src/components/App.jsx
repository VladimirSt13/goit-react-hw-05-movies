import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Layout from './Layout/Layout';

const MoviesHome = lazy(() => import('../pages/MoviesHome'));
const SearchMovies = lazy(() => import('../pages/SearchMovies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

// const createAsyncComponent = path => lazy(() => import(path));
// const MoviesHome = createAsyncComponent('../pages/MoviesHome');
// const SearchMovies = createAsyncComponent('../pages/SearchMovies');
// const MovieDetails = createAsyncComponent('../pages/MovieDetails');
// const Cast = createAsyncComponent('../Cast/Cast');
// const Reviews = createAsyncComponent('../Reviews/Reviews');

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MoviesHome />} />
          <Route path="movies" element={<SearchMovies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<div>There is nothing here</div>}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
