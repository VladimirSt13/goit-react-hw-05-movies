// import { MoviesList } from '../components/ProductList';
import { useEffect, useState } from 'react';
import { getMoviesList } from '../api/fetchMovies';
import { MoviesList } from './../MovieList/MoviesList';

export const MoviesHome = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('useEfect');

    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const moviesList = await getMoviesList();
      setMoviesList(moviesList.results);
    } catch (error) {
      console.log('error :>> ', error);
      setError(`No data in fetch moviesList ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isLoading ? (
        <MoviesList moviesList={moviesList} />
      ) : (
        <div>Loading ...</div>
      )}
      {error && <div>Try again later</div>}
    </>
  );
};

// moviesList.map(movie => console.log(movie))
// console.log(moviesList)
