import * as Yup from 'yup';

// ! Validation for login form
export const loginSchema = Yup.object({
  email: Yup.string().email('Invalid Email.').required('Email required.'),
  password: Yup.string()
    .required('Password required.')
    .min(8, 'Password should be greater than 8 letters.'),
});

// ! Validation for Register form
export const RegisterationSchema = Yup.object({
  email: Yup.string().email('Invalid Email.').required('Email required.'),
  password: Yup.string()
    .required('Please enter your password.')
    .min(8, 'Your password is too short.'),
  retypePassword: Yup.string()
    .required('Please retype your password.')
    .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
});
