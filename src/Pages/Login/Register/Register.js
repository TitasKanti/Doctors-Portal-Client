import { Container, Grid, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field, value)
    }

    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            e.preventDefault();
            return;
        }

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 10 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom> Register </Typography>
                    <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="email"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            label="Re-type Your Password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="login" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Register;