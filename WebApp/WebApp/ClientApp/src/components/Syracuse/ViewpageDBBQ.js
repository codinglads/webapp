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
import Home from '../Home';
import { Layout } from '../Layout';
import Comments from './Comments'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

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

const theme = createTheme({
    palette: {
        primary: {
            main: '#7bda57'
        }
    }
});

export class ViewpageDBBQ extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validLogin: 'false'
        };
    }

    render() {
        const handleSubmit = async (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const email = data.get('email');
            const password = data.get('password');

            const response = await fetch('api/signin?email=' + email + '&password=' + password);

            if (response.ok) {
                this.setState({ validLogin: 'true' });
            } else {
                window.location.href = '404';
            }
        };

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
   
                        <Comments />
                    </Grid>
                </ThemeProvider>
            </Layout>
        );
    }
}