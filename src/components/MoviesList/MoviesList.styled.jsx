import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const MovieLink = styled(Link)`
  color: ${p => p.theme.colors.black};
  text-decoration: none;
  padding: ${p => p.theme.space[2]}px;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
