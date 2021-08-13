import "./App.scss";
import { Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import Profile from "./pages/Profile/Profile";

import Private from "./routes/Private";
import Public from "./routes/Public";

// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}

      <div className="twitter">
        <Switch>
          <Private path="/profile" component={Profile} />
          <Public path="/" component={Home} exact />
          <Public path="/signup" component={SignUp} />
          <Public path="/login" component={LogIn} />
        </Switch>
      </div>
    </>
  );
}

export default App;
