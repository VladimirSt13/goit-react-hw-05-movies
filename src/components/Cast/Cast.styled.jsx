import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;

  & li {
    width: 150px;
  }
`;
