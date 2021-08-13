import "./Twitt.scss";
// import twitts from "../../twitts/Twitts";
import Data from "../../twitts/Data"


const Twitt = ({ userName, last }) => {
  return (
    <>
      {Data.length > 0 && (
        <ul className="twitts">
          {Data.filter((news) => {
              if (last) {
                return news;
              }
              return news.name === userName;
            })
            .map((item) => (
              <li className="twitt" key={item.id}>
                <img
                  className="twitt__img"
                  src={item.img}
                  alt={`${item.name}`}
                />
                <div className="twitt__text">
                  <h4 className="twitt__name">{item.name}</h4>
                  <p className="twitt__comment">{item.title}</p>
                </div>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Twitt;
