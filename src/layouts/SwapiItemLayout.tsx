import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';

function Layout() {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
}

export default Layout;
