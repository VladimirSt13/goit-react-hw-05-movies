import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getDataMovie } from 'components/api/fetchMovies';
import { Wrapper } from 'components/common/Wrapper';
import { BackLink } from 'components/common/BackLink';
import { MovieCard } from './../MovieCard/MovieCard';
import { Loading } from 'components/common/Loading';
import { AdditionalInfo } from './../AdditionalInfo/AdditionalInfo';
import { Error } from 'components/common/Error';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movie = await getDataMovie(id);
        setMovie(movie);
      } catch (error) {
        setError(`No data in fetch MovieDetails ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {isLoading && <Loading />}

      {movie && (
        <>
          <BackLink to={backLinkHref}>Go back</BackLink>
          <MovieCard movie={movie} />
          <AdditionalInfo from={{ from: location.state?.from ?? '/' }} />
          <Outlet />
        </>
      )}
      {error && <Error />}
    </Wrapper>
  );
};
