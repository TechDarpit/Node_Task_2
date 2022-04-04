import { createContext, ReactNode, useContext, useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

type authContextType = {
  isAuth: boolean;
  token: String | null;
  login: (token: string) => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  isAuth: false,
  token: null,
  login: (token) => {},
  logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  const login = (token: string) => {
    setIsAuth(true);
    localStorage.setItem("TOKEN", token);
    cookies.set("TOKEN", token, { path: "/" });
    setToken(token);
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("TOKEN");
    setToken(null);
  };

  const value = {
    isAuth,
    token,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
