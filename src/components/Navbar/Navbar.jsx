import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { 
  FaTwitter,
  FaUserAltSlash,
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaUserEdit
} from 'react-icons/fa'
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Data from "./../../twitts/Data"

const Navbar = ({ userName }) => {
  const [setToken] = useAuth(true);
  const [person, setPerson] = useState({});
  const clearProfil = () => {
    window.localStorage.clear();
    setToken("");
  };

  useEffect(() => {
    if (userName) {
      setPerson(Data.find((twit) => twit.name === userName));
    }
  }, [person, userName]);
  return (
    <nav className="navbar">
      {person && userName && (
        <img
          className="navbar__profile-img"
          src={person.img}
          alt={`${userName}`}
        />
      )}
      {!person && userName && (
        <img
          className="navbar__profile-img"
          src={"https://picsum.photos/300/400?random=1"}
          alt={`${userName}`}
        />
      )}
      
      {person && <h2 className="navbar__username">{person.name}</h2>}
      {!person && <h2 className="navbar__username">{userName}</h2>}
      <FaTwitter className="navbar__logo logo"/>
      <ul className="navbar__ul">
        <li className="navbar__list">
          <NavLink
            className="navbar__link"
            activeClassName="navbar__link-active"
            to="/"
            exact
          >
            <FaHome className="navbar__logo"/>
            Home
          </NavLink>
        </li>

        <li className="navbar__list">
          <NavLink
            className="navbar__link"
            activeClassName="navbar__link-active"
            to="/signup"
          >
            <FaSignInAlt className="navbar__logo"/>
            Sign up
          </NavLink>
        </li>
        <li className="navbar__list">
          <NavLink
            className="navbar__link"
            activeClassName="navbar__link-active"
            to="/login"
          >
            <FaUserEdit className="navbar__logo"/>
            Log in
          </NavLink>
        </li>

        <li className="navbar__list">
          <NavLink
            className="navbar__link"
            activeClassName="navbar__link-active"
            to="/profile"
          >
            <FaUserAlt className="navbar__logo"/>
            Profile
          </NavLink>
        </li>
      </ul>
      <button className="navbar__btn" onClick={clearProfil}>
      <FaUserAltSlash className="navbar__exit"/>
        Clear Twitter
      </button>
    </nav>
  );
};

export default Navbar;
