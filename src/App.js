import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/es/integration/react';

import store, { persistor } from './store';
import Header from './Components/Header';
import GlobalStyled from './style/GlobalStyled';
import RoutesPage from './Routes';
import Footer from './Components/footer';
import getProducts from './services/produtos';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Header />
          <RoutesPage />
          <GlobalStyled />
          <ToastContainer autoClose={1000} className="toast-container" />
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
