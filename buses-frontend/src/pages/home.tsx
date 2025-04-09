// src/pages/Home.tsx
import { useAuth } from '../context/AuthContext';
import BusTable from '../components/BusTable';
import Login from '../components/Login';

const Home = () => {
  const { username } = useAuth();

  return (
    <div>
      {!username ? (
        <Login />
      ) : (
        <div>
          <h2>Bienvenido, {username}</h2>
          <BusTable />
        </div>
      )}
    </div>
  );
};

export default Home;
