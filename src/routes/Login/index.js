import './index.css';
import netflix_logo from '../../assets/images/netflix_logo.png';
import { useState } from 'react';
import SignIn from '../../components/SignIn';

function LoginScreen({ isSignInRoute }) {
  const [signIn, setSignIn] = useState(false);

  const handleSignInOnClick = (e) => {
    e.preventDefault();
    setSignIn(true);
  };

  return (
    <div className='loginScreen'>
      {/* background */}
      <div className='loginScreen__background'>
        {/* logo */}
        <img
          className='loginScreen__logo'
          src={netflix_logo}
          alt='netflix2.0'
        />
        {/* sign in button */}
        <button onClick={handleSignInOnClick} className='loginScreen__button'>
          Sign In
        </button>

        <div className='loginScreen__gradient'></div>
      </div>
      {/* login body */}
      <div className='loginScreen__body'>
        {signIn || isSignInRoute ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and anime.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your membership.
            </h3>

            {/* login input */}
            <div className='loginScreen__input'>
              <form>
                <input type='email' placeholder='Email Address' />
                <button
                  onClick={handleSignInOnClick}
                  className='loginScreen__getStarted_btn'
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default LoginScreen;
