import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authUserReducer from '../redux/authUserReducer';
// Import your own reducer

function renderWithStore(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { authUser: authUserReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { renderWithStore };
