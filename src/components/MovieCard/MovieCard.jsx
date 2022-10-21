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

  const userScore = Math.round((vote_average / vote_count) * 100);
  const genres = genresData && genresData.map(({ name }) => name).join(', ');
  const fullPosterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <Wrapper>
      <img src={fullPosterPath} alt="{title}" width="300" height="450" />
      <MovieWrapper>
        <MovieTitle>{title}</MovieTitle>
        <p>User score: {userScore}%</p>
        <h3>Owerview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </MovieWrapper>
    </Wrapper>
  );
};
