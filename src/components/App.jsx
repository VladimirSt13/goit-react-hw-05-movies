import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { MoviesHome } from './pages/MoviesHome';
import { SearchMovies } from './pages/SearchMovies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MoviesHome />} />
          <Route path="/:movieId" element={<div>MovieDetails</div>} />
          <Route path="movies" element={<SearchMovies />} />

          <Route path="*" element={<div>There is nothing here</div>}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
