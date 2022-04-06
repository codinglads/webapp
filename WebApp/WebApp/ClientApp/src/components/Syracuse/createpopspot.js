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
import MenuItem from '@mui/material/MenuItem';








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

const theme = createTheme({
    palette: {
        primary: {
            main:'#7bda57'
        }
    }
});

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };



  // const languages = [
  //   {
  //     value: 'Alabama',
  //     label: 'Alabama',
  //   },
  //   {
  //     value: 'Alaska',
  //     label: 'Alaska',
  //   },
  //   {
  //     value: 'Arizona',
  //     label: 'Arizona',
  //   },
  //   {
  //     value: 'Arkansas',
  //     label: 'Arkansas',
  //   },
  //   {
  //     value: 'California',
  //     label: 'California',
  //   },
  //   {
  //     value: 'Connecticut',
  //     label: 'Connecticut',
  //   },
  // ];
  // const [language, setLanguage] = React.useState('Alabama');
  
  // const handleChange = (event) => {
  //     setLanguage(event.target.value);
  // };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
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
                  label="City"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                
                  //select
                  required
                  fullWidth
                  id="state"
                  label="State"
                  // value = {language}
                  // onChange = {handleChange}
                  //helperText = "Please select your State"

                // {languages.map((option) => (
                //   <MenuItem key = {option.value} value = {option.value}>
                //     {option.label}
                //   </MenuItem>

                // ))}                  
                  

                /> 


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
            <Button
              type="submit"
              halfWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Post
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Cancel Post
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}