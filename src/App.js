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
} from './redux/authUserReducer';
import { useSelector } from 'react-redux';
import ProfileScreen from './routes/ProfileScreen';
// import { store } from './app/store';

function App() {
  const dispatch = useDispatch();

  const currentAuthUser = useSelector(selectAuthUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(loginDispatchAction(makeAuthUserFromFirebase(authUser)));
      } else {
        dispatch(logoutDispatchAction());
      }
    });

    return unsubscribe;
  }, [dispatch]);

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
            <Route path='/edit_profile' element={<ProfileScreen />} />
            <Route exact path='/' element={<HomeScreen />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export const makeAuthUserFromFirebase = (authUser) => {
  return {
    uid: authUser.uid,
    email: authUser.email,
    refreshToken: authUser.stsTokenManager.refreshToken,
    accessToken: authUser.stsTokenManager.accessToken,
    expirationTime: authUser.stsTokenManager.expirationTime,
    createdAt: authUser.createdAt,
    lastLoginAt: authUser.lastLoginAt,
  };
};

export default App;
