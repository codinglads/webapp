import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BackpackIcon from '@mui/icons-material/Backpack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { request } from 'graphql-request';
import { Layout } from '../Layout';

// Copywright stamp
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        SnapShot
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
            main:'#7bda57'
        }
    }
});

// This component renders the page where your able to add a popular spot
export default function CreatePopSpot() {

  // This handles the add spot button submission by grabbing the formdata and reaching out
  // to graphQL and attempting to mutate the online database
  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
      const city = formdata.get('city');
      const clas = formdata.get('class');
      const title = formdata.get('title');
      const desc = formdata.get('description');
      const link = formdata.get('link');
      const slug = (title.split(' ')[0]).toLowerCase();

      // Builds the mutation query using the formdata
      var bigQuery = 'mutation MyMutation($title: String = "' + title;
      bigQuery = bigQuery + '", $description: String = "' + desc;
      bigQuery = bigQuery + '", $link: String = "' + link;
      bigQuery = bigQuery + '", $imageUrl: String = "' + city;
      bigQuery = bigQuery + '", $slug: String = "' + slug;
      bigQuery = bigQuery + '", $class: String = "' + clas;
      bigQuery = bigQuery + '") {createPopspot(data: { title: $title, description: $description, link: $link, imageUrl: $imageUrl, slug: $slug, class: $class }) {';
      bigQuery = bigQuery + 'title description link imageUrl slug class} }';

      var publishQuery = 'mutation publishMutation { publishManyPopspotsConnection(last: 1) { edges { node { description imageUrl link title slug class} } }  }';
      
      const func = async () => {
          const popspotsConnection = await request(
              'https://api-us-east-1.graphcms.com/v2/cl0y82ax546kp01z3hw2kc6ab/master', bigQuery);
      }

      func();

      const func2 = async () => {
          const popSPotPub = await request(
              'https://api-us-east-1.graphcms.com/v2/cl0y82ax546kp01z3hw2kc6ab/master', publishQuery);
      }

      func2();
  };


    return (
      <Layout>
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Avatar sx={{ m: 1, bgcolor: "#7bda57" }}>
                        <BackpackIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                            Add a popular spot
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                  autoComplete="given-city"
                                  name="city"
                                  required
                                  fullWidth
                                  id="city"
                                  label="Image Address"
                                  autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <select class="form-control form-control-lg" id="class" name="class" required placeholder="Password" label="Category" >
                                    <option>select category...</option>
                                    <option>Resturaunts</option>
                                    <option>Attractions</option>
                                    <option>Hotels</option>
                                </select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                  required
                                  multiline
                                  fullWidth
                                  id="title"
                                  label="Title"
                                  name="title"
                                  autoComplete="title"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                  required
                                  multiline
                                  fullWidth
                                  id="description"
                                  label="Description of Spot"
                                  name="description"
                                  autoComplete="description"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                  required
                                  fullWidth
                                  name="link"
                                  label="Link to Website"
                                  type="link"
                                  id="link"
                                  autoComplete="link"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                  control={<AttachmentIcon value="allowAttachments" color="primary" />}
                                  label="Upload Image"
                                />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center">
                            <Grid container justifyContent="flex-start" xs={6}>
                                <Button type="submit" halfWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                       Submit Post
                                </Button>
                            </Grid>
                            <Grid container justifyContent="flex-end" xs={6}>
                                <Link href="/" variant="body2">
                                    Cancel
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
      </ Layout>
    );
}