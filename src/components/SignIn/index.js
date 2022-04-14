import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useRef } from 'react';
import { auth } from '../../FirebaseApp';
import './index.css';

function SignIn() {

  const email = useRef(null);
  const password = useRef(null);

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then(() => {
      })
      .catch((err) => {
        console.log('login', err);
        alert('Email or password is incorrect');
      });
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then(() => {
        // console.log('sign in', JSON.stringify(res));
      })
      .catch((err) => {
        console.log('sign in', err);
        alert(err);
      });
  };

  return (
    <div className='signInScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={email} required placeholder='Email' type='email' />
        <input ref={password} required placeholder='Password' type='password' />
        <button type='submit' onClick={login}>
          Sign In
        </button>

        <h4>
          <span className='singInScreen__gray'>New to Netflix? </span>
          <span className='signInScreen__link' onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
