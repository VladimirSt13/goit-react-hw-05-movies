import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: ${p => p.theme.space[4]}px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px
    ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.space[2]}px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: ${p => p.theme.space[3]}px;
`;
