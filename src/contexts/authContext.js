import {useContext} from 'react';
import localStorage from '../helpers/localStorage';
import createDataContext from './createDataContext';
const CHECK_AUTH = 'checkAuth';
// ! Global initial-state
const initialState = {
  isAuth: false,
  token: null,
  email: '',
};

//! Globle Auth Actions
const actions = {
  checkAuth: dispatch => {
    return async () => {
      //localStorage.setItem('@token', 'true');
      let isAuth = await localStorage.getItem('@isAuth');
      dispatch({
        type: CHECK_AUTH,
        payload: {
          isAuth: isAuth ?? false,
        },
      });
    };
  },
  signup: dispatch => {
    return ({email, password}) => {
      console.log('Signup');
      dispatch({type: 'signup'});
    };
  },

  signin: dispatch => {
    return ({email, password}) => {
      // Do some API Request here
      console.log('Signin');
      dispatch({
        type: 'signin',
        payload: {
          token: 'some access token here',
          email,
        },
      });
    };
  },

  signout: dispatch => {
    return () => {
      console.log('atyaaa');
      dispatch({type: 'signout'});
    };
  },
};

// ! Auth Reducer for updating global state
const reducer = (state, action) => {
  switch (action.type) {
    case CHECK_AUTH:
      return {
        ...state,
        isAuth: action.payload.isAuth,
      };
    case 'signout':
      return {...state, token: null, email: ''};
    case 'signin':
    case 'signup':
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

//! Get Provider and Context
const {Provider, Context} = createDataContext({
  defaultValue: initialState,
  action: actions,
  reducer: reducer,
});

//! Create hook for authcontext
//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth() {
  const context = useContext(Context);
  const {state, signup, signin, signout, checkAuth} = context;

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return {state, signup, signin, signout, checkAuth};
}

export {Provider as AuthProvider, Context as AuthContext, useAuth};
