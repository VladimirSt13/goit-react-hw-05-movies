import PropTypes from 'prop-types';

import {
  Wrapper,
  MovieWrapper,
  MovieTitle,
} from 'components/MovieCard/MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    overview,
    genres: genresData,
  } = movie;

  const userScore = vote_average
    ? Math.round((vote_average / vote_count) * 100)
    : 0;
  const genres = genresData && genresData.map(({ name }) => name).join(', ');
  const fullPosterPath = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';

  return (
    <Wrapper>
      <img src={fullPosterPath} alt="{title}" width="300" height="450" />
      <MovieWrapper>
        <MovieTitle>{title}</MovieTitle>
        <p>User score: {userScore}%</p>
        <h3>Owerview</h3>
        <p>{overview}</p>
        {genres && (
          <>
            <h3>Genres</h3>
            <p>{genres}</p>
          </>
        )}
      </MovieWrapper>
    </Wrapper>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
