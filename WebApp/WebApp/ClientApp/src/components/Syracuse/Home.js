import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Home.css';
import { borderColor } from '@mui/system';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            
        </Typography>
    );
}


const theme = createTheme();

export default function Home() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <img id='homepagepic'
            src='../homepagepic.jpeg'>
     
            </img>   
            <Container component="main" maxWidth="xs"
                sx={{
                    marginTop: '300px'
                }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    
                     
                    <Typography id = 'whereto'
                    component="h1"  variant="h5" fontSize={40} color="black" >
                        Where to?
                    </Typography>
                    <Box id = 'locationbox'
                    component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="locationsearch"
                            placeholder= 'Search a Location'
                            name="locationsearch"
                            autoComplete="locationsearch"
                            autoFocus
                            sx={{
                                borderRadius: "50px",
                                backgroundColor: "white"
                            
                            }}
                        />
                        <Button id = 'explorebtn'
                            href="/"
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Explore
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}