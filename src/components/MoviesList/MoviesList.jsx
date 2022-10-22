import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import { List, Title, ListItem, MovieLink } from './MoviesList.styled';

export const MoviesList = ({ title, moviesList }) => {
  const location = useLocation();

  return (
    <List>
      {title && <Title>{title}</Title>}
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
  );
};

MoviesList.propTypes = {
  title: PropTypes.string,
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
