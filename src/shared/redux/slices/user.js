import { createSlice } from "@reduxjs/toolkit";
import { handleAsyncRequest } from "@/shared/redux/utils";
import { getRequest, postRequest } from "@/shared/utils/requests";
import { resetAllSlices } from "@/shared/utils/resetAllSlices";
import { SERVERS } from "@/shared/constants/general";

// ----------------------------------------------------------------------
const defaultState = {
  isLoading: false,
  error: null,
  currentUser: null,
};

const slice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    resetState: () => defaultState,
    startLoading(state) {
      state.isLoading = true;
    },

    stopLoading(state) {
      state.isLoading = false;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const actions = slice.actions;

export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    const { error, body } = await handleAsyncRequest({
      dispatch,
      actions,
      requestFn: postRequest({ server: SERVERS.java.value }),
      endpoint: "/auth/login",
      payload: { email, password },
      toastMessage: { success: { show: true }, error: { show: true } },
    });

    if (!error) {
      dispatch(actions.setCurrentUser(body));
      return body; // it depends upon use case if we required body right after api calling than return body otherwise we can get data from redux state. sometimes redux takes sometime to update
    } else {
      throw error;
    }
  };

// Create User
export const createUser =
  ({ firstName, lastName, email, password }) =>
  async (dispatch) => {
    const { error, body } = await handleAsyncRequest({
      dispatch,
      actions,
      requestFn: postRequest({ server: SERVERS.java.value }),
      endpoint: "/auth/signup",
      payload: { firstName, lastName, email, password },
      toastMessage: { success: { show: true }, error: { show: true } },
    });
    if (error) throw error;
    console.log(body);
  };

// Forget Password

// Reset Password

// state selector
export const isUserLoading = (state) => state.user.isLoading;

export const getUserErrors = (state) => state.user.error;

export const getCurrentUser = (state) => state.user.currentUser;

export const signOutUser = () => async (dispatch) => {
  const { error } = await handleAsyncRequest({
    dispatch,
    actions,
    requestFn: postRequest,
    endpoint: `/users/logout`,
    toastMessage: { success: { show: true }, error: { show: true } },
  });
  if (error) throw error;
  dispatch(resetAllSlices());
};
