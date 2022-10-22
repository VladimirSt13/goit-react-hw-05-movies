import styled from 'styled-components';

const WrapperStyled = styled.div`
  padding: ${p => p.theme.space[5]}px;
`;

export const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};
