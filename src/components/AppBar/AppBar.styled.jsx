import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: ${p => p.theme.space[4]}px 0;

  margin-bottom: ${p => p.theme.space[4]}px;
  border-bottom: ${p => p.theme.borders.normal};

  > nav {
    display: flex;
    padding: 0 ${p => p.theme.space[5]}px;

    gap: ${p => p.theme.space[5]}px;
  }
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
