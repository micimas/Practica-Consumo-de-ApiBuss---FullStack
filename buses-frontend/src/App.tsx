import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/home';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
