import { Route, Redirect } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const Private = (props) => {
  const [token] = useAuth();

  if (token) {
    return <Route {...props} />;
  }
  return <Redirect to="/login" />;
};

export default Private;
