import { useContext, useEffect } from "react";
import { Auth } from "../context/Authentication";

const useAuth = (setterOnly) => {
  const { token, setToken } = useContext(Auth);

  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  });
  return setterOnly ? [setToken] : [token, setToken];
};

export default useAuth;
