import "./LogIn.scss";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { FaTwitter} from 'react-icons/fa'

const LogIn = () => {
  const [name, setName] = useState("");
  const history = useHistory();

  const loginSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("token", name);
    if (window.localStorage.getItem("token")) {
      history.push("/");
    }
  };

  return (
    <section className="login">
      <div className='login__top'>
      <h1 className="login__title">Login in to Twitter</h1>
      </div>
      <FaTwitter className="login__logo logo" />
      <form className="login__form" onSubmit={loginSubmit}>
        <input
          title="Alex, Sarah, Taylor"
          className="login__input"
          type="text"
          placeholder="Phone, email or username"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          className="login__input"
          type="password"
          name="password"
          placeholder="Password"
        />

        <button className="login__btn" type="submit">
          Log in
        </button>
        <div className="login__links">
          <Link className="login__link" to="/login">
            Forgot Password?
          </Link>
          <Link className="login__link" to="/signup">
            Sign up For Twitter
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LogIn;
