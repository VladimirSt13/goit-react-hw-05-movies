// import { MoviesList } from '../components/ProductList';
import { MoviesList } from '../MoviesList/MoviesList';
import { Wrapper } from '../common/Wrapper';

export const MoviesHome = () => {
  return (
    <Wrapper>
      <MoviesList title="Trending today" />
    </Wrapper>
  );
};
