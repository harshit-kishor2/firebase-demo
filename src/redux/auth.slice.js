import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AxiosRequest} from '../helpers';
import {LoadingStatus} from '../constants';
import {firebase} from '@react-native-firebase/auth';
import {getFirebaseError} from '../helpers/utils';

const AUTH_FEATURE_KEY = 'auth';

const authAdapter = createEntityAdapter();

const initialAuthState = authAdapter.getInitialState({
  loginLoadingStatus: LoadingStatus.NOT_LOADED,
  logoutLoadingStatus: LoadingStatus.NOT_LOADED,
  registerLoadingStatus: LoadingStatus.NOT_LOADED,
  isLoggedin: false,
  userDetails: null,
  loginError: null,
  logoutError: null,
  registerError: null,
});

/**
 * For Registration
 */
export const registerAction = createAsyncThunk(
  'auth/registerAction',
  async (params, thunkAPI) => {
    try {
      const re = await firebase
        .auth()
        .createUserWithEmailAndPassword(params.username, params.password);
      console.log('signup', re);
    } catch (error) {
      return thunkAPI.rejectWithValue(getFirebaseError(error.code));
    }
  },
);

/**
 * Login Action
 */
export const loginAction = createAsyncThunk(
  'auth/loginAction',
  async (params, thunkAPI) => {
    try {
      console.log(params, '=====');
      throw 'error';
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response?.data : error.message,
      );
    }
  },
);

/**
 * Logout Action
 */

export const logoutAction = createAsyncThunk(
  'auth/logoutAction',
  async (params, thunkAPI) => {
    try {
      AsyncStorage.clear();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response?.data : error.message,
      );
    }
  },
);

/**
 * Slice for all reducres
 */
const authSlice = createSlice({
  name: AUTH_FEATURE_KEY,
  initialState: initialAuthState,
  reducers: {
    add: authAdapter.addOne,
    remove: authAdapter.removeOne,
    resetAuthState: (state, action) => {
      return {
        ...state,
      };
    },
  },
  extraReducers: builder => {
    builder

      //login
      .addCase(loginAction.pending, state => {
        state.loginLoadingStatus = 'loading';
        state.loginError = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loginLoadingStatus = 'loaded';
        // state.userDetails = action.payload.user;
        state.isLoggedin = true;
        //set token and user details after login in localstorage
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loginLoadingStatus = 'error';
        state.loginError = action.payload || action.error.message;
      })
      //registerAction
      .addCase(registerAction.pending, state => {
        state.registerLoadingStatus = 'loading';
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.registerLoadingStatus = 'loaded';
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.registerLoadingStatus = 'error';
        state.registerError = action.payload || action.error.message;
      })
      //Logout
      .addCase(logoutAction.pending, state => {
        state.logoutLoadingStatus = 'loading';
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.logoutLoadingStatus = 'loaded';
        state.isLoggedin = false;
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.logoutLoadingStatus = 'error';
        state.logoutError = action.payload || action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;
