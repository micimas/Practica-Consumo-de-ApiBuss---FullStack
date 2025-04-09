import React, { createContext, useContext, useState } from 'react';
import { useAuthStorage } from '../hook/useAuth';


interface AuthContextType {
  username: string;
  authToken: string | null;
  setCredentials: (username: string, password: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe estar dentro de un AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { authToken, saveAuthToken} = useAuthStorage();
  const [username, setUsername] = useState<string>('');
  
  const setCredentials = (username: string, password: string) => {
    const token = btoa(`${username}:${password}`);
    setUsername(username);
    saveAuthToken(token);
  };

  return (
    <AuthContext.Provider value={{ username, authToken, setCredentials}}>
      {children}
    </AuthContext.Provider>
  );
};
