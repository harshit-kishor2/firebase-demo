import React, {useEffect} from 'react';
import {
  Box,
  Center,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {LoadingStatus, RouteName} from '../../constants';
import {useFormik} from 'formik';
import {ValidationSchema} from '../../helpers';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAuthentication} from '../../hooks';
import SimpleToast from 'react-native-simple-toast';
import {Keyboard} from 'react-native';

const LoginScreen = () => {
  const navigator = useNavigation();
  const {signIn, loginLoadingStatus} = useAuthentication();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    validationSchema: ValidationSchema.loginSchema,
    initialValues: {email: '', password: ''},
    onSubmit: (value, {resetForm}) => {
      Keyboard.dismiss();
      let data = {
        username: value.email,
        password: value.password,
      };
      signIn(data);
      /* signIn(data).then(res => {
        if (res.type === 'auth/loginAction/rejected') {
          SimpleToast.show('Some Error Occured.');
        }
      }); */
    },
  });

  useEffect(() => {
    if (loginLoadingStatus === LoadingStatus.FAILED) {
      SimpleToast.show('failed');
    }
    if (loginLoadingStatus === LoadingStatus.LOADING) {
      SimpleToast.show('loding');
    }
    if (loginLoadingStatus === LoadingStatus.LOADED) {
      SimpleToast.show('loaded');
    }
  }, [loginLoadingStatus]);

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs">
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl isRequired isInvalid={'email' in errors}>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {errors.email && touched.email && (
                <FormControl.ErrorMessage>
                  {errors.email}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={'password' in errors}>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              <FormControl.ErrorMessage>
                {errors.password}
              </FormControl.ErrorMessage>
              <Link
                _text={{
                  fontSize: 'xs',
                  fontWeight: '500',
                  color: 'indigo.500',
                }}
                alignSelf="flex-end"
                mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                I'm a new user.{' '}
              </Text>
              <Link
                _text={{
                  color: 'indigo.500',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}
                onPress={() => {
                  resetForm();
                  navigator.navigate(RouteName.REGISTRATION);
                }}>
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

//! App bar
/*
  // When screen comes in focus return true
  const isFocused = navigation.isFocused();
     useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      title: 'Login Page',
      headerRight: () => (
        <View>
          <Text>Hello</Text>
        </View>
      ),
      headerLeft: () => (
        <View>
          <Text>Hello</Text>
        </View>
      ),
    });
  }, [navigation]); */
