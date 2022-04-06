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

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>

        </Typography>
    );
}


const theme = createTheme();

export default function Home() {
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
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >


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
                                    }}
                                />} />
                            <Button id='explorebtn'
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, color: "white"}}
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






// Old Homepage


/*import React, { Component } from 'react';
import { Layout } from './Layout';

export default function Home(){
  const displayName = Home.name;

    return (
      <Layout>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </Layout>
    );
}*/
