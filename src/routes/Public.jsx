import { Route, Redirect, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const Public = (props) => {
  const [token] = useAuth();
  const { pathname } = useLocation();

  if (token && (pathname === "/login" || pathname === "/signup")) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};

export default Public;
