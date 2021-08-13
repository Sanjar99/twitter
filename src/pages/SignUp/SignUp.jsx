import "./SignUp.scss";
import logoSignup from "../../img/twitter.png";
import { useState } from "react";
import { useHistory ,Link} from "react-router-dom";
import { FaTwitter} from 'react-icons/fa'
const SignUp = () => {
  const [input, setInput] = useState("");
  const history = useHistory();

  const signUpFn = (e) => {
    e.preventDefault();
    window.localStorage.setItem("token", input);
    document.querySelector(".signup__input-name").value = "";

    if (window.localStorage.getItem("token")) {
      history.push("/");
    }
  };

  return (
    <section className="signup">
      
      <div className="signup__body">
        <div className="signup__top">
        <div className='signup__left'>
             <img className='signup__left-img' src={logoSignup} alt="LogoImg" />
             <p className='signup__left-text'>already have an account ?</p>
             <Link className='signup__left-link' to='./Login'>Log in</Link>

        </div>
        <div className='signup__right'>
          <form className="signup__form" onSubmit={signUpFn}>
            <div className="signup__form-top">
              <FaTwitter className="signup__form-logo logo" />
              <button className="signup__form-btn" type="submit">
                Next
              </button>
            </div>

            <p className="signup__form-title">Create your account</p>

            <label className="signup__label" htmlFor="name">
              <input
                title="Alex, Sarah, Taylor"
                className="signup__input signup__input-name"
                type="text"
                name="name"
                id="name"
                required
                placeholder='Name'
                autoComplete="off"
                onChange={(e) => setInput(e.target.value)}
              />
              <span className="signup__span">Name</span>
              <span className="signup__span-number">0/50</span>
            </label>

            <label className="signup__label" htmlFor="tell">
              <input
                className="signup__input"
                id="tell"
                type="tel"
                name="tel"
                placeholder='Phone'
                autoComplete="off"
              />
              <span className="signup__span">Phone</span>
            </label>

            <span className="signup__email">Use email instead</span>

            <p className="signup__data-title">Date of birth</p>
            <p className="signup__data-text">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>

            <div className="signup__data">
              <label
                className="signup__label signup__label-month"
                htmlFor="month"
              >
                <input
                  className="signup__input "
                  id="month"
                  type="month"
                  name="month"
                  placeholder='Month and Year'
                  autoComplete="off"
                />
                <span className="signup__span">Month</span>
              </label>

              <label className="signup__label signup__label-year" htmlFor="day">
                <input
                  className="signup__input"
                  id="day"
                  type="number"
                  name="day"
                  min="0"
                  max="31"
                  placeholder='Day'
                  autoComplete="off"
                />
                <span className="signup__span">Day</span>
              </label>
            </div>
          </form>
          <h2 className='signup__subject'>TWITTER  SIGNUP</h2>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SignUp;
