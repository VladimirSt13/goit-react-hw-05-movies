import { Title, List, Link, Wrapper } from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  return (
    <Wrapper>
      <Title>Additional info:</Title>
      <List>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Review</Link>
        </li>
      </List>
    </Wrapper>
  );
};
