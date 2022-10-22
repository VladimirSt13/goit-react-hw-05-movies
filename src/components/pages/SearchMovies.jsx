import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox.';
import { getMovieByQuery } from '../api/fetchMovies';
import { Wrapper } from '../common/Wrapper';
import { MoviesList } from './../MoviesList/MoviesList';
import { Loading } from 'components/common/Loading';
import { Error } from 'components/common/Error';

export const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const moviesList = await getMovieByQuery(query);
        setMoviesList(moviesList.results);
      } catch (error) {
        console.log('error :>> ', error);
        setError(`No data in fetch moviesList ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(query);
  }, [query]);

  const updateQuery = query => {
    const nextParams = query !== '' ? { query: query } : {};
    setSearchParams(nextParams);
  };

  return (
    <Wrapper>
      <SearchBox value={query} onChange={updateQuery} />
      {!isLoading ? <MoviesList moviesList={moviesList} /> : <Loading />}
      {error && <Error />}
    </Wrapper>
  );
};
