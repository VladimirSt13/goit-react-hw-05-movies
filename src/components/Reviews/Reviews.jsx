import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../api/fetchMovies';
import { ReviewsList } from './Revies.styled';
import { Loading } from 'components/common/Loading';
import { Error } from 'components/common/Error';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const reviews = await getMovieReviews(id);
        setReviews(reviews);
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
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ReviewsList>
      ) : (
        <p>There is nothing here</p>
      )}
      {error && <Error />}
    </>
  );
};

export default Reviews;
