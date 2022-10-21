import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: ${p => p.theme.space[3]}px;
  border-bottom: 1px solid black;
`;

export const Title = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const List = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[2]}px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.m};

  &.active {
    color: ${p => p.theme.colors.accent};
    font-weight: ${p => p.theme.fontWeights.bold};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;
