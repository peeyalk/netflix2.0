import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App, { makeAuthUserFromFirebase } from '../App';
import { BrowserRouter } from 'react-router-dom';
import { unmountComponentAtNode } from 'react-dom';
import { reduxStore } from '../redux/reduxStore';
import { loginDispatchAction } from '../redux/authUserReducer';
import { act } from 'react-dom/test-utils';
import AuthUserData from './authUser.json';

let container = null;
// setup a DOM element as a render target
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
// Cleanup after each test
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('App renders without crashing', () => {
  render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={reduxStore}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>,
    container
  );
});

// Unauthenticated user should see the login screen
test('Unauthenticated user should see the login screen', () => {
  const { asFragment, getByText } = render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={reduxStore}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>,
    container
  );

  expect(
    getByText(/Unlimited movies, TV shows, and anime./i)
  ).toBeInTheDocument();
  expect(getByText(/Watch anywhere. Cancel anytime./i)).toBeInTheDocument();
  expect(
    getByText(/Enter your email to create or restart your membership./i)
  ).toBeInTheDocument();
  expect(getByText(/Get Started/i)).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

// Authenticated user should see the home page
test('Authenticated user should see the home page', () => {
  // mock authenticated user
  act(() => {
    /* fire events that update state */
    reduxStore.dispatch(
      loginDispatchAction(makeAuthUserFromFirebase(AuthUserData))
    );
  });

  const { asFragment, getByText } = render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={reduxStore}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>,
    container
  );

  expect(getByText(/#1 in Movies Today/i)).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

// Redux Store should have the same Authenticated user data
test('Redux Store should have the same Authenticated user data, () => {', () => {
  reduxStore.dispatch(
    loginDispatchAction(makeAuthUserFromFirebase(AuthUserData))
  );
  expect(reduxStore.getState().authUserReducer.authUser).toEqual(
    makeAuthUserFromFirebase(AuthUserData)
  );
});
