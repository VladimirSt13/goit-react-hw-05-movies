import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { AppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <Container>
        <AppBar />
      </Container>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
