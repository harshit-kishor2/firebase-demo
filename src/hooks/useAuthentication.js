import {useDispatch, useSelector} from 'react-redux';
import {loginAction, logoutAction, registerAction} from '../redux/auth.slice';

const useAuthentication = () => {
  const dispatch = useDispatch();
  // All states
  const {
    loginLoadingStatus,
    loginError,
    userDetails,
    isLoggedin,
    logoutLoadingStatus,
    registerLoadingStatus,
    logoutError,
    registerError,
  } = useSelector(state => state.authReducer);

  // All Actions
  const signIn = ({username, password}) =>
    dispatch(loginAction({username, password}));

  const signUp = ({username, password}) =>
    dispatch(registerAction({username, password}));

  const signOut = () => dispatch(logoutAction());

  return {
    loginLoadingStatus,
    loginError,
    userDetails,
    isLoggedin,
    logoutLoadingStatus,
    registerLoadingStatus,
    logoutError,
    registerError,
    signIn,
    signUp,
    signOut,
  };
};
export default useAuthentication;
