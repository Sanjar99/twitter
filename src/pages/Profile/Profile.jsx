import "./Profile.scss";
import Twitt from "../../components/Twitt/Twitt";

import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const [token] = useAuth();
  const [userName, setUserName] = useState(token);
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token, history ,setUserName]);

  return (
    <div className="profile">
      <Navbar userName={userName} />
      <div className="home__top">
        <h1 className="home__title">Profile</h1>
      </div>
      <Twitt userName={userName} />
    </div>
  );
};

export default Profile;
