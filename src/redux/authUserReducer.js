import { createSlice } from '@reduxjs/toolkit';

const authUserReducer = createSlice({
  name: 'authUser',
  initialState: {
    authUser: null,
  },
  reducers: {
    loginDispatchAction: (state, action) => {
      state.authUser = action.payload;
    },
    logoutDispatchAction: (state) => {
      state.authUser = null;
    },
  },
});

export const { loginDispatchAction, logoutDispatchAction } = authUserReducer.actions;

/**
 * To get this state
 * call this function with useSelector hook ie:
 * const currentAuthUser = useSelector(selectAuthUser);
 */
export const selectAuthUser = (state) => state.authUserReducer.authUser;

export default authUserReducer.reducer;
