import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  // Al cargar el componente, intenta recuperar la información de autenticación desde el almacenamiento local.
  useEffect(() => {
    const storedAuthData = localStorage.getItem("authData");
    if (storedAuthData) {
      const { isAuthenticated, userRole } = JSON.parse(storedAuthData);
      setIsAuthenticated(isAuthenticated);
      setUserRole(userRole);
    }
  }, []);

  //Memorizar la función login
  const login = useCallback(function (rol) {
    setIsAuthenticated(true);
    setUserRole(rol);
    localStorage.setItem("authData", JSON.stringify({ isAuthenticated: true, userRole: rol }));
  }, []);

  //Memorizar la función logout
  const logout = useCallback(function () {
    setIsAuthenticated(false);
    setUserRole("");
    localStorage.removeItem("authData");
  }, []);

  const value = useMemo(() => ({
    isAuthenticated,
    login,
    logout,
    rol: userRole,
  }),
    [isAuthenticated, login, logout, userRole])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/*Hook para consumir el contexto*/
// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
  return useContext(AuthContext);
}