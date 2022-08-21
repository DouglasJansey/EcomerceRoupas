import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/Header';
import GlobalStyled from './style/GlobalStyled';
import RoutesPage from './Routes';

function App() {
  return (
    <Router>
      <Header />
      <RoutesPage />
      <GlobalStyled />
    </Router>
  );
}

export default App;
