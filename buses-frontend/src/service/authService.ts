const loginUser = async (username: string, password: string): Promise<string> => {
    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error('Error al autenticar al usuario');
      }
  
      const result = await response.text();
      return result;
    } catch (error) {
      console.error('Error en la autenticación:', error);
      throw new Error('Hubo un problema al intentar autenticar');
    }
  };
  
  export default { loginUser };
  