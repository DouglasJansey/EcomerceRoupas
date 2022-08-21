import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Contato from '../Pages/Contato';
import NotFound from '../Pages/NotFound';
import Register from '../Pages/Register';
import Login from '../Pages/login';
import RegisterProducts from '../Components/Produtos';

export default function RoutePages() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="contato" element={<Contato />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="produtos" element={<RegisterProducts />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
