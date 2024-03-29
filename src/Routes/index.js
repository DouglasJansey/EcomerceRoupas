import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from '../Pages/Home';
import Contato from '../Pages/Contato';
import NotFound from '../Pages/NotFound';
import Register from '../Pages/Register';
import Login from '../Pages/login';
import RegisterProducts from '../Components/Produtos';
import CartList from '../Pages/CartList';
import Account from '../Pages/Account';
import AllProducts from '../Pages/ShowCase';
import PrivateRoute from './PrivateRoutes';

export default function RoutePages() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const AdminLoggedIn = useSelector((state) => state.auth.admin);
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route exact path="home" element={<Home />} />
        {/* Rotas fechadas */}
        <Route element={<PrivateRoute isClosed />}>
          <Route path="produto" element={AdminLoggedIn ? <RegisterProducts /> : <Navigate to="/home" />} />
        </Route>
        <Route path="conta" element={isLoggedIn ? <Account /> : <Navigate to="/home" />} />
        <Route path="register" element={isLoggedIn ? <Navigate to="/home" /> : <Register />} />
        <Route path="login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
        <Route path="contato" element={<Contato />} />
        <Route path="produtos" element={<AllProducts />} />
        <Route path="cart" element={<CartList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
