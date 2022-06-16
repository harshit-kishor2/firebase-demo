import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteName} from '../constants';
import {LoginScreen, RegisterScreen} from '../views/pages';
const Stack = createNativeStackNavigator();
export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RouteName.LOGIN} component={LoginScreen} />
      <Stack.Screen name={RouteName.REGISTRATION} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
