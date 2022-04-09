import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './wether.js';
import { Component } from 'react';
import './Syracuse.css';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const theme = createTheme({
    palette: {
        primary: {
            main: '#7bda57',
        },

        secondary: {
            main: '#ffffff',
        },
    },
});

export class LandingPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            spotClass: "Restaurants",
        };
    }

    render() {

        const onRestaurant = (event) => {
            this.setState({
                spotClass: "Restaurants",
            });
        };

        const onHotel = (event) => {
            this.setState({
                spotClass: "Hotels",
            });
        };

        const onAttraction = (event) => {
            this.setState({
                spotClass: "Attractions"
            });
        };

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main>
                    {/* Hero unit */}
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="300">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                <strong>Syracuse</strong>

                            </Typography>
                            <img id="syracusePic"
                                src="https://media-exp1.licdn.com/dms/image/C4D1BAQF4HgEQDAbSIQ/company-background_10000/0/1603480139137?e=2147483647&v=beta&t=exBKN8D0Of_Ard4hWL615jsnea91VIs9GY6rlB0R9PA" alt="Responsive image" />
                            <div class='justify-content-center'>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', px: 2, pt: 2 }}
                                >
                                    <CardMedia


                                    />
                                    <CardContent class='object-fit' sx={{ flexGrow: 1 }}>
                                        <App />
                                    </CardContent>
                                    <CardActions>

                                    </CardActions>
                                </Card>
                            </div>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>

                            </Typography>
                            <Stack
                                sx={{ pt: 1 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >

                            </Stack>
                        </Container>
                    </Box>

                    <Box>
                        <AppBar position="static" color="primary">
                            <Toolbar>
                                <Grid container aligntItems="center" justifyContent="center"h>
                                    <Grid container justifyContent="center" xs={4}>
                                    <Button color="secondary" onClick={onRestaurant}>
                                        <Typography color='secondary' variant="h6" >
                                            Restaurants
                                        </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid container justifyContent="center" xs={4}>
                                    <Button color="secondary" onClick={onHotel}>
                                        <Typography color='secondary' variant="h6" >
                                            Hotels
                                        </Typography>
                                    </Button>
                                    </Grid>
                                    <Grid container xs={4} justifyContent="center">
                                    <Button color="secondary" onClick={onAttraction}>
                                        <Typography color='secondary' variant="h6" >
                                            Attractions
                                        </Typography>
                                        </Button>
                                        </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </Box>

                    <Container sx={{ py: 1 }} maxWidth="lg">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {this.props.posts.map((post) =>
                                post.node.class === this.state.spotClass ? (
                                <Grid item key={post.node.title} xs={12} sm={6} md={4}>
                                    <Card variant="outlined"
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                            <CardMedia
                                                className="spotImage"
                                            component="img"
                                            sx={{
                                                // 16:9
                                                pt: '3%',
                                                px: '3%',
                                                class: 'rounded',
                                            }}
                                            image={post.node.imageUrl}
                                            alt={post.title}

                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                <a href={`${post.node.link}`} target="_blank" rel="noopener noreferrer">
                                                    {post.node.title}
                                                </a>
                                            </Typography>
                                            <Typography>
                                                {post.node.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>

                                            <Link href={`/syracuse/${post.node.slug}`}> View </Link>


                                        </CardActions>
                                    </Card>
                                </Grid>
                            ) : "")}
                        </Grid>
                    </Container>
                </main>
                {/* Footer */}
                <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                    <div class="text-center">
                        <Button id='explorebtn'
                            href='createpopspot'
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add a Popular Spot
                        </Button>
                    </div>
                    <Copyright />
                </Box>
                {/* End footer */}
            </ThemeProvider>
        );
    }
}


