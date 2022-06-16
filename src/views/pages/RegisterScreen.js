import * as React from 'react';
import {
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFormik} from 'formik';
import {ValidationSchema} from '../../helpers';
import {useAuthentication} from '../../hooks';
import SimpleToast from 'react-native-simple-toast';

const RegisterScreen = () => {
  const {signUp} = useAuthentication();
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    validationSchema: ValidationSchema.RegisterationSchema,
    initialValues: {email: '', password: '', retypePassword: ''},
    onSubmit: (value, {resetForm}) => {
      let data = {
        username: value.email,
        password: value.password,
      };
      signUp(data).then(res => {
        console.log('resss', res);
        if (res.type === 'auth/registerAction/rejected') {
          SimpleToast.show(res.payload);
        }
        if (res.type === 'auth/registerAction/fulfilled') {
          SimpleToast.show('Account created');
          resetForm();
        }
      });
    },
  });
  return (
    <KeyboardAwareScrollView>
      <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
            fontWeight="semibold">
            Welcome
          </Heading>
          <Heading
            mt="1"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
            fontWeight="medium"
            size="xs">
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl isRequired isInvalid={'email' in errors}>
              <FormControl.Label>Email</FormControl.Label>
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
              {errors.password && touched.password && (
                <FormControl.ErrorMessage>
                  {errors.password}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={'retypePassword' in errors}>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input
                type="password"
                value={values.retypePassword}
                onChangeText={handleChange('retypePassword')}
                onBlur={handleBlur('retypePassword')}
              />
              {errors.retypePassword && touched.retypePassword && (
                <FormControl.ErrorMessage>
                  {errors.retypePassword}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
