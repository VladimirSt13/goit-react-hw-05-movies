// import { MoviesList } from '../components/ProductList';
import { useEffect, useState } from 'react';
import { getMoviesList } from '../api/fetchMovies';

export const MoviesHome = () => {
  const [moviesList, setMoviesList] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('useEfect');

    fetchData();
  }, []);

  const fetchData = async () => {
    // setIsLoading(true);
    try {
      const moviesList = await getMoviesList();
      setMoviesList(moviesList.results);
    } catch (error) {
      console.log('error :>> ', error);
      // setError(`No data in fetch moviesList ${error}`);
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div>
      <aside>
        <h1>Trending today</h1>
        <ul>
          {moviesList.map(movie => {
            console.log(movie, movie.id, movie.title);
            return <li key={movie.id}>{movie.title}</li>;
          })}
        </ul>
      </aside>
    </div>
  );
};

// moviesList.map(movie => console.log(movie))
// console.log(moviesList)
