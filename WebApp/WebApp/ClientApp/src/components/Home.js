import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Home.css';
import { Layout } from './Layout';

// Copywright stamp at bottom
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>

        </Typography>
    );
}

const theme = createTheme();

// This component renders the home page of the application
export default function Home() {

    // Handles a search submission by grabbing the form data and then fetching the path
    // from the C# backend
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);
        const search = formdata.get('locationsearch');
        if (search == "") return;
        const response = await fetch('api/location?loc=' + formdata.get('locationsearch'));
        const location = await response.json();
        window.location.href = location[0];
    };

    const optParams = ["Syracuse"];

    return (
        <ThemeProvider theme={theme}>
            <img id='homepagepic'
                src='images/homepagepic.jpeg'>
            </img>
            <Layout>
                <Container component="main" maxWidth="xs"
                    sx={{
                        marginTop: '15%',
                        width: '100%'
                    }}>
                    <CssBaseline />
                    <Box sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                        <Typography id='whereto'
                            component="h1" variant="h5" fontSize={40} color="black" fontWeight="bold" >
                            Where to?
                        </Typography>
                        <Box id='locationbox'
                            component="form" onSubmit={handleSubmit} noValidate sx={{
                                mt: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%'
                            }}>
                            <Autocomplete
                                freeSolo
                                fullWidth
                                options={optParams}
                                renderInput={(params) => <TextField {...params}
                                    margin="normal"
                                    fullWidth
                                    id="locationsearch"
                                    placeholder='Search a Location'
                                    name="locationsearch"
                                    autoComplete="locationsearch"
                                    autoFocus
                                    size="small"
                                    sx={{
                                        borderRadius: "50px",
                                        backgroundColor: "white"
                                    }} />
                                } />
                            <Button id='explorebtn'
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, color: "white" }}
                            >
                                Explore
                            </Button>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </Layout>
        </ThemeProvider>
    );
}