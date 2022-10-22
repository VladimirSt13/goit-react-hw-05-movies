import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../api/fetchMovies';
import { CastList } from './Cast.styled';
import { Loading } from 'components/common/Loading';
import { Error } from 'components/common/Error';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const cast = await getMovieCast(id);
        setCast(cast);
      } catch (error) {
        setError(`No data in fetch MovieCast ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {cast.length > 0 ? (
        <CastList>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://dw.ksdr1.net/wp-content/uploads/sites/2/2018/08/photo-coming-soon.jpg'
                  }
                  alt={name}
                  width="150"
                  height="225"
                />
                <p>
                  {name} {character && <span>as {character}</span>}
                </p>
              </li>
            );
          })}
        </CastList>
      ) : (
        <div>There is nothing here</div>
      )}
      {error && <Error />}
    </>
  );
};

export default Cast;
