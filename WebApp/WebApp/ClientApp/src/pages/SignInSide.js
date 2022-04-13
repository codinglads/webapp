import * as React from 'react';
import { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from '../components/Home';
import { Layout } from '../components/Layout';

// Copyrigth stamp
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Snapshot
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// Theme colors
const theme = createTheme({
    palette: {
        primary: {
            main: '#7bda57'
        }
    }
});

// This class renders the sign in page using state to determine login
export class SignInSide extends Component{

    constructor(props){
        super(props);
        this.state = {
            validLogin: 'false'
        };
    }

    render() {
        // This handles a sign in attempt by passing the params to
        // the C# backend
        const handleSubmit = async (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const email = data.get('email');
            const password = data.get('password');

            const response = await fetch('api/signin?email=' + email + '&password=' + password);

            // If the data is not valid then redirect to 404 page
            if (response.ok) {
                this.setState({ validLogin: 'true' });
            } else {
                window.location.href = '404';
            }
        };

        // If its valid then send user to home page
        if (this.state.validLogin == 'true') {
            return (
                <Home />
            );
        }

        return (
            <Layout>
                <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: 'url(/images/mysterytree.jpg)',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '80%'
                            }}
                        />
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: '#7bda57' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        color="primary"
                                        variant="outlined"
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        variant="outlined"
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        color="primary"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        style={{ backgroundColor: "#7bda57" }}
                                        sx={{ mt: 3, mb: 2, color: "white" }}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="/forgotpassword" variant="body2" style={{ color: "#7bda57" }}>
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="/signup" variant="body2" style={{ color: "7bda57" }}>
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Copyright sx={{ mt: 5 }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Layout>
        );
    }
}