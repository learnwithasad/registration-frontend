import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [adminId, setAdminId] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{adminId, setAdminId, isAuthenticated, setIsAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useProvider = () => useContext(AuthContext);

export default AuthProvider;