import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import authService from '../service/authService';

const Login = () => {
  const { setCredentials } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  const handleLogin = async () => {
    try {
      const result = await authService.loginUser(username, password); // Llamada al servicio
      if (result === 'success') { 
        setError('');
        setCredentials(username, password);
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      setError('Hubo un error al intentar iniciar sesión');
    }
  };
  

  return (
    <div>
      <h2>Iniciar sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
