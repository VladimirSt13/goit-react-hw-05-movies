import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: ${p => p.theme.space[4]}px;
  gap: 24px;
  border-bottom: 1px solid black;
`;

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MovieTitle = styled.h1``;
