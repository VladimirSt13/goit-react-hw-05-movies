import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './Layout.styled';
import { AppBar } from '../AppBar/AppBar';
import { Loading } from 'components/common/Loading';

const Layout = () => {
  return (
    <>
      <Container>
        <AppBar />
      </Container>
      <Suspense fallback={<Loading />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default Layout;
