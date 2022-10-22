import { useEffect, useState } from 'react';
import { getMoviesList } from '../components/api/fetchMovies';
import { Wrapper } from '../components/common/Wrapper';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { Loading } from 'components/common/Loading';
import { Error } from 'components/common/Error';

const MoviesHome = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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

    fetchData();
  }, []);

  return (
    <Wrapper>
      {!isLoading ? (
        <MoviesList title="Trending today" moviesList={moviesList} />
      ) : (
        <Loading />
      )}
      {error && <Error />}
    </Wrapper>
  );
};

export default MoviesHome;
