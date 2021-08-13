import { createContext, useState } from "react";

const Auth = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  return <Auth.Provider value={{ token, setToken }}>{children}</Auth.Provider>;
};

export { AuthProvider, Auth };
