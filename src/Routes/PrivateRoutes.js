import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoutes(isClosed) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isClosed && !isLoggedIn) {
    return <Navigate to="login" replace />;
  }
  return <Outlet />;
}

PrivateRoutes.defaultProps = {
  isClosed: false,
};
