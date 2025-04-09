import { useState} from 'react';

export const useAuthStorage = () => {
  const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem('authToken'));

  const saveAuthToken = (token: string) => {
    localStorage.setItem('authToken', token);
    setAuthToken(token);
  };

  return {
    authToken,
    saveAuthToken
  };
};
