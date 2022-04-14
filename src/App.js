import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './FirebaseApp';
import HomeScreen from './routes/HomeScreen';
import LoginScreen from './routes/Login';
import './App.css';
import {
  loginDispatchAction,
  logoutDispatchAction,
  selectAuthUser,
} from './app/reducer/authUserReducer';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const currentAuthUser = useSelector(selectAuthUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          loginDispatchAction({
            uid: authUser.uid,
            email: authUser.email,
            refreshToken: authUser.stsTokenManager.refreshToken,
            accessToken: authUser.stsTokenManager.accessToken,
            expirationTime: authUser.stsTokenManager.expirationTime,
            createdAt: authUser.createdAt,
            lastLoginAt: authUser.lastLoginAt,
          })
        );
      } else {
        dispatch(logoutDispatchAction);
      }
    });

    return unsubscribe;
  }, []);
  return (
    <div className='App'>
      <Routes>
        {!currentAuthUser ? (
          <>
            <Route path='/' element={<LoginScreen />} />

            {/* <Route path='/login' element={<LoginScreen />} /> */}
            {/* <Route path='/signin' element={<LoginScreen isSignInRoute={true} />} /> */}
          </>
        ) : (
          <>
            <Route path='/' element={<HomeScreen />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
