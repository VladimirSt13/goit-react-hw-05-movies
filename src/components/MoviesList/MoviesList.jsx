import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesList } from '../api/fetchMovies';
import { List, Title, ListItem, MovieLink } from './MoviesList.styled';
import { Loading } from 'components/common/Loading';
import { Error } from 'components/common/Error';

export const MoviesList = ({ title }) => {
  const location = useLocation();

  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
      <Title>{title}</Title>
      {!isLoading ? (
        <List>
          {moviesList.map(({ id, title }) => {
            return (
              <ListItem key={id}>
                <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </MovieLink>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Loading />
      )}
      {error && <Error />}
    </>
  );
};
