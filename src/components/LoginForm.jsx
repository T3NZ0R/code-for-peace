import React from 'react';
import { TextField, Button, Typography, Link } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {signIn} from "../services/DataService";
import {useMutation} from "@tanstack/react-query";
import {Cookies} from "react-cookie";
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";


const validationSchemaLogin = yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .max(255)
        .required('The email address is required'),
    password: Yup.string()
        .required("The password is required")
        .min(8, "Password must have at least 8 characters")
});

const LoginForm = () => {


    const navigate = useNavigate()

    const settingToken = (response) => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const cookies = new Cookies();
        const token = response.tokens.access_token;
        cookies.set('token', token, {
            expires: tomorrow
        });
        if( response.roles === "admin"){

        }
        navigate('/dashboard');

    };
    const signInMutation = useMutation(signIn, {
        onSuccess: (response) => {
            settingToken(response)
        }
    } );


    const handleSignIn = async (data) => {
        signInMutation.mutate({
            email: data.email,
            password: data.password
        });

    };

    const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaLogin,
        onSubmit: async (values) => {
            try {
                await handleSignIn({password: values.password, email: values.email})
            } catch (e) {
                console.warn(e);
            }
        }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        margin="normal"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={!!formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={!!formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
        Login
      </Button>
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        Don't have an account?{' '}
        <Link href="/register">
          Register here
        </Link>
      </Typography>
    </form>
  );
};

export default LoginForm;
