import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;
  & h3 {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
