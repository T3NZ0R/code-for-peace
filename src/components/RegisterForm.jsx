import React, {useState} from 'react';
import {Button, TextField, Typography, Link} from '@mui/material';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {useMutation} from "@tanstack/react-query";
import {signUp} from "../services/DataService";

const validationSchemaRegister = yup.object({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
});

const RegisterForm = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)


    const signUpMutation = useMutation(signUp, {
        onSuccess: (response) => {
            setSuccessMessage('Registration success')
            setErrorMessage(null)
        },
        onError: (error) => {
            setErrorMessage(error.response.data.message)
            setSuccessMessage(null)
        }
    });


    const handleSignUp = async (data) => {
        signUpMutation.mutate({
            username: data.username,
            email: data.email,
            password: data.password
        });

    };

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchemaRegister,
        onSubmit: async (values) => {
            try {
                await handleSignUp({username: values.username, password: values.password, email: values.email})
            } catch (e) {
                console.warn(e);
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding:'50px',
                  border:'3px solid #007aff',
                  borderRadius:'20px',
                  top: "40%",
                  marginLeft:"30%",
                  maxWidth: '40%'

              }}
        >
            <Typography sx={{fontWeight: '700', fontSize: '20px'}}>REGISTRATION</Typography>
            <TextField
                fullWidth
                id="username"
                name="username"
                label="Username"
                variant="outlined"
                margin="normal"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={!!formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
            />
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
            <TextField
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={!!formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
            {errorMessage && <Typography sx={{color: 'red', fontWeight: '700', fontSize: '15px'}}>{errorMessage.toUpperCase()}</Typography>}
            {successMessage && <Typography sx={{color: 'green', fontWeight: '700', fontSize: '15px'}}>{successMessage.toUpperCase()}</Typography>}
            <Button type="submit" variant="contained" color="primary" fullWidth style={{marginTop: '20px'}}>
                Register
            </Button>
            <Typography variant="body2" style={{marginTop: '10px'}}>
                Already have an account?{' '}
                <Link href="/login">
                    Login here
                </Link>
            </Typography>
        </form>
    );
};

export default RegisterForm
