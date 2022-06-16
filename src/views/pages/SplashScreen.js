import {StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Container} from '../components';
import {Router} from '../../routes/Router';
import {useSelector} from 'react-redux';

const SplashScreen = () => {
  const [isSplash, setisSplash] = useState(true);
  //const {state, checkAuth} = useAuth();
  const userState = useSelector(state => state.authReducer);

  useEffect(() => {
    setTimeout(() => {
      setisSplash(false);
    }, 2000);
  }, []);

  return isSplash ? (
    <Container hp={100} style={styles.container}>
      <Text>Splash Screen</Text>
    </Container>
  ) : (
    <Router isAuth={userState.isLoggedin} />
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
