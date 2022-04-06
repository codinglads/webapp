import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './wether.js'

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



const theme = createTheme();

export default function LandingPage({ posts }) {

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
                      <div class= 'justify-content-center'>
                      <Card
                          sx={{ height: '100%', display: 'flex', flexDirection: 'column', px:2, pt:2 }}
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
        <Container sx={{ py: 1 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid item key={post.node.title} xs={12} sm={6} md={4}>
               <Card variant="outlined"
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                            component="img"
                            sx={{
                                // 16:9
                                pt: '3%',
                                px: '3%',
                                class: 'rounded',
                            }}
                            image={post.node.image.url}
                            alt="random"
                            
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
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
          <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
              <div class="text-center">
            <Button id = 'explorebtn'
                href="/popspot"
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