import { Title, List, Link, Wrapper } from './AdditionalInfo.styled';

export const AdditionalInfo = ({ from }) => {
  return (
    <Wrapper>
      <Title>Additional info:</Title>
      <List>
        <li>
          <Link to={'cast'} state={from}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={'reviews'} state={from}>
            Review
          </Link>
        </li>
      </List>
    </Wrapper>
  );
};
