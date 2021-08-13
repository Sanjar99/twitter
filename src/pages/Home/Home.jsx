import "./Home.scss";

import Navbar from "../../components/Navbar/Navbar";
import Twitt from "../../components/Twitt/Twitt";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home__top">
      <h2 className='home__title'>Welcome Twitter</h2>
          <p className='home__text'>The people, topics and conversations you care about</p>
       
      </div>
      <Twitt last="last"/>
    </div>
  );
};

export default Home;
