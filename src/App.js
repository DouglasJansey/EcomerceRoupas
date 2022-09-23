import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './store';
import Header from './Components/Header';
import GlobalStyled from './style/GlobalStyled';
import RoutesPage from './Routes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <RoutesPage />
        <GlobalStyled />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </Provider>
  );
}

export default App;
