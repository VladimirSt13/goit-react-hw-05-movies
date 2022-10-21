import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../api/fetchMovies';
import { CastList } from './Cast.styled';
import { Loading } from 'components/common/Loading';
import { Error } from 'components/common/Error';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const cast = await getMovieCast(id);
      setCast(cast);
      console.log('cast', cast);
    } catch (error) {
      setError(`No data in fetch MovieCast ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      {cast && (
        <CastList>
          {cast.map(({ id, profile_path, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://dw.ksdr1.net/wp-content/uploads/sites/2/2018/08/photo-coming-soon.jpg'
                  }
                  alt={character}
                  width="150"
                  height="225"
                />
                <p>{character}</p>
              </li>
            );
          })}
        </CastList>
      )}
      {error && <Error />}
    </>
  );
};
